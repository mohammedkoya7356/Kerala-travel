import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNav from './components/CustomNav';
import SLide from './components/SLide';
import GalleryGrid from './components/GalleryGrid';
import About from './components/About';
import Footer from './components/Footer/Footer'; 


const Home = () => (
  <>
    <SLide />
    <GalleryGrid />
    <About />
    <Footer />
    <CustomNav />
  </>
);

const App = () => {
  return (
    <Router>

   
  <div style={{ paddingTop: '70px' }}>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  </div>
</Router>
  );
};

export default Home;
