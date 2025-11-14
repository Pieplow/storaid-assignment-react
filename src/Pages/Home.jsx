import HeroSection from "../components/sections/HeroSection";
import AboutUs from "../components/sections/AboutUs";

export default function Home() {
  return (
    <>
      <HeroSection 
        title="Space Simplified, Storage Perfected"
        subtitle="Modern storage solutions."
        
      />
      <AboutUs />
    </>
  );
}