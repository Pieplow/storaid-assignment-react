import heroImg from "@/assets/hero-image.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionText from "../../generics/SectionText";
import Button from "../../generics/Button";
import './styles/global.css';


function Hero() {
  return (
    <header className="hero">
      <SectionText />
      <Button />
    </header>
  );
}

export default Hero;