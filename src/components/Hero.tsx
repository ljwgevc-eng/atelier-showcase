import React from 'react';
import { ArrowRight, ShieldCheck, Gem, Sparkles, Award, Ruler, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem } from '../types';

interface HeroProps {
  onNavigate: (tab: string) => void;
  onSelectPortfolio: (item: PortfolioItem) => void;
}

export default function Hero({ onNavigate, onSelectPortfolio }: HeroProps) {
  // Highlighted portfolio items
  const highlightedItems = PORTFOLIO_DATA.filter(item => item.highlighted);

  return (
    <div id="hero-section-container" className="bg-slate-950 text-white overflow-hidden">
      {/* 1. Interactive Hero Slider / Banner */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image with elegant dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Atelier Showroom Background"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-60" />
        </div>

        {/* Floating golden subtle lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[120px] animate-pulse delay-1000" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-slate-900/80 border border-gold-500/30 px-3.5 py-1.5 rounded-full mb-8 backdrop-blur-sm"
          >
            <Award className="w-4 h-4 text-gold-400" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-serif text-gold-200">
              PREMIUM LUXURY SHOWCASE ARTISAN
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-6"
          >
            소중한 가치를 <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
              더 완벽하게
            </span>{' '}
            담아냅니다.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            미술관 특별실부터 명품 청담 부티크, 그리고 컬렉터의 개인 소장 공간까지.<br />
            아틀리에 쇼케이스는 100% 주문 제작으로 소장품의 격을 예술의 영역으로 높입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              id="hero-inquiry-cta"
              onClick={() => onNavigate('inquiry')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-slate-950 font-bold text-sm tracking-wider rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(176,137,81,0.25)] flex items-center justify-center space-x-2"
            >
              <span>1분 만에 간편 견적 받기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-portfolio-cta"
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-gold-400/50 text-white font-medium text-sm tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>시공 사례 보러가기</span>
            </button>
          </motion.div>

          {/* Scrolling Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 opacity-50 hover:opacity-100 transition-opacity">
            <span className="text-[9px] tracking-[0.3em] uppercase text-slate-400">SCROLL DOWN</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-gold-400 to-transparent animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. Brand Core Values (Why Us) Section */}
      <section className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase mb-3">
              Core Value
            </h2>
            <p className="font-serif text-2xl sm:text-3xl font-light text-white tracking-tight">
              기성 가구와 타협할 수 없는{' '}
              <span className="text-gold-300 font-normal">아틀리에의 3대 강점</span>
            </p>
            <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div
              id="value-card-1"
              className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 p-8 hover:border-gold-400/40 transition-all duration-300 group rounded-sm"
            >
              <div className="w-12 h-12 bg-gold-500/10 border border-gold-400/20 flex items-center justify-center mb-6 rounded-sm group-hover:bg-gold-500/20 transition-all">
                <Ruler className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white mb-3 group-hover:text-gold-300 transition-colors">
                100% 자체 정밀 설계 &amp; 핸드메이드
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                외주 공장 위탁 없이 설계부터 CNC 가공, 스틸 용접, UV 유리 유리 접합까지 모든 과정을 숙련된 최고 장인진이 자사 원스톱 공장에서 철저하게 통제하여 0.5mm 오차도 허용하지 않고 제작합니다.
              </p>
              <ul className="mt-4 space-y-2 text-[12px] text-slate-500 font-light">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400/80" />
                  <span>3D CAD 시뮬레이션 및 현장 실측</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400/80" />
                  <span>UV 대형 유리 완전 접합 기술력</span>
                </li>
              </ul>
            </div>

            {/* Value 2 */}
            <div
              id="value-card-2"
              className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 p-8 hover:border-gold-400/40 transition-all duration-300 group rounded-sm"
            >
              <div className="w-12 h-12 bg-gold-500/10 border border-gold-400/20 flex items-center justify-center mb-6 rounded-sm group-hover:bg-gold-500/20 transition-all">
                <Gem className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white mb-3 group-hover:text-gold-300 transition-colors">
                최고급 디아망 유리 &amp; 자연광 LED
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                투명도가 떨어지는 녹색 빛 일반 유리 대신 최고급 벨기에산 디아망 유리만을 적용해 유해 자외선을 차단하고 소장품 고유의 색상을 완벽히 복제합니다. 또한 박물관급 연색성(CRI 97)의 LED로 원색을 우아하게 살립니다.
              </p>
              <ul className="mt-4 space-y-2 text-[12px] text-slate-500 font-light">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400/80" />
                  <span>철분 성분 제로의 저철분 초투명 유리</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400/80" />
                  <span>발열 및 소장품 훼손 방지형 무열 LED</span>
                </li>
              </ul>
            </div>

            {/* Value 3 */}
            <div
              id="value-card-3"
              className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 p-8 hover:border-gold-400/40 transition-all duration-300 group rounded-sm"
            >
              <div className="w-12 h-12 bg-gold-500/10 border border-gold-400/20 flex items-center justify-center mb-6 rounded-sm group-hover:bg-gold-500/20 transition-all">
                <ShieldCheck className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white mb-3 group-hover:text-gold-300 transition-colors">
                안전 전문 배송 &amp; 평생 보증 수리
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                위탁 물류가 아닌 자사 전담 설치 가구 전문가들이 전용 무진동 특장 차량으로 자택 및 매장에 직배송하여 수평 세팅 및 디테일 검사를 마칩니다. 인도일로부터 1년 무상 수리 및 유상 평생 유지 관리 스케줄을 보증합니다.
              </p>
              <ul className="mt-4 space-y-2 text-[12px] text-slate-500 font-light">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400/80" />
                  <span>무진동 특장 차량 및 직영 시공 전담</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400/80" />
                  <span>철저한 A/S 및 유리 부속 실비 수리</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Portfolio Highlights Section */}
      <section className="py-24 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="font-serif text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase mb-3">
                Masterpieces
              </h2>
              <p className="font-serif text-2xl sm:text-3xl font-light text-white">
                아틀리에를 대표하는{' '}
                <span className="text-gold-300 font-normal">최근 명품 시공 사례</span>
              </p>
            </div>
            <button
              id="view-all-portfolio"
              onClick={() => onNavigate('portfolio')}
              className="mt-4 md:mt-0 text-xs text-gold-400 hover:text-gold-300 font-semibold tracking-wider flex items-center space-x-2 group transition-all"
            >
              <span>전체 포트폴리오 보기</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedItems.map((item) => (
              <div
                key={item.id}
                id={`highlight-card-${item.id}`}
                onClick={() => onSelectPortfolio(item)}
                className="group cursor-pointer bg-slate-950 border border-slate-800/80 overflow-hidden hover:border-gold-400/50 transition-all duration-300 flex flex-col h-full rounded-sm"
              >
                {/* Image Wrap */}
                <div className="relative aspect-3/2 overflow-hidden bg-slate-900">
                  <img
                    src={item.afterImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-gold-400 text-[10px] font-semibold tracking-widest px-2.5 py-1 uppercase rounded-sm border border-gold-400/20">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] tracking-wider text-slate-500 mb-1.5 uppercase font-medium">
                    {item.location} • {item.year}
                  </span>
                  <h3 className="font-serif text-base font-medium text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-light line-clamp-2 mb-4 flex-grow leading-relaxed">
                    {item.subtitle}
                  </p>
                  <div className="pt-4 border-t border-slate-900 text-xs font-medium text-gold-400 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-light text-slate-500">
                      {item.size.split('(')[0]}
                    </span>
                    <span className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>자세히 보기</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Real-time Consultation Prompt (CTA Box) */}
      <section className="py-20 bg-slate-950 relative border-t border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,106,0.06)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-400/10 border border-gold-400/20 mb-6 rounded-full">
            <Sparkles className="w-5 h-5 text-gold-400" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-4">
            어떤 가치를 진열장에 담고 싶으신가요?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-10 font-light leading-relaxed">
            공간의 규모, 용도, 원하는 자재와 LED 사양을 알려주시면 아틀리에의 전문 디자이너가 실시간 도면 설계와 함께 맞춤형 예상 견적을 즉시 산출해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-bottom-quote"
              onClick={() => onNavigate('inquiry')}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-slate-950 font-bold text-sm tracking-wider rounded-sm transition-transform duration-200 transform hover:-translate-y-0.5 shadow-xl"
            >
              내 매장에 딱 맞는 진열장, 1분 만에 문의하기
            </button>
            <button
              id="cta-bottom-call"
              onClick={() => window.open('tel:010-6370-2509', '_blank')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm tracking-wider hover:text-white hover:border-slate-700 rounded-sm cursor-pointer"
            >
              전화 상담 010-6370-2509
            </button>
          </div>
          <p className="text-[11px] text-slate-500 mt-4 font-light">
            평일 오전 9시 - 오후 6시 상담 지원 (주말 및 공휴일 견적 접수 가능)
          </p>
        </div>
      </section>
    </div>
  );
}
