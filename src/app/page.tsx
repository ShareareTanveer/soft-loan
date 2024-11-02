import AboutPage from "./about/AboutPage";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import ServicesHomeSection from "@/components/Home/ServicesHomeSection";
import IndustrySection from "@/components/Home/IndustrySection";
import GraphSection from "@/components/Home/GraphSection";
import TutorialSection from "@/components/Home/TutorialSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import PartnerSection from "@/components/Home/PartnerSection";
import OfferSection from "@/components/Home/OfferSection";
import BlogSection from "@/components/Home/BlogSection";
import ReportSection from "@/components/Home/ReportSection";
import ProcessSection from "@/components/Home/ProcessSection";
import ToolSection from "@/components/Home/ToolSection";
import ContactSection from "@/components/Home/ContactSection";

export default function Home() {
  return (
    <>
      <div className="heroHome">
        <HeroSection />
      </div>
    <div className="container">
      <ServicesHomeSection />
      {/* <AboutPage /> */}
      <GraphSection />
      <IndustrySection />
      <ProcessSection />
      <ToolSection />
      <TutorialSection />
      <ReportSection />
      <TestimonialSection />
      <PartnerSection />
      <OfferSection />
      <BlogSection />
    </div>
      <ContactSection />
    </>
  );
}
