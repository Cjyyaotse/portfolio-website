import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PhotoGallery from './components/PhotoGallery';
import Research from './components/Research';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <PhotoGallery />
        <Research />
        <Publications />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;