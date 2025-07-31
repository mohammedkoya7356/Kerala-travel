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
      "High above sea level in the majestic Western Ghats lies Munnar, a pristine hill station blanketed by endless stretches of emerald tea plantations. As you ascend its winding roads, the scent of eucalyptus and fresh mountain air welcomes you. Munnar is not just about breathtaking landscapes—it's a sanctuary where time slows down. Wake to the sound of birdsong, sip freshly brewed tea while mist dances over valleys, and trek to scenic vantage points that offer awe-inspiring sunrises. This serene paradise enchants nature lovers, honeymooners, and explorers alike with its quiet charm, colonial heritage, and ecological beauty. Munnar is a poem written by nature—waiting to be read slowly, one breathtaking view at a time.",
    image: "/images/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand.jpg",
  },
  {
    id: 2,
    title: "Kerala Traditions – A Timeless Tapestry of Culture and Grace",
    description:
      "Kerala’s traditions are not mere customs—they are living, breathing expressions of its soul. In every vibrant performance of Kathakali, painted faces and expressive eyes tell stories of gods and demons. The gentle sway of Mohiniyattam embodies feminine grace and divine rhythm. Beyond the stage, every temple festival, every ritual offering, and every folk song echo the spiritual heartbeat of this land. From ancient martial arts like Kalaripayattu to boat races that unite entire villages, Kerala's heritage is both diverse and deeply rooted. Walk through its temples, watch a Theyyam performance at dawn, or witness an Onam procession to feel the cultural pulse that connects its people to their history with pride and devotion.",
    image: "/images/wp9616443-kerala-culture-wallpapers.jpg",
  },
  {
    id: 3,
    title: "Kerala and the Sea – Where Land Meets Timeless Blue",
    description:
      "Imagine waking up to the gentle lapping of water and the call of a distant kingfisher. As the houseboat glides over the serene backwaters of Alleppey and Kumarakom, life slows to a peaceful rhythm. Lush palm groves line the canals, villagers wave from the banks, and fishermen cast nets under golden sunsets. These waters are not just routes of travel—they’re the soul of Kerala, connecting people, traditions, and time. Enjoy freshly caught fish cooked in coconut gravy, sip tender coconut water, and lose yourself in the tranquil beauty of this water-world. Whether it's a romantic getaway, a family adventure, or a solo soul-searching journey, the backwaters offer an experience unlike any other—one of serenity, simplicity, and connection.",
    image: "/images/pexels-asadphoto-3601366.jpg",
  },
  {
    id: 4,
    title: "Where Tradition Lives and Nature Breathes",
    description:
      "Tucked away in Kerala’s northern highlands, Wayanad is a symphony of green. Dense forests echo with the call of exotic birds, waterfalls plunge into hidden pools, and ancient caves whisper stories of a prehistoric past. Trek through misty trails to the heart-shaped lake at Chembra Peak, encounter elephants in the wild at Muthanga Sanctuary, and explore the spice-scented plantations that fill the air with cardamom, pepper, and coffee. At dawn, the hills awaken with golden light, revealing a landscape as raw as it is poetic. Wayanad is more than a destination—it’s a sensory experience for the wild at heart, the curious mind, and the peaceful soul.",
    image: "/images/village-fog-cloud.jpg",
  },
  {
    id: 5,
    title: "Kerala Elephant Experiences – Where Giants Grace the Land",
    description:
      "In the heart of Kerala lies Thekkady—a sanctuary where the wild roams free and the spirit of adventure breathes. Home to the Periyar Tiger Reserve, this lush land teems with elephants, wild boars, and vibrant birdlife. Drift across Periyar Lake on a bamboo raft as sambar deer graze at the shore and herons soar above. Journey through fragrant spice plantations where cardamom, cinnamon, and cloves grow in abundance. Here, nature and culture entwine—eco-tourism thrives alongside age-old tribal customs, and the dense forests hum with mystery. Thekkady is not just a place on a map—it’s an immersion into the untamed, a reminder of nature’s raw, unfiltered magnificence.",
    image: "/images/pexels-filip-olsok-261056-4003736.jpg",
  },
  {
    id: 6,
    title: "Varkala Cliffs – Where the Ocean Meets the Sky",
    description:
      "Towering red cliffs kissed by the Arabian Sea—Varkala is Kerala’s coastal jewel, where spiritual energy and bohemian charm meet. As waves crash below, yogis greet the sun, travelers sip masala chai at cliffside cafés, and seekers find solace at the ancient Janardanaswamy Temple. The cliffside promenade is alive with color, music, and stories from around the world. Ayurveda retreats offer rejuvenation, while golden sands invite barefoot walks under the moonlight. Whether you seek soulful solitude or lively sunsets, Varkala welcomes you with open arms and the endless embrace of sea breeze and sky.",
    image: "/images/view-green-palm-tree-species-with-beautiful-foliage.jpg",
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
      </Container>
      <Footer />
    </>
  );
};

export default BlogDetail;
