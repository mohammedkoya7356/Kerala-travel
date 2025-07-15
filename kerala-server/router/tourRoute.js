const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");
const upload = require("../middleware/tourupload");

router.get("/", tourController.getTours);


router.put("/:key", upload.single("image"), tourController.updateTour);

router.delete("/:key", tourController.deleteTour);

module.exports = router;
