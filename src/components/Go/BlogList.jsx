import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./BlogList.css";

const blogData = [
  {
    id: 1,
    title: "Exploring Kerala Backwaters",
    description: "Discover the serene beauty of Alleppey and Kumarakom's iconic houseboat cruises.",
    image: `${import.meta.env.BASE_URL}images/backwaters.jpg`,
  },
  {
    id: 2,
    title: "Munnar Tea Plantation Magic",
    description: "Wander through lush green tea gardens and misty hills in Munnar.",
    image: `${import.meta.env.BASE_URL}images/munnar.jpg`,
  },
  {
    id: 3,
    title: "Wildlife Encounters in Thekkady",
    description: "Periyar Wildlife Sanctuary offers thrilling jungle experiences and boat safaris.",
    image: `${import.meta.env.BASE_URL}images/thekkady.jpg`,
  },
  {
    id: 4,
    title: "Cultural Vibes of Fort Kochi",
    description: "Walk through colonial streets, Chinese fishing nets, and rich heritage art.",
    image: `${import.meta.env.BASE_URL}images/fort-kochi.jpg`,
  },
  {
    id: 5,
    title: "Varkala Beach Cliff Views",
    description: "Experience sunsets from cliffs, beach yoga, and lively cafes in Varkala.",
    image: `${import.meta.env.BASE_URL}images/varkala.jpg`,
  },
  {
    id: 6,
    title: "Monsoon Treks in Wayanad",
    description: "Lush forests, waterfalls, and thrilling trails await in Wayanad hills.",
    image: `${import.meta.env.BASE_URL}images/wayanad.jpg`,
  },
];

const BlogList = () => {
  return (
    <div className="blog-list-wrapper">
      {/* Hero Banner */}
      <div className="hero-banner d-flex align-items-center justify-content-center text-white text-center">
        <div className="overlay"></div>
        <h1 className="display-4 fw-bold position-relative">Travel Blogs</h1>
      </div>

      {/* Blog Cards Section */}
      <Container className="py-5 blog-section">
        <Row className="g-4">
          {blogData.map((blog) => (
            <Col xs={12} sm={6} md={4} key={blog.id}>
              <div className="blog-card shadow-sm rounded-4 overflow-hidden h-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-image w-100"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                <div className="p-3 bg-white d-flex flex-column h-100">
                  <h5 className="fw-bold">{blog.title}</h5>
                  <p className="text-muted">{blog.description}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="read-full-blog mt-auto btn btn-dark btn-sm rounded-pill"
                  >
                    Read Full Blog →
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default BlogList;
