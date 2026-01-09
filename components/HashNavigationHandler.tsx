"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function HashNavigationHandler() {
  const pathname = usePathname();
  const hasScrolledRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window === "undefined") return;

    // Reset scroll flag when pathname changes
    hasScrolledRef.current = false;

    const handleHashNavigation = () => {
      const hash = window.location.hash;
      const currentPath = window.location.pathname;
      const isHomePage = currentPath === "/" || currentPath === "/en";

      if (hash && isHomePage && !hasScrolledRef.current) {
        hasScrolledRef.current = true;

        // Disable smooth scroll temporarily
        const html = document.documentElement;
        const body = document.body;
        const originalHtmlScrollBehavior = html.style.scrollBehavior;
        const originalBodyScrollBehavior = body.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        body.style.scrollBehavior = "auto";

        // Force scroll to top immediately - multiple times to ensure it sticks
        window.scrollTo(0, 0);
        setTimeout(() => window.scrollTo(0, 0), 0);
        setTimeout(() => window.scrollTo(0, 0), 10);
        setTimeout(() => window.scrollTo(0, 0), 50);
        setTimeout(() => window.scrollTo(0, 0), 100);

        // Wait for page to fully load and animations to start
        const scrollToHash = () => {
          const targetId = hash.substring(1);
          
          // Only scroll to contact, not to reviews
          if (targetId !== "contact") {
            // Restore scroll behavior
            html.style.scrollBehavior = originalHtmlScrollBehavior || "";
            body.style.scrollBehavior = originalBodyScrollBehavior || "";
            return false;
          }

          const element = document.getElementById(targetId);

          // Double check that we found the right element
          if (element && element.id === targetId) {
            // Ensure we're still at top before scrolling
            window.scrollTo(0, 0);

            // Wait a tiny bit to ensure scroll to top completed
            setTimeout(() => {
              const navbarHeight = 80;
              const offset = navbarHeight + 20; // 100px total offset
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;

              // Re-enable smooth scroll before scrolling
              html.style.scrollBehavior = originalHtmlScrollBehavior || "";
              body.style.scrollBehavior = originalBodyScrollBehavior || "";

              window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: "smooth",
              });
            }, 100);
            return true; // Element found and scrolled
          }
          return false; // Element not found yet
        };

        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Watch for DOM changes (e.g., when reviews section loads)
        const realizationsSection = document.getElementById("realizations");
        let observer: MutationObserver | null = null;
        
        if (realizationsSection && hash === "#contact") {
          observer = new MutationObserver(() => {
            // If we're targeting contact and reviews section just appeared, re-scroll
            const reviewsElement = document.getElementById("client-reviews");
            if (reviewsElement && reviewsElement.offsetHeight > 400) {
              // Reviews section appeared with content, re-scroll to contact
              setTimeout(() => {
                const contactElement = document.getElementById("contact");
                if (contactElement) {
                  const navbarHeight = 80;
                  const offset = navbarHeight + 20;
                  const elementPosition = contactElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;

                  html.style.scrollBehavior = originalHtmlScrollBehavior || "";
                  body.style.scrollBehavior = originalBodyScrollBehavior || "";

                  window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: "smooth",
                  });
                }
              }, 100);
            }
          });

          // Store observer reference for cleanup
          (realizationsSection as any).__hashObserver = observer;

          observer.observe(realizationsSection, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["style", "class"],
          });
        }

        // Try after a delay to let page load
        scrollTimeoutRef.current = setTimeout(() => {
          if (scrollToHash()) {
            // Restore scroll behavior
            html.style.scrollBehavior = originalHtmlScrollBehavior || "";
            body.style.scrollBehavior = originalBodyScrollBehavior || "";
            // Keep observer running to handle late-loading content
            if (observer) {
              setTimeout(() => {
                observer?.disconnect();
              }, 5000);
            }
            return;
          }

          // Retry after a short delay (for animations to initialize)
          const timeout1 = setTimeout(() => {
            if (scrollToHash()) {
              html.style.scrollBehavior = originalHtmlScrollBehavior || "";
              body.style.scrollBehavior = originalBodyScrollBehavior || "";
              if (observer) {
                setTimeout(() => {
                  observer?.disconnect();
                }, 5000);
              }
              return;
            }

            // Retry again after longer delay (for lazy-loaded content)
            const timeout2 = setTimeout(() => {
              if (scrollToHash()) {
                html.style.scrollBehavior = originalHtmlScrollBehavior || "";
                body.style.scrollBehavior = originalBodyScrollBehavior || "";
                if (observer) {
                  setTimeout(() => {
                    observer?.disconnect();
                  }, 5000);
                }
                return;
              }
              // Restore scroll behavior even if element not found
              html.style.scrollBehavior = originalHtmlScrollBehavior || "";
              body.style.scrollBehavior = originalBodyScrollBehavior || "";
              if (observer) {
                observer.disconnect();
              }
            }, 2000);

            return () => clearTimeout(timeout2);
          }, 800);

          return () => {
            clearTimeout(timeout1);
            if (observer) {
              observer.disconnect();
            }
          };
        }, 200);
      }
    };

    // Check for pending hash from beforeInteractive script
    const pendingHash = (window as any).__pendingHash;
    if (pendingHash) {
      (window as any).__pendingHash = null;
      // Restore hash in URL
      if (window.history.replaceState) {
        window.history.replaceState(null, "", pendingHash);
      }
      // Handle navigation with pending hash
      setTimeout(() => {
        window.location.hash = pendingHash;
        handleHashNavigation();
      }, 0);
    } else {
      // Run on mount and when pathname changes
      handleHashNavigation();
    }

    // Also listen for hashchange events (when navigating from subpage)
    const handleHashChange = () => {
      hasScrolledRef.current = false;
      handleHashNavigation();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Cleanup any observers
      const realizationsSection = document.getElementById("realizations");
      if (realizationsSection) {
        const observer = (realizationsSection as any).__hashObserver;
        if (observer) {
          observer.disconnect();
          delete (realizationsSection as any).__hashObserver;
        }
      }
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}

