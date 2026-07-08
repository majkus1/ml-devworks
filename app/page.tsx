import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Realizations from "@/components/Realizations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import AboutIntro from "@/components/AboutIntro";
import HomeFAQ from "@/components/HomeFAQ";

export const metadata: Metadata = {
  title: "Aplikacje dla firm, strony i automatyzacje AI | ML DevWorks",
  description: "Programista z Krakowa tworzy aplikacje dla firm, strony internetowe, systemy rezerwacji, integracje API/CRM i automatyzacje AI. Bezpośrednia współpraca.",
  alternates: {
    canonical: "https://ml-devworks.com",
    languages: {
      "pl": "https://ml-devworks.com",
      "en": "https://ml-devworks.com/en",
      "x-default": "https://ml-devworks.com",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <Hero />
        <AboutIntro />
        <Services />
        <Realizations />
        <HomeFAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

