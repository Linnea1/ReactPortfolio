import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Logo" className="nav-logo-img" />
        </Link>

        <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line className="line line-1" x1="4" y1="8" x2="20" y2="8"/>
            <line className="line line-2" x1="4" y1="16" x2="20" y2="16"/>
          </svg>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link nav-home ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={closeMenu}
              title="Home"
            >
              <svg width="24" height="24" viewBox="2 3 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={`nav-link nav-pink ${
                location.pathname === "/projects" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link nav-purple ${
                location.pathname === "/about" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link nav-yellow ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
