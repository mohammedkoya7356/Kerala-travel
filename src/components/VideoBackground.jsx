import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import PageWrapper from './PageWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoBackground = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
            filter: 'brightness(0.5)'
            
          }}
        >
          <source src="/Video/4120588-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Container className="d-flex flex-column justify-content-center align-items-center text-white h-100">
          <h1 className="mb-4" style={{fontFamily:"JetBrains Mono"}}>Welcome to Our Site</h1>
          <Button variant="light" onClick={() => navigate('/home')}  style={{fontFamily:"JetBrains Mono"}}>Get Started</Button>
        </Container>
      </div>
    </PageWrapper>
  );
};

export default VideoBackground;
