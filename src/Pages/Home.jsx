import HeroSection from "../components/sections/HeroSection";
import AboutUs from "../components/sections/AboutUs";
import LogoSection from "../components/sections/Logo";
import OurServices from "../components/sections/OurServices";
import TestimonialSection from "../components/sections/TestimonialSection";
import ChooseUs from "../components/sections/ChooseUs";
import PricingSection from "../components/sections/PriceCards";
import BookNowSection from "../components/sections/Book-now";
import BlogSection from "../components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection 
      className="home-hero"/>
      <AboutUs />
      <LogoSection />
      <OurServices />
      <TestimonialSection />
      <ChooseUs />
      <PricingSection />
      <BookNowSection />
      <BlogSection />

    </>
  );
}