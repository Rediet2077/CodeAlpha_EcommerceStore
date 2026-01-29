import React from 'react';
import './Footer.css'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Mercy Jawllary</h3>
          <p>Your trusted source for exquisite jewelry. We offer a wide range of beautifully crafted pieces for every occasion.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@mercyjawllary.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Jewelry Lane, Addis Ababa, Ethiopia</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Mercy Jawllary. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
