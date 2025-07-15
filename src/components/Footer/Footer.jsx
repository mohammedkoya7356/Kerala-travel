import './Footer.css';
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="modern-footer">
    
      <div className="footer-logo-center" >
        <img 
          
          src="/src/assets/logobg.png"
          alt="Kerala Travel Logo"
          className="footer-logo"
        />
      </div>

      
      <div className="footer-top">
    
        <div className="footer-col">
          <h4>Quick links</h4>
      <ul>
  <li><Link to="/about">About us</Link></li>
  <li><Link to="/blog">Blogs</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>
  <li> <Link to="/packages">Tour Package</Link></li>
</ul>

        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-info-list">
            <li>
              <FaPhoneAlt className="icon" />
              <div>
                <a href="tel:+919539652060">+91 953 965 2060</a>
              </div>
            </li>
            <li>
              <FaWhatsapp className="icon" />
              <a href="https://wa.me/7356393428" target="_blank" rel="noopener noreferrer">
                7356393428
              </a>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <a href="mailto:muhammadkoya04@gmail.com?subject=Hello&body=Hi there">
                muhammadkoya04@gmail.com
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="icon" />
              <span>Kochi, Kerala 682024</span>
            </li>
          </ul>
        </div>
        <div className="footer-col text-center">
          <h4>Get in touch</h4>
 
<div className="social-icons centered-icons">
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="icon" />
  </a>
  <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="icon" />
  </a>
  <a href="https://wa.me/7356393428" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp className="icon" />
  </a>
  <a href="https://www.instagram.com/koya.mhd_/?hl=en" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="icon" />
  </a>
</div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>©2025 Glossy, All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
