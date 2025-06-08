import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Network, Sun, Heart, BarChart3, Brain, Search, FileText } from 'lucide-react';

const Research = () => {
  const projects = [
    {
      icon: BarChart3,
      title: 'Heart Disease Monitoring Dashboard',
      description: 'Team Project | October 2024 - December 2024',
      details: 'Aggregated, cleaned, and visualized over 20 years of global heart disease data from multiple sources. Built multi-page interactive visualizations using Dash and Plotly frameworks. Integrated data from Kaggle, WHO, and government APIs for comprehensive health analytics.',
      status: 'Completed',
      type: 'Team Project'
    },
    {
      icon: Brain,
      title: 'AI-Powered Resume Application',
      description: 'Personal Project | January 2025 - Present',
      details: 'Developed FastAPI backend with multiple AI-driven features: HTML resume generation based on uploaded data and customizable templates, personalized cover letter creation using advanced chat models (Groq), and resume-job fit analysis with AI-driven feedback for career improvement. Implemented 4 core services using LangChain, Groq API, and Jinja2 templates.',
      status: 'Ongoing',
      type: 'Personal Project'
    },
    {
      icon: Search,
      title: 'Detective L - AI Crime Investigation Agent',
      description: 'Personal Project | February 2025 - Present',
      details: 'Developed comprehensive AI agent system to assist in solving fictional murder cases using LangGraph and Groq chat models. Created specialized tools including profile matcher for suspect identification, location analyzer using Haversine distance calculations, image analyzer utilizing OpenCV for visual evidence processing, fact verifier integrated with Tavily API, and timeline extractor for chronological case analysis. Automated final PDF report generation with suspect ranking based on comprehensive tool analysis.',
      status: 'Ongoing',
      type: 'Personal Project'
    },
    {
      icon: Radio,
      title: 'Body Centric Antennas Research',
      description: 'Ongoing collaboration with Dr. Mubarak Sani Ellis of Telecommunications department at Kwame Nkrumah University of Science and Technology',
      details: 'Study of body centric antennas and future improvement in efficiency of antennas in close proximity to the human body.',
      status: 'Ongoing',
      type: 'Academic Research'
    },
    {
      icon: Network,
      title: 'ARQ and HARQ in Beyond 3G Systems',
      description: 'Overview of ARQ and HARQ in Beyond 3G Systems',
      details: 'Research focused on Automatic Repeat Request and Hybrid ARQ protocols for next-generation communication systems.',
      status: 'Ongoing',
      type: 'Academic Research'
    },
    {
      icon: Sun,
      title: 'Nanotechnology in Solar Panels',
      description: 'Study of nanotechnology and its application on solar panels',
      details: 'Investigating how nanotechnology can improve solar panel efficiency and performance.',
      status: 'Completed',
      type: 'Academic Research'
    },
    {
      icon: Heart,
      title: 'Tele-Health Research',
      description: 'Benefits of remote sensing devices in healthcare delivery',
      details: 'Conducted research on Tele-Health, focusing on the benefits of remote sensing devices and remote monitoring to enhance healthcare delivery in the Lapaz community, Ghana.',
      status: 'Completed',
      type: 'Academic Research'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Ongoing' 
      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
      : 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Team Project':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Personal Project':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Academic Research':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

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
            Research & Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            My research and projects span AI engineering, data science, telecommunications, renewable energy, 
            and healthcare technology, focusing on practical applications that can make a real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                  <project.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                      {project.type}
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