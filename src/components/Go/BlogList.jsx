import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogList.css";
import Footer from "../Footer/Footer"; // Adjust the import path as necessary

const blogs = [
  {
    id: 1,
    title: "Exploring the Hills of Kerala",
    description: "Discover the beauty of Munnar's tea gardens and misty valleys.",
    img: "/src/assets/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand.jpg",
  },
  {
    id: 2,
    title: "Top 5 Beaches You Must Visit",
    description: "From Varkala to Kovalam, experience Kerala’s stunning coastline.",
    img: "/src/assets/manas-nandurkar-hXE58aEf3io-unsplash.jpg",
  },
  {
    id: 3,
    title: "Waterfall Wonders: Athirappilly and Beyond",
    description: "Experience the majestic waterfalls of Kerala, including the famous Athirappilly.",
    img: "/src/assets/Munnar-Waterfalls.png",
  },
  {
    id: 4,
    title: "Wildlife Adventures in Thekkady",
    description: "A journey into the Periyar forests with elephants and more.",
    img: "/src/assets/pexels-filip-olsok-261056-4003736.jpg",
  },
  {
    id: 5,
    title: "Spiritual Kerala: Temples and Culture",
    description: "Explore the divine energy of ancient shrines in Kerala.",
    img: "/src/assets/illuminated-pagoda-glows-ancient-east-asian-culture-generated-by-ai.jpg",
  },
  {
    id: 6,
    title: "Kerala Honeymoon Delight-Embracing the Rich Culture ",
    description: "Celebrate love in Kerala with romantic backwaters, lush landscapes, and vibrant traditions.",
    img: "/src/assets/pexels-asadphoto-3601366.jpg",
  }
];

const BlogList = () => {
  return (
    <div className="blog-list-wrapper">
      {/* Hero Banner like "About Us" */}
      <div className="hero-banner d-flex align-items-center justify-content-center text-white text-center">
        <div className="overlay"></div>
        <h1 className="display-4 fw-bold position-relative">Travel Blogs</h1>
      </div>

      <Container className="py-5 blog-section">
        <Row className="g-4">
          {blogs.map((blog, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <div className="blog-card shadow-sm rounded-4 overflow-hidden h-100">
                <img src={blog.img} alt={blog.title} className="blog-image w-100" />
                <div className="p-3 bg-white">
                  <h5 className="fw-bold">{blog.title}</h5>
                  <p className="text-muted">{blog.description}</p>
                  <Link to={`/blog/${blog.id}`} className="read-more text-primary fw-semibold">
                    Read More →
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
