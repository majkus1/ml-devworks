"use client";

import { useEffect, useState } from "react";

interface TrustBarProps {
  lang?: "pl" | "en";
}

interface Stat {
  value: string;
  label: string;
  sub?: string;
}

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu";

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

  const stats: Stat[] = [
    {
      value: "2-5 " + (isPl ? "dni" : "days"),
      label: isPl ? "do bezpłatnego prototypu" : "to a free prototype",
      sub: isPl ? "klikalny albo działający szkic" : "clickable or a working draft",
    },
    {
      value: "3-14 " + (isPl ? "dni" : "days"),
      label: isPl ? "do działającej pierwszej automatyzacji" : "to the first working automation",
      sub: isPl ? "wdrożenie etapami, bez abonamentu" : "delivered in stages, no subscription",
    },
    {
      value: isPl ? "od 2 500 zł" : "from PLN 2,500",
      label: isPl ? "prosta automatyzacja AI" : "simple AI automation",
      sub: isPl ? "netto, wycena znana przed startem" : "net, price agreed before we start",
    },
  ];

  return (
    <section className="relative px-4 py-14 md:py-20" aria-label={isPl ? "Dlaczego warto" : "Why it works"}>
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl px-6 py-6 md:px-7 md:py-7 hover:border-primary/50 transition-colors">
              <p className="text-2xl md:text-3xl font-bold text-white leading-none mb-3">{stat.value}</p>
              <p className="text-sm text-gray-200 leading-snug">{stat.label}</p>
              {stat.sub && <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>}
            </div>
          ))}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl px-6 py-6 md:px-7 md:py-7 hover:border-primary/50 transition-colors group"
            aria-label={isPl ? "Zobacz opinie ML DevWorks w Google" : "See ML DevWorks reviews on Google"}
          >
            <p className="text-2xl md:text-3xl font-bold text-white leading-none mb-3 flex items-center gap-2">
              {rating ? rating.value.toFixed(1).replace(".", isPl ? "," : ".") : "5,0"}
              <span className="flex text-yellow-400" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((index) => (
                  <svg key={index} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </span>
            </p>
            <p className="text-sm text-gray-200 leading-snug group-hover:text-primary transition-colors">
              {isPl ? "ocena klientów w Google" : "customer rating on Google"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {rating && rating.total > 0
                ? isPl
                  ? `${rating.total} ${rating.total === 1 ? "opinia" : rating.total < 5 ? "opinie" : "opinii"}`
                  : `${rating.total} ${rating.total === 1 ? "review" : "reviews"}`
                : isPl
                  ? "zobacz opinie"
                  : "see reviews"}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
