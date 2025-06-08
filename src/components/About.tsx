import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Satellite, GraduationCap, Cog, Code } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: Brain,
      title: 'Artificial Intelligence & Autonomous Systems',
      description: 'Developing intelligent systems that can learn and adapt'
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      description: 'Extracting insights from complex datasets'
    },
    {
      icon: Satellite,
      title: 'Space Satellite & Exploration',
      description: 'Contributing to space technology advancement'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Sharing knowledge and fostering learning'
    },
    {
      icon: Cog,
      title: 'Robotics & Electronics',
      description: 'Building intelligent mechanical systems'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Creating robust and scalable solutions'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate software engineer and researcher with a strong interest in artificial intelligence, 
            autonomous systems, and space technology. Beyond the technical world, 
            I'm a big sports enthusiast—an avid Real Madrid and New York Knicks fan—and I enjoy gaming and building cool software projects. 
            I love blending innovation with real-world impact, whether it's through intelligent systems or exploring the future of tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                  <interest.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{interest.title}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;