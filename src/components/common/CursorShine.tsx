import React, { useEffect, useState } from 'react';

export function CursorShine() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Primary glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, 
            rgba(93, 224, 230, 0.08),
            rgba(59, 130, 246, 0.05) 20%,
            transparent 40%
          )`
        }}
      />
      
      {/* Secondary subtle glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, 
            rgba(93, 224, 230, 0.05),
            transparent 30%
          )`
        }}
      />
      
      {/* Core highlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: `radial-gradient(80px circle at ${position.x}px ${position.y}px, 
            rgba(93, 224, 230, 0.1),
            transparent 20%
          )`
        }}
      />
    </>
  );
}