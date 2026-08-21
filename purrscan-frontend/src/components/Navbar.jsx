import "../styles/Navbar.css";
import LogoSvg from "../assets/images/logo-icon.svg?react";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <LogoSvg className="logo" aria-label="PurrScan" />
      </a>

      <nav>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#prediction">Prediction</a>
          </li>

          <li>
            <a href="#about">Tentang</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
