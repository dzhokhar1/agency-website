import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import GlassCard from './GlassCard';

const ContactForm: React.FC = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-8">
               <div>
                 <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Свяжитесь с нами</span>
                 <h2 className="text-4xl font-bold mb-4">Обсудим ваш проект?</h2>
                 <p className="text-gray-400 mb-8 leading-relaxed">
                   Оставьте заявку, и мы подготовим предварительную смету и стратегию развития вашего проекта в течение рабочего дня.
                 </p>
               </div>
               
               {/* Manager Card */}
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                      alt="Manager" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#1a1a1a] rounded-full"></div>
                  </div>
                  <div>
                     <p className="text-white font-bold">Александр Атаев</p>
                     <p className="text-xs text-gray-400">Руководитель студии</p>
                     <p className="text-xs text-green-400 mt-1 flex items-center"><CheckCircle2 size={12} className="mr-1"/> Сейчас онлайн</p>
                  </div>
               </div>
               
               <div className="space-y-6">
                 <div className="flex items-center space-x-4 group cursor-pointer">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                     <Phone size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 uppercase font-bold">Звоните</p>
                     <a href="tel:+79999999999" className="text-lg font-bold hover:text-orange-500 transition-colors">+7 999 999-99-99</a>
                   </div>
                 </div>

                 <div className="flex items-center space-x-4 group cursor-pointer">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                     <Send size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 uppercase font-bold">Telegram</p>
                     <a href="https://t.me/ataevpro" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-orange-500 transition-colors">@ataevpro</a>
                   </div>
                 </div>
               </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <GlassCard className="p-8 md:p-12 h-full border-t-4 border-t-orange-500">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 ml-1">Ваше имя</label>
                      <input 
                        type="text" 
                        placeholder="Иван" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 ml-1">Контакт для связи</label>
                      <input 
                        type="text" 
                        placeholder="Telegram или телефон" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 ml-1">Какая задача?</label>
                    <textarea 
                      rows={4} 
                      placeholder="Например: Нужен интернет-магазин автозапчастей с интеграцией 1С..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-600 resize-none"
                    ></textarea>
                  </div>

                  {/* Personal Data Consent Checkbox */}
                  <div className="flex items-start space-x-3 pt-2">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-600 bg-white/10 text-orange-600 focus:ring-orange-500 focus:ring-offset-gray-900 cursor-pointer"
                      />
                    </div>
                    <div className="text-xs text-gray-400">
                      <label htmlFor="consent" className="font-medium text-gray-300 cursor-pointer">
                        Согласен с политикой конфиденциальности
                      </label>
                      <p>Ваши данные в безопасности и не будут переданы третьим лицам.</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="button"
                      disabled={!agreed}
                      className={`w-full py-5 rounded-xl font-bold text-lg text-white transition-all duration-300 shadow-lg ${
                        agreed 
                          ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:shadow-orange-500/30 transform hover:-translate-y-1' 
                          : 'bg-gray-800 cursor-not-allowed opacity-50'
                      }`}
                    >
                      Отправить заявку
                    </button>
                  </div>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;