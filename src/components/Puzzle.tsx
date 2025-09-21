import React, { useState, useEffect } from 'react';
import { Check, X, RotateCcw, Lightbulb } from 'lucide-react';

const Puzzle: React.FC = () => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [completedSlots, setCompletedSlots] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  
  const codeFragments = [
    { id: 'react', text: 'React.useState()', type: 'hook' },
    { id: 'function', text: 'function component()', type: 'declaration' },
    { id: 'return', text: 'return <div>', type: 'jsx' },
    { id: 'import', text: 'import React from', type: 'import' },
  ];

  const dropZones = [
    { id: 'import', correct: 'import', label: '1. Import statement', hint: 'How do we bring React into our file?' },
    { id: 'declaration', correct: 'function', label: '2. Component declaration', hint: 'How do we define a React component?' },
    { id: 'hook', correct: 'react', label: '3. State management', hint: 'How do we manage component state?' },
    { id: 'jsx', correct: 'return', label: '4. JSX return', hint: 'How do we return JSX from a component?' },
  ];

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, zoneId: string) => {
    e.preventDefault();
    const zone = dropZones.find(z => z.id === zoneId);
    const fragment = codeFragments.find(f => f.id === draggedItem);
    
    if (zone && fragment && zone.correct === fragment.id) {
      setCompletedSlots([...completedSlots.filter(s => s !== zoneId), zoneId]);
    }
    setDraggedItem(null);
  };

  const resetPuzzle = () => {
    setCompletedSlots([]);
    setShowHint(false);
  };

  const isComplete = completedSlots.length === dropZones.length;

  return (
    <section data-section="3" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-purple-400">{'{'}</span> Interactive Code Puzzle <span className="text-purple-400">{'}'}</span>
          </h2>
          <p className="text-gray-400 text-lg">Drag the code fragments to complete the React component</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Code Fragments */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              <span>Code Fragments</span>
              <button
                onClick={() => setShowHint(!showHint)}
                className="p-1 rounded bg-purple-400/20 text-purple-400 hover:bg-purple-400/30 transition-colors"
              >
                <Lightbulb className="w-4 h-4" />
              </button>
            </h3>
            
            <div className="grid grid-cols-1 gap-3">
              {codeFragments.map((fragment) => (
                <div
                  key={fragment.id}
                  draggable={!completedSlots.includes(fragment.type)}
                  onDragStart={(e) => handleDragStart(e, fragment.id)}
                  className={`p-4 rounded-lg border-2 border-dashed font-mono text-sm cursor-move transition-all duration-300 ${
                    completedSlots.includes(fragment.type)
                      ? 'border-green-400/50 bg-green-400/10 text-green-400 opacity-50'
                      : 'border-purple-400/50 bg-purple-400/10 text-purple-400 hover:border-purple-400 hover:bg-purple-400/20'
                  }`}
                >
                  {fragment.text}
                  {completedSlots.includes(fragment.type) && (
                    <Check className="w-4 h-4 inline-block ml-2" />
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={resetPuzzle}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Puzzle
            </button>
          </div>

          {/* Drop Zones */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Component Structure</h3>
            
            {dropZones.map((zone) => (
              <div
                key={zone.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, zone.id)}
                className={`p-4 rounded-lg border-2 border-dashed min-h-16 flex items-center transition-all duration-300 ${
                  completedSlots.includes(zone.id)
                    ? 'border-green-400 bg-green-400/10'
                    : 'border-gray-600 bg-gray-800/50 hover:border-purple-400/50'
                }`}
              >
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-1">{zone.label}</div>
                  {completedSlots.includes(zone.id) ? (
                    <div className="font-mono text-green-400 flex items-center gap-2">
                      {codeFragments.find(f => f.type === zone.id)?.text}
                      <Check className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="text-gray-500 font-mono">
                      {showHint ? zone.hint : 'Drop code here...'}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Message */}
        {isComplete && (
          <div className="mt-8 p-6 bg-green-400/10 border border-green-400/30 rounded-lg text-center">
            <div className="text-2xl text-green-400 mb-2">🎉 Puzzle Complete!</div>
            <p className="text-gray-300">
              Great job! You've successfully assembled a basic React component structure.
              This demonstrates understanding of React fundamentals, component lifecycle, and JSX.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Puzzle;