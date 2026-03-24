import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Listem</Link>
      </div>
      <div 
        className="menu-icon" 
        onClick={() => setMenuOpen(!menuOpen)}   
      >
        {menuOpen ? "✕" : "☰"}
      </div>
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/Favourites" className="nav-link" onClick={() => setMenuOpen(false)}>
          Favourites
        </Link>
        <Link to="/Watchlist" className="nav-link" onClick={() => setMenuOpen(false)}>
          Watchlist
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;