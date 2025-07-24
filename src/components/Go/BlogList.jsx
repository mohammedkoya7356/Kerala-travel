import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogList.css";
import Footer from "../Footer/Footer";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/api/blogs`);
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blog posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list-wrapper">
      {/* Hero Banner */}
      <div className="hero-banner d-flex align-items-center justify-content-center text-white text-center">
        <div className="overlay"></div>
        <h1 className="display-4 fw-bold position-relative">Travel Blogs</h1>
      </div>

      {/* Blog Cards Section */}
      <Container className="py-5 blog-section">
        {loading && (
          <div className="text-center my-4">
            <Spinner animation="border" variant="dark" />
          </div>
        )}

        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        <Row className="g-4">
          {!loading && !error && blogs.length === 0 && (
            <Col>
              <p className="text-center text-muted">No blogs found.</p>
            </Col>
          )}

          {blogs.map((blog) => (
            <Col xs={12} sm={6} md={4} key={blog._id}>
              <div className="blog-card shadow-sm rounded-4 overflow-hidden h-100">
                <img
                  src={`${BASE_URL}${blog.img}`}
                  alt={blog.title || "Blog Image"}
                  className="blog-image w-100"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/fallback.jpg";
                  }}
                />
                <div className="p-3 bg-white d-flex flex-column h-100">
                  <h5 className="fw-bold">{blog.title}</h5>
                  <p className="text-muted">{blog.description}</p>
                  <Link
                    to={`/blog/${blog._id}`}
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
