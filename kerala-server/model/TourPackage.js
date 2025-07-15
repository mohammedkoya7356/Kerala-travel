const mongoose = require("mongoose");

const tourPackageSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, 
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("TourPackage", tourPackageSchema);
