import { useEffect, useRef } from 'react';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const parent = canvas.parentElement;

    let width = canvas.width = parent ? parent.clientWidth : window.innerWidth;
    let height = canvas.height = parent ? parent.clientHeight : window.innerHeight;

    // A mix of alphanumeric and symbols for the "bitcode" matrix look
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}|:"<>?~-=[]\\;\',./';
    const charArray = characters.split('');
    const fontSize = 28; // Increased size to make them massive and highly visible
    
    // MASSIVELY increase density by creating 3x the normal amount of columns
    let columns = Math.floor((width / fontSize) * 3);
    const drops: number[] = [];

    // Initialize drop positions randomly so they don't all start at the top together
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * height; 
    }

    let animationFrameId: number;
    let lastDrawTime = 0;
    const fps = 30; // Limit speed so it's readable and not crazy fast
    const interval = 1000 / fps;

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);
      
      const deltaTime = timestamp - lastDrawTime;
      if (deltaTime > interval) {
        lastDrawTime = timestamp - (deltaTime % interval);
        
        // Lower opacity for the fade out (0.05 instead of 0.1) creates much longer trails = more visible code
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);

        // The icy wintry cyan color for the bitcode
        ctx.fillStyle = '#06b6d4'; 
        ctx.font = `bold ${fontSize}px monospace`;
        ctx.textAlign = 'center';

        for (let i = 0; i < drops.length; i++) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          // Wrap x position around the width to allow for 3x density overlap
          const x = (i % Math.floor(width / fontSize)) * fontSize + (fontSize / 2);
          const y = drops[i] * fontSize;
          
          ctx.fillText(text, x, y);

          // Randomly reset a drop to the top
          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = parent ? parent.clientWidth : window.innerWidth;
      height = canvas.height = parent ? parent.clientHeight : window.innerHeight;
      let newColumns = Math.floor((width / fontSize) * 3);
      
      // Add new drops if screen gets wider
      if (newColumns > columns) {
        for (let x = columns; x < newColumns; x++) {
           drops[x] = Math.random() * height;
        }
      }
      columns = newColumns;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-100 mix-blend-screen" 
    />
  );
}
