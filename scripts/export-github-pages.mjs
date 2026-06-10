import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_PATH = "/renewlegal";
const SITE_ORIGIN = "https://mearkwebdev.github.io";
const ASSET_ORIGINS = [
  process.env.LOVABLE_ASSET_ORIGIN,
  "https://renewlegal.lovable.app",
  "https://id-preview--7e9fed8f-6db4-4bc1-bffd-12c6cd86dd19.lovable.app",
].filter(Boolean);

const publicDir = path.resolve("dist/client");
const serverEntryPath = path.resolve("dist/server/index.mjs");

const pageRoutes = [
  "/",
  "/experience",
  "/for-contractors",
  "/for-law-firms",
  "/rates",
  "/articles",
  "/contact",
];

const routedPagePaths = pageRoutes.filter((route) => route !== "/").sort((a, b) => b.length - a.length);

function routeToRequestPath(route) {
  return route === "/" ? `${BASE_PATH}/` : `${BASE_PATH}${route}`;
}

function routeToOutputPath(route) {
  return route === "/"
    ? path.join(publicDir, "index.html")
    : path.join(publicDir, route.replace(/^\//, ""), "index.html");
}

function rewriteForGitHubPages(content) {
  let rewritten = content
    .replaceAll(`${BASE_PATH}${BASE_PATH}/__l5e/`, `${BASE_PATH}/__l5e/`)
    .replace(/(?<!\/renewlegal)\/__l5e\//g, `${BASE_PATH}/__l5e/`);

  for (const route of routedPagePaths) {
    rewritten = rewritten
      .replaceAll(`href="${route}`, `href="${BASE_PATH}${route}`)
      .replaceAll(`content="${route}`, `content="${BASE_PATH}${route}`);
  }

  return rewritten;
}

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listFiles(fullPath);
      if (entry.isFile()) return [fullPath];
      return [];
    }),
  );
  return files.flat();
}

function isTextFile(file) {
  return /\.(html|js|css|json|xml|txt|webmanifest|svg)$/i.test(file) || path.basename(file) === "_headers";
}

function extractLovableAssetUrls(content) {
  return content.match(/\/__l5e\/assets-v1\/[^"'`)\s<>{}]+/g) ?? [];
}

async function collectAssetUrls() {
  const urls = new Set();

  for (const file of await listFiles(publicDir)) {
    if (!isTextFile(file)) continue;
    const content = await readFile(file, "utf8");
    for (const url of extractLovableAssetUrls(content)) urls.add(url);
  }

  const assetDir = path.resolve("src/assets");
  for (const file of await listFiles(assetDir)) {
    if (!file.endsWith(".asset.json")) continue;
    const asset = JSON.parse(await readFile(file, "utf8"));
    if (typeof asset.url === "string" && asset.url.startsWith("/__l5e/assets-v1/")) {
      urls.add(asset.url);
    }
  }

  return [...urls].sort();
}

async function mirrorAsset(assetUrl) {
  const outputPath = path.join(publicDir, assetUrl.replace(/^\//, ""));

  try {
    const existing = await stat(outputPath);
    if (existing.isFile() && existing.size > 0) return;
  } catch {
    // Download missing asset.
  }

  let lastError;
  for (const origin of ASSET_ORIGINS) {
    try {
      const response = await fetch(`${origin}${assetUrl}`);
      if (!response.ok) {
        lastError = new Error(`${response.status} ${response.statusText}`);
        continue;
      }
      await mkdir(path.dirname(outputPath), { recursive: true });
      await writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
      return;
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(`Unable to mirror asset ${assetUrl}: ${lastError?.message ?? "unknown error"}`);
}

async function rewriteTextOutputs() {
  for (const file of await listFiles(publicDir)) {
    if (!isTextFile(file)) continue;
    const content = await readFile(file, "utf8");
    const rewritten = rewriteForGitHubPages(content);
    if (rewritten !== content) await writeFile(file, rewritten);
  }
}

async function renderPages() {
  const serverModule = await import(`${serverEntryPath}?t=${Date.now()}`);
  const handler = serverModule.default ?? serverModule;
  const context = { waitUntil() {} };

  for (const route of pageRoutes) {
    const requestPath = routeToRequestPath(route);
    const response = await handler.fetch(new Request(`${SITE_ORIGIN}${requestPath}`), {}, context);

    if (!response.ok) {
      throw new Error(`Failed to prerender ${requestPath}: ${response.status} ${response.statusText}`);
    }

    const html = rewriteForGitHubPages(await response.text());
    const outputPath = routeToOutputPath(route);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }
}

async function writeSitemapAndRobots() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pageRoutes.map((route) => {
    const loc = route === "/" ? `${SITE_ORIGIN}${BASE_PATH}/` : `${SITE_ORIGIN}${BASE_PATH}${route}/`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  await writeFile(path.join(publicDir, "sitemap.xml"), sitemap);

  const robots = `User-agent: *\nAllow: /renewlegal/\nSitemap: ${SITE_ORIGIN}${BASE_PATH}/sitemap.xml\n`;
  await writeFile(path.join(publicDir, "robots.txt"), robots);
}

async function writeGitHubPagesFiles() {
  await writeFile(path.join(publicDir, ".nojekyll"), "");

  const home = await readFile(path.join(publicDir, "index.html"), "utf8");
  await writeFile(path.join(publicDir, "404.html"), home);
}

await renderPages();
const assetUrls = await collectAssetUrls();
await Promise.all(assetUrls.map(mirrorAsset));
await rewriteTextOutputs();
await writeSitemapAndRobots();
await writeGitHubPagesFiles();

console.log(`GitHub Pages export complete: ${publicDir}`);
console.log(`Prerendered pages: ${pageRoutes.length}`);
console.log(`Mirrored Lovable assets: ${assetUrls.length}`);