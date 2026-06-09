import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SiteImage } from "@/components/site/SiteImage";
import constructionAsset from "@/assets/renew-legal-construction-project.webp.asset.json";
import tollingAsset from "@/assets/renew-legal-infrastructure-tolling.webp.asset.json";

const faqs = [
  { q: "What should I look for when reviewing a construction contract?", a: "Key issues include: whether there is a liability cap (and whether carve-outs eliminate its value), whether consequential loss is excluded, the scope of indemnities, EOT entitlements and force majeure, defects liability, payment and security terms, termination rights, and dispute resolution. AS 4000, AS 4902 and ABIC forms have been progressively amended by principals to be more employer-friendly — always read special conditions carefully." },
  { q: "What is a security of payment adjudication in Victoria?", a: "A statutory dispute resolution process under the Building and Construction Industry Security of Payment Act 2002 (Vic) allowing contractors and subcontractors to recover unpaid progress payments quickly. A claimant serves a payment claim; if disputed by payment schedule, the claimant may apply for adjudication. The adjudicator must decide within 10 business days (15 in complex cases)." },
  { q: "Can I call on a bank guarantee in a construction contract?", a: "Yes, but conditions and risks depend on your contract and the wording of the guarantee. Most construction contracts allow the principal to call on a performance security on notice without proving breach first. A contractor believing the call is wrongful may seek an injunction from the Supreme Court." },
  { q: "What is a variation claim?", a: "A variation is a change to scope, timing or method of works instructed or agreed after contract execution. Contractors are generally entitled to additional time (EOT) and money for principal-initiated variations, but entitlements are strictly governed by notice and claim requirements — many contractors lose valid claims by failing to give notice in time." },
  { q: "How does Renew Legal charge for contractor advice?", a: "Renew Legal operates as a fixed-fee firm wherever possible. The cost of contract review, variation claim, or SOP advice is agreed before work begins. For extended engagements a day rate applies. All fees ex GST. A costs agreement is provided before any work commences." },
];

export const Route = createFileRoute("/for-contractors")({
  head: () => ({
    meta: [
      { title: "External Legal Counsel for Contractors — Melbourne | Renew Legal" },
      { name: "description", content: "Contract review, security of payment, claims and dispute resolution for Australian construction contractors. Fixed-fee external legal counsel based in Melbourne." },
      { property: "og:title", content: "External Legal Counsel for Construction Contractors — Melbourne" },
      { property: "og:description", content: "Fixed-fee construction contract review, SOP adjudication and dispute resolution for contractors and consultants." },
      { property: "og:url", content: "/for-contractors" },
      { property: "og:image", content: constructionAsset.url },
    ],
    links: [{ rel: "canonical", href: "/for-contractors" }],
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

const risks = [
  ["Liability cap risk", "No liability cap — or a cap with carve-outs that eliminate its value. Many contracts set exposure at or above the contract sum, and beyond what your insurance covers."],
  ["Consequential loss", "If you cannot find 'consequential loss' or 'indirect loss' exclusions, you may have agreed to indemnify the principal for its own business losses."],
  ["Wide-ranging indemnities", "Should the client be required to prove losses and mitigate them, or simply send a bill? AS-based contracts default to the latter unless you push back."],
  ["Narrow EOT entitlements", "Standard clauses provide relief only for client default or variations. Contractors usually need relief for force majeure, latent conditions, concurrent delay and third-party failures."],
  ["No contractor termination right", "Many contracts give only the principal a right to terminate for convenience. Can you exit if the client's conduct makes performance impossible?"],
  ["Defect liability traps", "Poorly defined defect obligations can result in liability for consequential damage caused by defects — not just rectification cost."],
];

const services = [
  ["Contract review & negotiation", "Review and negotiate tender contracts — practical amendments focused on the changes that actually protect your margin."],
  ["Your standard T&Cs", "Review and update standard terms to reflect your risk profile, not a generic template."],
  ["Subcontract alignment", "Ensure subcontracts align with head contracts and do not leave you carrying your subcontractors' risks."],
  ["Pass-through risk", "Identify and advise on key risks passed to you through the contracting chain."],
  ["Variation & delay claims", "Prepare and respond to variation claims, delay claims, EOT and force majeure notices."],
  ["Security of payment", "Initiating adjudications, responding to claims, calling on security, working with financiers."],
  ["Bank guarantees", "Understand your obligations and rights before security is called on."],
  ["Disputes & settlement", "Mediation, expert determination, arbitration and litigation strategy."],
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Contractors & Consultants"
        title={<>External legal counsel for construction contractors — Melbourne</>}
        intro="The draft contract from your head contractor needs to be signed this week. Price, dates and scope look acceptable — but did you intend to take on all the client's risks? Renew Legal helps contractors identify what matters, push back on what is unreasonable, and protect their margins."
        image={constructionAsset.url}
        imageAlt="Construction Lawyer Melbourne – Renew Legal"
        priority
      />

      <section className="container-prose py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="max-w-3xl">
              <div className="eyebrow">Watch for these</div>
              <h2 className="mt-6 text-3xl lg:text-5xl text-navy">Common contract risks contractors overlook</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">Your fee should reflect the risks you are pricing. In Australia, upstream risks are routinely passed down through the contracting chain.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <SiteImage src={tollingAsset.url} alt="Infrastructure project legal counsel Australia – Renew Legal" className="aspect-[4/3]" />
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {risks.map(([t, d], i) => (
            <article key={t} className="bg-white p-8">
              <div className="text-xs tracking-[0.2em] text-gold">RISK 0{i + 1}</div>
              <h3 className="mt-4 text-xl text-navy font-display">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-prose py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow">Services for contractors</div>
            <h2 className="mt-6 text-3xl lg:text-5xl text-navy">How Renew Legal can help</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-10">
            {services.map(([t, d]) => (
              <div key={t} className="border-l-2 border-gold pl-6">
                <h3 className="text-lg text-navy font-display">{t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="eyebrow">Common questions</div>
          <h2 className="mt-6 text-3xl lg:text-4xl text-navy">For contractors — FAQ</h2>
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
