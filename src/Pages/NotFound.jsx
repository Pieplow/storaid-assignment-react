import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/HeroSection";

export default function Section404() {
  return (
    <>
      <Header />

      <Hero
        title="404 - Page Not Found"
        text="The page you're looking for doesn’t exist or has been moved."
        buttonLabel="Go Back Home"
        buttonLink="/"
        hideImage={true}   // <-- så du bara får text + knapp
      />

      <Footer />
    </>
  );
}
