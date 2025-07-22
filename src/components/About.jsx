import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

// ✅ Use VITE_BACKEND_URL from .env
const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/about`);
        setAboutData(res.data);
      } catch (err) {
        console.error('Error fetching about data:', err);
        setError('Failed to load About section.');
      }
    };

    fetchAboutData();
  }, []);

  if (error) return <p className="text-danger text-center mt-4">{error}</p>;
  if (!aboutData) return <p className="text-center text-white mt-4">Loading...</p>;

  const {
    heading = 'About Us',
    paragraph = 'No description available.',
    backgroundImage = '',
    cards = [],
  } = aboutData;

  return (
    <div
      className="about-section"
      style={{
        backgroundImage: `url(${BASE_URL}${backgroundImage})`,
      }}
    >
      <div className="overlay" />

      <Container style={{ zIndex: 1 }}>
        <Row>
          {/* Text Section */}
          <Col md={6} className="d-flex flex-column justify-content-center fade-in-up">
            <h1 className="display-4 fw-bold">{heading}</h1>
            <p className="lead">{paragraph}</p>
          </Col>

          {/* Cards Section */}
          <Col md={6}>
            <Row className="g-3 fade-in">
              {cards.length > 0 ? (
                cards.map((item, idx) => (
                  <Col xs={12} sm={6} key={idx}>
                    <div className="card-wrapper">
                      <Card className="hover-card">
                        <Card.Img
                          src={`${BASE_URL}${item.image}`}
                          alt={item.title}
                          loading="lazy"
                          className="hover-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/fallback.jpg';
                          }}
                        />
                        <Card.ImgOverlay className="d-flex align-items-end">
                          <Card.Title className="card-title-overlay">
                            {item.title}
                          </Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    </div>
                  </Col>
                ))
              ) : (
                <p className="text-muted">No image cards available.</p>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
