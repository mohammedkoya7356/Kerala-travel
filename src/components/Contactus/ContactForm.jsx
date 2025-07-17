import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ContactForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Footer/Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
const response = await axios.post(
  'https://kerala-travel-2.onrender.com/api/contact',
  formData
);
      if (response.status === 201 || response.status === 200) {
        navigate('/success');
      } else {
        setError(' Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(' Contact form submission error:', err);
      setError(err.response?.data?.error || ' Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-hero">
        <div className="overlay">
          <div className="contact-heading">
            <h1>CONTACT US</h1>
            <p><span>Home</span> / <span className="active">Contact Us</span></p>
          </div>
        </div>
      </div>

      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-header">Get in Touch</div>
            <div className="contact-form">
              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Your Phone *</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact with Us</h3>

            <div className="contact-info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <strong>Phone</strong>
                <div>
                  <a className="info-blue" href="tel:+919539652060">+91 953 965 2060</a><br />
                  <a className="info-blue" href="tel:+919946166488">+91 994 616 6488</a>
                </div>
              </div>
            </div>

            <div className="contact-info-item">
              <i className="fab fa-whatsapp"></i>
              <div>
                <strong>WhatsApp</strong>
                <div>
                  <a className="info-blue" href="https://wa.me/7356393428" target="_blank" rel="noopener noreferrer">
                    7356393428
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <div>
                  <a href="mailto:muhammadkoya04@gmail.com?subject=Hello&body=Hi there">
                    muhammadkoya04@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Location</strong>
                <div>Kochi, Kerala 682024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0367377812945!2d75.77876647481231!3d11.258707788920917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b2db706f6c3%3A0x88e33c099158e5f6!2sTECHOLAS%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1750496447309!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0, width: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;
