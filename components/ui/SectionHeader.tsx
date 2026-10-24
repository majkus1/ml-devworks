import type { ReactNode } from "react";

interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  /** Element po prawej (np. link „zobacz wszystkie”) na dużych ekranach. */
  action?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}

/** Nagłówek sekcji: etykieta, tytuł i krótki opis w jednym, powtarzalnym układzie. */
export default function SectionHeader({ id, eyebrow, title, lead, align = "left", action, as = "h2", className = "" }: SectionHeaderProps) {
  const Heading = as;
  const centered = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${action ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between" : ""} ${className}`}>
      <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        {eyebrow && (
          <p className="eyebrow mb-5">
            <span className="eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <Heading id={id} className="section-heading">
          {title}
        </Heading>
        {lead && <p className={`section-lead mt-4 ${centered ? "mx-auto" : ""}`}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
