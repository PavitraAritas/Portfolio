import React, { useState, useEffect } from 'react';
import { Code2, Database, Cloud, Brain, Zap, CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "React.js", level: 95, description: "Advanced component architecture & state management" },
        { name: "TypeScript", level: 90, description: "Type-safe development & complex type definitions" },
        { name: "Next.js", level: 85, description: "Full-stack React framework with SSR/SSG" },
        { name: "TailwindCSS", level: 90, description: "Utility-first CSS framework & responsive design" },
        { name: "Redux", level: 80, description: "State management for complex applications" }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Database className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "Node.js", level: 85, description: "Server-side JavaScript & microservices" },
        { name: "Python", level: 90, description: "Backend development & data processing" },
        { name: "REST APIs", level: 90, description: "RESTful service design & implementation" },
        { name: "PostgreSQL", level: 80, description: "Relational database design & optimization" },
        { name: "MongoDB", level: 75, description: "NoSQL database & document modeling" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "green",
      skills: [
        { name: "AWS", level: 85, description: "Lambda, EC2, S3, RDS, API Gateway" },
        { name: "Docker", level: 75, description: "Containerization & deployment" },
        { name: "CI/CD", level: 80, description: "Jenkins, automated testing & deployment" },
        { name: "Git", level: 90, description: "Version control & collaborative development" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "pink",
      skills: [
        { name: "LangChain", level: 85, description: "RAG pipelines & LLM integration" },
        { name: "OpenAI API", level: 80, description: "GPT integration & prompt engineering" },
        { name: "Vector Databases", level: 75, description: "ChromaDB, Pinecone for semantic search" },
        { name: "NLP", level: 80, description: "Text processing, sentiment analysis, BERT" },
        { name: "TensorFlow", level: 70, description: "Machine learning model development" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSkills = skillCategories[activeCategory].skills.map(skill => skill.name);
      setAnimatedSkills(currentSkills);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/30',
        text: 'text-purple-400',
        progress: 'bg-purple-400'
      },
      blue: {
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/30',
        text: 'text-blue-400',
        progress: 'bg-blue-400'
      },
      green: {
        bg: 'bg-green-400/10',
        border: 'border-green-400/30',
        text: 'text-green-400',
        progress: 'bg-green-400'
      },
      pink: {
        bg: 'bg-pink-400/10',
        border: 'border-pink-400/30',
        text: 'text-pink-400',
        progress: 'bg-pink-400'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section data-section="3" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-purple-400">{'<'}</span> Technical Arsenal <span className="text-purple-400">{'/>'}</span>
          </h2>
          <p className="text-gray-400 text-lg">Expertise across the full technology stack</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1 space-y-4">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    activeCategory === index
                      ? `${colors.bg} ${colors.border} ${colors.text}`
                      : 'border-gray-800 bg-gray-900/30 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <span className="font-semibold">{category.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => {
                const colors = getColorClasses(skillCategories[activeCategory].color);
                const isAnimated = animatedSkills.includes(skill.name);
                
                return (
                  <div
                    key={skill.name}
                    className={`p-6 rounded-lg border transition-all duration-500 ${colors.bg} ${colors.border}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-xl font-bold ${colors.text}`}>{skill.name}</h3>
                        {isAnimated && (
                          <CheckCircle className={`w-5 h-5 ${colors.text} animate-pulse`} />
                        )}
                      </div>
                      <span className={`text-sm font-mono ${colors.text}`}>{skill.level}%</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{skill.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${colors.progress} transition-all duration-1000 ease-out`}
                        style={{
                          width: isAnimated ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-gray-400">Major Projects</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="text-3xl font-bold text-pink-400 mb-2">3.9</div>
            <div className="text-gray-400">GPA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;