const TourPackage = require("../model/TourPackage");
const cloudinary = require("../middleware/cloudinary");
const fs = require("fs");

// GET all tour packages
exports.getTours = async (req, res) => {
  try {
    const tours = await TourPackage.find();
    res.status(200).json(tours);
  } catch (err) {
    console.error("Error fetching tours:", err.message);
    res.status(500).json({ error: "Failed to fetch tours" });
  }
};

// UPDATE or CREATE tour package (card1 or card2)
exports.updateTour = async (req, res) => {
  try {
    const { key } = req.params; // "card1" or "card2"
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    let tour = await TourPackage.findOne({ key });

    let uploadedImage;
    if (req.file) {
      // Upload to Cloudinary
      uploadedImage = await cloudinary.uploader.upload(req.file.path, {
        folder: "kerala_travel/tours",
      });

      // Delete local file after upload
      fs.unlinkSync(req.file.path);
    }

    if (!tour) {
      // Create new
      const newTour = new TourPackage({
        key,
        title,
        description,
        price,
        image: uploadedImage?.secure_url || null,
      });
      await newTour.save();
      return res.status(201).json(newTour);
    }

    // Update existing
    tour.title = title;
    tour.description = description;
    tour.price = price;
    if (uploadedImage) {
      tour.image = uploadedImage.secure_url;
    }

    await tour.save();
    res.status(200).json(tour);
  } catch (err) {
    console.error("Error updating tour:", err.message);
    res.status(500).json({ error: "Failed to update tour" });
  }
};

// DELETE a tour package by key
exports.deleteTour = async (req, res) => {
  try {
    const { key } = req.params;

    const tour = await TourPackage.findOneAndDelete({ key });
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }

    res.status(200).json({ message: "Tour deleted successfully" });
  } catch (err) {
    console.error("Error deleting tour:", err.message);
    res.status(500).json({ error: "Failed to delete tour" });
  }
};
