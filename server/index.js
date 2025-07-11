// server/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./db'); // DB connect

// Routes
const contactRoutes = require('./routes/contact');
const certRoutes = require('./routes/certification');
const resumeRoutes = require('./routes/resume');
const adminRoutes = require('./routes/admin');
dotenv.config();
connectDB(); // ✅ <--- Important!

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/admin', adminRoutes);

// Serve resume uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/contact', contactRoutes);
app.use('/certifications', certRoutes);
app.use('/resume', resumeRoutes);

// Root
app.get('/', (req, res) => {
  res.send('✅ Backend server is running...');
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 Server started at: http://localhost:${PORT}`);
});
