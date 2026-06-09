import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-32">
      <div className="container-prose py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="w-[172px] lg:w-[210px]">
            <Logo variant="light" className="max-h-12" />
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
            Specialist construction, renewables, infrastructure and technology
            integration legal counsel. Melbourne, Australia.
          </p>
          <div className="gold-rule mt-8" />
          <p className="mt-6 text-xs tracking-[0.18em] uppercase text-gold-soft">
            Ehren Terenyi — Principal
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-5">Practice</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/experience" className="hover:text-gold">Experience</Link></li>
            <li><Link to="/for-contractors" className="hover:text-gold">For Contractors</Link></li>
            <li><Link to="/for-law-firms" className="hover:text-gold">For Law Firms</Link></li>
            <li><Link to="/rates" className="hover:text-gold">Rates</Link></li>
            <li><Link to="/articles" className="hover:text-gold">Articles</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-5">Contact</h4>
          <address className="not-italic text-sm space-y-3 leading-relaxed text-white/70">
            <div>Suite 208, 282 Collins Street<br />Block Arcade, Melbourne VIC 3000</div>
            <div><a href="tel:+61418342682" className="hover:text-gold">+61 418 342 682</a></div>
            <div><a href="mailto:ehren@renewlegal.com.au" className="hover:text-gold">ehren@renewlegal.com.au</a></div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Renew Legal Pty Ltd. Incorporated Legal Practice.</div>
          <div className="tracking-[0.16em] uppercase">Construction • Renewables • Infrastructure</div>
        </div>
      </div>
    </footer>
  );
}

