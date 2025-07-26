import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import './GalleryGrid.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const blockOrder = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];

const GalleryGrid = () => {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/gallery`);

      const sorted = blockOrder.map((key) => {
        return res.data.find((item) => item.block === key) || {
          block: key,
          image: null,
          title: '',
        };
      });

      setBlocks(sorted);
    } catch (err) {
      console.error('❌ Failed to load gallery:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();

    const interval = setInterval(fetchGallery, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {loading && <p>Loading gallery...</p>}
        {!loading && blocks.length === 0 && (
          <p className="text-muted">No gallery images found.</p>
        )}
        {blocks.map((block, index) => (
          <Col key={block._id || `gallery-${index}`} sm={12} md={6} lg={4} className="mb-4">
            <div className="image-container position-relative">
              {block.image ? (
                <img
                  src={`${API_URL}/uploads/gallery/${block.image}`}
                  alt={block.title || 'Gallery Image'}
                  className="gallery-image"
                  onError={(e) => {
                    e.target.src = '/fallback-image.jpg'; // must exist in public folder
                  }}
                />
              ) : (
                <div
                  className="bg-light d-flex align-items-center justify-content-center"
                  style={{ height: '250px', color: '#999' }}
                >
                  No Image
                </div>
              )}
              <div className="overlay">
                <div className="overlay-text">{block.title || 'Untitled'}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryGrid;
