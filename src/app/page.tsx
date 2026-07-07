import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AccessoriesSection } from "@/components/sections/accessories-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { TimelineSection } from "@/components/sections/timeline-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <StatisticsSection />
        <ServicesSection />
        <AccessoriesSection />
        <WhyChooseUsSection />
        <TimelineSection />
        <GallerySection />
        <TestimonialsSection />
        <BrandsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
