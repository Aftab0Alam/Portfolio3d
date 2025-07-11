import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios'; // ✅ ADDED

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ UPDATED to send form data to backend using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contact', formData); // 👈 update if hosted
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('Failed to send message:', err);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-[#0f172a] text-white flex items-center justify-center">
      <div className="w-full max-w-3xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1 mb-4 rounded-full border border-indigo-500 bg-indigo-100/10 text-indigo-400 text-sm font-medium tracking-widest uppercase"
        >
          Let’s Connect
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold mb-4"
        >
          Contact Me
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 mb-10 max-w-xl mx-auto"
        >
          Have a question, proposal, or just want to say hello? Fill out the form and I’ll get back to you soon.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-5 text-left"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition"
          >
            <FaPaperPlane /> Send Message
          </button>
        </motion.form>

        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 rounded-md bg-green-600/10 border border-green-500 text-green-300 flex items-center gap-3 justify-center"
          >
            <FaCheckCircle className="text-green-400 text-xl" />
            <p>Your message has been sent successfully!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
