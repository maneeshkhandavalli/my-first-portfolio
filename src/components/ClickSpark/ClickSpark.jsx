import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickSpark = ({ 
  sparkColor = '#fff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  children 
}) => {
  const [clickPositions, setClickPositions] = useState([]);

  const handleClick = useCallback((e) => {
    // Only capture events if it's on a non-interactive element or we want it globally
    // Actually, capturing globally is fine.
    const { clientX, clientY } = e;
    const newClick = { id: Date.now(), x: clientX, y: clientY };
    setClickPositions((prev) => [...prev, newClick]);

    setTimeout(() => {
      setClickPositions((prev) => prev.filter((pos) => pos.id !== newClick.id));
    }, duration);
  }, [duration]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <>
      {children}
      {clickPositions.map((pos) => {
        const sparks = [];
        for (let i = 0; i < sparkCount; i++) {
          const angle = (i * (360 / sparkCount)) * (Math.PI / 180);
          const distance = sparkRadius * 1.5; // Slightly larger radius for better effect
          const targetX = Math.cos(angle) * distance;
          const targetY = Math.sin(angle) * distance;

          sparks.push(
            <motion.div
              key={`${pos.id}-${i}`}
              initial={{
                x: pos.x,
                y: pos.y,
                scale: 1,
                opacity: 1
              }}
              animate={{
                x: pos.x + targetX,
                y: pos.y + targetY,
                scale: 0,
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: duration / 1000, 
                ease: "easeOut",
                opacity: { times: [0, 0.6, 1] }
              }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 6,
                height: 6,
                backgroundColor: sparkColor,
                boxShadow: `0 0 8px ${sparkColor}`,
                pointerEvents: 'none',
                zIndex: 9999,
                borderRadius: '50%',
                marginLeft: -3,
                marginTop: -3
              }}
            />
          );
        }
        return <React.Fragment key={pos.id}>{sparks}</React.Fragment>;
      })}
    </>
  );
};

export default ClickSpark;
