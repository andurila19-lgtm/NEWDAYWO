import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedPortfolio from "@/components/sections/FeaturedPortfolio";
import PackagesSection from "@/components/sections/PackagesSection";
import WhyNewdaySection from "@/components/sections/WhyNewdaySection";
import NewDayGalleryTeaser from "@/components/sections/NewDayGalleryTeaser";
import MasonryGallerySection from "@/components/sections/MasonryGallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* SECTION 01 — HERO */}
      <HeroSection />

      {/* SECTION 02 — INTRODUCTION */}
      <IntroSection />

      {/* SECTION 03 — SERVICES */}
      <ServicesSection />

      {/* SECTION 04 — FEATURED PORTFOLIO */}
      <FeaturedPortfolio />

      {/* SECTION 05 — PACKAGES */}
      <PackagesSection />

      {/* SECTION 06 — WHY NEWDAY */}
      <WhyNewdaySection />

      {/* SECTION 07 — NEW DAY GALLERY TEASER */}
      <NewDayGalleryTeaser />

      {/* SECTION 08 — GALLERY */}
      <MasonryGallerySection />

      {/* SECTION 09 — TESTIMONIAL */}
      <TestimonialsSection />

      {/* SECTION 10 — FAQ */}
      <FaqSection />

      {/* SECTION 11 — FINAL CTA */}
      <FinalCtaSection />
    </>
  );
}
