/**
 * Przewijanie uruchomione kliknięciem (link do sekcji, przycisk) zamiast przez użytkownika:
 * górne menu ma być widoczne. Navbar nasłuchuje tego zdarzenia; chowa menu tylko przy ręcznym przewijaniu.
 */
export const HOLD_NAV_EVENT = "mld:hold-nav";

export function holdNavDuringScroll() {
  window.dispatchEvent(new Event(HOLD_NAV_EVENT));
}

/** Pozycja, przy której treść sekcji (bez jej górnego odstępu) zaczyna się tuż pod menu. */
function sectionScrollTop(el: HTMLElement) {
  const navHeight = document.querySelector<HTMLElement>("nav[role=navigation]")?.offsetHeight ?? 64;
  const gap = window.innerWidth >= 768 ? 24 : 16;
  const paddingTop = parseFloat(getComputedStyle(el).paddingTop) || 0;
  const top = el.getBoundingClientRect().top + window.scrollY + paddingTop - navHeight - gap;
  const maxTop = document.documentElement.scrollHeight - window.innerHeight;
  return Math.round(Math.max(0, Math.min(top, maxTop)));
}

/** Płynnie przewija do sekcji (id z „#” lub bez, albo element) z widocznym menu. */
export function scrollToSection(target: string | HTMLElement) {
  const el = typeof target === "string" ? document.getElementById(target.replace(/^#/, "")) : target;
  if (!el) return false;
  holdNavDuringScroll();
  window.scrollTo({ top: sectionScrollTop(el), behavior: "smooth" });
  return true;
}
