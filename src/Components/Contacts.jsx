import React from 'react'
import './Contacts.css';

const Contacts = () => {
  return (
         <section className="contact-section" id="contacts">
      <h2>Contact Us</h2>
      <p>We have 3 branches across Vatakara. Choose the one closest to you!</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>📍 Our Branches in Vatakara</h3>
          <ul>
            <li><strong>Town Branch:</strong> Near Bus Stand, Vatakara</li>
            <li><strong>Beach Side Branch:</strong> Vatakara Beach Road</li>
            <li><strong>Bypass Branch:</strong> NH Bypass, Vatakara</li>
          </ul>

          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>

          <h3>📧 Email</h3>
          <p>oxygengym@gmail.com</p>

          <h3>⏰ Working Hours</h3>
          <p>Monday – Saturday: 5:00 AM – 10:00 PM</p>
          <p style={{ color: '#ff4d4d' }}>Sunday: Closed</p>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </div>
      </div>
        <footer className="copyright-footer">
      <p>&copy; 2025 Oxygen Gym. All rights reserved.</p>
    </footer>
    </section>
    
  )
}

export default Contacts