import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Wrench, Settings, Brain, Database, Code, GitBranch, Monitor, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'ReallyGreatTech',
      position: 'Data Analyst & AI Engineer (Contract)',
      location: 'Remote, Ghana',
      period: 'October 2024 - Present',
      responsibilities: [
        {
          icon: Database,
          title: 'Data Analysis Training',
          description: 'Completed comprehensive in-house training on data analysis using Pandas, NumPy, and SQL, including advanced visualization with Plotly and Dash'
        },
        {
          icon: GitBranch,
          title: 'MLOps Development',
          description: 'Developed foundational MLOps skills including model training pipelines, Docker containerization, Git version control, Mage orchestration, Grafana model monitoring, MLflow, and AWS deployment'
        },
        {
          icon: Monitor,
          title: 'Health Dashboard Development',
          description: 'Collaborated in a 4-member team to build an interactive, multi-page Heart Disease Monitoring dashboard using Plotly and Dash, aggregating and cleaning 20+ years of health data from WHO, Kaggle, and government APIs'
        },
        {
          icon: Brain,
          title: 'HR Analytics & AI Systems',
          description: 'Built machine learning pipeline for predicting employee attrition and intelligent job-matching system using NLP and cosine similarity algorithms'
        },
        {
          icon: BarChart3,
          title: 'AI Monitoring Dashboard',
          description: 'Independently developed AI endpoint monitoring dashboard for comprehensive model performance tracking and error logging'
        }
      ]
    },
    {
      company: 'Volta River Authority',
      position: 'Engineer Intern',
      location: 'Ghana',
      period: 'Previous Experience',
      responsibilities: [
        {
          icon: BarChart3,
          title: 'Data Analysis',
          description: 'Assisted in analyzing electrical distribution data for Akosombo power systems'
        },
        {
          icon: Settings,
          title: 'Meter Reader Installation',
          description: 'Helped install electrical meter readers for accurate power consumption monitoring'
        },
        {
          icon: Wrench,
          title: 'Faulty Meter Repair',
          description: 'Identified and fixed faulty meter readers to ensure reliable data collection'
        },
        {
          icon: Zap,
          title: 'Electrical Pole Mounting',
          description: 'Aided in mounting electrical poles for power distribution infrastructure'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Hands-on experience in AI engineering, data analysis, and electrical infrastructure development.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: expIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-slate-300">
                  <span className="text-lg font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {exp.company}
                  </span>
                  <span className="hidden md:block text-slate-400">•</span>
                  <span className="text-slate-400">{exp.location}</span>
                  <span className="hidden md:block text-slate-400">•</span>
                  <span className="text-slate-400">{exp.period}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exp.responsibilities.map((resp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
                        <resp.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{resp.title}</h4>
                        <p className="text-slate-400 leading-relaxed text-sm">{resp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;