import React from 'react';

interface NavigationProps {
  currentSection: number;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  const sections = [
    { name: 'About', color: 'bg-cyan-400' },
    { name: 'Experience', color: 'bg-amber-400' },
    { name: 'Projects', color: 'bg-pink-400' },
    { name: 'Puzzle', color: 'bg-purple-400' },
    { name: 'Contact', color: 'bg-green-400' }
  ];

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`[data-section="${index}"]`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className="group relative"
        >
          <div
            className={`w-3 h-3 rounded-full border-2 border-gray-600 transition-all duration-300 ${
              currentSection === index ? `${section.color} border-transparent` : 'bg-transparent hover:border-gray-400'
            }`}
          />
          <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {section.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Navigation;