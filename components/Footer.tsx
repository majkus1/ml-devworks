import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/services";

interface FooterProps {
  lang?: "pl" | "en";
}

export default function Footer({ lang = "pl" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const services = getServices(lang);
  const isEnglish = lang === "en";

  const content = {
    pl: {
      services: "Usługi",
      company: "Firma",
      contact: "Kontakt",
      blog: "Blog",
      home: "Strona główna",
      contactSection: "Formularz kontaktowy",
      switchLang: "English version",
      rights: "Wszelkie prawa zastrzeżone.",
      addressLabel: "Adres",
      phoneLabel: "Telefon",
      emailLabel: "Email",
    },
    en: {
      services: "Services",
      company: "Company",
      contact: "Contact",
      blog: "Blog",
      home: "Homepage",
      contactSection: "Contact form",
      switchLang: "Polska wersja",
      rights: "All rights reserved.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
    },
  };

  const t = content[lang];
  const homeHref = isEnglish ? "/en" : "/";
  const blogHref = isEnglish ? "/en/blog" : "/blog";
  const servicesHref = isEnglish ? "/en/services" : "/uslugi";
  const localHref = isEnglish ? "/en/software-developer-krakow" : "/programista-krakow";
  const contactHref = isEnglish ? "/en#contact" : "/#contact";
  const alternateHref = isEnglish ? "/" : "/en";

  return (
    <footer className="relative border-t border-primary/20 px-4 py-12 overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-light to-background-lighter" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,136,0.14),transparent_34rem)]" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href={homeHref} aria-label={isEnglish ? "Go to homepage" : "Przejdź do strony głównej"} className="inline-flex mb-6">
              <Image
                src="/primary-on-transparent-logo.webp"
                alt="ML DevWorks"
                width={300}
                height={84}
                className="opacity-90"
              />
            </Link>
            <p className="text-primary font-semibold text-lg mb-2">
              {isEnglish ? "Experienced developer supported by AI tools." : "Doświadczony programista wspierany narzędziami AI."}
            </p>
            <p className="text-gray-400 max-w-sm">
              {isEnglish
                ? "Websites, applications, AI automation, e-commerce, booking systems, DevOps, and maintenance for companies."
                : "Strony, aplikacje, automatyzacja AI, e-commerce, systemy rezerwacji, DevOps i utrzymanie projektów dla firm."}
            </p>
          </div>

          <nav aria-label={t.services}>
            <h2 className="text-white font-bold mb-4">{t.services}</h2>
            <ul className="space-y-3">
              <li>
                <Link href={servicesHref} className="text-gray-300 hover:text-primary transition-colors">
                  {isEnglish ? "All services" : "Wszystkie usługi"}
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={service.href} className="text-gray-300 hover:text-primary transition-colors">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.company}>
            <h2 className="text-white font-bold mb-4">{t.company}</h2>
            <ul className="space-y-3">
              <li>
                <Link href={homeHref} className="text-gray-300 hover:text-primary transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={blogHref} className="text-gray-300 hover:text-primary transition-colors">
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href={localHref} className="text-gray-300 hover:text-primary transition-colors">
                  {isEnglish ? "Software developer Krakow" : "Programista Kraków"}
                </Link>
              </li>
              <li>
                <Link href={contactHref} className="text-gray-300 hover:text-primary transition-colors">
                  {t.contactSection}
                </Link>
              </li>
              <li>
                <Link href={alternateHref} hrefLang={isEnglish ? "pl" : "en"} className="text-gray-300 hover:text-primary transition-colors">
                  {t.switchLang}
                </Link>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className="text-white font-bold mb-4">{t.contact}</h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="block text-gray-500 text-sm">{t.addressLabel}</span>
                <a
                  href="https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Rynek Główny 34/15<br />
                  31-010 Kraków
                </a>
              </p>
              <p>
                <span className="block text-gray-500 text-sm">{t.phoneLabel}</span>
                <a href="tel:+48516598792" className="hover:text-primary transition-colors">+48 516 598 792</a>
              </p>
              <p>
                <span className="block text-gray-500 text-sm">{t.emailLabel}</span>
                <a href="mailto:office@ml-devworks.com" className="hover:text-primary transition-colors">office@ml-devworks.com</a>
              </p>
            </div>
          </address>
        </div>

        <div className="mt-10 pt-6 border-t border-primary/10 text-gray-500 text-sm flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} ML DevWorks. {t.rights}</p>
          <p>Kraków, Poland</p>
        </div>
      </div>
    </footer>
  );
}
