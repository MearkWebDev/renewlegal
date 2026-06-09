import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Logo } from "@/components/site/Logo";

import { Mail, Phone, MapPin, Linkedin, Clock } from "lucide-react";
import officeAsset from "@/assets/renew-legal-premium-law-office.webp.asset.json";
import portraitAsset from "@/assets/ehren-terenyi-renew-legal-portrait-2.png.asset.json";
import logoAsset from "@/assets/renew-legal-logo.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Construction Lawyer Melbourne | Renew Legal" },
      { name: "description", content: "Contact Renew Legal — Suite 208, 282 Collins Street, Melbourne VIC. Specialist construction and renewables lawyer. Response within one business day." },
      { property: "og:title", content: "Contact Renew Legal — Melbourne Construction Lawyers" },
      { property: "og:description", content: "Speak directly with Ehren Terenyi, Principal. Specialist construction and renewables legal advice from Collins Street, Melbourne." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: officeAsset.url },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "renewlegal-au",
        name: "Renew Legal",
        image: officeAsset.url,
        logo: logoAsset.url,
        telephone: "+61 418 342 682",
        email: "ehren@renewlegal.com.au",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suite 208, 282 Collins Street, Block Arcade",
          addressLocality: "Melbourne",
          addressRegion: "VIC",
          postalCode: "3000",
          addressCountry: "AU",
        },
        geo: { "@type": "GeoCoordinates", latitude: -37.81528, longitude: 144.96686 },
        openingHoursSpecification: [{
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:30",
        }],
        url: "/",
      }),
    }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Get in touch with Renew Legal</>}
        intro="The best way to find out whether Renew Legal can help with your matter is a short conversation. Ehren responds personally to all enquiries within one business day."
        image={officeAsset.url}
        imageAlt="Renew Legal Melbourne office consultation environment"
        priority
      />

      <section className="container-prose grid gap-16 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <div className="mb-10 w-[160px]">
            <Logo variant="dark" className="max-h-10" />
          </div>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-1">
            <div>
              <div className="eyebrow">Direct contact</div>
              <h2 className="mt-6 text-3xl text-navy lg:text-4xl">Ehren Terenyi — Principal</h2>
              <div className="gold-rule mt-8" />

              <div className="mt-10 space-y-6">
                <ContactRow Icon={MapPin} label="Office">
                  Suite 208, 282 Collins Street<br />Block Arcade, Melbourne VIC 3000
                </ContactRow>
                <ContactRow Icon={Phone} label="Phone">
                  <a href="tel:+61418342682" className="hover:text-gold">+61 418 342 682</a>
                </ContactRow>
                <ContactRow Icon={Mail} label="Email">
                  <a href="mailto:ehren@renewlegal.com.au" className="hover:text-gold">ehren@renewlegal.com.au</a>
                </ContactRow>
                <ContactRow Icon={Linkedin} label="LinkedIn">
                  <a href="https://www.linkedin.com/in/ehrenterenyi" target="_blank" rel="noreferrer" className="hover:text-gold">
                    linkedin.com/in/ehrenterenyi
                  </a>
                </ContactRow>
                <ContactRow Icon={Clock} label="Hours">
                  Monday–Friday, 9:00am – 5:30pm AEST<br />
                  <span className="text-xs text-muted-foreground">Response within 1 business day</span>
                </ContactRow>
              </div>
            </div>
            <div className="relative h-full min-h-[480px] w-full">
              <img
                src={portraitAsset.url}
                alt="Ehren Terenyi, Principal of Renew Legal"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[center_top]"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            className="space-y-6 bg-stone p-8 lg:p-12"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you. Ehren will respond within one business day.");
              (e.target as HTMLFormElement).reset();
            }}
          >
            <h2 className="font-display text-2xl text-navy">Send an enquiry</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Your name *" name="name" required />
              <Field label="Company or firm" name="company" />
              <Field label="Email *" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <SelectField label="Matter type" name="type" options={["Contract review", "Claims advice", "Dispute", "Law firm enquiry", "Other"]} />
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-navy">Brief description *</label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={500}
                className="mt-2 w-full border border-border bg-white px-4 py-3 transition-colors focus:border-gold focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full md:w-auto">
              Send enquiry to Renew Legal
            </button>
            <p className="text-xs text-muted-foreground">
              Submitting an enquiry does not create a lawyer-client relationship. Do not send confidential information until a costs agreement is in place.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactRow({ Icon, label, children }: { Icon: typeof Mail; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 border-b border-border pb-6">
      <div className="mt-1 text-gold"><Icon size={18} /></div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-1 leading-relaxed text-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-navy">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-border bg-white px-4 py-3 transition-colors focus:border-gold focus:outline-none"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-navy">{label}</label>
      <select name={name} className="mt-2 w-full border border-border bg-white px-4 py-3 transition-colors focus:border-gold focus:outline-none">
        <option value="">Select...</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
