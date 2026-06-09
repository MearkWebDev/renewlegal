import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  imageClassName = "",
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-40 pb-24 text-white lg:pt-56 lg:pb-32">
      {image && (
        <img
          src={image}
          alt={imageAlt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`.trim()}
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-deep/58 via-navy/34 to-navy/20"
        aria-hidden
      />
      <div className="container-prose relative">
        <div className="eyebrow !text-gold-soft">{eyebrow}</div>
        <h1 className="mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/82">{intro}</p>
        )}
        <div className="gold-rule mt-10" />
      </div>
    </section>
  );
}
