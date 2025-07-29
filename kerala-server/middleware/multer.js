const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({}); // no destination; image goes to Cloudinary

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
    cb(null, true);
  } else {
    cb(new Error('Only JPG, JPEG, and PNG images are allowed'), false);
  }
};

module.exports = multer({ storage, fileFilter });
