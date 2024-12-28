import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>TRSBILL is your trusted destination for online sports betting, providing premium odds and an extensive range of sports markets. Experience secure and responsible gaming with us.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/responsible-gaming">Responsible Gaming</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">24/7 Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Popular Sports</h4>
          <ul>
            <li><a href="/sports/cricket">Cricket</a></li>
            <li><a href="/sports/football">Football</a></li>
            <li><a href="/sports/tennis">Tennis</a></li>
            <li><a href="/sports/basketball">Basketball</a></li>
            <li><a href="/sports/all">View All Sports</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-icon" aria-label="Telegram"><FaTelegram /></a>
            <a href="#" className="social-icon" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
          <div className="contact-info">
            <p>Email: support@trsbill.com</p>
            <p>24/7 Support Available</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} TRSBILL. All rights reserved.</p>
          <div className="footer-legal">
            <p>18+ | Gamble Responsibly</p>
            <p>Licensed & Regulated</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
