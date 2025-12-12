import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Услуги', href: '#services' },
  { label: 'Блог', href: '#blog' },
  { label: 'Продвижение', href: '#promotion' },
  { label: 'Контакты', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`
            flex items-center justify-between px-6 py-3 rounded-full
            backdrop-blur-xl border border-white/10
            ${isScrolled ? 'bg-black/60 shadow-lg' : 'bg-transparent'}
          `}>
            {/* Logo - Desktop: 25% */}
            <div className="md:w-1/4 flex items-center">
              <a href="#" className="text-2xl font-extrabold tracking-tighter">
                ataev<span className="text-orange-500">.</span>pro
              </a>
            </div>

            {/* Desktop Menu - Desktop: 50% */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA - Desktop: 25% */}
            <div className="hidden md:flex md:w-1/4 items-center justify-end">
              <a href="#calculator" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] whitespace-nowrap">
                Заказать сайт
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden text-white p-1"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center space-y-8"
          >
            <button 
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-8 right-8 text-white/70 hover:text-white"
            >
              <X size={32} />
            </button>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl font-bold text-white hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <div className="pt-8 flex flex-col items-center space-y-4">
               <a href="tel:+79999999999" className="text-xl font-bold text-white flex items-center">
                 <Phone size={20} className="mr-2 text-orange-500"/> +7 999 999-99-99
               </a>
               <a href="#calculator" onClick={() => setIsMobileOpen(false)} className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-orange-700 transition-all">
                Заказать сайт
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;