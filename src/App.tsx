import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Mail, Linkedin, MessageCircle, Code2, Terminal, Zap, Lock, Unlock, Eye, EyeOff } from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Puzzle';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
            setCurrentSection(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hide scrollbar but keep functionality */}
      <style>{`
        ::-webkit-scrollbar { width: 0px; }
        html { scroll-behavior: smooth; }
        body { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
      
      <Navigation currentSection={currentSection} />
      
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;