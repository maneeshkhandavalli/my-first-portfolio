import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StarTrail = () => {
  const [stars, setStars] = useState([]);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);

      // Spawn a star every 25px moved
      if (dist > 25) {
        lastPos.current = { x, y };

        const newStar = {
          id: Date.now() + Math.random(),
          x,
          y,
          size: Math.random() * 6 + 10, // 10px to 16px
        };

        setStars((prev) => [...prev, newStar]);

        setTimeout(() => {
          setStars((prev) => prev.filter((star) => star.id !== newStar.id));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998 }}>
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 1, scale: 0.5, x: star.x, y: star.y, rotate: 0 }}
            animate={{
              opacity: 0,
              scale: 0,
              x: star.x + (Math.random() - 0.5) * 50, // Slight horizontal drift
              y: star.y + 20 + Math.random() * 20, // Drift downwards
              rotate: 180 // Spin
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: 'absolute',
              color: '#ffffff',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.9)', // Glow effect
              fontSize: star.size,
              marginLeft: -star.size / 2,
              marginTop: -star.size / 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✦
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StarTrail;
