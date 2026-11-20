import React, { useEffect, useRef } from 'react';

export default function PulseCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let offset = 0;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = 64;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const renderWave = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.strokeStyle = '#afc9ea';
      ctx.lineWidth = 2;

      const points = [];
      const step = 8;
      for (let x = 0; x <= width; x += step) {
        const freq1 = Math.sin((x + offset) * 0.04) * 12;
        const freq2 = Math.cos(x * 0.02 + offset * 0.06) * 10;
        const beat = Math.sin(offset * 0.05) > 0.8 ? Math.sin(x * 0.1) * 15 : 0;
        const y = height / 2 + freq1 + freq2 + beat;
        points.push({ x, y });
      }

      if (points.length) {
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();

        // Soft gradient fill beneath wave
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, 'rgba(175, 201, 234, 0.12)');
        grad.addColorStop(1, 'rgba(175, 201, 234, 0.00)');
        ctx.fillStyle = grad;
        ctx.fill();
      }

      offset += 1.8;
      animationFrameId = requestAnimationFrame(renderWave);
    };

    renderWave();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-16 block" />;
}
