import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, ShoppingCart, Feather, Globe, GraduationCap, ChevronRight } from 'lucide-react';
import { PricePlan } from '../types';

const prices: (PricePlan & { icon: any, gradient: string, accent: string })[] = [
  {
    id: '1',
    title: 'Лендинг',
    price: '30 000 ₽',
    subtitle: 'Быстрый старт',
    icon: Zap,
    gradient: 'from-gray-800 to-gray-900',
    accent: 'text-blue-400',
    features: [
      'Уникальный дизайн',
      'Мобильная версия',
      'Формы заявки в TG',
      'Домен в подарок'
    ]
  },
  {
    id: '2',
    title: 'Магазин',
    price: '80 000 ₽',
    subtitle: 'Мощный старт',
    isPopular: true,
    icon: ShoppingCart,
    gradient: 'from-orange-900/40 to-black',
    accent: 'text-orange-500',
    features: [
      'Каталог товаров',
      'Корзина и оплата',
      'Админ-панель',
      'SEO-оптимизация'
    ]
  },
  {
    id: '3',
    title: 'Блог',
    price: '50 000 ₽',
    subtitle: 'Личный бренд',
    icon: Feather,
    gradient: 'from-gray-800 to-gray-900',
    accent: 'text-purple-400',
    features: [
      'Стильный UI/UX',
      'Удобная админка',
      'Подписка на рассылку',
      'Быстрая загрузка'
    ]
  },
  {
    id: '4',
    title: 'Портал',
    price: '150 000 ₽',
    subtitle: 'Масштабный проект',
    icon: Globe,
    gradient: 'from-gray-800 to-gray-900',
    accent: 'text-emerald-400',
    features: [
      'Личные кабинеты',
      'Сложная логика',
      'Интеграции по API',
      'Высокая нагрузка'
    ]
  },
  {
    id: '5',
    title: 'EdTech',
    price: '200 000 ₽',
    subtitle: 'Онлайн-школа',
    icon: GraduationCap,
    gradient: 'from-gray-800 to-gray-900',
    accent: 'text-yellow-400',
    features: [
      'Видео-плеер',
      'Прием платежей',
      'Домашние задания',
      'Геймификация'
    ]
  }
];

const Prices: React.FC = () => {
  return (
    <section id="prices" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Инвестиции в рост</h2>
          <p className="text-gray-400 text-lg">
            Мы не продаем "часы разработчика". Мы продаем готовый инструмент для заработка денег.
          </p>
        </div>

        {/* Mobile Slider / Desktop Grid */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 snap-x snap-mandatory md:overflow-visible no-scrollbar">
          {prices.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-auto snap-center md:snap-align-none h-auto md:h-full pt-4"
            >
              <div 
                className={`
                  relative h-full flex flex-col p-6 rounded-3xl border transition-all duration-300 group
                  ${plan.isPopular 
                    ? 'bg-[#0F0F0F] border-orange-500/50 shadow-[0_0_30px_rgba(234,88,12,0.15)] scale-[1.02]' 
                    : 'bg-[#0A0A0A] border-white/5 hover:border-white/20'
                  }
                `}
              >
                 {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center">
                       <Star size={10} className="mr-1 fill-current" /> Выбор клиентов
                    </div>
                 )}

                 <div className="flex justify-between items-start mb-6">
                    <div>
                       <h3 className="text-xl font-bold text-white mb-1">{plan.title}</h3>
                       <p className="text-xs text-gray-500">{plan.subtitle}</p>
                    </div>
                    <div className={`p-2 rounded-xl bg-white/5 ${plan.accent}`}>
                       <plan.icon size={20} />
                    </div>
                 </div>

                 <div className="mb-6">
                    <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-white tracking-tight">{plan.price}</span>
                    </div>
                    {plan.isPopular && <p className="text-[10px] text-green-500 font-medium mt-1">Окупаемость ~1.5 мес</p>}
                 </div>

                 <div className="h-px w-full bg-white/5 mb-6"></div>

                 <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                           <Check className={`w-4 h-4 mr-3 mt-0.5 ${plan.isPopular ? 'text-orange-500' : 'text-gray-600'}`} strokeWidth={3} />
                           <span className="text-xs font-medium">{feature}</span>
                        </li>
                    ))}
                 </ul>

                 <button className={`
                    w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center transition-all duration-300
                    ${plan.isPopular 
                        ? 'bg-white text-black hover:bg-orange-500 hover:text-white' 
                        : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/5'
                    }
                 `}>
                    Обсудить проект <ChevronRight size={16} className="ml-1" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile pagination dots */}
        <div className="mt-2 flex justify-center md:hidden gap-2">
            {prices.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
            ))}
        </div>

        <div className="mt-10 flex justify-center">
           <a href="#calculator" className="text-sm text-gray-500 border-b border-gray-800 hover:text-white hover:border-white transition-colors pb-0.5">
              Сравнить тарифы подробнее
           </a>
        </div>
      </div>
    </section>
  );
};

export default Prices;