import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./ParallaxPage.css"; // We'll include hover & video styles here
import Footer from "./Footer/Footer"; // Import the Footer component


const ParallaxPage = () => {
  return (
    <>
      {/* Top Video Background Section */}
      <section className="position-relative overflow-hidden">
        <video autoPlay loop muted playsInline className="w-100 bg-video">
          <source src="/Video/13158951_1920_1080_60fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1 className="display-4 fw-bold bg-dark bg-opacity-50 p-3 rounded">
            Munnar: Nature's Embrace
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <Container className="py-5">
        {/* Section 1 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="fw-bold mb-3"> Munnar  Where the Clouds Come to Rest</h2>
            <p>
              Munnar, nestled in Kerala’s Western Ghats, is a serene hill station filled with misty hills, tea gardens, and the scent of fresh nature.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="/src/assets/pexels-manish-dhodi-1475001-12193834.jpg"
              fluid
              rounded
              className="hover-zoom"
              alt="Munnar Landscape"
            />
          </Col>
        </Row>

        {/* Section 2 */}
        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <h3 className="fw-bold">🏔️ The First Glimpse</h3>
            <p>
              As you drive into Munnar, winding roads unveil breathtaking valleys covered in rolling tea plantations and silver mist.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="/src/assets/pexels-manish-dhodi-1475001-12193834.jpg"
              fluid
              rounded
              className="hover-zoom"
              alt="Tea plantations"
            />
          </Col>
        </Row>

        {/* Section 3 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3 className="fw-bold">🍃 Tea Gardens & Timeless Views</h3>
            <p>
              Visit Kolukkumalai, the world’s highest tea plantation, and explore the Tata Tea Museum to feel the legacy brewed here.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="/src/assets/beautiful-paradise-island-with-beach-sea.jpg"
              fluid
              rounded
              className="hover-zoom"
              alt="Tea estate"
            />
          </Col>
        </Row>

        {/* Section 4 */}
        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <h3 className="fw-bold">🐐 Nature’s Treasures</h3>
            <p>
              Spot Nilgiri Tahr in Eravikulam National Park and trek to Anamudi, South India’s highest peak.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="/src/assets/pexels-manish-dhodi-1475001-12193834.jpg"
              fluid
              rounded
              className="hover-zoom"
              alt="Eravikulam Wildlife"
            />
          </Col>
        </Row>

        {/* Section 5 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3 className="fw-bold">💧 Rain, Mist, and Monsoon Dreams</h3>
            <p>
              Visit Munnar during monsoon and experience hills wrapped in mist, swollen rivers, and emerald forests.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="/src/assets/pexels-manish-dhodi-1475001-12193834.jpg"
              fluid
              rounded
              className="hover-zoom"
              alt="Monsoon View"
            />
          </Col>
        </Row>

        {/* Section 6 */}
        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <h3 className="fw-bold">🥘 A Taste of Kerala</h3>
            <p>
              Enjoy authentic dishes like Kerala parotta with beef fry, or appam with coconut stew from local eateries.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="/src/assets/beautiful-paradise-island-with-beach-sea.jpg"
              fluid
              rounded
              className="hover-zoom"
              alt="Kerala Cuisine"
            />
          </Col>
        </Row>

        {/* Section 7 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3 className="fw-bold">🌌 Where Time Slows Down</h3>
            <p style={{ fontSize: "1.2rem" , lineHeight: "1.6" , marginBottom: "1.5rem" ,fontFamily: "times new roman", fontWeight: "bold"}}>
              Munnar is where you pause, breathe, and reconnect—with nature and yourself.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="/src/assets/beautiful-paradise-island-with-beach-sea.jpg"
              fluid
              rounded
              className="hover-zoom"
              alt="Sunset View"
            />
          </Col>
        </Row>
      </Container>

         
              <Footer />
    </>
    
  );
};

export default ParallaxPage;

