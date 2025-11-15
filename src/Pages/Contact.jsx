import HeroSection from "../components/sections/HeroSection";
import ContactSection from "../components/sections/ContactSection"; 
import FAQ from "../components/sections/FAQSection";
import FindUsSection from "../components/sections/FindUsSection";

export default function Contact() {
  return (
    <>
      <HeroSection 
        label=""
        title="We’d love to hear from you."
        text="Contact Us"
        showButton={false}
        showImage={false} 

      />
      <ContactSection />
      <FindUsSection />
      <FAQ />
    </>
  );
}
