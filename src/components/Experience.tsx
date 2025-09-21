import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronRight, Unlock } from 'lucide-react';

const Experience: React.FC = () => {
  const [unlockedItems, setUnlockedItems] = useState<number[]>([]);

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Led development of modern web applications using React, TypeScript, and Node.js. Improved user experience by 40% through innovative UI designs.",
      skills: ["React", "TypeScript", "GraphQL", "AWS"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built scalable web applications from concept to deployment. Collaborated with cross-functional teams to deliver high-quality products.",
      skills: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "DigitalAgency Inc",
      period: "2018 - 2020",
      description: "Developed responsive websites and web applications for various clients. Specialized in creating engaging user interfaces.",
      skills: ["JavaScript", "CSS", "HTML", "jQuery"]
    }
  ];

  const unlockExperience = (index: number) => {
    if (!unlockedItems.includes(index)) {
      setUnlockedItems([...unlockedItems, index]);
    }
  };

  return (
    <section data-section="1" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-amber-400">//</span> Experience Archive
          </h2>
          <p className="text-gray-400 text-lg">Click to unlock each career milestone</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative p-6 border border-gray-800 rounded-lg transition-all duration-500 cursor-pointer hover:border-amber-400/50 ${
                unlockedItems.includes(index) ? 'bg-amber-400/5' : 'bg-gray-900/30'
              }`}
              onClick={() => unlockExperience(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-2 rounded transition-colors duration-300 ${
                  unlockedItems.includes(index) ? 'bg-amber-400 text-black' : 'bg-gray-800 text-gray-400'
                }`}>
                  {unlockedItems.includes(index) ? <Unlock className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                    unlockedItems.includes(index) ? 'text-amber-400' : 'text-gray-300'
                  }`}>
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>{exp.company}</span>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                  unlockedItems.includes(index) ? 'rotate-90 text-amber-400' : 'text-gray-600'
                }`} />
              </div>

              <div className={`overflow-hidden transition-all duration-500 ${
                unlockedItems.includes(index) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-amber-400/20 text-amber-400 rounded border border-amber-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;