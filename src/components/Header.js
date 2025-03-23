import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; 

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/challenges">Challenges</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
