import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ArrowUpDown, ShieldCheck, Ruler, Sparkles, X, ChevronRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import { PRODUCT_DATA } from '../data';
import { ProductItem } from '../types';

interface ProductCatalogProps {
  onQuoteWithProduct: (productName: string, category: string, basePrice: number, dimensions: string) => void;
}

export default function ProductCatalog({ onQuoteWithProduct }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured'); // featured, price-asc, price-desc
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Customizer options state inside modal
  const [customGlass, setCustomGlass] = useState<'normal' | 'tempered' | 'low-iron'>('low-iron');
  const [customFrame, setCustomFrame] = useState<'stainless' | 'brass-gold' | 'wood' | 'frameless'>('brass-gold');
  const [customLighting, setCustomLighting] = useState<'none' | 'top-spot' | 'side-led' | 'all-round'>('all-round');
  const [customHandle, setCustomHandle] = useState<'push-to-open' | 'brass-pull' | 'minimal-grip' | 'key-grip'>('push-to-open');
  const [customLock, setCustomLock] = useState<'none' | 'key-lock' | 'digital-lock' | 'fingerprint'>('none');

  // Calculate real-time estimated price based on option choices
  const calculateEstimatedPrice = (basePrice: number) => {
    let multiplier = 1.0;
    
    // Glass premium
    if (customGlass === 'tempered') multiplier += 0.15;
    if (customGlass === 'low-iron') multiplier += 0.25;

    // Frame premium
    if (customFrame === 'brass-gold') multiplier += 0.20;
    if (customFrame === 'wood') multiplier += 0.10;
    if (customFrame === 'frameless') multiplier += 0.15;

    // Lighting premium
    if (customLighting === 'top-spot') multiplier += 0.08;
    if (customLighting === 'side-led') multiplier += 0.12;
    if (customLighting === 'all-round') multiplier += 0.20;

    let flatAddition = 0;
    // Handle premium
    if (customHandle === 'brass-pull') flatAddition += 30000;
    if (customHandle === 'minimal-grip') flatAddition += 20000;
    if (customHandle === 'key-grip') flatAddition += 60000;

    // Lock premium
    if (customLock === 'key-lock') flatAddition += 50000;
    if (customLock === 'digital-lock') flatAddition += 150000;
    if (customLock === 'fingerprint') flatAddition += 250000;

    const price = (basePrice * multiplier) + flatAddition;
    return Math.round(price / 10000) * 10000; // Round to nearest 10,000 KRW
  };

  // Categories
  const categories = [
    { id: 'all', label: '전체 상품' },
    { id: 'tower', label: '타워형' },
    { id: 'island', label: '아일랜드형' },
    { id: 'wall', label: '벽면형' },
    { id: 'museum', label: '박물관/미술관형' }
  ];

  // Filtering & Sorting Logic
  const filteredProducts = PRODUCT_DATA.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.basePrice - b.basePrice;
    if (sortBy === 'price-desc') return b.basePrice - a.basePrice;
    return 0; // Default featured (order in array)
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);
  };

  const handleOpenProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    // Initialize customizer choices based on product attributes
    if (product.category === 'museum') {
      setCustomGlass('low-iron');
      setCustomFrame('stainless');
      setCustomLighting('all-round');
      setCustomHandle('push-to-open');
      setCustomLock('digital-lock');
    } else if (product.name.includes('원목') || product.name.includes('월넛')) {
      setCustomGlass('low-iron');
      setCustomFrame('wood');
      setCustomLighting('side-led');
      setCustomHandle('brass-pull');
      setCustomLock('none');
    } else {
      setCustomGlass('low-iron');
      setCustomFrame('brass-gold');
      setCustomLighting('all-round');
      setCustomHandle('push-to-open');
      setCustomLock('none');
    }
  };

  const handleInquirySubmit = (product: ProductItem) => {
    const finalPrice = calculateEstimatedPrice(product.basePrice);
    
    // Build specialized option description
    const glassLabels = { 'normal': '일반유리', 'tempered': '안전강화유리', 'low-iron': '디아망 초투명유리' };
    const frameLabels = { 'stainless': '스테인리스 헤어라인', 'brass-gold': '브라스 골드', 'wood': '고급 원목 무늬목', 'frameless': '프레임리스' };
    const lightingLabels = { 'none': '조명 없음', 'top-spot': '상부 스포트라이트', 'side-led': '좌우 매립 LED바', 'all-round': '입체 올-라운드 LED' };
    const handleLabels = { 'push-to-open': '푸시 오픈 방식', 'brass-pull': '황동 브라스 노브', 'minimal-grip': '매립형 미니멀 바', 'key-grip': '잠금장치 일체형' };
    const lockLabels = { 'none': '잠금장치 없음', 'key-lock': '실린더 열쇠형 잠금장치', 'digital-lock': '전자식 번호 도어락', 'fingerprint': '지문인식 히든 락' };
    
    const details = `[선택 모델: ${product.name}]\n- 선택 규격: ${product.dimensions}\n- 선택 유리: ${glassLabels[customGlass]}\n- 선택 프레임: ${frameLabels[customFrame]}\n- 선택 조명: ${lightingLabels[customLighting]}\n- 선택 손잡이: ${handleLabels[customHandle]}\n- 선택 잠금장치: ${lockLabels[customLock]}\n- 옵션 적용 예상가: ${formatPrice(finalPrice)}`;

    onQuoteWithProduct(details, product.category, finalPrice, product.dimensions);
    setSelectedProduct(null);
  };

  return (
    <section id="product-catalog-section" className="py-20 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-950/40 border border-gold-500/20 px-3.5 py-1 rounded-full mb-4">
            <ShoppingBag className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] tracking-[0.2em] font-serif text-gold-300 uppercase">Atelier Catalog</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            프리미엄 <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">명품 진열장</span> 라인업
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            아틀리에만의 엄격한 제작 표준과 초정밀 공법이 고스란히 적용된 명품 쇼케이스 라인업입니다.<br className="hidden sm:inline" />
            각 카테고리별 표준 베이스 모델을 바탕으로, 원하는 수치와 옵션을 조합해 100% 맞춤 제작이 가능합니다.
          </p>
        </div>

        {/* Filter, Search & Sorting Bar */}
        <div id="catalog-controls" className="bg-slate-900/40 border border-slate-800/80 p-4 sm:p-6 mb-10 rounded-lg backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`cat-tab-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-medium tracking-wider rounded-sm transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-slate-950 font-semibold'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search & Sort Panel */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Search Bar */}
              <div className="relative flex-grow sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="상품명, 소재 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-gold-500/80 px-10 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-all rounded-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative sm:w-48 flex items-center">
                <ArrowUpDown className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-gold-500/80 pl-10 pr-4 py-2.5 text-xs text-slate-300 focus:outline-none transition-all rounded-sm appearance-none cursor-pointer"
                >
                  <option value="featured">추천 순위</option>
                  <option value="price-asc">가격 낮은 순</option>
                  <option value="price-desc">가격 높은 순</option>
                </select>
                <div className="absolute right-3.5 pointer-events-none text-slate-500 text-[10px]">▼</div>
              </div>

            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div id="product-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                id={`product-card-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between bg-slate-900/20 hover:bg-slate-900/40 border border-slate-800/80 hover:border-gold-500/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] rounded-md"
              >
                {/* Product Image Box */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category tag */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 border border-gold-500/30 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                    <span className="text-[10px] tracking-wider text-gold-300 font-medium">
                      {product.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white tracking-tight leading-snug mb-2 group-hover:text-gold-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Meta Specifications */}
                    <div className="border-t border-slate-800/80 pt-4 mb-4 space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Ruler className="w-3.5 h-3.5 text-gold-400/80" /> 표준 규격
                        </span>
                        <span className="text-slate-300 font-mono">{product.dimensions}</span>
                      </div>
                      <div className="flex items-start justify-between text-[11px] gap-2">
                        <span className="text-slate-500 shrink-0 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-gold-400/80" /> 주요 자재
                        </span>
                        <span className="text-slate-400 text-right line-clamp-1">{product.materials.slice(0, 2).join(', ')}...</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="border-t border-slate-800/80 pt-4 mt-auto">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-xs text-slate-500">기본 사양 제작가</span>
                      <span className="font-serif text-lg font-semibold text-gold-300">
                        {formatPrice(product.basePrice)} <span className="text-xs text-slate-400 font-sans font-light">부터</span>
                      </span>
                    </div>

                    <button
                      id={`view-details-${product.id}`}
                      onClick={() => handleOpenProduct(product)}
                      className="w-full py-2.5 bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-gold-600 group-hover:to-gold-400 text-slate-300 group-hover:text-slate-950 border border-slate-800 group-hover:border-transparent text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center justify-center space-x-1"
                    >
                      <span>자세히 보기 & 견적 구성</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-slate-900/10 border border-dashed border-slate-800 rounded-lg">
            <p className="text-slate-400 text-sm">검색 결과에 부합하는 상품이 없습니다. 다른 검색어를 입력해 보세요.</p>
          </div>
        )}

      </div>

      {/* Product Customizer & Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div id="product-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Modal Close */}
              <button
                id="close-modal-btn"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-950 rounded-full border border-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-grow overflow-y-auto p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Left Column: Image & Details */}
                  <div className="space-y-6">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-slate-800 bg-slate-950">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-serif font-semibold">
                        {selectedProduct.categoryLabel}
                      </span>
                      <h3 className="font-serif text-2xl font-light text-white leading-tight mt-1 mb-3">
                        {selectedProduct.name}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Standard materials list */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-gold-400" /> 독보적 특장점
                      </h4>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Customizer Configurator */}
                  <div className="bg-slate-950/50 border border-slate-800/80 p-5 md:p-6 rounded-md flex flex-col justify-between">
                    <div>
                      <div className="pb-4 mb-5 border-b border-slate-800">
                        <h4 className="text-xs font-semibold tracking-widest text-gold-300 uppercase mb-1">
                          맞춤 견적 구성기 (Ballpark Customizer)
                        </h4>
                        <p className="text-[10px] text-slate-500 leading-normal">
                          아래 사양을 자유롭게 조절해 실시간 대략적인 제작 견적을 바로 산출해 보세요.
                        </p>
                      </div>

                      {/* Glass Selector */}
                      <div className="mb-5">
                        <label className="block text-[11px] font-semibold text-slate-400 tracking-wider mb-2 uppercase">
                          유리 옵션
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'normal', label: '일반 유리', desc: '표준 마감' },
                            { id: 'tempered', label: '강화 유리', desc: '+15%' },
                            { id: 'low-iron', label: '초투명 디아망', desc: '+25%' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => setCustomGlass(opt.id as any)}
                              className={`p-2.5 text-center transition-all border rounded-sm flex flex-col items-center justify-center ${
                                customGlass === opt.id
                                  ? 'border-gold-400 bg-gold-950/20 text-gold-300'
                                  : 'border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-400'
                              }`}
                            >
                              <span className="text-xs font-medium block">{opt.label}</span>
                              <span className="text-[9px] text-slate-500 block mt-0.5">{opt.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Frame Selector */}
                      <div className="mb-5">
                        <label className="block text-[11px] font-semibold text-slate-400 tracking-wider mb-2 uppercase">
                          프레임 소재 및 마감
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { id: 'stainless', label: '스텐실버', desc: '표준' },
                            { id: 'brass-gold', label: '브라스골드', desc: '+20%' },
                            { id: 'wood', label: '천연 원목', desc: '+10%' },
                            { id: 'frameless', label: '접합접착', desc: '+15%' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => setCustomFrame(opt.id as any)}
                              className={`p-2 text-center transition-all border rounded-sm flex flex-col items-center justify-center ${
                                customFrame === opt.id
                                  ? 'border-gold-400 bg-gold-950/20 text-gold-300'
                                  : 'border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-400'
                              }`}
                            >
                              <span className="text-xs font-medium block">{opt.label}</span>
                              <span className="text-[9px] text-slate-500 block mt-0.5">{opt.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Lighting Selector */}
                      <div className="mb-5">
                        <label className="block text-[11px] font-semibold text-slate-400 tracking-wider mb-2 uppercase">
                          조명 설계
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: 'none', label: '조명 없음', desc: '기본형 (-₩)' },
                            { id: 'top-spot', label: '상부 스포트라이트', desc: '은은한 포인트 조명' },
                            { id: 'side-led', label: '좌우 고휘도 LED 바', desc: '수직 소장품 입체 강조' },
                            { id: 'all-round', label: '올-라운드 입체 LED', desc: '전후면 고연색 자연광 조명' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => setCustomLighting(opt.id as any)}
                              className={`p-3 text-left transition-all border rounded-sm flex flex-col justify-center ${
                                customLighting === opt.id
                                  ? 'border-gold-400 bg-gold-950/20 text-gold-300'
                                  : 'border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-400'
                              }`}
                            >
                              <span className="text-xs font-semibold block">{opt.label}</span>
                              <span className="text-[9px] text-slate-500 block mt-0.5 leading-normal">{opt.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Handle Type Selector */}
                      <div className="mb-5">
                        <label className="block text-[11px] font-semibold text-slate-400 tracking-wider mb-2 uppercase">
                          문/손잡이 방식
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { id: 'push-to-open', label: '푸시 오픈', desc: '기본형' },
                            { id: 'brass-pull', label: '황동 브라스 노브', desc: '+₩30,000' },
                            { id: 'minimal-grip', label: '매립형 미니멀 바', desc: '+₩20,000' },
                            { id: 'key-grip', label: '잠금장치 일체형', desc: '+₩60,000' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => setCustomHandle(opt.id as any)}
                              className={`p-2 text-center transition-all border rounded-sm flex flex-col items-center justify-center ${
                                customHandle === opt.id
                                  ? 'border-gold-400 bg-gold-950/20 text-gold-300'
                                  : 'border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-400'
                              }`}
                            >
                              <span className="text-xs font-medium block">{opt.label}</span>
                              <span className="text-[9px] text-slate-500 block mt-0.5">{opt.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Lock Type Selector */}
                      <div className="mb-5">
                        <label className="block text-[11px] font-semibold text-slate-400 tracking-wider mb-2 uppercase">
                          보안 및 잠금장치
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { id: 'none', label: '잠금장치 없음', desc: '기본형' },
                            { id: 'key-lock', label: '실린더 열쇠형', desc: '+₩50,000' },
                            { id: 'digital-lock', label: '전자 번호락', desc: '+₩150,000' },
                            { id: 'fingerprint', label: '지문인식 히든락', desc: '+₩250,000' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => setCustomLock(opt.id as any)}
                              className={`p-2 text-center transition-all border rounded-sm flex flex-col items-center justify-center ${
                                customLock === opt.id
                                  ? 'border-gold-400 bg-gold-950/20 text-gold-300'
                                  : 'border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-400'
                              }`}
                            >
                              <span className="text-xs font-medium block">{opt.label}</span>
                              <span className="text-[9px] text-slate-500 block mt-0.5">{opt.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Base Details Grid */}
                      <div className="bg-slate-900 p-3.5 border border-slate-800/60 rounded-sm mb-6 space-y-2">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500">기본 제품 규격</span>
                          <span className="text-slate-300 font-mono">{selectedProduct.dimensions}</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500">배송 및 설치비</span>
                          <span className="text-gold-400 font-medium">서울/수도권 기본 무상 지원</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Box & Final Action */}
                    <div className="border-t border-slate-800/80 pt-5 mt-4">
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-xs text-slate-400 font-medium">옵션 적용 예상가</span>
                        <div className="text-right">
                          <div className="font-serif text-2xl font-bold text-gold-300">
                            {formatPrice(calculateEstimatedPrice(selectedProduct.basePrice))}
                          </div>
                          <span className="text-[9px] text-slate-500 block mt-1">※ 자재 수급 및 도면 실측에 따라 일부 변동될 수 있습니다.</span>
                        </div>
                      </div>

                      <button
                        id="modal-inquiry-submit"
                        onClick={() => handleInquirySubmit(selectedProduct)}
                        className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-slate-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <span>이 견적으로 제작 문의하기</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
