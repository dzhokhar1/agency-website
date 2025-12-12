import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: "Интернет-магазин автозапчастей",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1607799275518-d750cc6867a8?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-blue-600 to-blue-900"
  },
  {
    id: 2,
    title: "Корпоративный сайт застройщика",
    category: "Корпоративный",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-emerald-600 to-teal-900"
  },
  {
    id: 3,
    title: "Образовательная платформа",
    category: "EdTech",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-purple-600 to-indigo-900"
  },
  {
    id: 4,
    title: "Приложение доставки еды",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-orange-500 to-red-900"
  },
  {
    id: 5,
    title: "Landing Page для конференции",
    category: "Лендинг",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-pink-600 to-rose-900"
  },
  {
    id: 6,
    title: "Сайт юридической фирмы",
    category: "Корпоративный",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-gray-600 to-gray-900"
  }
];

const categories = ['Все', ...Array.from(new Set(allProjects.map(p => p.category)))];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredProjects = activeCategory === 'Все' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Наши кейсы</h2>
            <p className="text-gray-400 mb-8">Только реальные цифры и работающие решения</p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeCategory === category
                      ? 'bg-orange-600 text-white border-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.3)]'
                      : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </div>

        {/* Grid with AnimatePresence for filtering animations */}
        <motion.div 
           layout
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
           <AnimatePresence>
             {filteredProjects.map((project) => (
               <motion.div
                 layout
                 key={project.id}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.8 }}
                 transition={{ duration: 0.3 }}
                 className="relative group cursor-pointer overflow-hidden rounded-3xl border border-white/10 aspect-[4/3] min-h-[300px]"
               >
                  {/* Background Image Zoom Effect */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
                           {project.category}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-all duration-300 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100">
                           <ArrowUpRight size={20} />
                        </div>
                     </div>
                     
                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                           <p className="text-white/80 text-sm pb-2">Посмотреть кейс</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
             ))}
           </AnimatePresence>
        </motion.div>
        
        <div className="mt-12 text-center">
            <a href="#contact" className="text-gray-500 hover:text-white transition-colors text-sm border-b border-gray-700 hover:border-white pb-1">
               Посмотреть все 50+ проектов в PDF презентации
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;