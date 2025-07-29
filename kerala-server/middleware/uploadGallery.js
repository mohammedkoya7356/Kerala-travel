const multer = require('multer');
const path = require('path');
const cloudinary = require('./cloudinary');
const Gallery = require('../model/gallery');

// Memory storage
const storage = multer.memoryStorage();

// File type filter
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const limits = {
  fileSize: 15 * 1024 * 1024, // 15 MB
};

const upload = multer({ storage, fileFilter, limits });

const uploadGallery = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const block = req.body.block;
    const title = req.body.title;

    if (!block || !title) {
      return res.status(400).json({ error: 'Block and title are required' });
    }

    // Upload image to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'kerala_gallery' },
        (error, result) => {
          if (error) {
            console.error('Cloudinary Error:', error); // ⛔ Log the actual error
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      stream.end(file.buffer);
    });

    // Save document
    const newGalleryImage = new Gallery({
      block,
      title,
      imageUrl: result.secure_url,
    });

    await newGalleryImage.save();

    res.status(200).json({ message: 'Image uploaded successfully', data: newGalleryImage });

  } catch (error) {
    console.error('UploadGallery Error:', error); // Log full stack trace
    res.status(500).json({ error: 'Image upload failed', details: error.message });
  }
};

module.exports = {
  upload,
  uploadGallery,
};
