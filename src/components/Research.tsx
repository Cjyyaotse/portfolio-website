import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Network, Sun, Heart } from 'lucide-react';

const Research = () => {
  const projects = [
    {
      icon: Radio,
      title: 'Body Centric Antennas Research',
      description: 'Ongoing collaboration with Dr. Mubarak Sani Ellis of Telecommunications department at Kwame Nkrumah University of Science and Technology',
      details: 'Study of body centric antennas and future improvement in efficiency of antennas in close proximity to the human body.',
      status: 'Ongoing'
    },
    {
      icon: Network,
      title: 'ARQ and HARQ in Beyond 3G Systems',
      description: 'Overview of ARQ and HARQ in Beyond 3G Systems',
      details: 'Research focused on Automatic Repeat Request and Hybrid ARQ protocols for next-generation communication systems.',
      status: 'Ongoing'
    },
    {
      icon: Sun,
      title: 'Nanotechnology in Solar Panels',
      description: 'Study of nanotechnology and its application on solar panels',
      details: 'Investigating how nanotechnology can improve solar panel efficiency and performance.',
      status: 'Completed'
    },
    {
      icon: Heart,
      title: 'Tele-Health Research',
      description: 'Benefits of remote sensing devices in healthcare delivery',
      details: 'Conducted research on Tele-Health, focusing on the benefits of remote sensing devices and remote monitoring to enhance healthcare delivery in the Lapaz community, Ghana.',
      status: 'Completed'
    }
  ];

  return (
    <section id="research" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Research Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            My research spans telecommunications, renewable energy, and healthcare technology, 
            focusing on practical applications that can make a real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                  <project.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Ongoing' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-slate-300 font-medium mb-3">{project.description}</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">{project.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;