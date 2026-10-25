/**
 * Blokada przewijania strony pod otwartym oknem lub menu.
 * Ustawiana na <html>, nie na <body>: overflow na body zmieniał układ strony (miganie przy otwieraniu),
 * a miejsce na pasek przewijania jest stale zarezerwowane w CSS (scrollbar-gutter), więc nic nie skacze w bok.
 * Zwraca funkcję zdejmującą blokadę (pasuje jako cleanup w useEffect).
 */
let locks = 0;

export function lockScroll() {
  locks += 1;
  document.documentElement.style.overflow = "hidden";

  return () => {
    locks = Math.max(0, locks - 1);
    if (locks === 0) document.documentElement.style.overflow = "";
  };
}
