import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import MotionBackground from './MotionBackground';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoBackground = () => {
  const navigate = useNavigate();

  return (
    <MotionBackground>
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
  <source src={`${import.meta.env.BASE_URL}Video/13158951_1920_1080_60fps.mp4`} type="video/mp4" />


          Your browser does not support the video tag.
        </video>

        <Container className="d-flex flex-column justify-content-center align-items-center text-white h-100">
          <h1 className="mb-4" style={{fontFamily:"JetBrains Mono"}}>Welcome to Kerala</h1>
          <Button variant="light" onClick={() => navigate('/home')}  style={{fontFamily:"Cantarell"}}>Get Started</Button>
        </Container>
      </div>
    </MotionBackground>
  );
};

export default VideoBackground;
