import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";

export default function Section404() {
  return (
    <>
      <HeroSection
        title="404 - Page Not Found"
        text="The page you're looking for doesn’t exist or has been moved."
        buttonLabel="Go Back Home"
        buttonLink="/Home"  
        showImage={false}
      />
    </>
  );
}
