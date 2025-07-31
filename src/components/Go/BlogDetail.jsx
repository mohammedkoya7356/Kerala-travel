// BlogDetail.jsx
import { useParams } from "react-router-dom";

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

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="text-center p-5">Blog not found</div>;

  return (
    <div className="container py-5">
      <h2 className="mb-4">{blog.title}</h2>
      <img
        src={blog.image}
        alt={blog.title}
        className="img-fluid mb-4"
        style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
      />
      <p className="lead">{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
