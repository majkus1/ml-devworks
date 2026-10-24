import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Realizations from "@/components/Realizations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import AboutIntro from "@/components/AboutIntro";
import PricingSection from "@/components/PricingSection";
import HomeFAQ from "@/components/HomeFAQ";
import AiAssistantSection from "@/components/ai-assistant/AiAssistantSection";
import TrustBar from "@/components/TrustBar";
import AutomationExamplesSection from "@/components/AutomationExamplesSection";
import HomeProcess from "@/components/HomeProcess";

export const metadata: Metadata = {
  title: "Web Development & AI Automation for Businesses | ML DevWorks",
  description: "Web development, business apps, and AI automation for small and mid-sized companies. A free working prototype in 2–5 days. Developer based in Krakow, Poland.",
  alternates: {
    canonical: "https://ml-devworks.com/en",
    languages: {
      "pl": "https://ml-devworks.com",
      "en": "https://ml-devworks.com/en",
      "x-default": "https://ml-devworks.com",
    },
  },
};

export default function EnglishPage() {
  return (
    <>
      <StructuredData lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <Hero lang="en" />
        <TrustBar lang="en" />
        <AutomationExamplesSection lang="en" limit={6} moreHref="/en/services/automation-and-ai" id="automatyzacje" showCta={false} />
        <AiAssistantSection lang="en" showSteps={false} />
        <AboutIntro lang="en" />
        <Services lang="en" />
        <PricingSection lang="en" />
        <Realizations lang="en" />
        <HomeProcess lang="en" />
        <HomeFAQ lang="en" />
        <Contact lang="en" compact />
      </main>
      <Footer lang="en" />
    </>
  );
}

