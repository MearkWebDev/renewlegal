import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SiteImage } from "@/components/site/SiteImage";
import { useEffect, useState } from "react";
import windFarmAsset from "@/assets/renew-legal-wind-farm.webp.asset.json";
import constructionAsset from "@/assets/renew-legal-construction-project.webp.asset.json";
import officeAsset from "@/assets/renew-legal-premium-law-office.webp.asset.json";
import portraitAsset from "@/assets/ehren-terenyi-renew-legal.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Construction, Renewables & Technology Lawyers — Melbourne | Renew Legal" },
      { name: "description", content: "Boutique Melbourne law firm specialising in construction, EPC, renewables, BESS and technology integration. 6GW+ projects delivered. Fixed fees, senior-only advice." },
      { property: "og:title", content: "Construction, Renewables & Technology Lawyers — Melbourne" },
      { property: "og:description", content: "Specialist legal counsel for construction, infrastructure, renewables, EPC contracts and technology integration projects throughout Australia." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: windFarmAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          contentUrl: windFarmAsset.url,
          name: "Renewables Project Legal Counsel Australia",
          description: "Wind farm project image representing Renew Legal's Australian renewables and EPC legal counsel experience.",
        }),
      },
    ],
  }),
  component: HomePage,
});

const slides = [
  {
    eyebrow: "01 — Construction & Renewables",
    title: "Construction, Renewables & Technology Lawyers — Melbourne",
    body: "Specialist legal counsel for EPC, D&C, BESS, wind, solar and technology integration projects. Ehren Terenyi has advised on more than 6 GW of renewables projects across Australia and Asia Pacific.",
    image: windFarmAsset.url,
    alt: "Renewables Project Legal Counsel Australia",
    cta1: { label: "See our experience", to: "/experience" as const },
    cta2: { label: "Book a 15-min call", to: "/contact" as const },
  },
  {
    eyebrow: "02 — Contractors & Consultants",
    title: "External Legal Counsel for Contractors — without the law firm overhead",
    body: "Contract review, security of payment, claims management and dispute resolution for Australian construction contractors. Fixed fees. No surprises.",
    image: constructionAsset.url,
    alt: "Construction Lawyer Melbourne – Renew Legal",
    cta1: { label: "Legal help for contractors", to: "/for-contractors" as const },
    cta2: { label: "See our rates", to: "/rates" as const },
  },
  {
    eyebrow: "03 — For Law Firms",
    title: "Specialist Construction Consultant for Law Firms",
    body: "Join your team as Special Counsel — construction, renewables and technology integration expertise on demand. Fixed cost, no employment obligations, top-tier standards.",
    image: officeAsset.url,
    alt: "Premium corporate law office interior for Renew Legal Melbourne",
    cta1: { label: "Consultant services", to: "/for-law-firms" as const },
    cta2: { label: "View rates", to: "/rates" as const },
  },
];

const faqs = [
  {
    q: "What is a construction lawyer?",
    a: "A construction lawyer advises clients on the legal aspects of building and infrastructure projects — including contract drafting and negotiation, risk management, claims preparation, disputes, and security of payment. At Renew Legal, we specialise in complex construction contracts including EPC, D&C, LTSA, O&M and FIDIC forms.",
  },
  {
    q: "What does a consultant construction lawyer do?",
    a: "A consultant construction lawyer provides specialist legal services on a contract basis — joining a client's team, an in-house legal department, or a law firm as needed, rather than as a permanent employee. Renew Legal operates this model, providing project counsel, overflow support, and secondments throughout Australia.",
  },
  {
    q: "What is the difference between a boutique law firm and a large law firm?",
    a: "A boutique law firm like Renew Legal specialises in one or two areas and keeps its team small so that senior lawyers handle every matter directly. For specialist construction, renewables or technology integration matters, a boutique firm typically offers deeper knowledge, faster turnaround, and more direct access.",
  },
  {
    q: "What are fixed legal fees?",
    a: "Fixed legal fees mean the total cost is agreed before any work begins. At Renew Legal, we price fixed fees based on the outcome you need — contract review, claims advice, dispute strategy — rather than time spent.",
  },
  {
    q: "Does Renew Legal advise on international projects?",
    a: "Yes. Ehren Terenyi has extensive experience on projects in India, Indonesia, Japan, Korea, New Zealand, the Philippines and Vietnam, in addition to projects across every Australian state and territory.",
  },
];

function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="relative h-screen min-h-[680px] overflow-hidden bg-navy-deep text-white">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={s.image}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover scale-105"
              style={{ animation: i === active ? "kenburns 12s ease-out forwards" : undefined }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy/80 to-navy/45" />
          </div>
        ))}

        <style>{`@keyframes kenburns { from { transform: scale(1.08); } to { transform: scale(1.18); } }`}</style>

        <div className="relative h-full flex items-center">
          <div className="container-prose w-full">
            <div className="max-w-3xl">
              <div className="eyebrow !text-gold-soft">{slides[active].eyebrow}</div>
              <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl">{slides[active].title}</h1>
              <p className="mt-8 max-w-xl text-lg text-white/80 leading-relaxed">{slides[active].body}</p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to={slides[active].cta1.to} className="btn-primary !bg-gold !border-gold !text-navy-deep hover:!bg-white hover:!border-white">
                  {slides[active].cta1.label} <ArrowRight size={16} />
                </Link>
                <Link to={slides[active].cta2.to} className="btn-outline">
                  {slides[active].cta2.label}
                </Link>
              </div>
            </div>

            <div className="absolute bottom-12 left-0 right-0">
              <div className="container-prose flex items-center gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-[2px] transition-all duration-500 ${
                      i === active ? "w-16 bg-gold" : "w-8 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
                <span className="ml-4 text-xs tracking-[0.2em] text-white/50">0{active + 1} / 0{slides.length}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone border-y border-border">
        <div className="container-prose py-12 grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {[
            ["20+", "Years experience"],
            ["6 GW+", "Renewables delivered"],
            ["Fixed", "Fee options"],
            ["Senior", "Direct access"],
            ["Melbourne", "Collins Street"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-display text-3xl lg:text-4xl text-navy">{k}</div>
              <div className="mt-2 text-xs tracking-[0.18em] uppercase text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-28 lg:py-40 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="relative">
            <SiteImage
              src={portraitAsset.url}
              alt="Ehren Terenyi, Principal of Renew Legal Melbourne"
              className="aspect-[4/5]"
              imageClassName="object-contain bg-stone p-6"
              priority
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-navy-deep px-6 py-4 hidden md:block">
              <div className="font-display text-2xl">Ehren Terenyi</div>
              <div className="text-xs tracking-[0.18em] uppercase">Principal</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="eyebrow">About — Renew Legal</div>
          <h2 className="mt-6 text-3xl lg:text-5xl text-navy">Specialist construction and renewables law — Melbourne</h2>
          <div className="gold-rule mt-8" />
          <div className="mt-8 space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Renew Legal is a boutique construction and renewables law practice founded by Ehren Terenyi in 2023. Ehren is a construction, infrastructure and technology integration lawyer with more than two decades of experience across boutique engineering firms, top-tier Australian law firms, international law firms, Federal Court Associate roles, and senior in-house commercial and legal counsel positions.
            </p>
            <p>
              As a sole practice, every matter is handled personally. Clients deal directly with an experienced senior lawyer — not a graduate or paralegal — from the first call to final resolution. This is the core difference between Renew Legal and a large firm.
            </p>
          </div>
          <Link to="/experience" className="btn-ghost-dark mt-10 inline-flex">
            View project experience <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-prose py-28 lg:py-36">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="eyebrow">What we do</div>
              <h2 className="mt-6 text-3xl lg:text-5xl text-navy">Areas of specialisation</h2>
            </div>
            <p className="lg:max-w-md text-muted-foreground leading-relaxed">
              Deep technical knowledge of construction, renewables and technology integration — supported by commercial experience on every side of the table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { n: "01", t: "Construction & Engineering", d: "D&C, EPC, EPCM, FIDIC, AS 4000/4902, side deeds, BOP packages, interface agreements." },
              { n: "02", t: "Renewables — Wind, Solar, BESS", d: "EPC, O&M, LTSA, TSA, development agreements, transmission line contracts." },
              { n: "03", t: "Technology Integration", d: "ASRS, robotics, data centres, MRI, tolling systems, IP, supply & install." },
              { n: "04", t: "Infrastructure Projects", d: "Road, rail, pipeline, water, port — PPP, DBOM, DBO&M, concession agreements." },
              { n: "05", t: "Disputes & Settlement", d: "Adjudication, mediation, expert determination, arbitration, litigation, SOP claims." },
              { n: "06", t: "Law Firm Consulting", d: "Special Counsel support, overflow, secondments, parental leave cover." },
            ].map((c) => (
              <article key={c.n} className="bg-white p-10 lg:p-12 group hover:bg-navy hover:text-white transition-colors duration-500">
                <div className="text-xs tracking-[0.22em] text-gold">{c.n}</div>
                <h3 className="mt-6 text-2xl text-navy group-hover:text-white transition-colors">{c.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70 transition-colors">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-28 lg:py-40">
        <div className="max-w-3xl">
          <div className="eyebrow">Why Renew Legal</div>
          <h2 className="mt-6 text-3xl lg:text-5xl text-navy">What makes us different</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {[
            ["Direct principal access", "Every matter handled personally by Ehren Terenyi — no junior handoffs, no case management system."],
            ["Fixed fees", "Agree the cost before work begins. No billing surprises. No hourly rate ambiguity."],
            ["6 GW+ delivered", "Wind, solar, BESS and pumped hydro across Australia, NZ, India, Indonesia, Japan, Korea, Philippines and Vietnam."],
            ["Commercial perspective", "Experience on every side — principal, contractor, financier, in-house counsel, project team."],
            ["Federal Court experience", "Former Associate to Justice Pagone — high-stakes dispute experience at the most senior level."],
            ["Senior-only advice", "No graduates working out of their depth. Every word of advice from a 20+ year specialist."],
          ].map(([t, d]) => (
            <div key={t} className="border-l border-gold pl-6">
              <h3 className="text-xl text-navy">{t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-prose py-28 lg:py-36 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">Frequently asked</div>
            <h2 className="mt-6 text-3xl lg:text-5xl text-navy">Straight answers</h2>
            <p className="mt-6 text-muted-foreground">Practical answers in plain English — no legalese.</p>
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
        </div>
      </section>

      <CtaBand />
    </>
  );
}
