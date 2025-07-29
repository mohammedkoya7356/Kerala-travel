const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const {
  createBanner,
  getAllBanners,
  updateBannerBlock,
  updateFullBanner,
  deleteBanner
} = require('../controller/bannerController');

// POST /api/banner — Upload 3 images to Cloudinary
router.post(
  '/',
  upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 }
  ]),
  createBanner
);

// GET /api/banner — Fetch all banners
router.get('/', getAllBanners);

// PUT /api/banner/:id — Update all 3 image blocks
router.put(
  '/:id',
  upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 }
  ]),
  updateFullBanner
);

// PATCH /api/banner/:id/:block — Update single block (img1/img2/img3)
router.patch(
  '/:id/:block',
  (req, res, next) => {
    const validBlocks = ['img1', 'img2', 'img3'];
    if (!validBlocks.includes(req.params.block)) {
      return res.status(400).json({ error: 'Invalid block name' });
    }
    next();
  },
  upload.single('image'),
  updateBannerBlock
);

// DELETE /api/banner/:id — Delete banner
router.delete('/:id', deleteBanner);

module.exports = router;
