const express = require('express');
const router = express.Router();
const multer = require('multer');
const streamifier = require('streamifier');
const { cloudinary } = require('../cloudinary'); // make sure this path is correct

// Use memory storage for multer
const upload = multer({ storage: multer.memoryStorage() });

// POST route to upload image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Upload stream to Cloudinary
    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'kerala-travel' },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload();

    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    res.status(500).json({ message: 'Upload failed', error });
  }
});

module.exports = router;
