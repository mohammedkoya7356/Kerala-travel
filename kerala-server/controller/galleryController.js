const Gallery = require('../model/gallery');
const fs = require('fs');
const path = require('path');

//  Get all gallery images
exports.getGallery = async (req, res) => {
  try {
    const data = await Gallery.find().sort('block');
    res.status(200).json(data);
  } catch (error) {
    console.error('Get Gallery Error:', error);
    res.status(500).json({ error: 'Failed to fetch gallery images' });
  }
};

//  Upload or update a gallery image/title
exports.uploadImage = async (req, res) => {
  try {
    const { block, title } = req.body;
    const image = req.file?.filename; 

    if (!block) {
      return res.status(400).json({ error: 'Block is required (e.g., img1, img2)' });
    }

    let existing = await Gallery.findOne({ block });

    if (existing) {
      // Update title
      existing.title = title || existing.title;

      // If new image is uploaded, delete old one and update
      if (image) {
        const oldPath = path.join('uploads/gallery/', existing.image);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
        existing.image = image;
      }

      await existing.save();
      return res.status(200).json({ message: 'Image/title updated', data: existing });
    }

    // New block must include an image
    if (!image) {
      return res.status(400).json({ error: 'No image file uploaded for new block' });
    }

    const newImage = new Gallery({ block, image, title });
    await newImage.save();

    res.status(201).json({ message: 'Image uploaded', data: newImage });
  } catch (error) {
    console.error('Upload Image Error:', error);
    res.status(500).json({ error: 'Server error while uploading image' });
  }
};

//  Delete a gallery image by block
exports.deleteImage = async (req, res) => {
  try {
    const { block } = req.params;

    const img = await Gallery.findOneAndDelete({ block });

    if (img) {
      const filePath = path.join('uploads/gallery/', img.image);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      return res.status(200).json({ message: 'Image deleted successfully' });
    }

    res.status(404).json({ error: 'Block not found' });
  } catch (error) {
    console.error('Delete Image Error:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
};

