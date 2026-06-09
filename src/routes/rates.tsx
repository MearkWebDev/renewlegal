import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

const faqs = [
  { q: "How much does a construction lawyer charge in Melbourne?", a: "Large national firms typically charge $450–$900 per hour for a senior construction lawyer. Boutique specialists like Renew Legal charge $400 per hour (ex GST). For most matters — contract review, claims advice, SOP adjudication — Renew Legal offers a fixed fee agreed before work begins." },
  { q: "What is a fixed-fee law firm?", a: "A fixed-fee firm quotes a total price for legal work before the engagement begins, rather than charging by the hour. The client pays the agreed amount regardless of how long the matter takes." },
  { q: "What does the $400 per hour rate cover?", a: "All legal work performed — drafting, advice, correspondence, negotiation attendance, court appearances and matter management. No charge for routine file administration. Disbursements billed at cost." },
  { q: "Is there a minimum engagement fee?", a: "No. Renew Legal is designed to be accessible for contractors and consultants needing specific legal help — a contract review, single piece of advice, or help preparing a payment claim — rather than requiring a long-term retainer." },
];

export const Route = createFileRoute("/rates")({
  head: () => ({
    meta: [
      { title: "Fixed-Fee Construction Lawyer Rates — Melbourne | Renew Legal" },
      { name: "description", content: "Transparent fixed-fee, hourly and day rates for construction and renewables legal services. $400/hour ex GST, $1,800/day, fixed fees on most matters." },
      { property: "og:title", content: "Clear, fixed-fee legal rates — Renew Legal" },
      { property: "og:description", content: "Fixed fees agreed before work begins. $400/hr or $1,800/day for extended engagements." },
      { property: "og:url", content: "/rates" },
    ],
    links: [{ rel: "canonical", href: "/rates" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: Page,
});

const rows = [
  ["Fixed-fee engagements", "Quoted per matter — agreed before work begins", "Contract review, drafting, claims advice, dispute strategy, training"],
  ["Hourly rate (FY24–25)", "$400 per hour + GST", "Where fixed-fee is not appropriate or requested"],
  ["Day rate — secondments", "$1,800 per day + GST", "Long-term project counsel, law firm secondments"],
  ["Law firm consultant rate", "By arrangement", "Firm sets charge-out; Renew Legal charges at consultant rate"],
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Rates"
        title={<>Clear, fixed-fee legal rates</>}
        intro="Renew Legal is a fixed-fee firm. Legal work should be priced on the outcome you need, not the time taken to deliver it. A fixed fee means you know the cost before work begins — and there are no billing surprises at the end."
      />

      <section className="container-prose py-24 lg:py-32">
        <div className="border-y border-border">
          <div className="hidden md:grid grid-cols-12 gap-6 py-5 text-xs tracking-[0.2em] uppercase text-gold border-b border-border">
            <div className="col-span-3">Service</div>
            <div className="col-span-4">Rate (ex GST)</div>
            <div className="col-span-5">Typical use</div>
          </div>
          {rows.map(([s, r, u]) => (
            <div key={s} className="grid md:grid-cols-12 gap-2 md:gap-6 py-8 border-b border-border last:border-0">
              <div className="md:col-span-3 font-display text-xl text-navy">{s}</div>
              <div className="md:col-span-4 text-foreground">{r}</div>
              <div className="md:col-span-5 text-muted-foreground">{u}</div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground max-w-3xl leading-relaxed">
          All fees in Australian dollars exclusive of GST. Disbursements — barrister
          fees, filing fees, expert costs — are billed at cost with no mark-up. A costs
          agreement is provided before any work commences, in accordance with the Legal
          Profession Uniform Law.
        </p>
      </section>

      <section className="bg-stone">
        <div className="container-prose py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Fixed fees</div>
            <h2 className="mt-6 text-3xl lg:text-5xl text-navy">How fixed-fee pricing works</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Before work begins, Renew Legal provides a written quote for the scope of
              the engagement. The fixed fee covers all work within that scope —
              drafting, advice, correspondence, negotiation attendance and file
              management. If scope changes materially, a variation is agreed before
              additional work proceeds.
            </p>
            <p>
              Construction projects operate on tight margins and tighter deadlines.
              Hourly billing introduces cost uncertainty that most contractors and
              project teams cannot budget for. The fixed-fee model was designed
              specifically for the construction sector — where you are pricing a
              contract before work starts, you deserve to know what your legal costs
              will be too.
            </p>
          </div>
        </div>
      </section>

      <section className="container-prose py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="eyebrow">Common questions</div>
          <h2 className="mt-6 text-3xl lg:text-4xl text-navy">Rates — FAQ</h2>
        </div>
        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <details key={i} className="group py-6">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <h3 className="text-lg lg:text-xl text-navy font-display">{f.q}</h3>
                <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
