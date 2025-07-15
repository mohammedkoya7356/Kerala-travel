
const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  img1: {
    image: String,
    heading: String,
    subheading: String,
  },
  img2: {
    image: String,
    heading: String,
    subheading: String,
  },
  img3: {
    image: String,
    heading: String,
    subheading: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Banner', bannerSchema);
