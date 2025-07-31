import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GalleryGrid.css';

// ✅ Static gallery data using Vite's BASE_URL (images from public/images folder)
const galleryData = [
  { title: 'WaterFall', src: `${import.meta.env.BASE_URL}galleryimages/484711.jpg` },
  { title: 'Mountain Trek', src: `${import.meta.env.BASE_URL}images/top-mountain-with-trees.jpg` },
  { title: 'Backwater Ride', src: `${import.meta.env.BASE_URL}images/3840x2160-desktop-4k-kerala-background.jpg` },
  { title: 'Temple Art', src: `${import.meta.env.BASE_URL}images/illuminated-pagoda-glows-ancient-east-asian-culture-generated-by-ai.jpg` },
  { title: 'Forest Walk', src: `${import.meta.env.BASE_URL}images/WhatsApp Image 2024-10-02 at 9.41.33 AM.jpeg` },
  { title: 'The Blue', src: `${import.meta.env.BASE_URL}images/pexels-ravi-roshan-2875998-29520173.jpg` },
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
