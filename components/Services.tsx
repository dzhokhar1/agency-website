import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Rocket, ShieldAlert, Monitor, LifeBuoy, ArrowUpRight, Palette } from 'lucide-react';
import { Service } from '../types';

const services: (Service & { color: string, gradient: string })[] = [
  {
    id: '1',
    title: 'Разработка сайтов',
    description: 'От лендингов до порталов. Проектирование, дизайн, код.',
    icon: Monitor,
    color: 'text-blue-500',
    gradient: 'from-blue-500/10 to-transparent'
  },
  {
    id: '2',
    title: 'Продвижение (SEO)',
    description: 'Вывод в ТОП Яндекса и Google. Заявки и продажи.',
    icon: Rocket,
    color: 'text-orange-500',
    gradient: 'from-orange-500/10 to-transparent'
  },
  {
    id: '3',
    title: 'Мобильные приложения',
    description: 'iOS и Android приложения для бизнеса и стартапов.',
    icon: Smartphone,
    color: 'text-purple-500',
    gradient: 'from-purple-500/10 to-transparent'
  },
  {
    id: '4',
    title: 'Техподдержка',
    description: 'Ваш сайт всегда работает. Обновления и бэкапы.',
    icon: LifeBuoy,
    color: 'text-green-500',
    gradient: 'from-green-500/10 to-transparent'
  },
  {
    id: '5',
    title: 'Лечение вирусов',
    description: 'Чистка, восстановление и защита от взлома.',
    icon: ShieldAlert,
    color: 'text-red-500',
    gradient: 'from-red-500/10 to-transparent'
  },
  {
    id: '6',
    title: 'Дизайн и Бренд',
    description: 'Логотипы, фирменный стиль и UI/UX проектирование.',
    icon: Palette,
    color: 'text-pink-500',
    gradient: 'from-pink-500/10 to-transparent'
  },
];

const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative rounded-2xl border border-white/10 bg-black/20 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Компетенции</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">Что мы делаем</h2>
        </div>

        {/* Changed grid-cols-1 to grid-cols-2 for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="h-full"
            >
              <SpotlightCard className="h-full flex flex-col group hover:bg-white/5 transition-colors relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`}></div>
                
                <div className="p-4 md:p-8 relative z-10 h-full flex flex-col">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    <service.icon className={`${service.color} transition-colors duration-300 w-5 h-5 md:w-7 md:h-7`} />
                    </div>
                    <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-4 text-white group-hover:text-orange-400 transition-colors leading-tight">{service.title}</h3>
                    <p className="text-gray-400 leading-snug text-xs md:text-sm flex-grow line-clamp-2">
                    {service.description}
                    </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
          
           {/* CTA Card - Spans 2 columns on mobile */}
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 md:col-span-1 lg:col-span-1 md:row-span-1"
            >
              <a href="#contact" className="relative h-full min-h-[150px] md:min-h-[300px] flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-orange-800 p-6 text-center overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                 
                 <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-lg md:text-2xl font-bold text-white mb-1 block">Обсудить <br className="hidden md:block"/> задачу</span>
                    <span className="text-orange-100 text-xs md:text-sm block opacity-90">Есть идея?</span>
                 </div>
                 
                 <div className="absolute bottom-4 right-4 md:bottom-8 md:right-auto w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-orange-600 flex items-center justify-center transform md:translate-y-20 group-hover:translate-y-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;