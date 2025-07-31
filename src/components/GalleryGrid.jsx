import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GalleryGrid.css';

// ✅ Static gallery data using Vite's BASE_URL (images from public/images folder)
const galleryData = [
  { title: 'Beach Sunrise', src: `${import.meta.env.BASE_URL}galleryimages/484711.jpg` },
  { title: 'Mountain Trek', src: `${import.meta.env.BASE_URL}images/img2.jpg` },
  { title: 'Backwater Ride', src: `${import.meta.env.BASE_URL}images/img3.jpg` },
  { title: 'Temple Art', src: `${import.meta.env.BASE_URL}images/img4.jpg` },
  { title: 'Forest Walk', src: `${import.meta.env.BASE_URL}images/img5.jpg` },
  { title: 'City Lights', src: `${import.meta.env.BASE_URL}images/img6.jpg` },
];

const GalleryGrid = () => {
  return (
    <Container className="my-5">
      <Row>
        {galleryData.map((item, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <div className="image-container position-relative">
              <img
                src={item.src}
                alt={item.title}
                className="gallery-image"
              />
              <div className="overlay">
                <div className="overlay-text">{item.title}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryGrid;
