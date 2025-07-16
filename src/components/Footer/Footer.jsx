import './Footer.css';
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-top">

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/packages">Tour Package</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="contact-info-list">
            <li>
              <FaPhoneAlt className="icon" />
              <a href="tel:+919539652060">+91 953 965 2060</a>
            </li>
            <li>
              <FaWhatsapp className="icon" />
              <a href="https://wa.me/7356393428" target="_blank" rel="noopener noreferrer">
                7356393428
              </a>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <a href="mailto:muhammadkoya04@gmail.com">muhammadkoya04@gmail.com</a>
            </li>
            <li>
              <FaMapMarkerAlt className="icon" />
              <span>Kochi, Kerala 682024</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Get in Touch</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://wa.me/7356393428" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon" />
            </a>
            <a href="https://www.instagram.com/koya.mhd_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>©2025 Glossy, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
