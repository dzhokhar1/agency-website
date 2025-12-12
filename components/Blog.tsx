import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

const posts: (BlogPost & { image: string })[] = [
  {
    id: '1',
    title: '5 ошибок при запуске сайта',
    category: 'Стратегия',
    readTime: '3 мин',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Лендинг или интернет-магазин: как выбрать?',
    category: 'Бизнес',
    readTime: '5 мин',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2370&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Как ускорить сайт: 7 быстрых приёмов',
    category: 'Технологии',
    readTime: '4 мин',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2370&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Сколько стоит сайт в 2025: из чего складывается смета',
    category: 'Финансы',
    readTime: '6 мин',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2370&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Чек-лист перед запуском интернет-магазина',
    category: 'E-commerce',
    readTime: '4 мин',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2370&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Безопасность сайта: как не попасть под взлом повторно',
    category: 'Безопасность',
    readTime: '5 мин',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
           <div>
             <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Полезное</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white">Блог</h2>
           </div>
           <button className="hidden md:flex items-center text-white border-b border-white/20 pb-1 hover:text-orange-500 hover:border-orange-500 transition-all mt-4 md:mt-0">
              Читать все статьи <ArrowRight className="ml-2 w-4 h-4" />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] mb-6 bg-gray-900 border border-white/5">
                 {/* Real Image */}
                 <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                 </div>
                 
                 {/* Overlay Gradient for readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 
                 {/* Category Badge */}
                 <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-white z-10">
                    {post.category}
                 </div>
              </div>

              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                 <span>{post.readTime} чтения</span>
                 <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                 <span>Сегодня</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-orange-500 transition-colors">
                {post.title}
              </h3>
              
              <div className="flex items-center text-sm font-bold text-gray-500 group-hover:text-white transition-colors">
                 Читать <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="px-6 py-3 border border-white/20 rounded-full text-white font-bold hover:bg-white hover:text-black transition-colors">
              Читать все статьи
            </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;