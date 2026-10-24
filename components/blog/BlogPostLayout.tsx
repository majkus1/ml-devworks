import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import { ArrowRightIcon, ClockIcon } from "@/components/ui/icons";
import type { BlogPost } from "@/lib/blog";

interface BlogPostLayoutProps {
  lang: "pl" | "en";
  post: BlogPost;
  content: ReactNode | null;
  related?: { title: string; href: string; label: string };
}

/** Układ artykułu: czytelna typografia, autor, FAQ, powiązana usługa i jedno wezwanie do działania. */
export default function BlogPostLayout({ lang, post, content, related }: BlogPostLayoutProps) {
  const isPl = lang === "pl";
  const date = new Date(post.publishedAt).toLocaleDateString(isPl ? "pl-PL" : "en-US", { year: "numeric", month: "long", day: "numeric" });
  const faq = post.faq?.[lang] ?? [];

  return (
    <>
      <article itemScope itemType="https://schema.org/BlogPosting">
        <header className="relative overflow-hidden pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -top-40 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
          </div>
          <div className="container-site relative pb-10 md:pb-14">
            <div className="mx-auto max-w-3xl">
              <Breadcrumbs
                className="mb-8"
                items={[
                  { label: isPl ? "Strona główna" : "Home", href: isPl ? "/" : "/en" },
                  { label: "Blog", href: isPl ? "/blog" : "/en/blog" },
                  { label: post.metaTitle?.[lang] ?? post.title[lang] },
                ]}
              />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                <time dateTime={post.publishedAt} itemProp="datePublished">
                  {date}
                </time>
                {post.readingTime && (
                  <span className="flex items-center gap-1.5">
                    <ClockIcon size={15} />
                    {post.readingTime[lang]}
                  </span>
                )}
              </div>
              <h1 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.1] tracking-tight text-white text-balance md:text-5xl" itemProp="headline">
                {post.title[lang]}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl" itemProp="description">
                {post.excerpt[lang]}
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/[0.07] pt-6" itemProp="author" itemScope itemType="https://schema.org/Person">
                <Image src="/ja-avatar.webp" alt="Michał Lipka" width={44} height={44} className="h-11 w-11 rounded-full border border-white/15 object-cover" />
                <div className="text-sm">
                  <p className="font-semibold text-white" itemProp="name">
                    Michał Lipka
                  </p>
                  <p className="text-gray-400">{isPl ? "Programista i analityk biznesowy, ML DevWorks" : "Developer and business analyst, ML DevWorks"}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container-site pb-6">
          <div className="prose-site mx-auto max-w-3xl [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:text-primary-light [&_a]:underline [&_h2]:mt-2 [&_h2]:font-display [&_h2]:tracking-tight [&_strong]:text-white">
            {content ?? <p>{post.excerpt[lang]}</p>}
          </div>

          {faq.length > 0 && (
            <section className="mx-auto mt-16 max-w-3xl" aria-labelledby="post-faq-heading">
              <h2 id="post-faq-heading" className="section-heading mb-6">
                {isPl ? "Najczęstsze pytania" : "Frequently asked questions"}
              </h2>
              <FaqAccordion items={faq} />
            </section>
          )}

          {related && (
            <aside className="mx-auto mt-12 max-w-3xl">
              <Link href={related.href} className="card-accent group flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">{isPl ? "Powiązana usługa" : "Related service"}</span>
                  <span className="mt-2 block font-display text-xl font-semibold text-white">{related.title}</span>
                </span>
                <span className="btn-secondary shrink-0 group-hover:border-primary/50">
                  {related.label}
                  <ArrowRightIcon size={16} />
                </span>
              </Link>
            </aside>
          )}
        </div>
      </article>

      <CtaBand lang={lang} />
    </>
  );
}
