const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  title: String,
  platform: String,
  imageUrl: String,  // OR store base64/pdf if needed
  issuedOn: Date,
});

module.exports = mongoose.model('Certification', CertificationSchema);
