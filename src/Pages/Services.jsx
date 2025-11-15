import HeroSection from "../components/sections/HeroSection";
import OurServices from "../components/sections/OurServices";
import TestimonialSection from "../components/sections/TestimonialSection";
import BookNowSection from "../components/sections/Book-now";
import FAQ from "../components/sections/FAQSection";

export default function Services() {
  return (
    <>
      <HeroSection 
        title="Our Services"
        text="What we can help you with."
        label=""
        showButton={false}
        showImage={false} 
      />
      <OurServices />
      <TestimonialSection />
      <FAQ />
      <BookNowSection />
    </>
  );
}
