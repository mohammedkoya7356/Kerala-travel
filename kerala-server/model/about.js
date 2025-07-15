const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  heading: { type: String, default: 'Memories for a Lifetime' },
  paragraph: { type: String, default: '' },
  backgroundImage: { type: String },
  cards: [
    {
      title: String,
      image: String,
    },
  ],
});

module.exports = mongoose.model('About', aboutSchema);
