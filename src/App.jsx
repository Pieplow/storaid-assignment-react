import React from "react";
import Header from './components/sections/Header';
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";
import Logo from "./components/sections/Logo";
import BookNow from "./components/sections/Book-now";
import OurServices from "./components/sections/OurServices";
import PriceCards from "./components/sections/PriceCards";
import Newsletter from "./components/sections/Newsletter"; 
import ChooseUs from "./components/sections/ChooseUs";
import AboutUs from "./components/sections/AboutUs";
import FAQSection from "./components/sections/FAQSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import BlogSection from "./components/sections/BlogSection";
import ContactSection from "./components/sections/ContactSection";
import BookingSection from "./components/sections/BookingSection";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Logo />
      <OurServices />
      <TestimonialSection />
      <BookingSection />
      <ChooseUs />
      <FAQSection />
      <ContactSection />
      <PriceCards />
      <BookNow />
      <BlogSection />
      <Newsletter />
      <Footer />
      
    
    </>
  );
}

export default App;