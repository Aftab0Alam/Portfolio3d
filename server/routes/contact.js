const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// POST /contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // 🔒 Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all fields.' });
  }

  try {
    // 🔐 Transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 📬 Mail options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: `📩 New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    };

    // 📤 Send mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: '✅ Message sent successfully!' });

  } catch (error) {
    console.error('❌ Email error:', error.message || error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

module.exports = router;
