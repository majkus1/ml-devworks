import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ml-devworks.com"),
  title: "ML Devworks - Quality by Us. Speed by AI.",
  description: "Tworzymy profesjonalne rozwiązania cyfrowe dla Twojego biznesu. Od prostych stron internetowych po zaawansowane aplikacje i wdrożenia w chmurze. Quality by Us. Speed by AI.",
  keywords: ["strony internetowe", "aplikacje webowe", "aplikacje mobilne", "sklepy internetowe", "devops", "wdrożenia w chmurze", "cloud deployment", "development"],
  authors: [{ name: "ML Devworks" }],
  creator: "ML Devworks",
  publisher: "ML Devworks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.ml-devworks.com",
    siteName: "ML Devworks",
    title: "ML Devworks - Quality by Us. Speed by AI.",
    description: "Tworzymy profesjonalne rozwiązania cyfrowe dla Twojego biznesu. Od prostych stron internetowych po zaawansowane aplikacje i wdrożenia w chmurze. Quality by Us. Speed by AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ML Devworks - Quality by Us. Speed by AI.",
    description: "Tworzymy profesjonalne rozwiązania cyfrowe dla Twojego biznesu. Od prostych stron internetowych po zaawansowane aplikacje i wdrożenia w chmurze. Quality by Us. Speed by AI.",
  },
  alternates: {
    canonical: "https://www.ml-devworks.com",
    languages: {
      "pl": "https://www.ml-devworks.com",
      "en": "https://www.ml-devworks.com/en",
    },
  },
  category: "Technology",
  classification: "Web Development Services",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#000000",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const lang = pathname.startsWith("/en") ? "en" : "pl";
  
  return (
    <html lang={lang} className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Google Consent Mode - musi być pierwszy, przed GTM i GA */}
        <Script
          id="google-consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRFR2ZQ8');`,
          }}
        />
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRFR2ZQ8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

