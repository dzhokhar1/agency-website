import React from 'react';
import { motion } from 'framer-motion';

const words = [
  "STRATEGY", "DESIGN", "DEVELOPMENT", "SEO", "MARKETING", 
  "REACT", "NEXT.JS", "TAILWIND", "ANIMATION", "UI/UX",
  "MOBILE APPS", "E-COMMERCE", "LANDING PAGE", "CORPORATE"
];

const InfiniteMarquee: React.FC = () => {
  return (
    <div className="relative w-full py-8 overflow-hidden bg-black/20 border-y border-white/5 backdrop-blur-sm z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex space-x-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...words, ...words, ...words, ...words].map((word, index) => (
            <div key={index} className="flex items-center space-x-12">
              <span className="text-4xl md:text-6xl font-extrabold text-transparent stroke-text opacity-30 hover:opacity-100 hover:text-orange-600 transition-all duration-300 cursor-default font-outline-2">
                {word}
              </span>
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            </div>
          ))}
        </motion.div>
      </div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
        .stroke-text:hover {
          -webkit-text-stroke: 0px;
        }
      `}</style>
    </div>
  );
};

export default InfiniteMarquee;