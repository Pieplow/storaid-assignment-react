import HeroSection from "../components/sections/HeroSection";
import ChooseUs from "../components/sections/ChooseUs";
import BookingSection from "../components/sections/BookingSection";
import FAQ from "../components/sections/FAQSection";
import BookNowSection from "../components/sections/Book-now";

export default function Booking() {
  return (
    <>
      <HeroSection 
        title="Book Your Storage"
        subtitle="Fast and simple booking."
        showButton={false}
        showImage={false} 
      />
      <BookingSection />
      <ChooseUs />
      <BookNowSection />
      <FAQ />

    </>
  );
}
