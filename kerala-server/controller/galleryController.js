const Gallery = require('../model/gallery');
const cloudinary = require('../middleware/cloudinary');

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

// Upload or update gallery image + title
exports.uploadGallery = async (req, res) => {
  try {
    const { block, title } = req.body;

    if (!block || !/^img[1-6]$/.test(block)) {
      return res.status(400).json({ error: 'Valid block (img1-img6) is required' });
    }

    let imageUrl = null;
    if (req.file?.path) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'kerala-gallery',
      });
      imageUrl = result.secure_url;
    }

    // Check if this block already exists
    let existing = await Gallery.findOne({ block });

    if (existing) {
      existing.title = title || existing.title;
      if (imageUrl) existing.image = imageUrl;

      await existing.save();
      return res.status(200).json({ message: 'Gallery item updated', data: existing });
    }

    if (!imageUrl) {
      return res.status(400).json({ error: 'Image file is required for new gallery block' });
    }

    const newImage = new Gallery({ block, image: imageUrl, title });
    await newImage.save();

    res.status(201).json({ message: 'New gallery item added', data: newImage });

  } catch (error) {
    console.error('Upload Gallery Error:', error);
    res.status(500).json({ error: 'Failed to upload or update gallery item' });
  }
};

// Delete gallery block
exports.deleteImage = async (req, res) => {
  try {
    const { block } = req.params;

    const deleted = await Gallery.findOneAndDelete({ block });

    if (!deleted) {
      return res.status(404).json({ error: 'Block not found' });
    }

    // Optionally delete from Cloudinary if needed

    res.status(200).json({ message: 'Gallery block deleted successfully' });
  } catch (error) {
    console.error('Delete Gallery Error:', error);
    res.status(500).json({ error: 'Failed to delete gallery block' });
  }
};
