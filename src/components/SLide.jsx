import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const SLide = () => {
  const slides = [
    {
      image: `${import.meta.env.BASE_URL}images/banner1.jpg`,
      heading: 'Explore the Beaches',
      subheading: 'Golden sands and stunning sunsets await you.',
    },
    {
      image: `${import.meta.env.BASE_URL}images/banner2.jpg`,
      heading: 'Hill Station Retreat',
      subheading: 'Breathe in the cool, refreshing mountain air.',
    },
    {
      image: `${import.meta.env.BASE_URL}images/banner3.jpg`,
      heading: 'Backwater Bliss',
      subheading: 'Cruise through the calm and scenic backwaters.',
    },
  ];

  return (
    <Carousel controls={false} indicators interval={3000} pause={false}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={`Slide ${index + 1}`}
            style={{ height: '95vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{slide.heading}</h3>
            <p>{slide.subheading}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SLide;
