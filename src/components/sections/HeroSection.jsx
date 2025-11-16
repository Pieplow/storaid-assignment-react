import "bootstrap/dist/css/bootstrap.min.css";
import SectionText from "../../generics/SectionText";
import Button from "../../generics/Button";
import heroImage from "../../assets/hero-image.svg";
import "./Hero.css";

function HeroSection({
  label,
  title = "Space Simplified, Storage Perfected",
  text = "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, corrupti! Est, corrupti laboriosam. Perferendis provident autem amet quia voluptatum dolores suscipit, necessitatibus officia! Necessitatibus suscipit vel sed impedit tempore possimus. ",
  subtitle,               // stöd för både text och subtitle
  buttonLabel = "Discover More",
  showButton = true,
  showImage = true,
  className = "",
}) {
  const bodyText = text ?? subtitle ?? "";

  return (
    <header className={`hero-section ${className} pt-5 pb-0 text-white`}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* VÄNSTER KOLONN – SAMMA SOM DIN ORIGINELLA LAYOUT */}
          <div className="col-md-6 text-center text-md-start">
            <SectionText label={label} title={title} text={bodyText} />
            {showButton && <Button label={buttonLabel} className="btn-hover-dark" />}
          </div>

          {/* HÖGER KOLONN – FINNS ALLTID, BILDEN ÄR VALFRI */}
          <div className="col-auto text-center mt-5">
            {showImage && (
              <img
                src={heroImage}
                alt="Storage worker illustration"
                className="img-fluid"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
