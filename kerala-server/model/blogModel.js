const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true }, // image file path
});

module.exports = mongoose.model('Blog', blogSchema);
