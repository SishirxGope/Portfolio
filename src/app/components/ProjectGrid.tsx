import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    id: 'indoor-nav',
    name: 'INDOORNAVFRESH',
    description: 'Standalone Android indoor navigation app using WiFi fingerprinting with Gaussian MLE positioning and Bayesian smoothing.',
    tech: ['TypeScript', 'React Native', 'Android', 'WebGL'],
    image: '/projects/indoor_nav.png',
    github: 'https://github.com/SishirxGope/IndoorNavFresh'
  },
  {
    id: 'ai-twin',
    name: 'AI DIGITAL TWIN',
    description: 'Predictive Maintenance system utilizing an AI Digital Twin approach to forecast aircraft engine Remaining Useful Life (RUL) using XGBoost and Transformers.',
    tech: ['Python', 'XGBoost', 'Transformers', 'FastAPI'],
    image: '/projects/ai_twin.png',
    github: 'https://github.com/SishirxGope/ai_hackathon'
  },
  {
    id: 'cognitive',
    name: 'COGNITIVE LOAD ESTIMATOR',
    description: 'A clean, modular research prototype built for Human-Computer Interaction and Machine Learning exploration.',
    tech: ['Python', 'Machine Learning', 'HCI'],
    image: '/projects/cognitive_load.png',
    github: 'https://github.com/SishirxGope/cognitive_load_estimator'
  }
];

const getAssetUrl = (path: string) => {
  if (path.startsWith('/')) {
    const base = import.meta.env.BASE_URL;
    return base.endsWith('/') ? `${base}${path.slice(1)}` : `${base}${path}`;
  }
  return path;
};

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, i) => (
        <ScrollReveal key={project.id} delay={i * 0.1}>
          <div className="group border border-wintry/20 bg-black/50 hover:bg-black/80 transition-all duration-500 overflow-hidden relative h-full flex flex-col hover:border-wintry/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            {/* Image Container */}
            <div className="h-56 overflow-hidden relative border-b border-wintry/20">
              {/* Cyan overlay that fades on hover */}
              <div className="absolute inset-0 bg-wintry/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
              <img 
                src={getAssetUrl(project.image)} 
                alt={project.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
              />
            </div>
            
            {/* Content Container */}
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-cyber text-2xl font-bold text-white tracking-widest mb-3">
                {project.name}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 bg-wintry/5 border border-wintry/30 text-wintry font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mt-auto pt-6 border-t border-wintry/10">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-cyber tracking-widest text-white hover:text-wintry transition-colors"
                  >
                    <Github className="w-4 h-4" /> CODE
                  </a>
                )}
                <button className="flex items-center gap-2 text-sm font-cyber tracking-widest text-white hover:text-wintry transition-colors">
                  <ExternalLink className="w-4 h-4" /> DEMO
                </button>
              </div>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-wintry opacity-50" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-wintry opacity-50" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-wintry opacity-50" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-wintry opacity-50" />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
