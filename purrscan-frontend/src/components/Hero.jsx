import "../styles/Hero.css";
import heroImage from "../assets/images/human-cat.svg";

function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero-subtitle">Scan. Detect. Protect.</p>

      <h1 className="hero-title">
        Built for Early Detection,
        <br />
        Designed for Every Cat Owner
      </h1>

      <p className="hero-description">
        Upload a photo of your cat and receive a prediction for common skin
        diseases with confidence
      </p>

      <a href="#prediction" className="scan-btn">
        Scan Now
      </a>
      <img src={heroImage} alt="Cat Illustration" className="hero-image" />
    </section>
  );
}

export default Hero;
