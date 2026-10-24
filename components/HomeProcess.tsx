import Link from "next/link";
import type { SiteLang } from "@/lib/services";
import ProcessSteps from "@/components/ui/ProcessSteps";
import { ArrowRightIcon } from "@/components/ui/icons";

interface HomeProcessProps {
  lang?: SiteLang;
}

export default function HomeProcess({ lang = "pl" }: HomeProcessProps) {
  const isPl = lang === "pl";

  return (
    <ProcessSteps lang={lang} id="home-process">
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <Link href={isPl ? "/kontakt" : "/en/contact"} className="btn-primary">
          {isPl ? "Opisz swój proces" : "Describe your process"}
          <ArrowRightIcon size={18} />
        </Link>
        <Link
          href={isPl ? "/blog/agencja-automatyzacji-ai-czy-programista-jak-wybrac-wykonawce" : "/en/blog/ai-automation-agency-or-developer-how-to-choose-a-vendor"}
          className="btn-link"
        >
          {isPl ? "Agencja automatyzacji AI czy programista? Porównanie" : "AI automation agency or a developer? Comparison"}
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </ProcessSteps>
  );
}
