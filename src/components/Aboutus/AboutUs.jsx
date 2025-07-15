import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <>
    
      <div className="about-hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
        </div>
      </div>

      
      <div className="about-content-section">
        <Container>
          <Section title="About Kerala">
            Kerala, often called "God’s Own Country", is a tropical paradise located on the southwestern coast of India.
            With its palm-lined beaches, misty hill stations, extensive backwaters, and rich biodiversity, Kerala attracts
            tourists from all over the world.
          </Section>

          <Section title="Culture & Traditions">
            Kerala is a land of deep-rooted cultural traditions. Dance forms like Kathakali and Mohiniyattam, art like Theyyam and Kalaripayattu,
            and the co-existence of various religions make Kerala a culturally vibrant destination.
          </Section>

          <Section title="Places to Visit">
            From the tea gardens of Munnar to Alleppey’s backwaters, from the wildlife of Thekkady to Fort Kochi’s colonial past—
            Kerala is filled with beauty and historical significance.
          </Section>

          <Section title="Backwaters of Kerala">
            Houseboat cruises through the tranquil backwaters of Alleppey and Kumarakom are a hallmark of Kerala tourism.
            These scenic waterways offer a peaceful glimpse into village life and nature.
          </Section>

          <Section title="Hill Stations & Tea Plantations">
            Munnar, Wayanad, and Vagamon are well-known hill stations with cool weather, tea estates, waterfalls, and trekking trails
            nestled in the Western Ghats.
          </Section>

          <Section title="Beaches of Kerala">
            Kerala's coastline boasts stunning beaches like Varkala, Kovalam, and Marari—ideal for sunbathing, surfing,
            and relaxing in beachside cafes or resorts.
          </Section>

          <Section title="Cuisine of Kerala">
            Kerala’s cuisine includes spicy, coconut-rich dishes like Kerala Sadya, Appam with stew, Karimeen Pollichathu,
            and Malabar Biryani—perfect for food lovers.
          </Section>

         

          <Section title="Adventure & Outdoor Activities">
            Kerala is perfect for soft adventures like trekking, bamboo rafting, paragliding, kayaking, and jungle safaris—ideal for thrill-seekers.
          </Section>

       
        </Container>
      </div>

      <Footer />
    </>
  );
};

const Section = ({ title, children }) => (
  <Row className="mb-5">
    <Col>
      <h3 className="fw-bold text-dark">{title}</h3>
      <p className="text-muted">{children}</p>
    </Col>
  </Row>
);

export default AboutUs;
