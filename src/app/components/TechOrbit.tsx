import React from 'react';

const OUTER_TECHS = [
  { name: 'Python', url: 'https://cdn.simpleicons.org/python/ffffff' },
  { name: 'TensorFlow', url: 'https://cdn.simpleicons.org/tensorflow/ffffff' },
  { name: 'PyTorch', url: 'https://cdn.simpleicons.org/pytorch/ffffff' },
  { name: 'C++', url: 'https://cdn.simpleicons.org/cplusplus/ffffff' },
  { name: 'ROS', url: 'https://cdn.simpleicons.org/ros/ffffff' },
  { name: 'OpenCV', url: 'https://cdn.simpleicons.org/opencv/ffffff' },
  { name: 'Google Cloud', url: 'https://cdn.simpleicons.org/googlecloud/ffffff' },
  { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/ffffff' },
];

const INNER_TECHS = [
  { name: 'React', url: 'https://cdn.simpleicons.org/react/ffffff' },
  { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/ffffff' },
  { name: 'Git', url: 'https://cdn.simpleicons.org/git/ffffff' },
  { name: 'Linux', url: 'https://cdn.simpleicons.org/linux/ffffff' },
  { name: 'Scikit-Learn', url: 'https://cdn.simpleicons.org/scikitlearn/ffffff' },
  { name: 'NVIDIA', url: 'https://cdn.simpleicons.org/nvidia/ffffff' },
];

export function TechOrbit() {
  const outerRadius = 300; // Increased to spread them out
  const innerRadius = 180; // Increased to spread them out
  
  return (
    <div className="relative w-full h-[800px] flex items-center justify-center">
      
      {/* Outer Circle (Rotates Clockwise, same as reactor) */}
      <div 
        className="absolute flex items-center justify-center"
        style={{ animation: 'spinOuter 60s linear infinite' }}
      >
        {/* The visual ring */}
        <div className="absolute rounded-full border border-wintry/20" style={{ width: outerRadius * 2, height: outerRadius * 2 }} />
        
        {OUTER_TECHS.map((tech, index) => {
          const angle = (index / OUTER_TECHS.length) * 2 * Math.PI;
          const x = Math.cos(angle) * outerRadius;
          const y = Math.sin(angle) * outerRadius;

          return (
            <div 
              key={tech.name}
              className="absolute w-20 h-20 flex items-center justify-center cursor-pointer group"
              style={{ 
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* Counter-rotate the icon so it stays upright! */}
              <div style={{ animation: 'spinOuterReverse 60s linear infinite' }} className="w-20 h-20 flex items-center justify-center relative">
                <img 
                  src={tech.url} 
                  alt={tech.name} 
                  className="w-20 h-20 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,1)]" 
                  title={tech.name} 
                />
                
                {/* HUD Label that appears on hover */}
                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 border border-wintry/30 backdrop-blur-md px-3 py-1.5 rounded text-[12px] font-cyber tracking-widest text-wintry whitespace-nowrap pointer-events-none">
                  {tech.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inner Circle (Rotates Counter-Clockwise) */}
      <div 
        className="absolute flex items-center justify-center"
        style={{ animation: 'spinInner 40s linear infinite' }}
      >
        {/* The visual ring */}
        <div className="absolute rounded-full border border-wintry/30 border-dashed" style={{ width: innerRadius * 2, height: innerRadius * 2 }} />
        
        {INNER_TECHS.map((tech, index) => {
          const angle = (index / INNER_TECHS.length) * 2 * Math.PI;
          const x = Math.cos(angle) * innerRadius;
          const y = Math.sin(angle) * innerRadius;

          return (
            <div 
              key={tech.name}
              className="absolute w-16 h-16 flex items-center justify-center cursor-pointer group"
              style={{ 
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* Counter-rotate the icon so it stays upright! */}
              <div style={{ animation: 'spinInnerReverse 40s linear infinite' }} className="w-16 h-16 flex items-center justify-center relative">
                <img 
                  src={tech.url} 
                  alt={tech.name} 
                  className="w-16 h-16 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,1)]" 
                  title={tech.name} 
                />

                {/* HUD Label that appears on hover */}
                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 border border-wintry/30 backdrop-blur-md px-3 py-1.5 rounded text-[12px] font-cyber tracking-widest text-wintry whitespace-nowrap pointer-events-none">
                  {tech.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Keyframes mathematically mapped to guarantee upright counter-rotation */}
      <style>{`
        @keyframes spinOuter {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinOuterReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spinInner {
          from { transform: rotate(360deg); } 
          to { transform: rotate(0deg); }
        }
        @keyframes spinInnerReverse {
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
