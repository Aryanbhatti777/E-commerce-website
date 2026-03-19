import React from "react";
import "../styles/abct.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <span className="section-tag">About Us</span>
          <h2>Your Trusted Shopping Partner</h2>
          <p>
            Welcome to our store, where quality meets style and convenience.
            We bring you a wide range of products across categories so you can
            shop easily, securely, and confidently from one place.
          </p>
          <p>
            Our goal is to provide the best shopping experience with trending
            products, affordable prices, and smooth delivery service. We focus
            on customer satisfaction and making online shopping simple for
            everyone.
          </p>

          <div className="about-features">
            <div className="about-feature-card">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="about-feature-card">
              <h3>500+</h3>
              <p>Quality Products</p>
            </div>
            <div className="about-feature-card">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-box">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Premium quality products</li>
              <li>Modern and secure shopping experience</li>
              <li>Fast and reliable service</li>
              <li>Affordable prices for everyone</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;