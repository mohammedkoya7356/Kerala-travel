const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const galleryController = require('../controller/galleryController');

router.get('/', galleryController.getGallery);
router.post('/', upload.single('image'), galleryController.uploadGallery);
router.put('/', upload.single('image'), galleryController.uploadGallery); // ✅ for update
router.delete('/:block', galleryController.deleteImage);

module.exports = router;
