import React, { useState } from 'react'
import './Navbar.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <nav className="navbar">
      <div className="logo-section">
        <video src='OXYGEN.mp4' autoPlay loop muted playsInline className="logo-video" />
        <h2 className="logo-text">OXYGEN GYM</h2>
      </div>

      <div className="menuicon" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Trainers">Trainers</a></li>
        <li><a href="/Contacts">Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar