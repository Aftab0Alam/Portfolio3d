import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../components/ProjectModal'; // ✅ Import modal
import axios from 'axios';

const projectsData = [
  {
    title: 'Real-Time Chat App',
    description: 'A full-stack real-time messaging platform...',
    category: 'Web',
    image: 'https://cdn-icons-png.flaticon.com/512/895/895169.png',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    start: 'June 2025',
    status: 'Completed',
    codeLink: 'https://github.com/Aftab0Alam/chat-app', // ✅ Use actual GitHub repo
    liveDemo: 'https://chat-app-demo.vercel.app/',
  },
  {
    title: 'Clothify – E-Commerce Platform',
    description: 'A modern clothing e-commerce site with ...',
    category: 'Web',
    image: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
    start: 'April 2025',
    status: 'Completed',
    codeLink: 'https://github.com/Aftab0Alam/clothify',
    liveDemo: '#',
  },
  // ... more
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [stars, setStars] = useState({});

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter(p => p.category === activeCategory);

  // 🟡 Fetch GitHub stars
  useEffect(() => {
    const fetchStars = async () => {
      const starData = {};
      for (let project of projectsData) {
        if (project.codeLink.includes('github.com')) {
          try {
            const repoPath = project.codeLink.split('github.com/')[1];
            const res = await axios.get(`https://api.github.com/repos/${repoPath}`);
            starData[project.codeLink] = res.data.stargazers_count;
          } catch {
            starData[project.codeLink] = 0;
          }
        }
      }
      setStars(starData);
    };

    fetchStars();
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-indigo-300"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium border ${
                activeCategory === cat
                  ? 'bg-indigo-600 border-indigo-600 text-white'
                  : 'border-white/20 text-white hover:bg-white/10'
              } transition duration-200`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-5 rounded-xl shadow-md cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 h-36 w-full object-contain bg-white/10 p-3"
              />
              <h3 className="text-lg font-semibold text-indigo-400 mb-1">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>

              <div className="text-xs text-gray-400 mt-2 flex justify-between items-center">
                <span>📅 {project.start}</span>
                {stars[project.codeLink] >= 0 && (
                  <span className="text-yellow-400">⭐ {stars[project.codeLink]}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Modal Preview */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
