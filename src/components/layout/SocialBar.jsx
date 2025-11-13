import SocialBar from "./components/layout/SocialBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <>
      <SocialBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
