const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");
const upload = require("../middleware/tourupload");

// Get all tour cards
router.get("/", tourController.getTours);

// Update a specific tour card (with optional image upload)
router.put("/:key", upload.single("image"), tourController.updateTour);

// Delete a tour card
router.delete("/:key", tourController.deleteTour);

module.exports = router;

