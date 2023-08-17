// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./logo-w.svg";

import "./Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="My Logo" />
        </div>
        <div className="footer-links">
          <Link to="/about-us">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="footer-social">
          <Link to="https://www.facebook.com/" target="blank">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="https://www.twitter.com" target="blank">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="https://www.instagram.com/ " target="blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link to="https://www.Youtube.com" target="blank">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} FitHub App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
