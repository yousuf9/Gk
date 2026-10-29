import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'gold' | 'teal';
  intensity?: number;
}

export function TiltCard({
  children,
  className = '',
  glowColor = 'gold',
  intensity = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 24, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [intensity, -intensity]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-intensity, intensity]),
    springConfig
  );

  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(px);
    mouseY.set(py);
    setSpotlight({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const accentRgba =
    glowColor === 'gold' ? 'rgba(224, 171, 63, 0.16)' : 'rgba(41, 195, 180, 0.16)';

  return (
    <div className="perspective-[1200px] h-full">
      <motion.div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative h-full transition-shadow duration-300 ${className}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-10"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, ${accentRgba}, transparent 65%)`,
          }}
        />
        {children}
      </motion.div>
    </div>
  );
}
