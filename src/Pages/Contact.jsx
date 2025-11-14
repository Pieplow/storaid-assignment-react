import HeroSection from "../components/sections/HeroSection";
import ContactSection from "../components/sections/ContactSection"; 
import FAQ from "../components/sections/FAQSection";
import FindUsSection from "../components/sections/FindUsSection";

export default function Contact() {
  return (
    <>
      <HeroSection 
        Label="Contact Us"
        title="We’d love to hear from you."
        text=""
      />
      <ContactSection />
      <FindUsSection />
      <FAQ />
    </>
  );
}
