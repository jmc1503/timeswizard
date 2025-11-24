// src/components/CelebrationOverlay.jsx
import React, { useEffect } from 'react';

export default function CelebrationOverlay({ onFinish }) {

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, duration);
    return () => clearTimeout(timer);
  }, [onFinish]);

  // Generate a bunch of sparkles with random directions
  const sparkles = Array.from({ length: 30 }).map((_, index) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 100;
    const dx = Math.cos(angle) * distance + 'px';
    const dy = Math.sin(angle) * distance + 'px';
    const delay = Math.random() * 300;
    const colorClass = index % 2 === 0 ? 'gold-sparkle' : 'blue-sparkle';

    return (
      <div
        key={index}
        className={colorClass}
        style={{
          '--dx': dx,
          '--dy': dy,
          animation: `sparkle-fly 1200ms ease-out ${delay}ms forwards`
        }}
      />
    );
  });

  return (
    <div className="celebration-overlay">
      {sparkles}
      <div className="congrats-message">Magic Unlocked!</div>
    </div>
  );
}