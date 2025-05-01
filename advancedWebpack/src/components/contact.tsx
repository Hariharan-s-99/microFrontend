import React from 'react';


const Contact: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Contact Page</h2>
      <p>We'd love to hear from you! Get in touch using the form below.</p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your.email@example.com" />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} placeholder="How can we help you?"></textarea>
        </div>
        
        <button type="button" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;