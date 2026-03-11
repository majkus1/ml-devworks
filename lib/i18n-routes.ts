/**
 * Route mapping PL ↔ EN for language switcher.
 * Add new routes here when adding new pages.
 */
import { blogPosts } from "@/lib/blog";

const ROUTE_MAP: Record<string, string> = {
  "/": "/en",
  "/en": "/",
  "/blog": "/en/blog",
  "/en/blog": "/blog",
  "/uslugi/strony-internetowe": "/en/services/web-development",
  "/en/services/web-development": "/uslugi/strony-internetowe",
  "/uslugi/aplikacje-internetowe-i-mobilne": "/en/services/web-and-mobile-applications",
  "/en/services/web-and-mobile-applications": "/uslugi/aplikacje-internetowe-i-mobilne",
  "/uslugi/automatyzacja-i-ai": "/en/services/automation-and-ai",
  "/en/services/automation-and-ai": "/uslugi/automatyzacja-i-ai",
  "/uslugi/sklepy-internetowe-systemy-rezerwacji": "/en/services/online-stores-booking-systems",
  "/en/services/online-stores-booking-systems": "/uslugi/sklepy-internetowe-systemy-rezerwacji",
  "/uslugi/devops-wdrozenia": "/en/services/devops-deployment",
  "/en/services/devops-deployment": "/uslugi/devops-wdrozenia",
  "/uslugi/naprawa-optymalizacja-utrzymanie": "/en/services/fixes-optimization-maintenance",
  "/en/services/fixes-optimization-maintenance": "/uslugi/naprawa-optymalizacja-utrzymanie",
};

/**
 * Returns the equivalent path in the other language.
 * For dynamic routes (e.g. /blog/slug), maps the base and preserves the rest.
 */
export function getAlternateLangPath(currentPath: string): string {
  // Remove trailing slash for consistent matching
  const path = currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");

  // Exact match
  if (ROUTE_MAP[path]) {
    return ROUTE_MAP[path];
  }

  // Dynamic routes: /blog/[slug] ↔ /en/blog/[slug]
  if (path.startsWith("/blog/")) {
    const slug = path.slice(6); // everything after "/blog/"
    const post = blogPosts.find((entry) => entry.slug === slug);
    return post ? `/en/blog/${post.slugEn}` : `/en/blog/${slug}`;
  }
  if (path.startsWith("/en/blog/")) {
    const slug = path.slice(9); // everything after "/en/blog/"
    const post = blogPosts.find((entry) => entry.slugEn === slug || entry.slug === slug);
    return post ? `/blog/${post.slug}` : `/blog/${slug}`;
  }

  // Fallback to homepage
  return path.startsWith("/en") ? "/" : "/en";
}
