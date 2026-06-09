import logoAsset from "@/assets/renew-legal-logo.png.asset.json";

interface LogoProps {
  variant?: "light" | "dark";
  alt?: string;
  className?: string;
  priority?: boolean;
}

export function Logo({
  variant = "dark",
  alt = "Renew Legal",
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`h-auto w-full object-contain ${variant === "light" ? "brightness-0 invert" : ""} ${className}`.trim()}
    />
  );
}
