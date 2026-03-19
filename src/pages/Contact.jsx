import React, { useState } from "react";
import "../styles/abct.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-tag">Contact Us</span>
          <h2>We’d Love to Hear From You</h2>
          <p>
            Have a question, feedback, or need help with your order? Fill out
            the form and our team will get back to you as soon as possible.
          </p>

          <div className="contact-details">
            <div className="contact-detail-box">
              <h3>Email</h3>
              <p>support@yourstore.com</p>
            </div>

            <div className="contact-detail-box">
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-detail-box">
              <h3>Address</h3>
              <p>Karnal, Haryana, India</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;