import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** muted: lekko jaśniejsze tło, żeby oddzielić sąsiednie sekcje. */
  tone?: "default" | "muted";
  className?: string;
  /** Domyślnie pełny rytm sekcji; „tight” dla sekcji, które łączą się z sąsiednią. */
  spacing?: "default" | "tight" | "none";
  labelledBy?: string;
  ariaLabel?: string;
}

/** Sekcja strony: ten sam kontener i rytm pionowy na wszystkich podstronach. */
export default function Section({
  id,
  children,
  tone = "default",
  className = "",
  spacing = "default",
  labelledBy,
  ariaLabel,
}: SectionProps) {
  const padding = spacing === "default" ? "section-y" : spacing === "tight" ? "py-12 md:py-16" : "";
  const background = tone === "muted" ? "bg-background-light border-y border-white/[0.06]" : "";

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${padding} ${background} ${className}`}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}
