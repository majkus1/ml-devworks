import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/services";
import { blogPosts } from "@/lib/blog";

interface FooterProps {
  lang?: "pl" | "en";
}

const MAPS_URL =
  "https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu";

export default function Footer({ lang = "pl" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const services = getServices(lang);
  const isEnglish = lang === "en";
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  const t = isEnglish
    ? {
        services: "Services",
        company: "Company",
        contact: "Contact",
        blog: "Blog",
        latest: "Latest on the blog",
        home: "Homepage",
        allServices: "All services",
        local: "Software developer Krakow",
        contactSection: "Contact and AI advisor",
        switchLang: "Polska wersja",
        rights: "All rights reserved.",
        tagline: "AI automation, business apps, and websites for small and mid-sized companies.",
        promise: "A free working prototype within 2–5 days.",
      }
    : {
        services: "Usługi",
        company: "Firma",
        contact: "Kontakt",
        blog: "Blog",
        latest: "Ostatnio na blogu",
        home: "Strona główna",
        allServices: "Wszystkie usługi",
        local: "Programista Kraków",
        contactSection: "Kontakt i asystent AI",
        switchLang: "English version",
        rights: "Wszelkie prawa zastrzeżone.",
        tagline: "Automatyzacje AI, aplikacje i strony dla małych i średnich firm.",
        promise: "Bezpłatny, działający prototyp w 2–5 dni.",
      };

  const homeHref = isEnglish ? "/en" : "/";
  const blogHref = isEnglish ? "/en/blog" : "/blog";
  const servicesHref = isEnglish ? "/en/services" : "/uslugi";
  const localHref = isEnglish ? "/en/software-developer-krakow" : "/programista-krakow";
  const contactHref = isEnglish ? "/en/contact" : "/kontakt";
  const alternateHref = isEnglish ? "/" : "/en";
  const linkClass = "text-[0.92rem] text-gray-400 transition-colors hover:text-white";
  const headingClass = "mb-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gray-500";

  return (
    <footer className="relative border-t border-white/[0.07] bg-background-light" role="contentinfo">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />

      <div className="container-site py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href={homeHref} aria-label={isEnglish ? "Go to homepage" : "Przejdź do strony głównej"} className="inline-flex">
              <Image src="/primary-on-transparent-logo.webp" alt="ML DevWorks" width={200} height={56} className="h-auto w-[180px]" />
            </Link>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-gray-400">{t.tagline}</p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
              <span className="eyebrow-dot" aria-hidden="true" />
              {t.promise}
            </p>
            <Link href={contactHref} className="btn-primary mt-6 !px-5 !py-3 !text-sm">
              {isEnglish ? "Describe your project" : "Opisz projekt"}
            </Link>
          </div>

          <nav aria-label={t.services}>
            <h2 className={headingClass}>{t.services}</h2>
            <ul className="space-y-2.5">
              <li>
                <Link href={servicesHref} className={linkClass}>
                  {t.allServices}
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={service.href} className={linkClass}>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.company}>
            <h2 className={headingClass}>{t.company}</h2>
            <ul className="space-y-2.5">
              <li>
                <Link href={homeHref} className={linkClass}>
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={blogHref} className={linkClass}>
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href={localHref} className={linkClass}>
                  {t.local}
                </Link>
              </li>
              <li>
                <Link href={contactHref} className={linkClass}>
                  {t.contactSection}
                </Link>
              </li>
              <li>
                <Link href={alternateHref} hrefLang={isEnglish ? "pl" : "en"} className={linkClass}>
                  {t.switchLang}
                </Link>
              </li>
            </ul>

            <h2 className={`${headingClass} mt-9`}>{t.latest}</h2>
            <ul className="space-y-2.5">
              {latestPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={isEnglish ? `/en/blog/${post.slugEn}` : `/blog/${post.slug}`} className={`${linkClass} leading-snug`}>
                    {post.metaTitle?.[lang] ?? post.title[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className={headingClass}>{t.contact}</h2>
            <ul className="space-y-4 text-[0.95rem]">
              <li>
                <a href="tel:+48516598792" className="text-white transition-colors hover:text-primary">
                  +48 516 598 792
                </a>
              </li>
              <li>
                <a href="mailto:office@ml-devworks.com" className="text-white transition-colors hover:text-primary">
                  office@ml-devworks.com
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">
                  Rynek Główny 34/15
                  <br />
                  31-010 Kraków
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.07] pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} ML DevWorks. {t.rights}
          </p>
          <p>{isEnglish ? "Krakow, Poland · working remotely across Poland and the EU" : "Kraków · pracuję zdalnie z firmami z całej Polski"}</p>
        </div>
      </div>
    </footer>
  );
}
