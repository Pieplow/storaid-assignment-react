import React from "react";
import SocialBar from "../layout/SocialBar";
import Navbar from "../layout/Navbar";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <SocialBar />
      <Navbar />
    </header>
  );
}

export default Header;