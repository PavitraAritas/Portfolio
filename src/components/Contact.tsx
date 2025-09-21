import React, { useState } from 'react';
import { Mail, Linkedin, MessageCircle, Copy, Check, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/your-profile",
    discord: "YourUsername#1234"
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section data-section="4" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-green-400">$</span> Initialize Contact <span className="text-green-400">_</span>
          </h2>
          <p className="text-gray-400 text-lg">Ready to collaborate? Let's connect</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Email */}
            <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg group-hover:bg-green-400/30 transition-colors">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-1">Email</h3>
                  <p className="text-gray-300 font-mono text-sm">{contactInfo.email}</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded bg-green-400/20 text-green-400 hover:bg-green-400/30 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg group-hover:bg-green-400/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-1">LinkedIn</h3>
                  <p className="text-gray-300 text-sm">Professional Network</p>
                </div>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-green-400/20 text-green-400 hover:bg-green-400/30 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Discord */}
            <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg group-hover:bg-green-400/30 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-1">Discord</h3>
                  <p className="text-gray-300 font-mono text-sm">{contactInfo.discord}</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Terminal Window */}
          <div className="bg-black rounded-lg border border-green-400/30 overflow-hidden">
            <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="ml-2 text-gray-400 text-sm font-mono">terminal</span>
            </div>
            
            <div className="p-6 font-mono text-sm space-y-2">
              <div className="text-green-400">$ whoami</div>
              <div className="text-gray-300">Software Developer & Problem Solver</div>
              
              <div className="text-green-400 mt-4">$ cat interests.txt</div>
              <div className="text-gray-300">
                - Frontend Development<br/>
                - UI/UX Design<br/>
                - Interactive Experiences<br/>
                - Open Source Projects<br/>
                - Continuous Learning
              </div>
              
              <div className="text-green-400 mt-4">$ echo $AVAILABILITY</div>
              <div className="text-gray-300">Open for opportunities and collaborations</div>
              
              <div className="text-green-400 mt-4">$ contact --help</div>
              <div className="text-gray-300">
                Available communication channels:<br/>
                --email    Professional inquiries<br/>
                --linkedin Business networking<br/>
                --discord  Casual conversations
              </div>
              
              <div className="flex items-center mt-4">
                <span className="text-green-400">$ </span>
                <div className="animate-pulse text-green-400 ml-1">_</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            Built with <span className="text-green-400">React</span> + <span className="text-green-400">TypeScript</span> + <span className="text-green-400">Tailwind CSS</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2025 - Crafted with passion for code and design</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;