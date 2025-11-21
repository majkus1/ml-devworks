# ML Devworks

Strona internetowa ML Devworks - profesjonalne rozwiązania cyfrowe.

## Technologie

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (animacje)
- Three.js (efekty 3D)

## Funkcjonalności

- ✅ Responsywna strona jednostronnicowa
- ✅ Wersje językowe: PL (domyślna) i EN (osobne pliki dla lepszego SEO)
- ✅ Nowoczesne animacje scrollowania (Framer Motion)
- ✅ Efekty 3D i interaktywne elementy (parallax, mouse tracking)
- ✅ Formularz kontaktowy z walidacją
- ✅ API endpoint dla formularza kontaktowego (`/api/contact`)
- ✅ Optymalizacja SEO (meta tags, structured data, sitemap, robots.txt)
- ✅ Ciemny motyw z zielonymi akcentami zgodnie z logo

## Instalacja

```bash
npm install
```

## Uruchomienie

```bash
npm run dev
```

Strona będzie dostępna pod adresem: http://localhost:3000

## Struktura

- `/` - Strona główna (PL)
- `/en` - Strona angielska
- `/components` - Komponenty React
- `/public` - Pliki statyczne (logo, obrazy)

## SEO

Strona jest zoptymalizowana pod SEO z:
- Meta tagami
- Structured data
- Canonical URLs
- Alternatywnymi wersjami językowymi
- Open Graph i Twitter Cards

## Formularz Kontaktowy

Formularz kontaktowy jest podłączony do endpointu `/api/contact`. Aby włączyć wysyłanie emaili:

1. Zainstaluj bibliotekę do wysyłania emaili (np. `resend`, `nodemailer`, `sendgrid`)
2. Edytuj `app/api/contact/route.ts`
3. Dodaj konfigurację serwisu emailowego
4. Ustaw zmienne środowiskowe w `.env.local`

## Kontakt

- Email: office@ml-devworks.com
- Telefon: +48 516 598 792

