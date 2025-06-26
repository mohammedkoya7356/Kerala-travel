import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import VideoBackground from './components/VideoBackground';
import NavbarWithSlidebar from './components/NavbarWithSlidebar';
import BlogList from './components/Go/BlogList';
import BlogDetail from './components/Go/BlogDetail';
import ContactForm from './components/Contactus/ContactForm';
import SuccessMessage from './components/Contactus/SuccessMessage';

function AnimatedRoutes() {
  const location = useLocation();
  const hideNavbarOnPaths = ['/']; // Hide navbar on landing page only
  const showNavbar = !hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <NavbarWithSlidebar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<VideoBackground />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactForm />} /> {/* ✅ Moved here */}
          <Route path="/success" element={<SuccessMessage />} />

        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
