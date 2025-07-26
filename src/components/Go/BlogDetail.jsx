import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer/Footer";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        setError("Blog not found");
        console.error("Blog fetch failed:", err);
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return (
      <div className="text-center py-5 bg-light">
        <h2 className="text-danger">{error}</h2>
        <p className="text-muted">Try a different blog or return to the blog list.</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-5 bg-light">
        <p>Loading blog...</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10}>
            <img
              src={`${BASE_URL}${blog.img}`}
              alt={blog.title}
              className="w-100 rounded mb-4"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <h1 className="fw-bold mb-3">{blog.title}</h1>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              {blog.description}
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default BlogDetail;
