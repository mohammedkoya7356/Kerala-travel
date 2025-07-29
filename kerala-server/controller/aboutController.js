const About = require('../model/about');
const cloudinary = require('../middleware/cloudinary'); // must handle upload + delete
const fs = require('fs');
const path = require('path');

// Utility: Always return array of 2 cards
const ensureTwoCards = (cards = []) => [cards[0] || null, cards[1] || null];

// GET /api/about
exports.getAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = new About({
        heading: 'Memories for a Lifetime',
        paragraph: '',
        backgroundImage: '',
        cards: [null, null],
      });
      await about.save();
    } else {
      about.cards = ensureTwoCards(about.cards);
    }
    res.json(about);
  } catch (error) {
    console.error('Error in getAbout:', error);
    res.status(500).json({ error: 'Server error while fetching About data' });
  }
};

// PUT /api/about/heading
exports.updateHeading = async (req, res) => {
  try {
    const { heading } = req.body;
    if (!heading?.trim()) return res.status(400).json({ error: 'Heading is required' });

    const about = await About.findOneAndUpdate({}, { heading }, { new: true, upsert: true });
    res.json(about);
  } catch (error) {
    console.error('Failed to update heading:', error);
    res.status(500).json({ error: 'Failed to update heading' });
  }
};

// PUT /api/about/paragraph
exports.updateParagraph = async (req, res) => {
  try {
    const { paragraph } = req.body;
    if (!paragraph?.trim()) return res.status(400).json({ error: 'Paragraph is required' });

    const about = await About.findOneAndUpdate({}, { paragraph }, { new: true, upsert: true });
    res.json(about);
  } catch (error) {
    console.error('Failed to update paragraph:', error);
    res.status(500).json({ error: 'Failed to update paragraph' });
  }
};

// PUT /api/about/background
exports.updateBackground = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'kerala/about',
    });

    let about = await About.findOne();
    if (!about) about = new About({ heading: '', paragraph: '', cards: [null, null] });

    // Delete old Cloudinary background if exists
    if (about.backgroundImage?.public_id) {
      await cloudinary.uploader.destroy(about.backgroundImage.public_id);
    }

    about.backgroundImage = {
      url: result.secure_url,
      public_id: result.public_id,
    };

    await about.save();
    res.json(about);
  } catch (error) {
    console.error('Failed to update background:', error);
    res.status(500).json({ error: 'Failed to update background' });
  }
};

// POST /api/about/card/:index
exports.updateCard = async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const { title } = req.body;

    if (![0, 1].includes(index)) return res.status(400).json({ error: 'Only 2 cards (0 or 1) allowed' });

    let about = await About.findOne();
    if (!about) about = new About({ heading: '', paragraph: '', cards: [null, null] });

    const cards = ensureTwoCards(about.cards);
    const currentCard = cards[index] || {};

    // Delete old card image from Cloudinary
    if (req.file && currentCard.image?.public_id) {
      await cloudinary.uploader.destroy(currentCard.image.public_id);
    }

    let imageObj = currentCard.image || {};
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'kerala/about/cards',
      });
      imageObj = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    cards[index] = {
      title: title?.trim() || currentCard.title || '',
      image: imageObj,
    };

    about.cards = cards;
    await about.save();
    res.json(about);
  } catch (error) {
    console.error('Failed to update card:', error);
    res.status(500).json({ error: 'Failed to update card' });
  }
};

// DELETE /api/about/card/:index
exports.deleteCard = async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    if (![0, 1].includes(index)) return res.status(400).json({ error: 'Only 2 cards (index 0 or 1) allowed' });

    const about = await About.findOne();
    if (!about || !about.cards?.[index]) return res.status(404).json({ error: 'Card not found' });

    const currentCard = about.cards[index];

    // Delete Cloudinary image
    if (currentCard?.image?.public_id) {
      await cloudinary.uploader.destroy(currentCard.image.public_id);
    }

    about.cards[index] = null;
    about.cards = ensureTwoCards(about.cards);
    await about.save();

    res.json(about);
  } catch (error) {
    console.error('Error in deleteCard:', error.message);
    res.status(500).json({ error: error.message });
  }
};
