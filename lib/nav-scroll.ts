/**
 * Przewijanie uruchomione kliknięciem (link do sekcji, przycisk) zamiast przez użytkownika:
 * górne menu ma zostać widoczne do końca przewijania. Navbar nasłuchuje tego zdarzenia.
 */
export const HOLD_NAV_EVENT = "mld:hold-nav";

export function holdNavDuringScroll() {
  window.dispatchEvent(new Event(HOLD_NAV_EVENT));
}
