import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Make sure this file exists

const About = () => {
  const cards = [
    {
      title: 'Flowers and Plants',
      img: '/src/assets/bulbul-bird-perched-branch-with-red-flowers-with-blue-background.jpg',
    },
    {
      title: 'Kayaking and Canoeing',
      img: '/src/assets/pexels-yogendras31-16443131.jpg',
    },
  ];

  return (
    <div
      className="about-section"
    >
      <div className="overlay" />

      <Container style={{ zIndex: 1 }}>
        <Row>
          {/* Text */}
          <Col md={6} className="d-flex flex-column justify-content-center fade-in-up">
            <h1 className="display-4 fw-bold">Memories for a Lifetime</h1>
            <p className="lead">
              Here is a bouquet of unforgettable experiences Kerala offers: charming village life,
              thrilling treks, serene safaris, vibrant farms, unique cuisine, tranquil houseboats,
              and the magic of monsoon.
              <br />
              Each moment in Kerala is a story waiting to be told, a memory etched in time.
            </p>
          </Col>

          {/* Cards */}
          <Col md={6}>
            <Row className="g-3 fade-in">
              {cards.map((item, idx) => (
                <Col xs={12} sm={6} key={idx}>
                  <div className="card-wrapper">
                    <Card className="hover-card">
                      <Card.Img
                        src={item.img}
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
