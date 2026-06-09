import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import logoAsset from "@/assets/renew-legal-logo.png.asset.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-navy">404</h1>
        <p className="mt-4 text-muted-foreground">This page could not be found.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">Return home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-navy">This page didn't load</h1>
        <p className="mt-4 text-sm text-muted-foreground">Something went wrong. Try again or return home.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-ghost-dark">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Renew Legal — Construction, Renewables & Technology Lawyers Melbourne" },
      { name: "description", content: "Specialist construction, renewables and infrastructure law firm in Melbourne. Fixed fees, senior-only advice, EPC and BESS expertise." },
      { name: "author", content: "Renew Legal" },
      { property: "og:site_name", content: "Renew Legal" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0F2747" },
      { property: "og:title", content: "Renew Legal — Construction, Renewables & Technology Lawyers Melbourne" },
      { name: "twitter:title", content: "Renew Legal — Construction, Renewables & Technology Lawyers Melbourne" },
      { property: "og:description", content: "Specialist construction, renewables and infrastructure law firm in Melbourne. Fixed fees, senior-only advice, EPC and BESS expertise." },
      { name: "twitter:description", content: "Specialist construction, renewables and infrastructure law firm in Melbourne. Fixed fees, senior-only advice, EPC and BESS expertise." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/LaCKiZYccTRUnYTPnvd0dZBgKof1/social-images/social-1781005415898-renew-legal-header-logo_8031d425-72d7-499a-9f2b-8bc9bf5ca0b9.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/LaCKiZYccTRUnYTPnvd0dZBgKof1/social-images/social-1781005415898-renew-legal-header-logo_8031d425-72d7-499a-9f2b-8bc9bf5ca0b9.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logoAsset.url },
      { rel: "apple-touch-icon", href: logoAsset.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Renew Legal",
          alternateName: "Renew Legal Pty Ltd",
          description:
            "Boutique construction, renewables and technology integration law firm based in Melbourne, Australia.",
          url: "/",
          logo: logoAsset.url,
          image: [logoAsset.url],
          telephone: "+61 418 342 682",
          email: "ehren@renewlegal.com.au",
          founder: { "@type": "Person", name: "Ehren Terenyi" },
          areaServed: "AU",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Suite 208, 282 Collins Street, Block Arcade",
            addressLocality: "Melbourne",
            addressRegion: "VIC",
            postalCode: "3000",
            addressCountry: "AU",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

