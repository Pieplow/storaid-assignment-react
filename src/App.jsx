import SocialBar from "./components/layout/SocialBar.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/sections/Footer.jsx";
import Newsletter from "./components/sections/Newsletter.jsx";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";
import Booking from "./Pages/Booking.jsx";
import NotFound from "./Pages/NotFound.jsx";

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

      <Newsletter />
      <Footer />
    </>
  );
}