import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SLide = () => {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const API_URL = `${import.meta.env.VITE_API_URL}/api/banner`;

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(API_URL);
        const allSlides = [];

        res.data.forEach((banner) => {
          ['img1', 'img2', 'img3'].forEach((key) => {
            const block = banner?.[key];
            if (block && typeof block === 'object' && block.image) {
              allSlides.push({
                image: `${import.meta.env.VITE_API_URL}/${block.image.replace(/\\/g, '/')}`,
                heading: block.heading || '',
                subheading: block.subheading || '',
              });
            }
          });
        });

        setSlides(allSlides);
      } catch (err) {
        console.error('❌ Failed to load banners:', err);
        setError('Failed to load banner slides.');
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, [API_URL]);

  if (loading) {
    return <div className="text-center mt-4 text-muted">Loading banners...</div>;
  }

  if (error) {
    return <div className="text-center text-danger mt-4">{error}</div>;
  }

  if (slides.length === 0) {
    return <div className="text-center mt-4 text-muted">No banners to display.</div>;
  }

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
