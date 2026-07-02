import React, { useRef, useEffect } from 'react';

export function CanvasText({ 
  text, 
  colors = ['#C5A059', '#F2EEE5', '#8C6A3F', '#7A7670', '#E5D3B3'],
  lineGap = 4, 
  animationDuration = 20
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let offset = 0;

    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      // Use a responsive font size based on screen width
      const fontSize = width < 500 ? '3.2rem' : '4.5rem';
      
      // 1. Draw Text (Mask base)
      ctx.font = `900 ${fontSize} 'Italiana', serif`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      ctx.fillStyle = '#FFFFFF';
      
      // Vertical alignment centering
      const textX = 0;
      const textY = height / 2;
      ctx.fillText(text, textX, textY);

      // 2. Set Composite Operation to mask waves inside text characters
      ctx.globalCompositeOperation = 'source-in';

      // 3. Draw animated waving yarn threads using colors
      offset += (0.1 / animationDuration) * 10;
      
      const waveCount = 10;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const colorIndex = i % colors.length;
        ctx.strokeStyle = colors[colorIndex];
        ctx.lineWidth = 2.0;
        ctx.globalAlpha = 0.85 - (i * 0.05);

        const yOffset = textY - 30 + i * lineGap;
        ctx.moveTo(0, yOffset);

        for (let x = 0; x < width; x += 5) {
          // Complex sine-wave combination to create moving thread loops
          const angle = (x * 0.015) + offset + (i * 0.3);
          const y = yOffset + Math.sin(angle) * 12 + Math.cos(angle * 0.5) * 6;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // 4. Draw backing text and dark outline to maximize contrast
      ctx.globalCompositeOperation = 'destination-over';
      
      // Draw a subtle dark outline to separate text from the background
      ctx.strokeStyle = 'rgba(17, 17, 16, 0.9)';
      ctx.lineWidth = 6;
      ctx.strokeText(text, textX, textY);

      // Draw solid bright white backing text
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(text, textX, textY);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, colors, lineGap, animationDuration]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '90px', 
        display: 'inline-block',
        overflow: 'hidden'
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
