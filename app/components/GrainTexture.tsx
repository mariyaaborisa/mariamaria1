'use client';

import { useEffect, useRef } from 'react';

export default function GrainTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Generate grain texture
    const generateGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        const noise = Math.random() * 255;
        // RGBA with low alpha for subtle grain
        buffer[i] = (Math.floor(noise / 8) << 24) | (noise << 16) | (noise << 8) | noise;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Animate grain
    let animationFrameId: number;
    const animate = () => {
      generateGrain();
      animationFrameId = requestAnimationFrame(animate);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Generate once for static grain
      generateGrain();
    } else {
      // Animate at lower frame rate (every 3 frames)
      let frameCount = 0;
      const animateThrottled = () => {
        frameCount++;
        if (frameCount % 3 === 0) {
          generateGrain();
        }
        animationFrameId = requestAnimationFrame(animateThrottled);
      };
      animationFrameId = requestAnimationFrame(animateThrottled);
    }

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-multiply"
      aria-hidden="true"
    />
  );
}
