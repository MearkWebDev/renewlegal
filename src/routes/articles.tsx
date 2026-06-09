import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SiteImage } from "@/components/site/SiteImage";
import portraitHeroAsset from "@/assets/ehren-terenyi-renew-legal-portrait-2.png.asset.json";
import portraitAsset from "@/assets/ehren-terenyi-renew-legal.webp.asset.json";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Construction Law Articles & Insights | Renew Legal" },
      { name: "description", content: "Plain-English articles on construction law, renewables contracts, SOP, bank guarantees and legal strategy for project teams." },
      { property: "og:title", content: "Construction Law Insights — Renew Legal" },
      { property: "og:description", content: "Practical articles on construction law, EPC, SOP, bank guarantees, settlement releases and renewables disputes." },
      { property: "og:url", content: "/articles" },
      { property: "og:image", content: portraitHeroAsset.url },
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
        image={portraitHeroAsset.url}
        imageAlt="Ehren Terenyi, author of Renew Legal articles"
        imageClassName="object-[center_18%]"
        priority
      />

      <section className="container-prose py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SiteImage
              src={portraitAsset.url}
              alt="Ehren Terenyi writing and publishing thought leadership for Renew Legal"
              className="aspect-[4/5] max-w-sm"
              imageClassName="bg-stone object-contain p-6"
            />
          </div>
          <div className="lg:col-span-8">
            <div className="eyebrow">Thought leadership</div>
            <h2 className="mt-6 text-3xl text-navy lg:text-5xl">Practical commentary from a specialist construction lawyer</h2>
            <div className="gold-rule mt-8" />
            <div className="mt-8 space-y-6 leading-relaxed text-foreground/80">
              <p>
                Renew Legal articles are written by Ehren Terenyi and focus on the questions project teams, contractors and law firms actually ask in live matters. The emphasis is practical: risk allocation, dispute strategy, contract administration and the real commercial consequences of legal drafting.
              </p>
              <p>
                The aim is not generic content marketing. It is useful, decision-ready commentary grounded in specialist experience across construction, renewables, infrastructure and technology integration projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-prose py-24 lg:py-16">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl text-navy lg:text-4xl">Published</h2>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{published.length} articles</div>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {published.map((a) => (
            <article key={a.t} className="group -mx-4 grid gap-6 px-4 py-10 transition-colors hover:bg-stone md:grid-cols-12">
              <div className="pt-2 text-xs uppercase tracking-[0.2em] text-gold md:col-span-2">{a.d}</div>
              <div className="md:col-span-10">
                <h3 className="font-display text-2xl text-navy transition-colors group-hover:text-gold lg:text-3xl">{a.t}</h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{a.e}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-prose py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow">Coming soon</div>
            <h2 className="mt-6 text-3xl text-navy lg:text-5xl">Publishing queue</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The next ten articles, scheduled for publication. Each addresses a high-intent question contractors and project teams routinely ask.
            </p>
          </div>
          <ol className="mt-14 grid max-w-5xl gap-x-12 gap-y-2 md:grid-cols-2">
            {queue.map((t, i) => (
              <li key={t} className="flex gap-6 border-b border-border py-5">
                <span className="pt-1 text-xs text-gold tracking-[0.2em]">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg text-foreground/85">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
