import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, Compass, CalendarCheck, HelpCircle, FileText, Sparkles, Gem } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenQuote: () => void;
}

export default function Navbar({ currentTab, setCurrentTab, onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '홈', icon: Sparkles },
    { id: 'about', label: '브랜드 스토리', icon: Landmark },
    { id: 'portfolio', label: '포트폴리오', icon: Compass },
    { id: 'products', label: '제품 라인업', icon: Gem },
    { id: 'process', label: '주문 제작 과정', icon: CalendarCheck },
    { id: 'support', label: '고객지원 & 리뷰', icon: HelpCircle },
    { id: 'inquiry', label: '실시간 견적 문의', icon: FileText },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              id="logo-container"
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="relative w-9 h-9 border border-gold-400 flex items-center justify-center bg-slate-950/40 overflow-hidden">
                <span className="font-serif text-lg font-bold text-gold-400 group-hover:scale-110 transition-transform duration-300">
                  A
                </span>
                <div className="absolute inset-0 border border-gold-200/20 scale-75 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm tracking-[0.25em] font-semibold text-gold-400">
                  ATELIER
                </span>
                <span className="text-[10px] tracking-[0.15em] font-light text-slate-400">
                  SHOWCASE
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 text-xs font-medium tracking-wider transition-colors duration-200 ${
                      isActive
                        ? 'text-gold-400 font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Quick Estimate Button */}
            <div className="hidden md:block">
              <button
                id="header-quote-btn"
                onClick={onOpenQuote}
                className="relative overflow-hidden group px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-slate-950 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(194,161,106,0.2)] rounded-sm"
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <span>1분 견적 내기</span>
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-full bg-white/20 group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-gold-400 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-950 border-b border-slate-800"
            >
              <div className="px-2 pt-2 pb-6 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-item-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center space-x-3 w-full px-4 py-3 text-sm font-medium rounded-md tracking-wider transition-all ${
                        isActive
                          ? 'bg-slate-900 text-gold-400 border-l-2 border-gold-400'
                          : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-gold-400/80" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                <div className="pt-4 px-4">
                  <button
                    id="mobile-quote-btn"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-slate-950 font-bold text-xs tracking-widest uppercase rounded-sm"
                  >
                    <span>실시간 견적 진입</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacing element to prevent layout jump (not needed on transparent top, but needed for subpages) */}
      {currentTab !== 'home' && <div className="h-16 md:h-20 bg-slate-950" />}
    </>
  );
}
