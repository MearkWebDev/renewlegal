interface SiteImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function SiteImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes,
}: SiteImageProps) {
  return (
    <div className={`site-image-frame ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        className={`site-image ${imageClassName}`.trim()}
      />
      <div className="site-image-overlay" aria-hidden />
    </div>
  );
}
