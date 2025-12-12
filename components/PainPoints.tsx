import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const pains = [
  "Затягивают сроки и не выполняют обещания",
  "Оставляют без поддержки сразу после запуска",
  "Не понимают бизнес-цели",
  "Выставляют высокие цены без результата",
  "Не учитывают безопасность",
  "Исчезают на связи и срывают дедлайны"
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: The "Pain" */}
          <div className="order-2 lg:order-1">
             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-400 leading-tight">
                Сталкивались с разработчиками, которые...
             </h2>
             <div className="space-y-4 relative">
                {/* Decorative background blur for pains */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-900/10 blur-[60px] rounded-full pointer-events-none"></div>

                {pains.map((pain, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-xl border border-red-500/10 bg-black/40 backdrop-blur-sm hover:border-red-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                       <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-gray-300 font-medium">{pain}</span>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Right Column: The Solution */}
          <div className="relative order-1 lg:order-2">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10"
             >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl blur opacity-30 animate-pulse"></div>
                <div className="relative bg-[#0A0A0A] border border-orange-500/30 rounded-3xl overflow-hidden shadow-2xl">
                   
                   {/* Image Header */}
                   <div className="h-48 relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop" 
                        alt="Handshake" 
                        className="w-full h-full object-cover opacity-60" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                      <div className="absolute bottom-4 left-8">
                         <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg mb-2">
                            <Check className="w-6 h-6 text-white" strokeWidth={3} />
                         </div>
                         <h3 className="text-3xl font-bold text-white">Мы работаем иначе</h3>
                      </div>
                   </div>

                   <div className="p-8 md:p-10">
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        Никаких сюрпризов. Мы работаем как со своим проектом: фиксируем ТЗ, соблюдаем дедлайны и остаемся на связи каждый день.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                         <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                            <div className="text-2xl font-black text-white mb-1">100%</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Соблюдение сроков</div>
                         </div>
                         <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                            <div className="text-2xl font-black text-white mb-1">24/7</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Личный менеджер</div>
                         </div>
                      </div>

                      <a href="#contact" className="inline-flex items-center justify-center w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg">
                         Получить бесплатную консультацию
                      </a>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;