#!/usr/bin/env node
// Rewrites src/assets/*.asset.json `url` fields to absolute URLs hosted on
// the Lovable published site so they load correctly from GitHub Pages.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ASSET_HOST = "https://renewlegal.lovable.app";
const dir = "src/assets";

const files = readdirSync(dir).filter((f) => f.endsWith(".asset.json"));
let changed = 0;
for (const file of files) {
  const path = join(dir, file);
  const data = JSON.parse(readFileSync(path, "utf8"));
  if (typeof data.url === "string" && data.url.startsWith("/")) {
    data.url = `${ASSET_HOST}${data.url}`;
    writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
    changed++;
  }
}
console.log(`prepare-assets: rewrote ${changed}/${files.length} asset URLs`);
