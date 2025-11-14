import 'bootstrap/dist/css/bootstrap.min.css';
import SectionText from "../../generics/SectionText";
import Button from "../../generics/Button";
import heroImage from "../../assets/hero-image.svg";
import "./Hero.css";

function Hero({ label, title, text, showButton = true, showImage = true, className = "" }) {
  return (
    <header className={`hero-section ${className} pt-5 pb-0 text-white`}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-center text-md-start">
            <SectionText
              label={label}
              title={title}
              text={text}
            />

            {showButton && <Button label="Discover More" />}
          </div>

          {showImage && (
            <div className="col-auto text-center mt-5">
              <img
                src={heroImage}
                alt="Storage worker illustration"
                className="img-fluid"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Hero;
