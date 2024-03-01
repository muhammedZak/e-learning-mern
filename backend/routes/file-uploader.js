const fs = require('fs');
const express = require('express');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');

const router = express.Router();

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const upload = multer({ dest: 'uploads/' });

router.post('/images/uploads', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;

    const uploadResponse = await cloudinary.uploader.upload(file.path, {
      folder: 'user-images',
    });

    if (uploadResponse) {
      await fs.promises.unlink(file.path);
    }

    res.status(200).json({
      message: 'Image uploaded successfully',
      imageUrl: uploadResponse.secure_url,
      public_id: uploadResponse.public_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to upload image' });
  }
});

module.exports = router;
