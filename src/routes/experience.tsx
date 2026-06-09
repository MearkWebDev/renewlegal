import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SiteImage } from "@/components/site/SiteImage";
import windFarmAsset from "@/assets/renew-legal-wind-farm.webp.asset.json";
import solarFarmAsset from "@/assets/renew-legal-solar-farm.webp.asset.json";
import constructionAsset from "@/assets/renew-legal-construction-project.webp.asset.json";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Project Experience — Construction & Renewables Lawyer | Renew Legal" },
      { name: "description", content: "6 GW+ renewables delivered. EPC, BESS, wind, solar, ASRS, FIDIC. Project experience across Australia and Asia Pacific." },
      { property: "og:title", content: "Construction & Renewables Project Experience — Renew Legal" },
      { property: "og:description", content: "Representative project experience across construction, renewables, infrastructure and technology integration." },
      { property: "og:url", content: "/experience" },
      { property: "og:image", content: windFarmAsset.url },
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
        image={windFarmAsset.url}
        imageAlt="Renewables Project Legal Counsel Australia"
        priority
      />

      <div className="container-prose py-24 lg:py-32 space-y-16">
        <div className="grid gap-6 md:grid-cols-2">
          <SiteImage src={solarFarmAsset.url} alt="Solar farm legal counsel Australia – Renew Legal" className="aspect-[16/10]" />
          <SiteImage src={constructionAsset.url} alt="EPC Contract Lawyer Melbourne – Renew Legal" className="aspect-[16/10]" />
        </div>

        {sections.map((s, idx) => (
          <section key={s.h} className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs tracking-[0.22em] text-gold">0{idx + 1}</div>
              <h2 className="mt-4 text-2xl lg:text-4xl text-navy">{s.h}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-foreground/80 leading-relaxed">{s.lead}</p>
              <ul className="mt-8 space-y-4">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-4 border-b border-border pb-4">
                    <span className="text-gold mt-1">—</span>
                    <span className="text-foreground/80 leading-relaxed">{it}</span>
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
