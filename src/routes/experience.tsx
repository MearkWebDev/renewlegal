import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SiteImage } from "@/components/site/SiteImage";
import transmissionAsset from "@/assets/renew-legal-project-transmission-lines.png.asset.json";
import windFarmAsset from "@/assets/renew-legal-project-wind-farm.png.asset.json";
import constructionAsset from "@/assets/renew-legal-project-construction-site.png.asset.json";
import tollRoadAsset from "@/assets/renew-legal-project-toll-road.png.asset.json";
import automationAsset from "@/assets/renew-legal-project-automation-factory.png.asset.json";
import portraitAsset from "@/assets/ehren-terenyi-renew-legal-portrait-2.png.asset.json";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Project Experience — Construction & Renewables Lawyer | Renew Legal" },
      { name: "description", content: "6 GW+ renewables delivered. EPC, BESS, wind, solar, ASRS, FIDIC. Project experience across Australia and Asia Pacific." },
      { property: "og:title", content: "Construction & Renewables Project Experience — Renew Legal" },
      { property: "og:description", content: "Representative project experience across construction, renewables, infrastructure and technology integration." },
      { property: "og:url", content: "/experience" },
      { property: "og:image", content: transmissionAsset.url },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Page,
});

const sections = [
  {
    h: "Construction Technology Integration",
    lead: "Renew Legal advises global OEMs and technology integrators on construction contracts for automated and technology-embedded infrastructure across Australia.",
    items: [
      "18-month project counsel for a global ASRS OEM delivering two robotic customer fulfilment centres for a major Australian supermarket operator",
      "Drafting and negotiating development, supply & installation and construction agreements for ASRS warehouses in Queensland and Victoria",
      "Drafting project, engineering and IP agreements for a floating storage regassification unit (FSRU) project in Australia",
      "Construction management and supply agreements for an Australian data centre project",
      "Advising a global healthcare technology OEM on an MRI supply and building upgrade for a Queensland hospital",
      "Tender departures for a global tolling OEM on roadside, video and tolling system projects in NSW, Victoria and Singapore",
    ],
  },
  {
    h: "Renewables Projects — Australia",
    lead: "More than 6 GW of wind, solar and battery storage delivered across Australia for owners, developers, contractors, financiers and turbine OEMs.",
    items: [
      "EPC, O&M, TSA, LTSA and project agreements for a 250 MW BESS and transmission line (SA), 1,200 MW wind farm (Qld), 210 MW wind farm (SA), and 95 MW wind farm (NZ)",
      "Owner advice on construction agreements for a pumped hydro and 75 MW BESS (NSW) and a 115 MW BESS (Vic)",
      "Financier advice on EPC, O&M and execution disputes: 250 MW wind farm (NSW), 120 MW wind farm (SA), 225 MW wind farm (Vic), 500 MW and 125 MW solar farms (Qld)",
      "Contractor advice on a 250 MW solar farm (SA) and a 55 MW solar farm (Qld)",
      "Negotiation and settlement of LTSA / O&M disputes on a 430 MW wind farm (Vic) and a 175 MW wind farm (NZ)",
    ],
  },
  {
    h: "Renewables Projects — Asia Pacific & India",
    lead: "Construction and O&M projects managed as Commercial Manager and Senior Legal Counsel for a wind turbine OEM across Asia Pacific.",
    items: [
      "Korea — 75 MW wind farm and multiple 5–15 MW wind farms",
      "India — 165 MW wind farm",
      "Indonesia — 75 MW and 70 MW wind farms",
      "Japan — 125 MW wind farm",
      "Philippines — 20 MW, 160 MW and 80 MW wind farms",
      "Vietnam — 120 MW, 100 MW, 75 MW, 90 MW, 125 MW and 30 MW wind farms",
    ],
  },
  {
    h: "Construction Disputes",
    lead: "Major construction disputes at every stage — from live-project settlement through to Supreme Court litigation and international arbitration.",
    items: [
      "Dispute strategy and communications plan for a $1B+ PPP dispute in NSW for a contractor",
      "Seconded to site in Mozambique as contract administrator and dispute resolution counsel on FIDIC contracts for a tailings facility",
      "Advising a water treatment SPV on a complex dispute with mine owners and O&M contractor on a DBO&M project",
      "Advising a contractor on a $100M+ delay and breach of contract claim against a technology JV partner on a WA renewables project",
      "Advising the employer on a gas pipeline arbitration involving $1B+ claims for damages, prolongation and quantum meruit",
      "Security of payment adjudications across Victoria, NSW, Queensland and South Australia",
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Project Experience"
        title={<>Construction & renewables project experience — Australia & Asia Pacific</>}
        intro="A representative selection of project experience. Ehren Terenyi has delivered legal advice on more than 6 GW of renewables and on major construction, infrastructure and technology integration projects."
        image={transmissionAsset.url}
        imageAlt="Official Renew Legal transmission infrastructure project image"
        priority
      />

      <div className="container-prose space-y-16 py-24 lg:py-32">
        <section className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SiteImage
              src={portraitAsset.url}
              alt="Ehren Terenyi, Principal of Renew Legal"
              className="aspect-[4/5] max-w-sm"
              imageClassName="bg-stone object-contain p-6"
            />
          </div>
          <div className="lg:col-span-8">
            <div className="eyebrow">Principal-led experience</div>
            <h2 className="mt-6 text-3xl text-navy lg:text-5xl">Real projects, direct senior involvement</h2>
            <div className="gold-rule mt-8" />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                Renew Legal's experience is grounded in actual project delivery across construction, renewables, infrastructure and complex technology integration. That depth comes from acting for owners, developers, contractors, OEMs, financiers and in-house project teams — not from a generic advisory model.
              </p>
              <p>
                Every engagement remains principal-led. Clients work directly with Ehren Terenyi, drawing on top-tier legal training, commercial project experience and practical contract administration insight from live projects in Australia and across Asia Pacific.
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <SiteImage src={windFarmAsset.url} alt="Official Renew Legal wind farm project photograph" className="aspect-[16/10]" />
          <SiteImage src={constructionAsset.url} alt="Official Renew Legal construction project site photograph" className="aspect-[16/10]" />
          <SiteImage src={tollRoadAsset.url} alt="Official Renew Legal tolling infrastructure project photograph" className="aspect-[16/10]" />
          <SiteImage src={automationAsset.url} alt="Official Renew Legal automation and technology integration project photograph" className="aspect-[16/10]" />
        </div>

        {sections.map((s, idx) => (
          <section key={s.h} className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="text-xs tracking-[0.22em] text-gold">0{idx + 1}</div>
              <h2 className="mt-4 text-2xl text-navy lg:text-4xl">{s.h}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-foreground/80">{s.lead}</p>
              <ul className="mt-8 space-y-4">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-4 border-b border-border pb-4">
                    <span className="mt-1 text-gold">—</span>
                    <span className="leading-relaxed text-foreground/80">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
