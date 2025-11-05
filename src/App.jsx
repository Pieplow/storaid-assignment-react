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

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Logo />
      <OurServices />
      <ChooseUs />
      <PriceCards />
      <BookNow />
      <Newsletter />
      <Footer />
      
    
    </>
  );
}

export default App;