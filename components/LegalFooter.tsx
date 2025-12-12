import React from 'react';

const LegalFooter: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-lg pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">ataev<span className="text-orange-500">.</span>pro</h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Разработка сайтов с нуля. Работаем как со своим проектом: прозрачно, быстро и качественно.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">
                TG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">
                VK
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Меню</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Услуги</a></li>
              <li><a href="#blog" className="hover:text-orange-500 transition-colors">Блог</a></li>
              <li><a href="#promotion" className="hover:text-orange-500 transition-colors">Продвижение</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Услуги</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Лендинги</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Интернет-магазины</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Маркетплейсы</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Удаление вирусов</a></li>
            </ul>
          </div>
        </div>

        {/* Legal & Compliance Section for Russian Market */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 ataev.pro — разработка сайтов с нуля.</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Согласие на обработку ПДН</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;