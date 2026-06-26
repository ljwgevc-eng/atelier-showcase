import React, { useState, useRef } from 'react';
import { Eye, MapPin, Minimize2, Calendar, FileCheck2, ArrowRight, Layers, Sliders, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem } from '../types';

interface PortfolioListProps {
  onQuoteWithStyle: (portfolioTitle: string, category: string) => void;
  selectedPreItem?: PortfolioItem | null;
  onClosePreItem?: () => void;
}

export default function PortfolioList({ onQuoteWithStyle, selectedPreItem, onClosePreItem }: PortfolioListProps) {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'exhibition' | 'home-office'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(selectedPreItem || null);

  // Before/After Image Slider State
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0-100)
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (selectedPreItem) {
      setSelectedItem(selectedPreItem);
    }
  }, [selectedPreItem]);

  const handleFilterChange = (category: 'all' | 'commercial' | 'exhibition' | 'home-office') => {
    setFilter(category);
  };

  const handleOpenDetail = (item: PortfolioItem) => {
    setSelectedItem(item);
    setSliderPosition(50); // Reset slider position
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
    if (onClosePreItem) {
      onClosePreItem();
    }
  };

  // Drag logic for Before/After Slider
  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) { // Left mouse button clicked and dragging
      handleSliderMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const filteredItems = filter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === filter);

  return (
    <div id="portfolio-page" className="bg-slate-950 text-white py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="font-serif text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase block mb-3">
            Atelier Reference Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-white mb-4">
            아틀리에 공간별 시공 실적
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light">
            백화점 쇼룸, 고미술 전시홀, 가정 내 개인 수집 갤러리까지.<br />
            아틀리에의 하이엔드 솔루션이 시공된 생생한 실제 사례를 카테고리별로 필터링하여 감상하세요.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {[
            { id: 'all', label: '전체 보기' },
            { id: 'commercial', label: '상업 공간 (백화점/부티크/주얼리숍)' },
            { id: 'exhibition', label: '전시 공간 (박물관/미술관/쇼룸)' },
            { id: 'home-office', label: '가정/사무 공간 (피규어/트로피장)' },
          ].map((btn) => (
            <button
              key={btn.id}
              id={`filter-btn-${btn.id}`}
              onClick={() => handleFilterChange(btn.id as any)}
              className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide border transition-all duration-300 rounded-sm cursor-pointer ${
                filter === btn.id
                  ? 'bg-gold-500 border-gold-500 text-slate-950 font-semibold shadow-md shadow-gold-500/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-item-card-${item.id}`}
              onClick={() => handleOpenDetail(item)}
              className="group cursor-pointer bg-slate-900/40 border border-slate-850 overflow-hidden hover:border-gold-400/40 transition-all duration-300 flex flex-col h-full rounded-sm"
            >
              <div className="relative aspect-3/2 overflow-hidden bg-slate-950">
                <img
                  src={item.afterImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-gold-500 text-slate-950 p-2.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-gold-400/20 text-gold-400 text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow bg-slate-950">
                <div className="flex items-center space-x-1.5 text-slate-500 text-[10px] tracking-wider mb-2 font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif text-base font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs font-light line-clamp-2 leading-relaxed flex-grow">
                  {item.subtitle}
                </p>
                
                <div className="pt-4 border-t border-slate-900 mt-4 flex items-center justify-between text-xs font-medium text-gold-400">
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider">
                    {item.size.split('(')[0]}
                  </span>
                  <span className="flex items-center space-x-1 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>상세 내역 &amp; 시공 전후</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Immersive Portfolio Detail Modal & Before/After Slider */}
      <AnimatePresence>
        {selectedItem && (
          <div
            id="portfolio-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-sm"
          >
            {/* Modal Backdrop click */}
            <div className="absolute inset-0 cursor-default" onClick={handleCloseDetail} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 shadow-2xl rounded-sm overflow-hidden z-10 flex flex-col lg:flex-row"
            >
              {/* Left Side: Before/After Slider */}
              <div className="w-full lg:w-1/2 bg-slate-950 p-4 sm:p-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800">
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-gold-400 text-xs tracking-wider mb-1 uppercase font-semibold">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Before &amp; After Interactive Slider</span>
                  </div>
                  <h4 className="text-white text-sm font-semibold">
                    기성 진열장 대비 시공 후 극적인 변화
                  </h4>
                  <p className="text-slate-400 text-[11px] font-light mt-1">
                    아래 이미지의 중앙 조절 핸들을 마우스나 터치로 좌우로 드래그하여 투명도와 조명 마감 변화를 비교해 보세요.
                  </p>
                </div>

                {/* The Slider Container */}
                <div
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  className="relative aspect-4/3 w-full overflow-hidden select-none cursor-ew-resize border border-slate-800 rounded-sm bg-slate-900"
                >
                  {/* BEFORE (Underneath / Back image) */}
                  {selectedItem.beforeImage && (
                    <div className="absolute inset-0">
                      <img
                        src={selectedItem.beforeImage}
                        alt="시공 전 일반 가구"
                        className="w-full h-full object-cover filter grayscale-30"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-3 left-3 bg-slate-950/90 text-[10px] font-bold text-slate-400 px-2 py-1 tracking-wider border border-slate-800 rounded-sm uppercase">
                        Before (기성 기성품 가구)
                      </div>
                    </div>
                  )}

                  {/* AFTER (On top / Clipped image) */}
                  <div
                    className="absolute inset-0"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <img
                      src={selectedItem.afterImage}
                      alt="아틀리에 맞춤 시공 후"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 right-3 bg-gold-500/90 text-[10px] font-bold text-slate-950 px-2.5 py-1 tracking-wider border border-gold-400 rounded-sm uppercase">
                      After (아틀리에 프리미엄)
                    </div>
                  </div>

                  {/* Slider Line Divider */}
                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-gold-400 cursor-ew-resize"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-slate-900 border-2 border-gold-400 text-gold-400 flex items-center justify-center rounded-full shadow-lg">
                      <Sliders className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Material Close Up & Structural Tips */}
                <div className="mt-4 p-3 bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <FileCheck2 className="w-4 h-4 text-gold-400" />
                    <span>저철분 디아망 초투명 접합 유리 적용</span>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-gold-400 bg-slate-950 px-2 py-0.5 border border-gold-500/20 rounded-sm uppercase">
                    100% Dust-Proof
                  </span>
                </div>
              </div>

              {/* Right Side: Specifications and Description */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col h-[550px] lg:h-auto overflow-y-auto">
                {/* Close Button */}
                <button
                  id="close-modal-btn"
                  onClick={handleCloseDetail}
                  className="absolute top-4 right-4 p-2 bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors border border-slate-700/50"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>

                <div className="mb-6">
                  <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase block mb-1">
                    {selectedItem.categoryLabel} Project Spec
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {selectedItem.title}
                  </h3>
                </div>

                <div className="border-b border-slate-800 pb-4 mb-4">
                  <h4 className="text-sm font-semibold text-gold-300 mb-2">시공 컨셉</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light font-sans">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="grid grid-cols-2 gap-4 text-xs mb-6 bg-slate-950/60 p-4 border border-slate-850 rounded-sm">
                  <div>
                    <span className="text-slate-500 block">설치 장소</span>
                    <span className="font-medium text-white block mt-0.5">{selectedItem.location}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">제작 연도</span>
                    <span className="font-medium text-white block mt-0.5">{selectedItem.year}년</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block">정밀 외경 사이즈</span>
                    <span className="font-mono text-gold-300 block mt-0.5">{selectedItem.size}</span>
                  </div>
                </div>

                {/* Installed Premium Materials */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center space-x-1.5">
                    <Layers className="w-4 h-4 text-gold-400" />
                    <span>적용 프리미엄 자재 세부 사양</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.materials.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="bg-slate-900 border border-slate-800 text-slate-300 text-[11px] px-3 py-1.5 rounded-sm"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Submitting Quote with style */}
                <div className="mt-auto pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  <button
                    id="quote-with-style-btn"
                    onClick={() => {
                      onQuoteWithStyle(selectedItem.title, selectedItem.category);
                      handleCloseDetail();
                    }}
                    className="flex-grow py-3 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase rounded-sm transition-transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>이 시공 스타일로 맞춤 견적 문의</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    id="close-spec-btn"
                    onClick={handleCloseDetail}
                    className="py-3 px-6 bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-semibold rounded-sm tracking-wider uppercase transition-colors"
                  >
                    목록으로 가기
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
