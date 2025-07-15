import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import VideoBackground from './components/VideoBackground';
import Landing from './components/Landing'; // 👈 NEW
import CustomNav from './components/CustomNav';
import BlogList from './components/Go/BlogList';
import BlogDetail from './components/Go/BlogDetail';
import ContactForm from './components/Contactus/ContactForm';
import SuccessMessage from './components/Contactus/SuccessMessage';
import AboutUs from './components/Aboutus/AboutUs';
import TourPackages from './components/Tour package/TourPackages';

function AnimatedRoutes() {
  const location = useLocation();

  const hideNavbarOnPaths = ['/']; // 👈 Only hide on landing page
  const showNavbar = !hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <CustomNav />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} /> {/* 👈 New landing page */}
          <Route path="/intro" element={<VideoBackground />} /> {/* 👈 Video page */}
          <Route path="/home" element={<Home />} />
          <Route path="/packages" element={<TourPackages />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/success" element={<SuccessMessage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router basename="/Kerala-travel">
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
