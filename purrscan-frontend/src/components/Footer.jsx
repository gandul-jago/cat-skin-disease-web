import "../styles/Footer.css";

import FooterBgSvg from "../assets/images/footer.svg?react";
import LogoSvg from "../assets/images/logo-icon.svg?react";

import GithubSvg from "../assets/images/github.svg?react";
import LinkedinSvg from "../assets/images/linkedin.svg?react";
import WhatsappSvg from "../assets/images/whatsapp.svg?react";

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-wrapper">
        <FooterBgSvg className="footer-bg" aria-hidden="true" />

        <div className="footer-overlay">
          <LogoSvg className="footer-logo" aria-label="PurrScan" />

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
                aria-label="GitHub"
              >
                <GithubSvg />
              </a>

              <a
                href="https://www.linkedin.com/in/ghaniyasyifa05/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinSvg />
              </a>

              <a
                href="https://wa.me/6285156062771"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsappSvg />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
