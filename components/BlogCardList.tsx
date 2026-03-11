"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

interface BlogCardListProps {
  posts: BlogPost[];
  lang: "pl" | "en";
}

export default function BlogCardList({ posts, lang }: BlogCardListProps) {
  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true, margin: "-50px" });

  if (posts.length === 0) {
    return (
      <motion.div
        ref={listRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-4"
      >
        <p className="text-xl text-gray-400">
          {lang === "pl"
            ? "Wkrótce pojawią się tu nowe wpisy. Zaglądaj regularnie!"
            : "New posts coming soon. Check back regularly!"}
        </p>
      </motion.div>
    );
  }

  return (
    <div
      ref={listRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      role="list"
    >
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} lang={lang} index={index} />
      ))}
    </div>
  );
}

function BlogCard({
  post,
  lang,
  index,
}: {
  post: BlogPost;
  lang: "pl" | "en";
  index: number;
}) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-80px" });
  const href = lang === "pl" ? `/blog/${post.slug}` : `/en/blog/${post.slug}`;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="bg-background-lighter border border-primary/20 rounded-xl overflow-hidden hover:border-primary/40 transition-colors duration-200 group"
      role="listitem"
    >
      <Link href={href} className="block h-full">
        {post.image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={post.image}
              alt={post.title[lang]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
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
      </Link>
    </motion.article>
  );
}
