import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { PROJECTS } from './data/films';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenShowreel = () => {
    // Open the featured master showreel
    setActiveProject(PROJECTS[0]);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-amber-400 selection:text-zinc-950">
      {/* Sticky Navigation */}
      <Navbar onOpenShowreel={handleOpenShowreel} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenShowreel={handleOpenShowreel}
          onSelectProject={setActiveProject}
        />
        <ProjectsSection onSelectProject={setActiveProject} />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Video Screening Modal */}
      {activeProject && (
        <VideoModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
