import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer/Footer";

const blogData = [
  {
    id: "1",
    title: "Backwaters of Alleppey",
    description: "Explore the calm and scenic backwaters of Kerala in a traditional houseboat.",
    img: `${import.meta.env.BASE_URL}images/female-tourists.jpg`,
  },
  {
    id: "2",
    title: "Munnar Tea Hills",
    description: "Discover the lush green tea plantations of Munnar and their refreshing vibe.",
    img: `${import.meta.env.BASE_URL}images/female-tourists.jpg`,
  },
  {
    id: "3",
    title: "Wildlife at Thekkady",
    description: "Spot elephants and tigers at the Periyar Wildlife Sanctuary in Thekkady.",
    img: `${import.meta.env.BASE_URL}images/blog3.jpg`,
  },
  {
    id: "4",
    title: "Culture of Kochi",
    description: "Experience colonial charm and vibrant street art in Fort Kochi.",
    img: `${import.meta.env.BASE_URL}images/blog4.jpg`,
  },
  {
    id: "5",
    title: "Beaches of Varkala",
    description: "Relax at the scenic cliff-side beaches of Varkala with yoga and sunsets.",
    img: `${import.meta.env.BASE_URL}images/blog5.jpg`,
  },
  {
    id: "6",
    title: "Hill Escape to Wayanad",
    description: "Trek, explore caves, and breathe in the cool fresh air of Wayanad hills.",
    img: `${import.meta.env.BASE_URL}images/blog6.jpg`,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-5 bg-light">
        <h2 className="text-danger">Blog not found</h2>
        <p className="text-muted">Try a different blog or return to the blog list.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10}>
            <img
              src={blog.img}
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
