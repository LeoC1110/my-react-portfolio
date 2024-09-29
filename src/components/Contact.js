//Contact, Ligeng Cai, 301286463, 9/28/2024 
import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
