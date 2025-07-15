const About = require('../model/about');
const fs = require('fs');
const path = require('path');

// Utility: Always return array of 2 elements
const ensureTwoCards = (cards = []) => {
  return [cards[0] || null, cards[1] || null];
};

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
    console.error(' Error in getAbout:', error);
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
    console.error(' Failed to update paragraph:', error);
    res.status(500).json({ error: 'Failed to update paragraph' });
  }
};

// PUT /api/about/background
exports.updateBackground = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    const filePath = `/uploads/about/${req.file.filename}`;
    let about = await About.findOne();
    if (!about) {
      about = new About({ heading: '', paragraph: '', cards: [null, null] });
    }

    // Delete old background image if it exists
    const oldImage = about.backgroundImage;
    if (oldImage?.startsWith('/uploads/about/')) {
      const fullPath = path.join(__dirname, '..', oldImage);
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    }

    about.backgroundImage = filePath;
    await about.save();
    res.json(about);
  } catch (error) {
    console.error(' Failed to update background:', error);
    res.status(500).json({ error: 'Failed to update background' });
  }
};

// POST /api/about/card/:index
exports.updateCard = async (req, res) => {
  try {
    const { title } = req.body;
    const index = parseInt(req.params.index);

    if (![0, 1].includes(index)) {
      return res.status(400).json({ error: 'Only 2 cards (index 0 or 1) are allowed' });
    }

    let about = await About.findOne();
    if (!about) about = new About({ heading: '', paragraph: '', cards: [null, null] });

    const cards = ensureTwoCards(about.cards);
    const currentCard = cards[index] || {};

    // Remove old image if a new file is uploaded
    if (req.file && currentCard.image?.startsWith('/uploads/about/')) {
      const oldPath = path.join(__dirname, '..', currentCard.image);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    cards[index] = {
      title: title?.trim() || currentCard.title || '',
      image: req.file ? `/uploads/about/${req.file.filename}` : currentCard.image || '',
    };

    about.cards = cards;
    await about.save();
    res.json(about);
  } catch (error) {
    console.error(' Failed to update card:', error);
    res.status(500).json({ error: 'Failed to update card' });
  }
};

// DELETE /api/about/card/:index
exports.deleteCard = async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    if (![0, 1].includes(index)) {
      return res.status(400).json({ error: 'Only 2 cards (index 0 or 1) are allowed' });
    }

    const about = await About.findOne();
    if (!about || !about.cards?.[index]) {
      return res.status(404).json({ error: 'Card not found' });
    }

    // Delete image file if exists
    const imagePath = path.join(__dirname, '..', about.cards[index].image || '');
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    about.cards[index] = null;
    about.cards = ensureTwoCards(about.cards);
    await about.save();

    res.json(about);
  } catch (error) {
    console.error(' Error in deleteCard:', error.message);
    res.status(500).json({ error: error.message });
  }
};
