const multer = require('multer');
const path = require('path');
const fs = require('fs');

//  Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(` Created uploads directory: ${uploadDir}`);
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const name = path.basename(file.originalname, ext)
      .replace(/\s+/g, '-')              
      .replace(/[^a-zA-Z0-9-_]/g, '')    
      .toLowerCase();
    const filename = `${Date.now()}-${Math.floor(Math.random() * 1e6)}-${name}${ext}`;
    cb(null, filename);
  }
});


const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowedExts = ['.jpg', '.jpeg', '.png'];
  const allowedMime = ['image/jpeg', 'image/png'];

  if (allowedExts.includes(ext) && allowedMime.includes(file.mimetype)) {
    cb(null, true);
  } else {
    const error = new Error(' Only .jpg, .jpeg, or .png files are allowed.');
    error.status = 400;
    cb(error);
  }
};


const upload = multer({
  storage,
  fileFilter,
limits: {
  fileSize: 15 * 1024 * 1024, //  Max 15 MB
},

});

module.exports = upload;
