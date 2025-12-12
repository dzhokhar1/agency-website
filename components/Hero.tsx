import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileCheck, TrendingUp, Timer, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center pt-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Digital Abstract" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center h-full justify-center pb-16">
        
        {/* Main Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-8 relative z-20"
        >
          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-white">
            САЙТ, КОТОРЫЙ
          </motion.h1>
          <motion.div variants={item} className="relative inline-block my-4">
             <span className="absolute -inset-2 bg-orange-600/30 blur-3xl rounded-full"></span>
             <h1 
               className="relative text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-orange-400 bg-[length:200%_auto]"
               style={{ animation: 'gradient-move 3s linear infinite' }}
             >
                ПРИНОСИТ ДЕНЬГИ
             </h1>
          </motion.div>
          <style>{`
            @keyframes gradient-move {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
          `}</style>
        </motion.div>

        {/* Trust Badge - Moved down by adding mt-12 */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mt-4 mb-12 backdrop-blur-md shadow-lg shadow-orange-500/10 relative z-20"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center overflow-hidden">
                 <img src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="client" className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
          <div className="text-left leading-tight">
            <span className="block text-sm font-bold text-white">Более 200 клиентов</span>
            <span className="block text-[10px] text-gray-400 font-medium">довольны результатом</span>
          </div>
        </motion.div>

        {/* Competitive Advantages - Wider on Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-10 w-full max-w-6xl mx-auto"
        >
            <div className="flex items-center space-x-3 text-sm text-gray-200 font-semibold bg-white/5 px-6 py-4 rounded-xl border border-white/5 hover:border-orange-500/30 transition-colors min-w-[200px] md:min-w-fit justify-center">
               <TrendingUp size={18} className="text-orange-500 shrink-0" />
               <span className="whitespace-normal md:whitespace-nowrap">Окупаемость ~2 месяца</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-200 font-semibold bg-white/5 px-6 py-4 rounded-xl border border-white/5 hover:border-orange-500/30 transition-colors min-w-[200px] md:min-w-fit justify-center">
               <Timer size={18} className="text-blue-500 shrink-0" />
               <span className="whitespace-normal md:whitespace-nowrap">Первые лиды через 7 дней</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-200 font-semibold bg-white/5 px-6 py-4 rounded-xl border border-white/5 hover:border-orange-500/30 transition-colors min-w-[200px] md:min-w-fit justify-center">
               <FileCheck size={18} className="text-green-500 shrink-0" />
               <span className="whitespace-normal md:whitespace-nowrap">Гарантия продаж в договоре</span>
            </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative group z-20"
        >
           <a 
             href="#calculator"
             className="relative z-10 px-10 py-5 bg-orange-600 text-white rounded-xl font-bold text-xl shadow-[0_0_40px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_rgba(234,88,12,0.5)] transition-all transform hover:-translate-y-1 flex items-center"
           >
             Рассчитать стоимость <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
           </a>
        </motion.div>
        
        {/* Floating Arrow - Fixed to VERY bottom of screen */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 2 }}
           className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50"
          >
             <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;