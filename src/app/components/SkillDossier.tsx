import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Terminal, Brain, Cpu, Globe } from 'lucide-react';

export function SkillDossier() {
  return (
    <section className="py-32 px-8 bg-[#020202] relative border-t border-wintry/20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16 border-b border-wintry/20 pb-8">
            <Terminal className="text-wintry w-8 h-8" />
            <h3 className="font-cyber text-3xl md:text-4xl text-white tracking-widest uppercase">
              SKILLS
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pillar 1 */}
          <ScrollReveal delay={0.1}>
            <div className="group relative h-full">
              {/* Cyber Corners */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-wintry/50 transition-all duration-300 group-hover:border-wintry group-hover:-top-4 group-hover:-left-4" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-wintry/50 transition-all duration-300 group-hover:border-wintry group-hover:-bottom-4 group-hover:-right-4" />
              
              <div className="bg-wintry/[0.02] border border-wintry/10 p-8 h-full backdrop-blur-sm hover:bg-wintry/[0.05] transition-colors duration-500 flex flex-col">
                <Brain className="w-12 h-12 text-wintry mb-6" />
                <h4 className="font-cyber text-xl font-bold text-white mb-4 tracking-widest uppercase">INTELLIGENCE<br/>ARCHITECTURE</h4>
                <p className="text-gray-400 leading-relaxed font-light flex-grow">
                  Specializing in the development of advanced machine learning models and deep neural networks. Leveraging frameworks like <span className="text-wintry font-medium">TensorFlow</span> and <span className="text-wintry font-medium">PyTorch</span>, I architect systems capable of complex pattern recognition, predictive analytics, and continuous autonomous learning.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 2 */}
          <ScrollReveal delay={0.2}>
            <div className="group relative h-full">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-wintry/50 transition-all duration-300 group-hover:border-wintry group-hover:-top-4 group-hover:-left-4" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-wintry/50 transition-all duration-300 group-hover:border-wintry group-hover:-bottom-4 group-hover:-right-4" />
              
              <div className="bg-wintry/[0.02] border border-wintry/10 p-8 h-full backdrop-blur-sm hover:bg-wintry/[0.05] transition-colors duration-500 flex flex-col">
                <Cpu className="w-12 h-12 text-wintry mb-6" />
                <h4 className="font-cyber text-xl font-bold text-white mb-4 tracking-widest uppercase">AUTONOMOUS<br/>SYSTEMS</h4>
                <p className="text-gray-400 leading-relaxed font-light flex-grow">
                  Engineering the bridge between software intelligence and physical execution. Through <span className="text-wintry font-medium">ROS</span> (Robot Operating System) and <span className="text-wintry font-medium">OpenCV</span>, I develop robust computer vision pipelines and self-navigating hardware systems that perceive, map, and interact with complex environments.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 3 */}
          <ScrollReveal delay={0.3}>
            <div className="group relative h-full">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-wintry/50 transition-all duration-300 group-hover:border-wintry group-hover:-top-4 group-hover:-left-4" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-wintry/50 transition-all duration-300 group-hover:border-wintry group-hover:-bottom-4 group-hover:-right-4" />
              
              <div className="bg-wintry/[0.02] border border-wintry/10 p-8 h-full backdrop-blur-sm hover:bg-wintry/[0.05] transition-colors duration-500 flex flex-col">
                <Globe className="w-12 h-12 text-wintry mb-6" />
                <h4 className="font-cyber text-xl font-bold text-white mb-4 tracking-widest uppercase">CLOUD &<br/>INFRASTRUCTURE</h4>
                <p className="text-gray-400 leading-relaxed font-light flex-grow">
                  Building scalable, high-performance backends and intuitive user interfaces. Utilizing modern stacks including <span className="text-wintry font-medium">React</span>, <span className="text-wintry font-medium">Python</span>, and <span className="text-wintry font-medium">C++</span>, deployed seamlessly via <span className="text-wintry font-medium">Docker</span> and <span className="text-wintry font-medium">Google Cloud</span> to ensure global reliability and operational up-time.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
