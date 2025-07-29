const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadAbout'); // ✅ Already Cloudinary-compatible

const {
  getAbout,
  updateParagraph,
  updateBackground,
  updateCard,
  deleteCard,
  updateHeading
} = require('../controller/aboutController');

// Routes
router.get('/', getAbout);

router.put('/paragraph', updateParagraph);
router.put('/background', upload.single('background'), updateBackground); // ✅ Cloudinary image
router.post('/card/:index', upload.single('image'), updateCard); // ✅ Cloudinary image
router.delete('/card/:index', deleteCard);

router.put('/heading', updateHeading);

module.exports = router;
