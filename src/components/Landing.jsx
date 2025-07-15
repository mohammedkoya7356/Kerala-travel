// src/components/Landing.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontFamily: 'JetBrains Mono' }}>Kerala Travel</h1>
      <Button variant="dark" onClick={() => navigate('/intro')} style={{ marginTop: '20px' }}>
        Get Started
      </Button>
    </div>
  );
};

export default Landing;
