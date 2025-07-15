import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/about');
        setAboutData(res.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) return <p className="text-center text-white">Loading...</p>;

  const { paragraph, backgroundImage, cards } = aboutData;

  return (
    <div
      className="about-section"
      style={{
        backgroundImage: `url(http://localhost:5000${backgroundImage})`,
      }}
    >
      <div className="overlay" />

      <Container style={{ zIndex: 1 }}>
        <Row>
          {/* Paragraph & Heading */}
          <Col md={6} className="d-flex flex-column justify-content-center fade-in-up">
            <h1 className="display-4 fw-bold">{aboutData.heading}</h1>
            <p className="lead">{paragraph}</p>
          </Col>

          {/* Image Cards */}
          <Col md={6}>
            <Row className="g-3 fade-in">
              {cards?.map((item, idx) => (
                <Col xs={12} sm={6} key={idx}>
                  <div className="card-wrapper">
                    <Card className="hover-card">
                      <Card.Img
                        src={`http://localhost:5000${item.image}`}
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
