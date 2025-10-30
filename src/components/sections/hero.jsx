import 'bootstrap/dist/css/bootstrap.min.css';
import SectionText from "../../generics/SectionText";
import Button from "../../generics/Button";
import heroImage from "../../assets/hero-image.svg";

function Hero() {
  return (
    <header className="hero-section py-5 text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <SectionText
              title="Space Simplified, Storage Perfected"
              text="Providing a safe space for your treasured items with modern, flexible storage solutions."
            />
            <Button />
          </div>

        
        </div>
      </div>
    </header>
  );
}

export default Hero;