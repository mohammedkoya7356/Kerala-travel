// src/components/Go/BlogDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./BlogDetail.css"; // Make sure this file exists in the same folder

const blogData = [
  {
    id: 1,
    title: "Munnar Hills – A Green Paradise in the Western Ghats",
    description:
      "Nestled in the Western Ghats, Munnar offers lush green tea plantations and misty mountains. A perfect getaway for nature lovers and honeymooners.",
    image: "/images/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand.jpg",
  },
  {
    id: 2,
    title: "Kerala Traditions – A Timeless Tapestry of Culture and Grace",
    description:
      "From the elegance of Kathakali to the grace of Mohiniyattam, Kerala’s cultural heritage is a vivid reflection of its soul. Discover its art, rituals, and traditions.",
    image: "/images/wp9616443-kerala-culture-wallpapers.jpg",
  },
  {
    id: 3,
    title: "Backwater Bliss – Alleppey and Kumarakom Houseboat Experience",
    description:
      "Cruise through Kerala’s serene backwaters on a traditional houseboat. Alleppey and Kumarakom offer a peaceful escape with scenic views and local flavors.",
    image: "/images/pexels-filip-olsok-261056-4003736.jpg",
  },
  {
    id: 4,
    title: "Wayanad – A Nature Lover’s Paradise",
    description:
      "Explore the lush forests, cascading waterfalls, and ancient caves of Wayanad. A hidden gem in Kerala that combines adventure with tranquility.",
    image: "/images/pexels-photo-460621.jpeg",
  },
  {
    id: 5,
    title: "Thekkady – Into the Wild Heart of Kerala",
    description:
      "Home to the Periyar Wildlife Sanctuary, Thekkady is a haven for wildlife enthusiasts. Enjoy bamboo rafting, spice plantation tours, and elephant sightings.",
    image: "/images/pexels-photo-1450353.jpeg",
  },
  {
    id: 6,
    title: "Varkala Cliffs – Where the Ocean Meets the Sky",
    description:
      "Varkala’s stunning cliffs overlook the Arabian Sea, offering breathtaking sunsets, beachside cafes, and a laid-back vibe perfect for soulful retreats.",
    image: "/images/varkala.jpg",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return (
      <Container className="blog-detail">
        <h2>Blog not found</h2>
        <Link to="/">Back to Home</Link>
      </Container>
    );
  }

  return (
    <>
      <Container className="blog-detail">
        <h2>{blog.title}</h2>
        <img src={blog.image} alt={blog.title} className="blog-image" />
        <p>{blog.description}</p>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default BlogDetail;
