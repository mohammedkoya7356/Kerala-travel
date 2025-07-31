import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const blogData = [
  {
    title: 'Backwaters of Alleppey',
    description: 'Explore the calm and scenic backwaters of Kerala in a traditional houseboat.',
    img: `${import.meta.env.BASE_URL}images/bl`,
  },
  {
    title: 'Munnar Tea Hills',
    description: 'Discover the lush green tea plantations of Munnar and their refreshing vibe.',
    img: `${import.meta.env.BASE_URL}images/female-tourists.jpg`,
  },
  {
    title: 'Wildlife at Thekkady',
    description: 'Spot elephants and tigers at the Periyar Wildlife Sanctuary in Thekkady.',
    img: `${import.meta.env.BASE_URL}images/blog3.jpg`,
  },
  {
    title: 'Culture of Kochi',
    description: 'Experience colonial charm and vibrant street art in Fort Kochi.',
    img: `${import.meta.env.BASE_URL}images/blog4.jpg`,
  },
  {
    title: 'Beaches of Varkala',
    description: 'Relax at the scenic cliff-side beaches of Varkala with yoga and sunsets.',
    img: `${import.meta.env.BASE_URL}images/blog5.jpg`,
  },
  {
    title: 'Hill Escape to Wayanad',
    description: 'Trek, explore caves, and breathe in the cool fresh air of Wayanad hills.',
    img: `${import.meta.env.BASE_URL}images/blog6.jpg`,
  },
];

const BlogList = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Travel Blogs</h2>
      <div className="row g-4">
        {blogData.map((blog, index) => (
          <div className="col-sm-6 col-md-4" key={index}>
            <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-100"
                style={{ height: '220px', objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="p-3 bg-white d-flex flex-column h-100">
                <h5 className="fw-bold">{blog.title}</h5>
                <p className="text-muted">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
