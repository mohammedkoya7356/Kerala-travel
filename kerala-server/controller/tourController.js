const TourPackage = require("../model/TourPackage");
const fs = require("fs");
const path = require("path");

// GET all tour packages
exports.getTours = async (req, res) => {
  try {
    const tours = await TourPackage.find();
    res.json(tours);
  } catch (err) {
    console.error("Error fetching tours:", err.message);
    res.status(500).json({ error: "Failed to fetch tours" });
  }
};

// UPDATE or CREATE tour package
exports.updateTour = async (req, res) => {
  try {
    const { key } = req.params; // card1 or card2
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newImagePath = req.file ? `/uploads/tour/${req.file.filename}` : null;
    let tour = await TourPackage.findOne({ key });

    if (!tour) {
      // Create new if not found
      const newTour = new TourPackage({
        key,
        title,
        description,
        price,
        image: newImagePath,
      });
      await newTour.save();
      return res.status(201).json(newTour);
    }

    // Delete old image if a new one is uploaded
    if (req.file && tour.image) {
      const oldImagePath = path.join(__dirname, "..", tour.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      tour.image = newImagePath;
    }

    // Update fields
    tour.title = title;
    tour.description = description;
    tour.price = price;
    await tour.save();

    res.json(tour);
  } catch (err) {
    console.error("Error updating tour:", err.message);
    res.status(500).json({ error: "Failed to update tour" });
  }
};

// DELETE tour package by key
exports.deleteTour = async (req, res) => {
  try {
    const { key } = req.params;

    const tour = await TourPackage.findOneAndDelete({ key });
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }

    // Delete image from disk
    if (tour.image) {
      const imagePath = path.join(__dirname, "..", tour.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.json({ message: "Tour deleted successfully" });
  } catch (err) {
    console.error("Error deleting tour:", err.message);
    res.status(500).json({ error: "Failed to delete tour" });
  }
};
