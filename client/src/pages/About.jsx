import React from 'react';
import AftabPhoto from '../assets/aftaboffice.png';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">

        {/* 🔹 Badge + Typewriter Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-indigo-500 bg-cyan-100/10 text-indigo-400 text-sm font-medium tracking-widest uppercase">
            My Journey
          </div>

          <div className="text-3xl sm:text-4xl font-bold leading-tight min-h-[100px]">
            <Typewriter
              options={{
                strings: [
                  'Hi, I’m <span class="text-indigo-500">Aftab Alam</span>',
                  'Full Stack Developer 🚀',
                  'UI/UX Designer 🎨',
                  'AI Enthusiast 🤖',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40,
                pauseFor: 2000,
                html: true,
              }}
            />
          </div>
          <p className="text-gray-400 text-lg mt-2">
            Building scalable solutions & immersive user experiences
          </p>
        </motion.div>

        {/* 🔹 Image + Bio Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* 🖼 Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-md"
          >
            <img
              src={AftabPhoto}
              alt="Aftab Alam"
              className="rounded-lg w-full h-[300px] object-contain p-2 transform hover:scale-105 transition duration-500"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">Aftab Alam</h3>
              <p className="text-gray-400">Full Stack Developer</p>
              <p className="text-green-400 mt-1">Available for work</p>
            </div>
          </motion.div>

          {/* 📝 Bio Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-md"
          >
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I'm <strong>Aftab Alam</strong>, a passionate full stack developer based in Koderma, Jharkhand. Currently pursuing a B.Tech in CSE from Lovely Professional University, I strive to blend creativity with code.
              </p>
              <p>
                I love building full-stack applications and interactive 3D experiences using <strong>React, TailwindCSS, Node.js, and Express.js</strong>. Every project is a journey where I focus on performance, accessibility, and aesthetics.
              </p>
              <p>
                My interests include AI tools, chatbot development, and solving real-world problems with code.
              </p>
              <p>
                Outside of code, I enjoy maintaining my open-source tool “SearchEverywhere” and solving DSA problems on GeeksforGeeks.
              </p>
            </div>

            {/* 📌 Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm sm:text-base">
              <p><strong>Name:</strong> Aftab Alam</p>
              <p><strong>Email:</strong> aftab0alam011@gmail.com</p>
              <p><strong>Location:</strong> Koderma, Jharkhand</p>
              <p><strong>Availability:</strong> Open to opportunities</p>
            </div>
          </motion.div>
        </div>

        {/* 🧠 Quote */}
        <blockquote className="mt-12 text-center italic text-indigo-400 text-lg">
          “The best way to predict the future is to invent it.” – Alan Kay
        </blockquote>

        {/* 📆 Timeline */}
        <div className="mt-16 space-y-6 text-left">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-4">📌 Timeline</h3>
          <ul className="space-y-3 border-l border-indigo-400 pl-4">
            <li><span className="text-indigo-300 font-medium">2025</span> – Developed full-stack portfolio, Clothify platform & chat app</li>
            <li><span className="text-indigo-300 font-medium">2023</span> – Internship at GeeksforGeeks</li>
            <li><span className="text-indigo-300 font-medium">2022</span> – Started B.Tech at LPU</li>
            <li><span className="text-indigo-300 font-medium">2021</span> – Released SearchEverywhere open-source tool</li>
            <li><span className="text-indigo-300 font-medium">2019</span> – Diploma from Govt Polytechnic Koderma</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
