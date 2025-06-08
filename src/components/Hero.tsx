import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Brain, Cpu, Satellite } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Yaotse Collins
            </span>
            <span className="block text-3xl md:text-4xl mt-4 text-slate-300 font-medium">
              Jojo Yawson
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Software Engineer & AI Researcher
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future through artificial intelligence, autonomous systems, 
              and space technology. Bridging the gap between innovative research and 
              practical engineering solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8 mt-12"
          >
            <div className="flex flex-col items-center space-y-2">
              <Brain className="w-12 h-12 text-cyan-400" />
              <span className="text-sm text-slate-400">AI & ML</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Cpu className="w-12 h-12 text-purple-400" />
              <span className="text-sm text-slate-400">Robotics</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Satellite className="w-12 h-12 text-pink-400" />
              <span className="text-sm text-slate-400">Space Tech</span>
            </div>
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 inline-flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ y: -5 }}
          >
            <span>Explore My Work</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;