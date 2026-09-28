import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

interface BlogCardListProps {
  posts: BlogPost[];
  lang: "pl" | "en";
}

export default function BlogCardList({ posts, lang }: BlogCardListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <p className="text-xl text-gray-400">
          {lang === "pl"
            ? "Wkrótce pojawią się tu nowe wpisy. Zaglądaj regularnie!"
            : "New posts coming soon. Check back regularly!"}
        </p>
      </div>
    );
  }

  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0"
      role="list"
    >
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} lang={lang} />
      ))}
    </ul>
  );
}

function BlogCard({
  post,
  lang,
}: {
  post: BlogPost;
  lang: "pl" | "en";
}) {
  const href = lang === "pl" ? `/blog/${post.slug}` : `/en/blog/${post.slugEn}`;

  return (
    <li className="bg-background-lighter border border-primary/20 rounded-xl overflow-hidden hover:border-primary/40 transition-[transform,border-color] duration-200 hover:-translate-y-1 group">
      <Link href={href} className="block h-full">
        <article>
          {post.image && (
            <div className="aspect-video overflow-hidden">
              <Image
                src={post.image}
                alt={post.title[lang]}
                width={640}
                height={360}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6">
            <time
              dateTime={post.publishedAt}
              className="text-sm text-primary/80 font-medium block mb-2"
            >
              {new Date(post.publishedAt).toLocaleDateString(
                lang === "pl" ? "pl-PL" : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </time>
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title[lang]}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {post.excerpt[lang]}
            </p>
            {post.readingTime && (
              <span className="text-xs text-gray-500 mt-2 inline-block">
                {post.readingTime[lang]}
              </span>
            )}
          </div>
        </article>
      </Link>
    </li>
  );
}
