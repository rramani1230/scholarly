import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'info' });

    emailjs.sendForm(
      'Scholarly', 
      'template_y3zc3hj', 
      form.current,
      'kgT1EVAkzr1Q_gNo-' 
    )
      .then((result) => {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for personalized tutoring solutions</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>Santa Clara Location</h3>
            <p>1833 Garzoni Pl</p>
            <p>Santa Clara, CA</p>
            <p className="contact-number">(408) 806-8843</p>
          </div>
          
          <div className="info-item">
            <h3>San Francisco Location</h3>
            <p>388 Fulton St #513</p>
            <p>San Francisco, CA</p>
            <p className="contact-number">(650) 495-4958</p>
          </div>

          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday-Thursday: 6:00 PM - 9:00 PM</p>
            <p>Saturday-Sunday: 9:00 AM - 2:00 PM</p>
          </div>
          
          <div className="info-item">
            <h3>Email</h3>
            <p>info@scholarly.com</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
