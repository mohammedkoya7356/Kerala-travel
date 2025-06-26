import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GalleryGrid.css'; // 🔁 Import the custom styles

const GalleryGrid = () => {
  const images = [
    {
      title: 'Mountain View',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'City Lights',
      img: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Beach Vibes',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Forest Walk',
      img: '/src/assets/sunny-tropical-landscape.jpg',
    },
    {
      title: 'Tracking and Safaris',
      img: '/src/assets/female-tourists.jpg',
    },
    {
      title: 'Kerala culture',
      img: '/src/assets/pexels-nandhukumar-27489411.jpg',
    },
  ];

  return (
    <Container className="my-5">
      
      <Row>
        {images.map((item, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <div className="image-container">
              <img
                src={item.img}
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
