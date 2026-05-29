import { useEffect, useRef } from 'react';

interface SnowyNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  char: string;
}

const CHARACTERS = "01010101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]()<>+-*/=";

export function NetworkCodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let nodes: SnowyNode[] = [];
    const nodeCount = Math.floor((width * height) / 4000); // Balance for performance and density

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: Math.random() * 1.2 + 0.3, // Falling gently
          angle: Math.random() * Math.PI * 2, // For snow flutter
          char: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
        });
      }
    };

    initNodes();

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.font = "14px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Flutter effect like snow
        node.angle += 0.02;
        node.x += Math.sin(node.angle) * 0.5 + node.vx;
        node.y += node.vy;

        // Reset if out of bounds (loop to top)
        if (node.y > height + 20) {
          node.y = -20;
          node.x = Math.random() * width;
          node.char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;

        // Draw Neural Network connections
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 120;

          if (distSq < maxDist * maxDist) {
            const opacity = 1 - Math.sqrt(distSq) / maxDist;
            ctx.beginPath();
            // Soft snowy lines
            ctx.strokeStyle = `rgba(160, 175, 190, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        }

        // Periodically change character to look like active data stream
        if (Math.random() < 0.01) {
          node.char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }

        // Draw byte stream character (Soft snowy color)
        ctx.fillStyle = `rgba(150, 165, 180, 0.6)`;
        ctx.fillText(node.char, node.x, node.y);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
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
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
    />
  );
}
