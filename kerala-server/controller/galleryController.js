const Gallery = require('../model/gallery');
const cloudinary = require('../middleware/cloudinary'); // assumes cloudinary setup in this file

// Get all gallery images
exports.getGallery = async (req, res) => {
  try {
    const data = await Gallery.find().sort('block');
    res.status(200).json(data);
  } catch (error) {
    console.error('Get Gallery Error:', error);
    res.status(500).json({ error: 'Failed to fetch gallery images' });
  }
};

// Upload or update gallery image/title using Cloudinary
exports.uploadGallery = async (req, res) => {
  try {
    const { block, title } = req.body;

    if (!block) {
      return res.status(400).json({ error: 'Block is required (e.g., img1, img2)' });
    }

    const file = req.file?.path;
    let imageUrl = null;

    if (file) {
      const cloudResult = await cloudinary.uploader.upload(file, {
        folder: 'kerala-gallery',
      });
      imageUrl = cloudResult.secure_url;
    }

    let existing = await Gallery.findOne({ block });

    if (existing) {
      existing.title = title || existing.title;

      // If new image is uploaded, update image
      if (imageUrl) {
        existing.image = imageUrl;
      }

      await existing.save();
      return res.status(200).json({ message: 'Image/title updated', data: existing });
    }

    // For new block, image is required
    if (!imageUrl) {
      return res.status(400).json({ error: 'No image file uploaded for new block' });
    }

    const newImage = new Gallery({ block, image: imageUrl, title });
    await newImage.save();

    res.status(201).json({ message: 'Image uploaded', data: newImage });
  } catch (error) {
    console.error('Upload Image Error:', error);
    res.status(500).json({ error: 'Server error while uploading image' });
  }
};

// Delete a gallery image by block
exports.deleteImage = async (req, res) => {
  try {
    const { block } = req.params;

    const img = await Gallery.findOneAndDelete({ block });

    // Note: we do not delete from Cloudinary to avoid issues
    if (img) {
      return res.status(200).json({ message: 'Image deleted successfully' });
    }

    res.status(404).json({ error: 'Block not found' });
  } catch (error) {
    console.error('Delete Image Error:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
};
