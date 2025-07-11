// server/routes/resume.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// ✅ Setup storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ✅ POST /resume/upload — Upload resume
router.post('/upload', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.status(200).json({ success: true, url: fileUrl });
});

// ✅ GET /resume/latest — Fetch latest uploaded resume
router.get('/latest', (req, res) => {
  const uploadDir = path.join(__dirname, '../uploads');

  fs.readdir(uploadDir, (err, files) => {
    if (err || !files.length) {
      return res.status(404).json({ success: false, message: 'No resume found' });
    }

    // Filter for only PDF files and sort by modified time
    const pdfs = files.filter(file => file.endsWith('.pdf'));
    if (!pdfs.length) {
      return res.status(404).json({ success: false, message: 'No PDF resumes found' });
    }

    const sorted = pdfs.sort((a, b) => {
      const aTime = fs.statSync(path.join(uploadDir, a)).mtime;
      const bTime = fs.statSync(path.join(uploadDir, b)).mtime;
      return bTime - aTime;
    });

    const latestFile = sorted[0];
    const url = `${req.protocol}://${req.get('host')}/uploads/${latestFile}`;
    res.json({ success: true, url });
  });
});

module.exports = router;
