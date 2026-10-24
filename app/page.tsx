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
import AiAssistantSection from "@/components/ai-assistant/AiAssistantSection";
import TrustBar from "@/components/TrustBar";
import AutomationExamplesSection from "@/components/AutomationExamplesSection";
import HomeProcess from "@/components/HomeProcess";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Automatyzacje AI dla firm i aplikacje na zamówienie | ML DevWorks",
  description: "Agenci AI, aplikacje i integracje dla małych i średnich firm. Działający prototyp w 2–5 dni za darmo, automatyzacje od 2 500 zł netto. Programista z Krakowa.",
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
        <TrustBar lang="pl" />
        <AutomationExamplesSection lang="pl" limit={6} moreHref="/uslugi/automatyzacja-i-ai" id="automatyzacje" showCta={false} />
        <AiAssistantSection lang="pl" showSteps={false} />
        <AboutIntro />
        <Services />
        <PricingSection lang="pl" />
        <Realizations />
        <HomeProcess lang="pl" />
        <HomeFAQ />
        <Contact compact />
      </main>
      <Footer />
    </>
  );
}

