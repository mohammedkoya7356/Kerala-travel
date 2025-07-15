const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Serve static files (gallery, banners, etc.)
app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'), {
    setHeaders: (res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
    },
  })
);

// Route imports
const authRoutes = require('./router/authRoute');
const bannerRoutes = require('./router/bannerRoute');
const contactRoutes = require('./router/contactRoute');
const galleryRoutes = require('./router/galleryRoute');
const aboutRoute = require('./router/aboutRoute');
const blogRoutes = require('./router/blogRoute');
const bookingRoutes = require("./router/bookingRoute");
const tourRoutes = require("./router/tourRoute");




//  Route declarations
app.use('/api/auth', authRoutes);
app.use('/api/banner', bannerRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/about', aboutRoute);
app.use('/api/blogs', blogRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/tours", tourRoutes);




// Health check
app.get('/', (req, res) => {
  res.send(' Kerala Travel API is running...');
});

//  Global error handler
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message });
  }

  if (
    err.message.includes('Only images are allowed') ||
    err.message.includes('.jpg') ||
    err.message.includes('.jpeg') ||
    err.message.includes('.png') ||
    err.message.includes('.webp')
  ) {
    return res.status(400).json({ error: err.message });
  }

  console.error('Server Error:', err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// MongoDB connection and server start
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/kerala-travel')
  .then(() => {
    console.log(' Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(` Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });
