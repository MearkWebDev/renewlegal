import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import heroOffice from "@/assets/hero-office.jpg";

const faqs = [
  { q: "Can Renew Legal join our team for a single matter?", a: "Yes. There is no minimum engagement term. Renew Legal can join your team for a single matter, a defined project period, or an ongoing arrangement entirely at your discretion. You pay only for client-billable work actually performed." },
  { q: "Is there a risk of a conflict of interest?", a: "Before any engagement, a conflict check is conducted. Renew Legal is an incorporated legal practice under the Legal Profession Uniform Law and is subject to the same professional conduct rules as any other law practice." },
  { q: "How does time recording work?", a: "Renew Legal uses your firm's time recording software directly (LEAP, Actionstep, PracticeEvolve, Elite or other). The instructing partner sends instructions; Renew Legal records time against the relevant matter files; the firm bills the client at its charge-out rate." },
  { q: "What level does Renew Legal bill at?", a: "Firms typically bill Renew Legal's time to clients at Special Counsel level. Renew Legal charges the firm at the rate set out on the Rates page — the margin between the two is the firm's contribution." },
  { q: "Can Renew Legal join a client's in-house team directly?", a: "Yes. Where your client needs an embedded construction lawyer, Renew Legal can be seconded directly to the client's in-house team or project SPV, with or without ongoing involvement from your firm." },
];

export const Route = createFileRoute("/for-law-firms")({
  head: () => ({
    meta: [
      { title: "Construction Law Consultant for Law Firms — Melbourne | Renew Legal" },
      { name: "description", content: "Specialist construction, renewables and technology law on demand for law firms. Special Counsel-level work, overflow, secondments and parental leave cover." },
      { property: "og:title", content: "Specialist Construction Law Consultant for Law Firms" },
      { property: "og:description", content: "Bring in Renew Legal as a specialist resource — top-tier standards without the employment or overhead of a permanent hire." },
      { property: "og:url", content: "/for-law-firms" },
    ],
    links: [{ rel: "canonical", href: "/for-law-firms" }],
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

const situations = [
  ["A specialist matter your team cannot handle", "Joins as a specialist, advises the client, records time in your system.", "Single matter"],
  ["A client project needing embedded counsel", "Seconded to the client's in-house team or project SPV.", "Weeks to months"],
  ["Parental leave or extended absence", "Covers the role at the same standard, in the same systems.", "Fixed period"],
  ["A volume spike in your construction team", "Manages overflow matters independently with minimal supervision.", "Flexible"],
  ["A dispute requiring senior counsel briefing", "Prepares the matter, takes instructions, coordinates briefing.", "Matter-based"],
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Law Firms"
        title={<>Specialist construction law consultant for law firms</>}
        intro="Rather than referring a specialist matter away, bring Renew Legal in as a specialist resource. Ehren Terenyi works alongside your team — under your direction, on your time-recording system, to the standard of a top-tier Special Counsel — without the employment, overhead or long-term commitment of a permanent hire."
        image={heroOffice}
      />

      <section className="container-prose py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">How it works</div>
            <h2 className="mt-6 text-3xl lg:text-5xl text-navy">The consultant model</h2>
          </div>
          <div className="lg:col-span-7 space-y-8">
            {[
              ["Rate structure", "You set the charge-out rate at which you bill your client. Renew Legal charges your firm at the rate set out on the Rates page. Firms routinely bill at Special Counsel level."],
              ["Cost model", "You only pay for client-billable work actually performed — no employment costs, no superannuation, no overhead. When you say stop, you incur no further cost."],
              ["Time recording", "Time is recorded directly in your software (LEAP, Actionstep, PracticeEvolve, Elite or other). Renew Legal can use its own equipment, or you provide a laptop and onboarding."],
              ["ILP status", "Renew Legal Pty Ltd is an incorporated legal practice regulated under the Legal Profession Uniform Law — a contractor to your firm, not an employee or regulated referral arrangement."],
              ["Quality standard", "All work is performed to the standard expected of a senior fee earner at a top-tier Australian law firm."],
            ].map(([t, d]) => (
              <div key={t} className="border-b border-border pb-8">
                <h3 className="text-xl text-navy font-display">{t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-prose py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow !text-gold-soft">When to use us</div>
            <h2 className="mt-6 text-3xl lg:text-5xl text-white">When to bring Renew Legal in</h2>
          </div>
          <div className="mt-14 divide-y divide-white/15 border-y border-white/15">
            {situations.map(([s, w, d]) => (
              <div key={s} className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-4 text-lg text-gold-soft font-display">{s}</div>
                <div className="md:col-span-6 text-white/75 leading-relaxed">{w}</div>
                <div className="md:col-span-2 text-xs tracking-[0.18em] uppercase text-white/50 md:text-right">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="eyebrow">Common questions</div>
          <h2 className="mt-6 text-3xl lg:text-4xl text-navy">For law firms — FAQ</h2>
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
