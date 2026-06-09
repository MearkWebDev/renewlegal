import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
}

export function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section className="relative bg-navy text-white pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
      {image && (
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy/80"
        aria-hidden
      />
      <div className="container-prose relative">
        <div className="eyebrow !text-gold-soft">{eyebrow}</div>
        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl max-w-4xl">{title}</h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
        )}
        <div className="gold-rule mt-10" />
      </div>
    </section>
  );
}
