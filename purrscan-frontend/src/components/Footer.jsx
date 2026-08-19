import "../styles/Footer.css";

import footerBg from "../assets/images/footer.svg";
import logo from "../assets/images/logo-icon.svg";

import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import whatsapp from "../assets/images/whatsapp.svg";

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-wrapper">
        <img src={footerBg} alt="" className="footer-bg" />

        <div className="footer-overlay">
          <img src={logo} alt="PurrScan" className="footer-logo" />

          <p className="footer-description">
            Detect common feline skin diseases from a single photo. View
            prediction confidence and learn about symptoms, treatments, and
            preventive care—all in one place.
          </p>

          <div className="footer-social-container">
            <h3>Hop on me :</h3>

            <div className="social-icons">
              <a
                href="https://github.com/gandul-jago"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/ghaniyasyifa05/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://wa.me/6285156062771"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
