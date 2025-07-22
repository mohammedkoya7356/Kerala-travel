import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNav from './components/CustomNav';
import SLide from './components/SLide';
import GalleryGrid from './components/GalleryGrid';
import About from './components/About';
import Footer from './components/Footer/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <CustomNav />
    <SLide />
    <GalleryGrid />
    <About />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; // ✅ This is the main component that should be rendered

