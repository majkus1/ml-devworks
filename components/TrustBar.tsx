"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@/components/ui/icons";

interface TrustBarProps {
  lang?: "pl" | "en";
}

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu";

/** Pasek konkretów zaraz pod hero: czas, cena i opinie — to, o co klient pyta najpierw. */
export default function TrustBar({ lang = "pl" }: TrustBarProps) {
  const isPl = lang === "pl";
  const [rating, setRating] = useState<{ value: number; total: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/google-reviews?lang=${lang}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (cancelled || !data || typeof data.overallRating !== "number") return;
        setRating({ value: data.overallRating, total: Number(data.totalRatings) || 0 });
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [lang]);

  const ratingValue = rating ? rating.value.toFixed(1).replace(".", isPl ? "," : ".") : isPl ? "5,0" : "5.0";
  const reviewsLabel =
    rating && rating.total > 0
      ? isPl
        ? `${rating.total} ${rating.total === 1 ? "opinia" : rating.total < 5 ? "opinie" : "opinii"} w Google`
        : `${rating.total} ${rating.total === 1 ? "review" : "reviews"} on Google`
      : isPl
        ? "opinie w Google"
        : "Google reviews";

  const stats = [
    {
      value: isPl ? "2–5 dni" : "2–5 days",
      label: isPl ? "do bezpłatnego prototypu" : "to a free prototype",
    },
    {
      value: isPl ? "3–14 dni" : "3–14 days",
      label: isPl ? "do pierwszej działającej automatyzacji" : "to the first working automation",
    },
    {
      value: isPl ? "od 2 500 zł" : "from PLN 2,500",
      label: isPl ? "netto, cena znana przed startem" : "net, price agreed before we start",
    },
  ];

  return (
    <section className="relative" aria-label={isPl ? "Najważniejsze fakty" : "Key facts"}>
      <div className="container-site">
        <dl className="grid grid-cols-2 border-y border-ink/15 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-6 pr-4 lg:py-7 ${index % 2 === 1 ? "pl-4 border-l border-ink/10 lg:pl-6" : ""} ${index === 2 ? "border-t border-ink/10 lg:border-l lg:border-t-0 lg:pl-6" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-[1.75rem] font-bold leading-none tracking-tight text-ink">{stat.value}</span>
                <span className="mt-2 block text-sm leading-snug text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
          <div className="border-l border-t border-ink/10 py-6 pl-4 lg:border-t-0 lg:py-7 lg:pl-6">
            <dt className="sr-only">{reviewsLabel}</dt>
            <dd>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={isPl ? "Zobacz opinie ML DevWorks w Google" : "See ML DevWorks reviews on Google"}
              >
                <span className="flex items-center gap-2 font-display text-[1.75rem] font-bold leading-none tracking-tight text-ink">
                  {ratingValue}
                  <span className="flex text-amber-500" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <StarIcon key={index} size={14} />
                    ))}
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-snug text-muted underline decoration-ink/20 underline-offset-4 transition-colors group-hover:text-primary">
                  {reviewsLabel}
                </span>
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
