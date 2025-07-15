const express = require('express');
const router = express.Router();
const upload = require('../middleware/blogUpload');
const Blog = require('../model/blogModel');
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controller/blogController');


router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

router.post('/', upload.single('img'), createBlog);

router.put('/:id', upload.single('img'), updateBlog)
router.delete('/:id', deleteBlog);

module.exports = router;
