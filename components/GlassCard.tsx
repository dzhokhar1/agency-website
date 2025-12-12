import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" } : {}}
      className={`
        relative backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl 
        rounded-2xl overflow-hidden
        ${className}
      `}
    >
      {/* Glossy highlight at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
      
      {children}
    </motion.div>
  );
};

export default GlassCard;