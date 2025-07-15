const Banner = require('../model/banner');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// Normalize image path for storage in DB
const normalizePath = (filePath) => {
  return `uploads/${path.basename(filePath)}`;
};

// Delete file from disk if it exists
const deleteFile = (relativePath) => {
  try {
    const fullPath = path.join(__dirname, '..', relativePath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(` Deleted file: ${relativePath}`);
    }
  } catch (err) {
    console.error(` Failed to delete ${relativePath}:`, err.message);
  }
};

// Create a new banner
exports.createBanner = async (req, res) => {
  try {
    const newBanner = new Banner({
      img1: {
        image: req.files?.img1?.[0]?.path ? normalizePath(req.files.img1[0].path) : '',
        heading: req.body.img1Heading || '',
        subheading: req.body.img1Subheading || '',
      },
      img2: {
        image: req.files?.img2?.[0]?.path ? normalizePath(req.files.img2[0].path) : '',
        heading: req.body.img2Heading || '',
        subheading: req.body.img2Subheading || '',
      },
      img3: {
        image: req.files?.img3?.[0]?.path ? normalizePath(req.files.img3[0].path) : '',
        heading: req.body.img3Heading || '',
        subheading: req.body.img3Subheading || '',
      }
    });

    await newBanner.save();
    res.status(201).json({ message: ' Banner created successfully', banner: newBanner });
  } catch (error) {
    console.error(' Error in createBanner:', error.message);
    res.status(500).json({ error: 'Server error while creating banner' });
  }
};

//  Get all banners
exports.getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ createdAt: -1 });
    res.status(200).json(banners);
  } catch (error) {
    console.error(' Error in getAllBanners:', error.message);
    res.status(500).json({ error: 'Server error while fetching banners' });
  }
};

//  Update a specific block (img1/img2/img3)
exports.updateBannerBlock = async (req, res) => {
  try {
    const { id, block } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid banner ID format' });
    }

    const validBlocks = ['img1', 'img2', 'img3'];
    if (!validBlocks.includes(block)) {
      return res.status(400).json({ error: 'Invalid block (must be img1, img2, or img3)' });
    }

    const banner = await Banner.findById(id);
    if (!banner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    const image = req.file?.path ? normalizePath(req.file.path) : undefined;
    const { heading, subheading } = req.body;

    const update = {};
    if (heading) update[`${block}.heading`] = heading;
    if (subheading) update[`${block}.subheading`] = subheading;
    if (image) {
      deleteFile(banner[block].image); // delete old image
      update[`${block}.image`] = image;
    }

    if (Object.keys(update).length === 0) {
      return res.status(400).json({ error: 'No data provided for update' });
    }

    const updatedBanner = await Banner.findByIdAndUpdate(id, { $set: update }, { new: true, runValidators: true });
    res.status(200).json({ message: `${block} updated successfully`, banner: updatedBanner });
  } catch (error) {
    console.error(' Error in updateBannerBlock:', error.message);
    res.status(500).json({ error: 'Server error while updating banner block' });
  }
};

//  Update all 3 blocks of a banner
exports.updateFullBanner = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid banner ID format' });
    }

    const banner = await Banner.findById(id);
    if (!banner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    const updatedData = {};

    ['img1', 'img2', 'img3'].forEach((block) => {
      const file = req.files?.[block]?.[0];
      const image = file ? normalizePath(file.path) : banner[block].image;

      if (file && banner[block].image) {
        deleteFile(banner[block].image); // delete old image
      }

      updatedData[block] = {
        image,
        heading: req.body[`${block}Heading`] || banner[block].heading,
        subheading: req.body[`${block}Subheading`] || banner[block].subheading,
      };
    });

    const updatedBanner = await Banner.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ message: ' Banner fully updated', banner: updatedBanner });
  } catch (error) {
    console.error(' Error in updateFullBanner:', error.message);
    res.status(500).json({ error: 'Server error while updating banner' });
  }
};

//  Delete a banner and its images
exports.deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid banner ID format' });
    }

    const deleted = await Banner.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    ['img1', 'img2', 'img3'].forEach((block) => {
      if (deleted[block].image) deleteFile(deleted[block].image);
    });

    res.status(200).json({
      message: ' Banner deleted successfully',
      deletedBanner: {
        id: deleted._id,
        createdAt: deleted.createdAt,
      },
    });
  } catch (error) {
    console.error(' Error in deleteBanner:', error.message);
    res.status(500).json({ error: 'Server error while deleting banner' });
  }
};
