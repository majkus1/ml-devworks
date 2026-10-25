/**
 * Menu na telefonie: stan otwarcia trzyma atrybut <html data-menu="open">, a wygląd i animacje są w CSS (globals.css).
 *
 * Ten skrypt jest wstawiany wprost do HTML (app/layout.tsx), więc burger działa od pierwszej chwili —
 * także zanim wczytają się skrypty strony (na telefonie to 2–3 s, w których stuknięcia wcześniej czekały w kolejce).
 * Gdy Navbar się uruchomi, ustawia window.__mldNavReady i obsługę przejmuje React.
 */
export const MOBILE_MENU_BOOT_SCRIPT = `(function(){
  var root = document.documentElement;
  function onClick(e) {
    if (window.__mldNavReady) { document.removeEventListener("click", onClick, true); return; }
    var target = e.target;
    if (!target || !target.closest) return;
    var toggle = target.closest("[data-menu-toggle]");
    if (toggle) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var open = root.getAttribute("data-menu") !== "open";
      if (open) root.setAttribute("data-menu", "open"); else root.removeAttribute("data-menu");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    if (target.closest("[data-mobile-menu] a")) root.removeAttribute("data-menu");
  }
  document.addEventListener("click", onClick, true);
  // iPhone pokazuje stan :active (wciśnięcie przycisku) tylko, gdy strona nasłuchuje dotyku.
  document.addEventListener("touchstart", function () {}, { passive: true });
})();`;
