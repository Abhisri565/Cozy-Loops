import React, { useRef, useState, useEffect } from 'react';

export function MagneticButton({ children, range = 50 }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      // Center coordinates of the button
      const centerX = rect.left + width / 2;
      const centerY = rect.top + height / 2;
      
      // Distance from mouse to center of button
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Absolute distance
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // If mouse is within the magnetic range
      if (distance < range) {
        // Calculate magnetic pull (subtle coordinate offset towards the mouse)
        const pullX = distanceX * 0.35;
        const pullY = distanceY * 0.35;
        setPosition({ x: pullX, y: pullY });
      } else {
        // Reset to original position
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [range]);

  const { x, y } = position;

  // Render children with transform offset
  return (
    <div 
      ref={buttonRef}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: x === 0 && y === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s cubic-bezier(0.25, 0.61, 0.49, 0.9)',
        display: 'inline-block'
      }}
    >
      {children}
    </div>
  );
}
