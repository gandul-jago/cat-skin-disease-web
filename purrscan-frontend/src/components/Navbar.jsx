import "../styles/Navbar.css";
import logo from "../assets/images/logo-icon.svg";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <img src={logo} alt="PurrScan" className="logo" />
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
