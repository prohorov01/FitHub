import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact bg-about">
      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? We'd love to hear from you. You can contact
        us using the information below or by filling out the contact form.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>info@FitHub.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+123 456 7890</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p> Fitness Street, New Your </p>
        </div>
      </div>
      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name:" />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email:"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your message"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
