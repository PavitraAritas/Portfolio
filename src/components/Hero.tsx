import React, { useState, useEffect } from 'react';
import { ChevronDown, Terminal, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, I'm a Software Developer";

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!revealed) return;
    
    let index = 0;
    const typeTimer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typeTimer);
      }
    }, 50);

    return () => clearInterval(typeTimer);
  }, [revealed]);

  return (
    <section data-section="0" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-400 animate-pulse"
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {!revealed ? (
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4 text-cyan-400">
              <Terminal className="w-8 h-8 animate-pulse" />
              <div className="text-xl font-mono">Initializing...</div>
              <Code2 className="w-8 h-8 animate-pulse" />
            </div>
            <div className="w-64 h-2 bg-gray-800 mx-auto rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 animate-pulse" style={{ width: '100%', animation: 'loading 1.5s ease-in-out' }} />
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Profile Photo with Mystery Theme */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-cyan-400/30 overflow-hidden bg-gray-800 flex items-center justify-center group-hover:border-cyan-400/60 transition-all duration-300">
                  {/* Placeholder - Replace src with your photo */}
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Pavitra Aritas" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 flex items-center justify-center text-cyan-400 text-4xl font-bold" style={{display: 'none'}}>
                    PA
                  </div>
                </div>
                {/* Scanning effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold font-mono">
              <span className="text-cyan-400 text-7xl md:text-9xl">></span> 
              <span className="text-white drop-shadow-lg">{typedText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            
            {/* Name highlight */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 tracking-wider">
                PAVITRA ARITAS
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 max-w-2xl mx-auto">
              <p className="text-xl">
                Welcome to Pavitra Aritas' digital investigation. I solve problems with code,
                craft AI-powered solutions, and build scalable applications.
              </p>
              <p className="text-lg opacity-80">
                Experienced software engineer with over 3 years in AI-powered solutions, 
                cloud services, and full-stack development. Passionate about advancing technology 
                and committed to delivering high-quality, reliable software solutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="px-3 py-1 border border-cyan-400/30 rounded bg-cyan-400/10">React</span>
              <span className="px-3 py-1 border border-cyan-400/30 rounded bg-cyan-400/10">TypeScript</span>
              <span className="px-3 py-1 border border-cyan-400/30 rounded bg-cyan-400/10">Node.js</span>
              <span className="px-3 py-1 border border-cyan-400/30 rounded bg-cyan-400/10">Python</span>
              <span className="px-3 py-1 border border-cyan-400/30 rounded bg-cyan-400/10">AWS</span>
              <span className="px-3 py-1 border border-cyan-400/30 rounded bg-cyan-400/10">AI/ML</span>
            </div>
          </div>
        )}
      </div>

      {revealed && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      )}

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;