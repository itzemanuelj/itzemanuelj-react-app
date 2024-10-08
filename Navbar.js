// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const toggleNavbar = (event) => {
    event.preventDefault(); // Prevent default action
    const navbar = document.getElementById("myNavbar");
    if (navbar) {
      navbar.classList.toggle("responsive"); // Toggle the responsive class
    }
  };

  return (
    <div className="navbar" id="myNavbar">
      <a href="index.html">
        <img className="nav-img" src="/images/nav/home.png" alt="Home" height="25" width="25" /> Home
      </a>
      <a href="Certifications.html">
        <img className="nav-img" src="/images/nav/certs.png" alt="Certifications" height="25" width="25" /> Certifications
      </a>
      <a href="Blog.html">
        <img className="nav-img" src="/images/MagicEraser_240918_235551.PNG" alt="Blog" height="25" width="25" /> Blog
      </a>
      <a href="Projects.html">
        <img className="nav-img" src="/images/nav/projects.png" alt="Projects" height="25" width="25" /> Projects
      </a>
      <a href="Work Experience.html">
        <img className="nav-img" src="/images/nav/we.png" alt="Work Experience" height="25" width="25" /> Work Experience
      </a>
      <button className="icon" onClick={toggleNavbar} aria-label="Toggle Navigation">
        <img id="nav-icon" src="/images/nav/Hamburg.png" alt="Navigation Button" height="25" width="25" />
      </button>
    </div>
  );
};

export default Navbar;
