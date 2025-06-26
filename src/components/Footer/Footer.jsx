import './Footer.css';
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

      {/* 🔳 Main Footer Content */}
      <div className="footer-top">
        {/* Download Links */}
        <div className="footer-col">
          <h4>Quick links</h4>
       <ul>
  <li><a href="#">About us</a></li>
  <li><a href="#">Privacy Policy</a></li>
  <li><a href="#">Tour packages</a></li>
  <li><a href="#">Blogs</a></li>
</ul>

        </div>

        {/* Contact Info */}
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

        {/* Social Icons */}
        <div className="footer-col">
          <h4>Get in touch</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaWhatsapp />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* ⬇️ Footer Bottom */}
      <div className="footer-bottom">
        <p>©2025 Glossy, All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
