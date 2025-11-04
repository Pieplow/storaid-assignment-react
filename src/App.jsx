import React from "react";
import Header from './components/sections/Header';
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";
import Logo from "./components/sections/Logo";
import BookNow from "./components/sections/Book-now";
import OurServices from "./components/sections/OurServices";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Logo />
      <OurServices />
      <BookNow />
      <Footer />
      
    
    </>
  );
}

export default App;