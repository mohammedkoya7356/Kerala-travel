import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarWithSlidebar from './components/NavbarWithSlidebar';
import ExampleCarouselImage from './components/ExampleCarouselImage';
import SLid from './components/SLid';
import GalleryGrid from './components/GalleryGrid';
import About from './components/About';
import Footer from './components/Footer/Footer'; // Adjust the import path as necessary


const Home = () => (
  <>
    <SLid />
    <ExampleCarouselImage />
    <GalleryGrid />
    <About />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
  <NavbarWithSlidebar />
  <div style={{ paddingTop: '70px' }}>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  </div>
</Router>
  );
};

export default Home;
