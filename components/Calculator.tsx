import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const Calculator: React.FC = () => {
  const [projectType, setProjectType] = useState('landing');
  const [designType, setDesignType] = useState('base');
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [seo, setSeo] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [support, setSupport] = useState('none');

  const handleIntegrationChange = (value: string) => {
    setIntegrations(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const totalCost = useMemo(() => {
    let base = 0;
    switch(projectType) {
      case 'landing': base = 30000; break;
      case 'shop': base = 80000; break;
      case 'blog': base = 50000; break;
      case 'marketplace': base = 150000; break;
      case 'edu': base = 200000; break;
      default: base = 30000;
    }

    let multiplier = 1;
    if (designType === 'extended') multiplier += 0.2;
    if (designType === 'premium') multiplier += 0.5;

    let extras = 0;
    // Assume 10k per complex integration for estimation
    extras += integrations.length * 10000;
    
    if (seo) extras += 15000;

    let subtotal = (base * multiplier) + extras;

    if (urgent) subtotal *= 1.3;
    
    if (support === '3mo') subtotal *= 1.1;
    if (support === '6mo') subtotal *= 1.2;

    return Math.round(subtotal / 1000) * 1000; // Round to nearest 1000
  }, [projectType, designType, integrations, seo, urgent, support]);

  return (
    <section id="calculator" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-gray-400">Оцените бюджет проекта за минуту. Это не обязывает.</p>
          </div>

          <GlassCard className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Left Column: Controls */}
              <div className="space-y-6">
                
                {/* Project Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Тип проекта</label>
                  <select 
                    value={projectType} 
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="landing">Лендинг (от 30к)</option>
                    <option value="shop">Интернет-магазин (от 80к)</option>
                    <option value="blog">Личный блог (от 50к)</option>
                    <option value="marketplace">Маркетплейс (от 150к)</option>
                    <option value="edu">Образовательный портал (от 200к)</option>
                  </select>
                </div>

                {/* Design */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Дизайн</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['base', 'extended', 'premium'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setDesignType(type)}
                        className={`text-sm py-2 px-2 rounded-lg border transition-all ${
                          designType === type 
                            ? 'bg-orange-600 border-orange-600 text-white' 
                            : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'
                        }`}
                      >
                        {type === 'base' ? 'Базовый' : type === 'extended' ? 'Расшир.' : 'Премиум'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Интеграции</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['CRM', 'Онлайн-оплата', 'Доставка', 'Аналитика'].map((item) => (
                      <label key={item} className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg bg-white/5 hover:bg-white/10">
                        <input 
                          type="checkbox" 
                          checked={integrations.includes(item)}
                          onChange={() => handleIntegrationChange(item)}
                          className="rounded text-orange-600 focus:ring-orange-500 bg-black border-gray-600"
                        />
                        <span className="text-xs md:text-sm text-gray-300">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Options */}
                <div>
                  <label className="flex items-center space-x-3 cursor-pointer mb-2">
                    <input 
                      type="checkbox" 
                      checked={seo} 
                      onChange={(e) => setSeo(e.target.checked)}
                      className="rounded text-orange-600 focus:ring-orange-500 bg-black border-gray-600"
                    />
                    <span className="text-sm text-gray-300">SEO-пакет (основа + карта)</span>
                  </label>
                   <label className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={urgent} 
                      onChange={(e) => setUrgent(e.target.checked)}
                      className="rounded text-orange-600 focus:ring-orange-500 bg-black border-gray-600"
                    />
                    <span className="text-sm text-gray-300">Срочно (×1.3)</span>
                  </label>
                </div>
                
                 {/* Support */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Поддержка после запуска</label>
                  <select 
                    value={support} 
                    onChange={(e) => setSupport(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="none">Нет</option>
                    <option value="3mo">3 месяца (×1.1)</option>
                    <option value="6mo">6 месяцев (×1.2)</option>
                  </select>
                </div>

              </div>

              {/* Right Column: Result */}
              <div className="flex flex-col justify-center items-center bg-white/5 rounded-2xl p-8 border border-white/5 relative overflow-hidden">
                <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>
                
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 text-center">Ориентировочная стоимость</p>
                <motion.div 
                  key={totalCost}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl md:text-6xl font-extrabold text-white mb-6 text-center"
                >
                  {totalCost.toLocaleString('ru-RU')} ₽
                </motion.div>
                
                <p className="text-center text-xs text-gray-500 mb-8 leading-relaxed">
                  Это предварительный расчёт. Точную смету подготовим после короткого созвона и фиксации ТЗ.
                </p>

                <div className="w-full space-y-4">
                  <button className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/20">
                    Рассчитать точно
                  </button>
                  <a href="#contact" className="block text-center text-sm text-gray-400 hover:text-white transition-colors">
                    Скачать пример сметы (PDF)
                  </a>
                </div>
              </div>

            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Calculator;