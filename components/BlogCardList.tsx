import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import { ArrowRightIcon, ClockIcon } from "@/components/ui/icons";

interface BlogCardListProps {
  posts: BlogPost[];
  lang: "pl" | "en";
  /** Pierwszy wpis szerzej, jako wyróżniony. */
  featureFirst?: boolean;
}

export default function BlogCardList({ posts, lang, featureFirst = false }: BlogCardListProps) {
  if (posts.length === 0) {
    return (
      <div className="px-4 py-16 text-center">
        <p className="text-xl text-gray-400">{lang === "pl" ? "Wkrótce pojawią się tu nowe wpisy." : "New posts coming soon."}</p>
      </div>
    );
  }

  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 lg:grid-cols-3" role="list">
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} lang={lang} featured={featureFirst && index === 0} />
      ))}
    </ul>
  );
}

function BlogCard({ post, lang, featured }: { post: BlogPost; lang: "pl" | "en"; featured: boolean }) {
  const href = lang === "pl" ? `/blog/${post.slug}` : `/en/blog/${post.slugEn}`;
  const date = new Date(post.publishedAt).toLocaleDateString(lang === "pl" ? "pl-PL" : "en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <li className={featured ? "md:col-span-2" : ""}>
      <Link
        href={href}
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition duration-200 hover:-translate-y-0.5 ${
          featured
            ? "border-primary/30 bg-gradient-to-br from-primary/[0.10] via-white/[0.02] to-accent/[0.05] hover:border-primary/55"
            : "border-white/[0.08] bg-white/[0.025] hover:border-primary/35"
        }`}
      >
        <article className="flex h-full flex-col">
          {post.image && (
            <div className="aspect-video overflow-hidden">
              <Image
                src={post.image}
                alt={post.title[lang]}
                width={640}
                height={360}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div className={`flex h-full flex-col ${featured ? "p-7 md:p-9" : "p-6"}`}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
              {featured && <span className="rounded-full bg-primary px-2.5 py-0.5 font-semibold text-[#03140b]">{lang === "pl" ? "Najnowszy" : "Latest"}</span>}
              <time dateTime={post.publishedAt}>{date}</time>
              {post.readingTime && (
                <span className="flex items-center gap-1">
                  <ClockIcon size={13} />
                  {post.readingTime[lang]}
                </span>
              )}
            </div>
            <h2 className={`mt-3 font-sans font-semibold leading-snug text-white transition-colors group-hover:text-primary ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
              {post.title[lang]}
            </h2>
            <p className={`mt-3 leading-relaxed text-gray-400 ${featured ? "text-base md:text-lg" : "line-clamp-3 text-sm"}`}>{post.excerpt[lang]}</p>
            <span className="btn-link mt-auto pt-5 text-sm">
              {lang === "pl" ? "Czytaj" : "Read"}
              <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </article>
      </Link>
    </li>
  );
}
