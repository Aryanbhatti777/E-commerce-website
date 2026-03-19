import React from "react";
import "../styles/home.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + About */}
        <div className="footer-section">
          <h2 className="footer-logo">ShopEase</h2>
          <p>
            Your one-stop shop for the latest trends in electronics, fashion, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/orders">Orders</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@shopease.com</p>
          <p>Phone: +91 8199866932</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;