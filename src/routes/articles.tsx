import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import officeAsset from "@/assets/renew-legal-premium-law-office.webp.asset.json";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Construction Law Articles & Insights | Renew Legal" },
      { name: "description", content: "Plain-English articles on construction law, renewables contracts, SOP, bank guarantees and legal strategy for project teams." },
      { property: "og:title", content: "Construction Law Insights — Renew Legal" },
      { property: "og:description", content: "Practical articles on construction law, EPC, SOP, bank guarantees, settlement releases and renewables disputes." },
      { property: "og:url", content: "/articles" },
      { property: "og:image", content: officeAsset.url },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: Page,
});

const published = [
  { t: "AI-bot transcripts: bad idea", d: "March 2025", e: "Why automated meeting transcription tools create legal privilege and confidentiality risks for lawyers and project teams." },
  { t: "How to start a law firm in Victoria, Australia", d: "February 2025", e: "The practical and regulatory steps for setting up an incorporated legal practice under the Legal Profession Uniform Law." },
  { t: "Keeping future claims out of a settlement release", d: "September 2024", e: "Drafting release clauses that close the dispute without closing the door on unrelated entitlements." },
  { t: "Professional indemnity insurance issues", d: "August 2024", e: "Common policy traps that can leave construction professionals personally exposed." },
  { t: "Calling on bank guarantees and injunctions", d: "July 2024", e: "Principals, contractors, and what the Supreme Court actually requires before restraining a call." },
];

const queue = [
  "Effective contract administration techniques",
  "Gearing up for a dispute",
  "Effective wind farm project negotiations in Asia Pacific",
  "Wind project risks and how to manage them",
  "Replacing a construction contractor — can it work?",
  "Enforcement of an unsigned contract",
  "Entering contracts with low credit rating contractors",
  "Ineffective arbitration clauses",
  "Certification, verification or proofing — what have you got?",
  "Calderbank offers in construction disputes",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Construction law insights — practical articles</>}
        intro="Plain-English articles on construction law, renewables contracts and legal strategy — written for contractors, project managers and in-house lawyers who want practical, usable information."
        image={officeAsset.url}
        imageAlt="Professional legal publishing workspace – Renew Legal"
      />

      <section className="container-prose py-24 lg:py-32">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl text-navy">Published</h2>
          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{published.length} articles</div>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {published.map((a) => (
            <article key={a.t} className="grid md:grid-cols-12 gap-6 py-10 group hover:bg-stone transition-colors px-4 -mx-4">
              <div className="md:col-span-2 text-xs tracking-[0.2em] uppercase text-gold pt-2">{a.d}</div>
              <div className="md:col-span-10">
                <h3 className="text-2xl lg:text-3xl text-navy font-display group-hover:text-gold transition-colors">{a.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">{a.e}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-prose py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow">Coming soon</div>
            <h2 className="mt-6 text-3xl lg:text-5xl text-navy">Publishing queue</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The next ten articles, scheduled for publication. Each addresses a high-intent question contractors and project teams routinely ask.
            </p>
          </div>
          <ol className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl">
            {queue.map((t, i) => (
              <li key={t} className="flex gap-6 py-5 border-b border-border">
                <span className="text-xs tracking-[0.2em] text-gold pt-1">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground/85 font-display text-lg">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
