const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadAbout');

const {
  getAbout,
  updateParagraph,
  updateBackground,
  updateCard,
  deleteCard,
  updateHeading
} = require('../controller/aboutController');

router.get('/', getAbout);


router.put('/paragraph', updateParagraph);
router.put('/background', upload.single('background'), updateBackground);
router.post('/card/:index', upload.single('image'), updateCard);
router.delete('/card/:index', deleteCard);

router.put('/heading', updateHeading);

module.exports = router;
