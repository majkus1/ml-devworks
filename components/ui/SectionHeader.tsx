import type { ReactNode } from "react";

interface SectionHeaderProps {
  id?: string;
  /** Zachowane dla zgodności wywołań; nie jest wyświetlane. */
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  /** Element po prawej (np. link „zobacz wszystkie”) na dużych ekranach. */
  action?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}

/** Nagłówek sekcji: tytuł i krótki opis. Etykieta „eyebrow” nie jest renderowana (wzorzec rozpoznawany jako szablon AI). */
export default function SectionHeader({ id, title, lead, align = "left", action, as = "h2", className = "" }: SectionHeaderProps) {
  const Heading = as;
  const centered = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${action ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between" : ""} ${className}`}>
      <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <Heading id={id} className="section-heading">
          {title}
        </Heading>
        {lead && <p className={`section-lead mt-4 ${centered ? "mx-auto" : ""}`}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
