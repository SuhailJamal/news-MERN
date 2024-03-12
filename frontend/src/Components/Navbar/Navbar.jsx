import { Link } from "react-router-dom";
import DailyGlobeIcon from "../../assets/White Grey Dark Blue Light Professional General News Logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={DailyGlobeIcon} alt="DailyGlobe" className="logo" />
        <h1 className="navbar-title">DailyGlobe</h1>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/politics">Politics</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-buttons">
        <Link to="/register">
          <button className="signin-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="signup-button">Log in</button>
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburgerIcon">
          <GiHamburgerMenu />
        </div>
        <div className={`menu ${menuOpen ? "menu-open" : "menu-closed"}`}>
          <ul className="menu-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/politics">Politics</Link>
            </li>
            <li>
              <Link to="/tech">Tech</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
