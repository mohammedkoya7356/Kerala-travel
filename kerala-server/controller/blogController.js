const Blog = require('../model/blogModel');
const fs = require('fs');
const path = require('path');

//  Utility to delete an image file safely
const deleteImage = (relativePath) => {
  const fullPath = path.join(__dirname, '..', relativePath);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    console.log(` Deleted file: ${relativePath}`);
  }
};

//  GET all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error(" Error fetching blogs:", error);
    res.status(500).json({ error: 'Server error while fetching blogs' });
  }
};

// GET single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error(" Error fetching blog:", error);
    res.status(500).json({ error: 'Server error while fetching blog' });
  }
};

//  CREATE blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const imgPath = req.file ? `/uploads/blogs/${req.file.filename}` : '';

    const newBlog = new Blog({
      title,
      description,
      img: imgPath,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: 'Server error while creating blog' });
  }
};

//  UPDATE blog
exports.updateBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const blogId = req.params.id;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    if (req.file) {
      if (blog.img) deleteImage(blog.img);
      blog.img = `/uploads/blogs/${req.file.filename}`;
    }

    blog.title = title || blog.title;
    blog.description = description || blog.description;

    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    console.error(" Error updating blog:", error);
    res.status(500).json({ error: 'Server error while updating blog' });
  }
};

//  DELETE blog
exports.deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    if (blog.img) deleteImage(blog.img);

    await Blog.findByIdAndDelete(blogId);
    res.status(200).json({ message: ' Blog deleted successfully' });
  } catch (error) {
    console.error(" Error deleting blog:", error);
    res.status(500).json({ error: 'Server error while deleting blog' });
  }
};
