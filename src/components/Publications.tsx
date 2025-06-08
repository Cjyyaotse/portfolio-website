import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, Calendar } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Youth involvement in space entrepreneurship: The emergence of a new market disruption',
      authors: 'U. Philippa, O. Godspower, C. Yaotse, E. Amarquaye, D. Thompson, S. Agbekor, P.R. Manhenda, M. Gupta',
      conference: 'IAC-24',
      institution: 'National Space Research and Development Agency (NASRDA), Abuja, Nigeria; Kwame Nkrumah University of Science and Technology',
      link: 'https://iafastro.directory/iac/paper/id/81882/summary/',
      year: '2024',
      type: 'Conference Paper'
    }
  ];

  return (
    <section id="publications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Publications
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Contributing to the academic community through research publications 
            in space technology and entrepreneurship.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-xs font-medium">
                      {pub.type}
                    </span>
                    <div className="flex items-center space-x-1 text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{pub.year}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {pub.title}
                  </h3>
                </div>
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Users className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">{pub.authors}</p>
                </div>
                
                <div className="text-sm text-slate-400">
                  <p className="font-medium text-cyan-400">{pub.conference}</p>
                  <p>{pub.institution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;