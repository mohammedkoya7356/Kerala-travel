import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./BlogList.css";
const blogData = [
  {
    id: 1,
    title: "Munnar Hills – A Green Paradise in the Western Ghats",
    description:
      "Munnar is a breathtaking highland escape nestled in the heart of Kerala’s Western Ghats. Blanketed with miles of emerald tea gardens, mist-covered valleys, and cool, fragrant mountain air, Munnar offers an experience like no other. Visitors are enchanted by winding roads, colonial-era bungalows, cascading waterfalls, and panoramic viewpoints. Whether you're sipping fresh tea at a plantation, hiking through forested trails, or watching the sunrise at Top Station, Munnar promises a serene and soul-soothing retreat far from the chaos of urban life.",
    image: `${import.meta.env.BASE_URL}images/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand.jpg`,
    
  },
  {
    id: 2,
    title: "Kerala Traditions – A Timeless Tapestry of Culture and Grace",
    description:
      "Kerala is not just a destination; it's a living heritage of timeless rituals, spiritual devotion, and colorful celebrations. From the hypnotic movements of Kathakali and Mohiniyattam to the vibrant Onam festival and the peaceful rhythms of temple music, Kerala’s culture pulses through its people and streets. Visitors can explore centuries-old temples, watch artisans craft intricate gold jewelry and coir products, or enjoy an authentic Sadhya served on banana leaves. The blend of Dravidian, colonial, and local traditions gives Kerala a cultural richness that's both captivating and deeply spiritual.",
    image: `${import.meta.env.BASE_URL}images/wp9616443-kerala-culture-wallpapers.jpg`,
  },
  {
    id: 3,
    title: "Kerala and the Sea – Where Land Meets Timeless Blue",
    description:
      "Kerala’s coastline stretches along the Arabian Sea like a soft silk ribbon, adorned with sun-kissed beaches, coconut palms, and fishing hamlets that live in rhythm with the tides. Destinations like Kovalam, Marari, and Cherai offer not just stunning sunsets but also a glimpse into coastal life where traditions meet tropical beauty. Watch fishermen cast Chinese fishing nets, savor freshly caught seafood grilled to perfection, or relax in beachside resorts with Ayurvedic treatments and ocean breezes. Here, the sea is more than scenery — it's a way of life.",
    image: `${import.meta.env.BASE_URL}images/pexels-asadphoto-3601366.jpg`,
  },
  {
    id: 4,
    title: "Where Tradition Lives and Nature Breathes",
    description:
      "Fort Kochi is where the whispers of the past blend with the soul of modern Kerala. Walk down cobbled lanes flanked by Dutch houses, ancient synagogues, and colonial churches. The scent of spices wafts through busy markets while artists display contemporary works in quaint galleries. As the sun dips below the horizon, Chinese fishing nets silhouette against a golden sky. Whether you're savoring fusion cuisine, enjoying cultural performances, or simply taking a cycle tour through history, Fort Kochi delivers a magical mix of heritage and innovation.",
    image: `${import.meta.env.BASE_URL}images/village-fog-cloud.jpg`,
  },
  {
    id: 5,
    title: "Kerala Elephant Experiences – Where Giants Grace the Land",
    description:
      "Elephants have long been a majestic part of Kerala’s cultural and spiritual identity. From the grand processions of Thrissur Pooram to the quiet companionship in ethical rehabilitation centers, these gentle giants inspire awe and reverence. At places like the Kodanad Elephant Training Centre or the forests near Thekkady, visitors can observe elephants being bathed, fed, and cared for in peaceful surroundings. These experiences offer a deeper connection with nature, reminding us of the wisdom and grace carried by these beloved animals through centuries of tradition.",
    image: `${import.meta.env.BASE_URL}images/pexels-filip-olsok-261056-4003736.jpg`,
  },
  {
    id: 6,
    title: "A Living Canvas of Green Wonders",
    description:
      "Wayanad is a pristine sanctuary where Kerala’s raw, untouched beauty comes alive. Tucked away in the Western Ghats, this verdant region boasts thick forests, spice plantations, ancient caves, and thundering waterfalls like Meenmutty and Soochipara. Trekking enthusiasts can explore Chembra Peak with its heart-shaped lake, while history lovers can visit Edakkal Caves with prehistoric carvings. Tribal communities, organic farms, and eco-resorts add to Wayanad’s charm. Every corner of this lush haven whispers tales of adventure, serenity, and deep connection to the earth.",
    image: `${import.meta.env.BASE_URL}images/view-green-palm-tree-species-with-beautiful-foliage.jpg`,
  },
];


const BlogList = () => {
  return (
    <div className="blog-list-wrapper">
      {/* Hero Banner */}
      <div className="hero-banner d-flex align-items-center justify-content-center text-white text-center">
        <div className="overlay"></div>
        <h1 className="display-4 fw-bold position-relative">Travel Blogs</h1>
        <img src="/public/images/view-green-palm-tree-species-with-beautiful-foliage.jpg" alt="" />
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
