"use client";

import { useEffect, useState } from "react";
import { ClockIcon, PrototypeIcon, StarIcon, WalletIcon } from "@/components/ui/icons";

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
      icon: PrototypeIcon,
      value: isPl ? "2–5 dni" : "2–5 days",
      label: isPl ? "do bezpłatnego prototypu" : "to a free prototype",
    },
    {
      icon: ClockIcon,
      value: isPl ? "3–14 dni" : "3–14 days",
      label: isPl ? "do pierwszej działającej automatyzacji" : "to the first working automation",
    },
    {
      icon: WalletIcon,
      value: isPl ? "od 2 500 zł" : "from PLN 2,500",
      label: isPl ? "netto, cena znana przed startem" : "net, price agreed before we start",
    },
  ];

  return (
    <section className="relative" aria-label={isPl ? "Najważniejsze fakty" : "Key facts"}>
      <div className="container-site">
        <div className="grid overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "1px" }}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-4 bg-background-light px-6 py-6">
                <span className="icon-tile">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-display text-2xl font-semibold leading-none text-white">{stat.value}</p>
                  <p className="mt-1.5 text-sm leading-snug text-gray-400">{stat.label}</p>
                </div>
              </div>
            );
          })}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-background-light px-6 py-6 transition-colors hover:bg-background-lighter"
            aria-label={isPl ? "Zobacz opinie ML DevWorks w Google" : "See ML DevWorks reviews on Google"}
          >
            <span className="icon-tile !border-amber-400/30 !bg-amber-400/10 !text-amber-400">
              <StarIcon size={18} />
            </span>
            <div>
              <p className="flex items-center gap-2 font-display text-2xl font-semibold leading-none text-white">
                {ratingValue}
                <span className="flex text-amber-400" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <StarIcon key={index} size={13} />
                  ))}
                </span>
              </p>
              <p className="mt-1.5 text-sm leading-snug text-gray-400 transition-colors group-hover:text-primary">{reviewsLabel}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
