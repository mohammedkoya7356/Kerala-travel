const express = require('express');
const router = express.Router();
const galleryController = require('../controller/galleryController');
const upload = require('../middleware/uploadGallery'); // Multer middleware

router.get('/', galleryController.getGallery);
router.post('/upload', upload.single('image'), galleryController.uploadImage);
router.delete('/:block', galleryController.deleteImage);

module.exports = router;

