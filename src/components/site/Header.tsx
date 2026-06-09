import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/for-contractors", label: "For Contractors" },
  { to: "/for-law-firms", label: "For Law Firms" },
  { to: "/rates", label: "Rates" },
  { to: "/articles", label: "Articles" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const useDarkLogo = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        useDarkLogo
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-[0_1px_0_rgba(184,155,94,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-prose flex items-center justify-between h-20 lg:h-24 gap-6">
        <Link to="/" className="group flex items-center" aria-label="Renew Legal home">
          <span className="block w-[148px] lg:w-[180px]">
            <Logo
              variant={useDarkLogo ? "dark" : "light"}
              priority
              className="max-h-10 lg:max-h-11"
            />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {nav.slice(1, -1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[0.78rem] tracking-[0.12em] uppercase font-medium transition-colors ${
                useDarkLogo ? "text-charcoal hover:text-gold" : "text-white/90 hover:text-gold"
              }`}
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary !py-3 !px-5 text-[0.72rem]">
            Book a Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${useDarkLogo ? "text-navy" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-prose flex flex-col py-6 gap-1" aria-label="Mobile">
            <div className="pb-5 mb-2 border-b border-border/80">
              <span className="block w-[152px]">
                <Logo variant="dark" className="max-h-10" />
              </span>
            </div>
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-[0.1em] uppercase text-charcoal hover:text-gold border-b border-border"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 self-start">
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

