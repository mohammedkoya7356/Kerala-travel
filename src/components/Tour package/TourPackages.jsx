import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./TourPackages.css";

const TourPackages = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    people: "",
  });

  // ✅ Static packages with local images
  const packages = [
    {
      key: "card1",
      title: "Beach Paradise",
      description: "Relax on golden sands with stunning ocean views.",
      price: "4999",
      image: "/src/assets/beautiful-paradise-island-with-beach-sea.jpg", // ✅ Make sure this file exists in public/assets/images
    },
    {
      key: "card2",
      title: "Hill Station Retreat",
      description: "Cool breeze, scenic hills, and peaceful escapes.",
      price: "5999",
      image: "/src/assets/female-tourists.jpg", // ✅ Make sure this file exists in public/assets/images
    },
  ];

  const handleBookClick = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPackage(null);
    setFormData({ name: "", phone: "", date: "", people: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Booking submitted (demo only)!");
    handleClose();
  };

  return (
    <div className="tour-packages-wrapper">
      {/* Hero Section */}
      <div className="tour-hero d-flex align-items-center justify-content-center text-white text-center">
        <div className="overlay"></div>
        <h1 className="display-4 fw-bold position-relative z-1">Explore Our Tour Packages</h1>
      </div>

      {/* Tour Cards */}
      <Container className="py-5">
        <Row className="g-4">
          {packages.map((pkg) => (
            <Col md={6} key={pkg.key}>
              <Card className="h-100 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  variant="top"
                  src={pkg.image}
                  alt={pkg.title}
                  style={{ height: "240px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{pkg.title}</Card.Title>
                  <Card.Text>{pkg.description}</Card.Text>
                  <h5 className="text-success fw-semibold">₹ {pkg.price}</h5>
                  <Button
                    onClick={() => handleBookClick(pkg)}
                    className="mt-auto btn btn-primary rounded-pill"
                  >
                    Book Now →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Booking */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book: {selectedPackage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Travel Date</Form.Label>
              <Form.Control
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>No. of People</Form.Label>
              <Form.Control
                required
                type="number"
                min="1"
                name="people"
                value={formData.people}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Confirm Booking
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </div>
  );
};

export default TourPackages;
