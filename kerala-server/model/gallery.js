const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  block: { type: String, required: true, unique: true }, 
  image: { type: String, required: true },
  title: { type: String }
});

module.exports = mongoose.model('Gallery', gallerySchema);