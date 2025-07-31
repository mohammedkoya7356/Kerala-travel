import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const About = () => {
  const [aboutData, setAboutData] = useState({
    heading: "Explore Kerala's Essence",
    paragraph: "Discover the soulful blend of beaches and hills that define Kerala's natural charm.",
    cards: [
      {
        title: "Tranquil Beaches",
    image: `${import.meta.env.BASE_URL}images/female-tourists.jpg`, // ✅ Updated path
      },
      {
        title: "Misty Hills",
    image: `${import.meta.env.BASE_URL}images/female-tourists.jpg`, // ✅ Updated path
      },
    ]
  });

  return (
    <div
      className="about-section"
      style={{
        backgroundImage: `url(${aboutData.backgroundImage})`,
      }}
    >
      <div className="overlay" />

      <Container style={{ zIndex: 1 }}>
        <Row>
          {/* Text Section */}
          <Col md={6} className="d-flex flex-column justify-content-center fade-in-up">
            <h1 className="display-4 fw-bold">{aboutData.heading}</h1>
            <p className="lead">{aboutData.paragraph}</p>
          </Col>

          {/* Cards Section */}
          <Col md={6}>
            <Row className="g-3 fade-in">
              {aboutData.cards.map((item, idx) => (
                <Col xs={12} sm={6} key={idx}>
                  <div className="card-wrapper">
                    <Card className="hover-card">
                      <Card.Img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="hover-image"
                      />
                      <Card.ImgOverlay className="d-flex align-items-end">
                        <Card.Title className="card-title-overlay">
                          {item.title}
                        </Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
