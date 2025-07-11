const express = require('express');
const Certification = require('../models/Certification');
const verifyToken = require('../middleware/auth'); // 🔐 Middleware for admin auth

const router = express.Router();

// ✅ GET all certifications (public)
router.get('/', async (req, res) => {
  try {
    const certs = await Certification.find().sort({ issuedOn: -1 });
    res.json(certs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch certifications' });
  }
});

// ✅ POST new certification (admin only)
router.post('/', verifyToken, async (req, res) => {
  try {
    const cert = new Certification(req.body);
    await cert.save();
    res.json({ success: true, message: 'Certification added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add certification' });
  }
});

// ✅ PUT (update) certification by ID (admin only)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    await Certification.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true, message: 'Certification updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update certification' });
  }
});

// ✅ DELETE certification by ID (admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Certification.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Certification deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete certification' });
  }
});

module.exports = router;
