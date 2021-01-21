const path = require('path');
const { unlinkSync } = require('fs');
const router = require('express').Router();
const { upload, uploadToCloudinary } = require('../controllers/upload');

// ROUTES
router.post('/api/upload', upload, async ({ file }, res) => {
  const result = await uploadToCloudinary(file.path, { folder: 'foo' });
  if (file) unlinkSync(file.path);
  res.json(result.public_id);
});

router.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
