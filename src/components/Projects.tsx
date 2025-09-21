import React, { useState } from 'react';
import { Github, ExternalLink, Lock, Unlock, Eye, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [openCases, setOpenCases] = useState<number[]>([]);

  const projects = [
    {
      title: "E-Commerce Platform",
      classification: "CASE #001",
      description: "Modern e-commerce platform with payment integration, user authentication, and admin dashboard. Built with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://demo-ecommerce.netlify.app",
      status: "Completed"
    },
    {
      title: "Task Management App",
      classification: "CASE #002", 
      description: "Collaborative task management application with real-time updates, team collaboration, and advanced filtering capabilities.",
      tech: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      github: "https://github.com/username/task-manager",
      demo: "https://task-manager-demo.vercel.app",
      status: "Active"
    },
    {
      title: "Weather Dashboard",
      classification: "CASE #003",
      description: "Interactive weather dashboard with location-based forecasts, historical data, and beautiful data visualizations.",
      tech: ["JavaScript", "D3.js", "REST APIs", "CSS Grid"],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-dash-demo.netlify.app",
      status: "Archived"
    }
  ];

  const openCase = (index: number) => {
    if (!openCases.includes(index)) {
      setOpenCases([...openCases, index]);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'Active': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      case 'Archived': return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
      default: return 'text-gray-400';
    }
  };

  return (
    <section data-section="2" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-pink-400">{'<'}</span> Project Case Files <span className="text-pink-400">{'>'}</span>
          </h2>
          <p className="text-gray-400 text-lg">Click to investigate each project</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group border-2 rounded-lg p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                openCases.includes(index)
                  ? 'border-pink-400 bg-pink-400/10 shadow-lg shadow-pink-400/25'
                  : 'border-gray-800 bg-gray-900/50 hover:border-gray-600'
              }`}
              onClick={() => openCase(index)}
            >
              {/* Case File Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {openCases.includes(index) ? (
                    <Unlock className="w-5 h-5 text-pink-400" />
                  ) : (
                    <Lock className="w-5 h-5 text-gray-400" />
                  )}
                  <span className={`text-sm font-mono ${openCases.includes(index) ? 'text-pink-400' : 'text-gray-400'}`}>
                    {project.classification}
                  </span>
                </div>
                <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Project Title */}
              <h3 className={`text-xl font-bold mb-2 ${openCases.includes(index) ? 'text-pink-400' : 'text-gray-300'}`}>
                {project.title}
              </h3>

              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                openCases.includes(index) ? 'max-h-96 opacity-100' : 'max-h-20 opacity-60'
              }`}>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {openCases.includes(index) && (
                  <>
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">TECHNOLOGIES:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-pink-400/20 text-pink-400 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-gray-300 hover:text-pink-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-gray-300 hover:text-pink-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* Scanning Effect */}
              {!openCases.includes(index) && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;