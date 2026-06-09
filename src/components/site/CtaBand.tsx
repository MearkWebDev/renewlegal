import { Link } from "@tanstack/react-router";

export function CtaBand() {
  return (
    <section className="bg-navy-deep text-white">
      <div className="container-prose py-24 lg:py-32 text-center">
        <div className="eyebrow !text-gold-soft">Get in touch</div>
        <h2 className="mt-6 text-3xl md:text-5xl max-w-3xl mx-auto">
          Need specialist construction legal advice?
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-white/70 leading-relaxed">
          Speak directly with Ehren Terenyi, Principal — fixed fees, senior-only advice,
          a one business day response.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-primary !bg-gold !border-gold !text-navy-deep hover:!bg-white hover:!border-white">
            Book your initial consultation
          </Link>
          <Link to="/rates" className="btn-outline">View rates</Link>
        </div>
      </div>
    </section>
  );
}
