const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); // multer middleware (Cloudinary ready)
const galleryController = require('../controller/galleryController');

router.get('/', galleryController.getGallery);
router.post('/', upload.single('image'), galleryController.uploadGallery);
router.delete('/:block', galleryController.deleteImage);

module.exports = router;
