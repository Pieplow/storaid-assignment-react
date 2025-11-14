import HeroSection from "../components/sections/HeroSection.jsx";
import AboutUs from "../components/sections/AboutUs";
import LogoSection from "../components/sections/Logo";

import TestimonialSection from "../components/sections/TestimonialSection";
import ChooseUs from "../components/sections/ChooseUs";
import "./About.css";

export default function About() {
  return (
    <>
      <HeroSection 
        title="About Us"
        label="Learn more about our mission."
        text=""
      />
      
        <AboutUs />
      
      <LogoSection />
       <TestimonialSection />
       <div style={{ backgroundColor: "white" }}>
      <ChooseUs />
      </div>

    </>
  );
}
