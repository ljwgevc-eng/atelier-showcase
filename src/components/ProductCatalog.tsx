import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_DATA } from '../data';
import { ProductItem } from '../types';
import { Check, ArrowRight, X, Sparkles, Sliders, Box, ShieldCheck, Ruler, Eye, Truck } from 'lucide-react';

const PRESET_USES = [
  {
    id: 'empty',
    label: '기본 공백 상태',
    image: '/src/assets/images/empty_black_cabinet_1784075717452.jpg',
    icon: '🔲',
    title: '미완성된 캔버스 상태',
    description: '어떤 소장품이든 담을 수 있는 정교한 무광 블랙 금속 및 디아망 유리 쇼케이스의 순수한 원형입니다.'
  },
  {
    id: 'liquor',
    label: '고급 주류 / 와인 바',
    image: '/src/assets/images/cabinet_liquor_1784104573500.jpg',
    icon: '🍷',
    title: '럭셔리 위스키 & 와인 바',
    description: '싱글 몰트 위스키, 프레스티지 샴페인, 명품 와인 소장에 최적화되었습니다. 은은한 LED 조명이 보틀의 영롱한 호버색을 강조하며 매혹적인 아우라를 선사합니다.'
  },
  {
    id: 'trophy',
    label: '명예 트로피 / 훈장',
    image: '/src/assets/images/cabinet_trophies_1784104609691.jpg',
    icon: '🏆',
    title: '명예와 영광의 트로피 쇼케이스',
    description: '기업의 상패, 감사패, 스포츠 우승 컵, 개인의 훈장 등을 보관합니다. 빛 왜곡이 없는 투명한 디아망 유리와 아우터 무광 블랙 프레임이 최고의 영광을 진중하게 강조합니다.'
  },
  {
    id: 'figures',
    label: '피규어 / 하이엔드 수집',
    image: '/src/assets/images/cabinet_figures_1784104598682.jpg',
    icon: '👾',
    title: '프리미엄 피규어 및 콜렉터 스튜디오',
    description: '한정판 피규어, 캐릭터 스태츄, 수집 장난감을 완벽 보존합니다. 초정밀 오링 밀폐 기술로 내부 먼지 유입을 차단하며 360도 사방에서 생생한 관람을 지원합니다.'
  },
  {
    id: 'sports',
    label: '스포츠 기념 컬렉션',
    image: '/src/assets/images/cabinet_sports_1784104585024.jpg',
    icon: '⚽',
    title: '프로 스포츠 메모라빌리아 쇼룸',
    description: '친필 사인 축구공, 기념 야구 글러브, 한정판 스니커즈, 시그니처 배트 등을 보관합니다. 입체감 있는 내부 레이아웃으로 소장 스포츠 아이템들의 역동성을 보존합니다.'
  },
  {
    id: 'white',
    label: '화이트 프레임 에디션',
    image: '/src/assets/images/cabinet_white_1784168942419.jpg',
    icon: '⬜',
    title: '미니멀 모던 화이트 에디션',
    description: '공간 인테리어에 어울리는 세련되고 화사한 올-무광 화이트 프레임 옵션입니다. 밝은 톤의 거실, 오피스, 미술 갤러리나 매장에 이상적으로 녹아들어 전시물의 매력을 극대화합니다.'
  }
];

interface ProductCatalogProps {
  onQuoteWithProduct: (details: string, category: string, dimensions?: string) => void;
}

export default function ProductCatalog({ onQuoteWithProduct }: ProductCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cabinet'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activePreviewImage, setActivePreviewImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: '전체 보기' },
    { id: 'cabinet', label: '블랙 캐비닛/타워형' }
  ];

  const filteredProducts = PRODUCT_DATA.filter((product) => {
    if (activeFilter === 'all') return true;
    return product.category === activeFilter;
  });

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-gold-950/40 border border-gold-500/30 rounded-full mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs font-serif tracking-widest text-gold-300 uppercase font-medium">
              PREMIUM PRODUCTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-6"
          >
            명품 쇼케이스 <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">라인업</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base font-light leading-relaxed"
          >
            아틀리에만의 초정밀 공법과 엄격한 제작 표준이 적용된 시그니처 쇼케이스 리스트입니다.<br />
            원하시는 사양을 선택하여 맞춤 견적 상담을 즉시 진행할 수 있습니다.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-medium font-sans tracking-wider border transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-slate-950 border-gold-400 shadow-[0_4px_12px_rgba(212,175,55,0.2)]'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Informational Interactive Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto bg-slate-900/40 border border-gold-500/20 px-4 py-3 rounded-md mb-12 flex items-center justify-center space-x-3 text-center"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
          </span>
          <span className="text-xs text-gold-300 font-light">
            💡 <strong className="font-semibold text-white">원하는 제품 사진을 클릭</strong>하시면, 디테일한 소재 스펙, 선택 옵션 및 확대 이미지를 한눈에 확인할 수 있습니다.
          </span>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between bg-slate-900/30 hover:bg-slate-900/50 border border-slate-800/80 hover:border-gold-500/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-md cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setActivePreviewImage(null);
                }}
              >
                {/* Product Image Box */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category tag */}
                  <div className="absolute top-4 left-4 z-10 bg-slate-950/80 border border-gold-500/30 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                    <span className="text-[10px] tracking-wider text-gold-300 font-medium">
                      {product.categoryLabel}
                    </span>
                  </div>
                  {/* Luxury Clickable Photo Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-slate-950/90 border border-gold-500/40 text-gold-400 text-[10px] sm:text-xs font-medium tracking-widest px-4 py-2 uppercase rounded-sm shadow-xl flex items-center space-x-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                      <Eye className="w-4 h-4 text-gold-400 animate-pulse" />
                      <span className="font-sans">상세 스펙 &amp; 옵션 보기</span>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-grow flex flex-col justify-between border-t border-slate-800/50">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white tracking-tight leading-snug mb-2 group-hover:text-gold-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-xs font-light leading-relaxed mb-4 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800/60">
                    <div className="flex items-center text-[11px] text-slate-400 font-mono">
                      <Ruler className="w-3.5 h-3.5 text-gold-500 mr-2 shrink-0" />
                      <span>{product.dimensions}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {product.materials.slice(0, 3).map((mat, i) => (
                        <span
                          key={i}
                          className="text-[9px] text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded-sm border border-slate-800/80"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuoteWithProduct(product.name, product.categoryLabel, product.dimensions);
                      }}
                      className="w-full mt-4 flex items-center justify-center space-x-2 py-2.5 bg-slate-800 hover:bg-gold-500 hover:text-slate-950 text-gold-300 border border-slate-700 hover:border-gold-400 rounded-sm text-xs font-medium tracking-wide transition-all duration-300"
                    >
                      <span>맞춤 주문 제작 의뢰</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md"
              onClick={() => {
                setSelectedProduct(null);
                setActivePreviewImage(null);
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 155 }}
                className="relative bg-slate-900 border border-slate-850 w-full max-w-7xl lg:max-w-[1450px] h-full md:h-[95vh] max-h-[95vh] md:max-h-[950px] overflow-hidden rounded-xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Close Button */}
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setActivePreviewImage(null);
                  }}
                  className="absolute top-5 right-5 z-20 p-2.5 bg-slate-950/90 border border-slate-800 hover:border-gold-500/80 hover:text-gold-400 text-slate-400 rounded-full transition-all duration-200 cursor-pointer shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Column: Image & Interactive Use Cases */}
                <div className="w-full md:w-[55%] bg-slate-950 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-full border-r border-slate-800">
                  
                  {/* The Display Stage (White Background) */}
                  <div className="relative bg-white flex items-center justify-center h-[360px] sm:h-[440px] md:h-[540px] lg:h-[620px] xl:h-[680px] p-8 select-none shrink-0 border-b border-slate-800">
                    <img
                      src={activePreviewImage || selectedProduct.image}
                      alt={selectedProduct.name}
                      className="max-h-[95%] w-auto object-contain transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating Info Tag */}
                    <div className="absolute top-4 left-4 bg-slate-950/90 border border-gold-500/40 backdrop-blur-sm px-3.5 py-1.5 rounded-sm shadow-md">
                      <span className="text-[11px] tracking-wider text-gold-300 font-medium font-serif uppercase">
                        {PRESET_USES.find(u => u.image === (activePreviewImage || selectedProduct.image))?.label || selectedProduct.categoryLabel}
                      </span>
                    </div>

                    {/* Quick helper tip */}
                    <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded border border-slate-800 text-[11px] text-slate-400">
                      💡 아래 버튼을 눌러 연출 이미지를 전환해보세요
                    </div>
                  </div>

                  {/* Interactive Use-Case Tabs Panel */}
                  <div className="p-6 space-y-5 bg-slate-900/40 flex-grow">
                    <div>
                      <h4 className="text-sm tracking-wider text-gold-400 font-serif font-bold uppercase flex items-center mb-2">
                        <Sparkles className="w-4 h-4 text-gold-500 mr-2" />
                        공간과 수집 목적에 따른 연출 갤러리
                      </h4>
                      <p className="text-[13px] text-slate-350 font-light leading-relaxed">
                        아틀리에 맞춤 쇼케이스는 용도와 소장품의 성격에 최적화된 내부 인테리어, 조명 연출, 고정 선반 레이아웃 커스텀이 완벽 지원됩니다.
                      </p>
                    </div>

                    {/* Horizontal Buttons Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2">
                      {PRESET_USES.map((preset) => {
                        const isActive = (activePreviewImage || selectedProduct.image) === preset.image;
                        return (
                          <button
                            key={preset.id}
                            onClick={() => setActivePreviewImage(preset.image)}
                            className={`p-2.5 rounded text-center flex flex-col items-center justify-center border transition-all duration-300 cursor-pointer ${
                              isActive
                                ? 'bg-gold-500/10 border-gold-400 text-gold-300 shadow-[0_4px_12px_rgba(212,175,55,0.15)]'
                                : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                            }`}
                          >
                            <span className="text-xl mb-1">{preset.icon}</span>
                            <span className="text-[11px] font-medium tracking-tight whitespace-nowrap">{preset.label.split(' ')[0]}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Use Case Detailed Guide */}
                    {(() => {
                      const currentPreset = PRESET_USES.find(u => u.image === (activePreviewImage || selectedProduct.image)) || PRESET_USES[0];
                      return (
                        <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-md space-y-2 animate-fadeIn">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{currentPreset.icon}</span>
                            <span className="text-sm font-semibold text-white">{currentPreset.title}</span>
                          </div>
                          <p className="text-[13px] text-slate-300 font-light leading-relaxed">
                            {currentPreset.description}
                          </p>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Detailed Scrollable Showcase Feed */}
                  <div className="border-t border-slate-800/80 p-6 space-y-8 bg-slate-950">
                    <div className="border-b border-slate-800/60 pb-4">
                      <h4 className="text-sm tracking-widest text-gold-400 font-serif font-bold uppercase flex items-center">
                        <Eye className="w-4 h-4 text-gold-500 mr-2" />
                        아틀리에 맞춤 연출 상세 보기 (스크롤)
                      </h4>
                      <p className="text-xs text-slate-450 font-light mt-1.5 leading-relaxed">
                        아래로 스크롤하시면 아틀리에 쇼케이스의 다양한 실제 활용 및 맞춤 에디션 사진을 설명과 함께 확인하실 수 있습니다.
                        <span className="block mt-2 text-gold-400/90 font-medium text-[13px]">※ 사진 속 진열장 내부의 각종 수집품(주류, 피규어, 트로피, 스포츠 소품 등)은 연출을 위한 예시이며, 판매하는 진열장 상품에는 포함되지 않습니다.</span>
                      </p>
                    </div>

                    <div className="space-y-12">
                      {PRESET_USES.map((preset) => (
                        <div key={`scroll-preset-${preset.id}`} className="space-y-4.5 group">
                          {/* Photo Frame Container (White backdrop to pop out the showcase) */}
                          <div className="relative bg-white flex items-center justify-center h-[340px] sm:h-[420px] p-6 rounded-lg overflow-hidden border border-slate-800 shadow-md group-hover:shadow-[0_4px_25px_rgba(212,175,55,0.08)] transition-all duration-300">
                            <img
                              src={preset.image}
                              alt={preset.title}
                              className="max-h-[95%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            
                            {/* Preset Icon Label Floating Tag */}
                            <div className="absolute top-4 left-4 bg-slate-950/95 border border-gold-500/30 backdrop-blur-sm px-3 py-1.5 rounded text-[11px] text-gold-300 font-medium flex items-center gap-1.5">
                              <span>{preset.icon}</span>
                              <span className="font-serif uppercase tracking-wider">{preset.label}</span>
                            </div>

                            {/* Inner Ornament Disclaimer Badge */}
                            {preset.id !== 'empty' && (
                              <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-sm text-[10px] text-slate-350 border border-slate-800 px-2.5 py-1 rounded">
                                * 내부 장식품은 연출 예시
                              </div>
                            )}
                          </div>

                          {/* Preset Text Details */}
                          <div className="px-1 space-y-2">
                            <h5 className="text-sm font-semibold text-white flex items-center gap-2 group-hover:text-gold-300 transition-colors">
                              <span className="text-gold-400">{preset.icon}</span>
                              {preset.title}
                            </h5>
                            <p className="text-[13px] text-slate-350 font-light leading-relaxed">
                              {preset.description}
                            </p>
                            {preset.id !== 'empty' && (
                              <p className="text-[11px] text-slate-500 italic font-light">
                                * 진열장 내부의 소장품은 세팅 예시이며 진열장 단품 판매 기준입니다.
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Detailed Dimension Blueprint Section */}
                    <div className="pt-10 border-t border-slate-800/60 space-y-6">
                      <div className="border-b border-slate-800/40 pb-3">
                        <h4 className="text-sm tracking-widest text-gold-400 font-serif font-bold uppercase flex items-center">
                          <Ruler className="w-4 h-4 text-gold-500 mr-2" />
                          정밀 실측 도면 및 제품 상세 사양
                        </h4>
                        <p className="text-xs text-slate-450 font-light mt-1.5 leading-relaxed">
                          쇼케이스의 정면, 측면, 평면 치수 및 간격 상세 규격 안내입니다. 해당 규격을 기본으로 고객님의 필요 공간에 매칭하여 100% 맞춤 제작도 가능합니다.
                        </p>
                      </div>

                      {/* Schematic Frame */}
                      <div className="relative bg-white flex items-center justify-center p-6 rounded-lg overflow-hidden border border-slate-800 shadow-md">
                        <img
                          src="/src/assets/images/cabinet_dimensions_guide_1784612200575.jpg"
                          alt="유리 진열장 실측 도면"
                          className="max-h-[520px] w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Detailed Specs Table */}
                      <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg overflow-hidden p-5 space-y-4">
                        <div className="text-[13px] font-semibold text-slate-200 flex items-center justify-between border-b border-slate-800 pb-2.5">
                          <span>기본 모델 스펙 일람 (W 550 x D 450 x H 1800 mm)</span>
                          <span className="text-[10px] bg-slate-850 text-gold-300 px-2 py-0.5 rounded font-mono font-bold">STANDARD</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[13px]">
                          <div className="flex justify-between py-1.5 border-b border-slate-800/40">
                            <span className="text-slate-400">높이 (Height)</span>
                            <span className="text-white font-medium">1,800 mm <span className="text-[11px] text-gold-500">(맞춤 가능)</span></span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-800/40">
                            <span className="text-slate-400">가로 폭 (Width)</span>
                            <span className="text-white font-medium">550 mm <span className="text-[11px] text-gold-500">(맞춤 가능)</span></span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-800/40">
                            <span className="text-slate-400">깊이 (Depth)</span>
                            <span className="text-white font-medium">450 mm <span className="text-[11px] text-gold-500">(맞춤 가능)</span></span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-800/40">
                            <span className="text-slate-400">선반 간 높이</span>
                            <span className="text-white font-medium">각 250 mm <span className="text-[11px] text-gold-500">(간격 조절 가능)</span></span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-800/40 col-span-1 sm:col-span-2">
                            <span className="text-slate-400">선반 개수</span>
                            <span className="text-white font-medium">4개 (투명 강화유리 선반 기본 탑재)</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-800/40 col-span-1 sm:col-span-2">
                            <span className="text-slate-400">주요 소재</span>
                            <span className="text-white font-medium">알루미늄(프레임), MDF(벽면), 유리(선반, 창)</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-800/40 col-span-1 sm:col-span-2">
                            <span className="text-slate-400">프레임 색상</span>
                            <span className="text-white font-medium">무광 블랙 (기본) / <span className="text-gold-300 font-semibold">모던 무광 화이트 (무료 변경 가능)</span></span>
                          </div>
                          <div className="flex justify-between py-1.5 col-span-1 sm:col-span-2">
                            <span className="text-slate-400">주요 특징</span>
                            <span className="text-white font-medium">도어 매립형 안전 잠금장치 탑재, 이동식 우레탄 바퀴 기본 세팅</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal pt-2 border-t border-slate-800/60 font-light">
                          ※ 모든 사이즈는 측정 방법에 따라 약간의 오차가 있을 수 있습니다.<br />
                          ※ 본 기본 규격을 기준으로 원하시는 형태 및 가로/세로/높이 크기 변경 제작이 가능합니다.
                        </p>
                      </div>

                      {/* Detailed Delivery Fee Section */}
                      <div className="pt-8 border-t border-slate-800/60 space-y-5">
                        <div className="border-b border-slate-800/40 pb-2.5">
                          <h4 className="text-sm tracking-widest text-gold-400 font-serif font-bold uppercase flex items-center">
                            <Truck className="w-4 h-4 text-gold-500 mr-2" />
                            지역별 화물 배송 및 안심 설치 안내
                          </h4>
                          <p className="text-xs text-slate-450 font-light mt-1.5 leading-relaxed">
                            부피가 크고 파손에 취약한 고가 유리 가구의 특성을 고려하여, 일반 택배가 아닌 <span className="text-gold-300 font-medium">가구 전문 특송 직배송</span>팀을 운영하고 있습니다. 전담 기사님이 자택 내부 원하는 위치까지 운송 및 완벽한 수평 설치를 완료해 드립니다.
                          </p>
                        </div>

                        {/* Delivery Fees Grid */}
                        <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg overflow-hidden">
                          <div className="bg-slate-850 border-b border-slate-850 px-4 py-2.5 flex items-center justify-between text-slate-200 font-semibold text-[13px]">
                            <span>🚚 화물 배송 운임표 (독립 전담 직배송 기준)</span>
                            <span className="text-[11px] text-gold-400 font-light">전국 설치 가능</span>
                          </div>
                          
                          <div className="divide-y divide-slate-800/40">
                            {[
                              { region: '서울 및 수도권', price: '50,000원 ~' },
                              { region: '경기도 인근', price: '60,000원 ~' },
                              { region: '충청도 인근', price: '100,000원 ~' },
                              { region: '전라도 인근', price: '100,000원 ~' },
                              { region: '경상도 인근', price: '100,000원 ~' },
                              { region: '제주도 인근', price: '250,000원 ~' }
                            ].map((item, idx) => (
                              <div key={idx} className="flex justify-between items-center px-4 py-3 text-[13px] hover:bg-slate-900/40 transition-colors">
                                <span className="text-slate-300 font-medium">{item.region}</span>
                                <span className="text-gold-300 font-mono font-bold text-sm">{item.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Delivery Caveats */}
                        <div className="bg-slate-950 border border-slate-850 p-4 rounded-md space-y-1.5">
                          <div className="text-[11px] font-semibold text-slate-400">※ 화물 배송 시 필독사항</div>
                          <ul className="text-[11px] text-slate-500 space-y-1.5 list-disc pl-4 leading-relaxed font-light">
                            <li>안내된 요금은 기본 <strong className="text-slate-400 font-medium">1대 기준</strong>의 최저가 화물 운임비입니다.</li>
                            <li>엘리베이터가 없는 2층 이상 건물, 사다리차 사용이 필수적인 특수 진입 환경의 경우 현장 요금이 추가될 수 있습니다.</li>
                            <li>상세 산간 도서 지역이나 제주도의 경우 기상 상황과 도선료 추가 여부에 따라 상담을 거쳐 정확한 금액을 사전 협의해 드립니다.</li>
                            <li>정확한 배송 일시는 주문 제작 진행 상황과 해당 지역 직배송 차량 순환 일정에 따라 사전에 해피콜 전화로 상세 협의 및 조율됩니다.</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Right Column: Details */}
                <div className="w-full md:w-[45%] flex flex-col justify-between p-8 sm:p-10 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-full">
                  <div className="space-y-8">
                    {/* Premium Header Accent */}
                    <div className="border-b border-slate-800 pb-6">
                      <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium block mb-2.5 font-mono">PREMIUM GLASS SHOWCASE</span>
                      <h3 className="font-serif text-3xl font-semibold text-white leading-snug tracking-tight mb-4">
                        공간에 맞춰 완성되는<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
                          프리미엄 유리 진열장
                        </span>
                      </h3>
                      <p className="text-slate-200 text-base font-medium leading-relaxed mb-1.5">
                        "기성품으로는 부족했던 공간."
                      </p>
                      <p className="text-slate-350 text-[13px] font-light leading-relaxed mb-4">
                        원하는 사이즈 그대로 제작하는 100% 맞춤형 유리 진열장입니다. 
                        높이, 가로, 깊이부터 선반 구성까지 고객님의 공간에 정밀하게 맞춰 제작하여 
                        매장의 품격과 진열품의 가치를 더욱 높여드립니다.
                      </p>

                      {/* Interactive Frame Color Switcher */}
                      <div className="pt-4 border-t border-slate-800/60">
                        <span className="text-xs font-semibold text-slate-400 block mb-2 uppercase tracking-wide">
                          🎨 실시간 프레임 색상 스위처 (선택 시 이미지 전환)
                        </span>
                        <div className="flex gap-2.5">
                          <button
                            onClick={() => setActivePreviewImage('/src/assets/images/empty_black_cabinet_1784075717452.jpg')}
                            className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-sm border text-xs font-medium cursor-pointer transition-all duration-300 ${
                              (activePreviewImage === '/src/assets/images/empty_black_cabinet_1784075717452.jpg' || (!activePreviewImage && selectedProduct.id === 'prod-black-cabinet'))
                                ? 'bg-slate-900 border-gold-500 text-gold-400 shadow-[0_2px_8px_rgba(212,175,55,0.1)]'
                                : 'bg-slate-950 border-slate-800/80 text-slate-450 hover:text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <span className="w-3 h-3 rounded-full bg-slate-950 border border-slate-700 block shrink-0" />
                            <span>시그니처 무광 블랙</span>
                          </button>
                          
                          <button
                            onClick={() => setActivePreviewImage('/src/assets/images/cabinet_white_1784168942419.jpg')}
                            className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-sm border text-xs font-medium cursor-pointer transition-all duration-300 ${
                              (activePreviewImage === '/src/assets/images/cabinet_white_1784168942419.jpg' || (!activePreviewImage && selectedProduct.id === 'prod-white-cabinet'))
                                ? 'bg-slate-900 border-gold-500 text-gold-400 shadow-[0_2px_8px_rgba(212,175,55,0.1)]'
                                : 'bg-slate-950 border-slate-800/80 text-slate-450 hover:text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <span className="w-3 h-3 rounded-full bg-white border border-slate-300 block shrink-0" />
                            <span>모던 무광 화이트</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Signature Spec Grid */}
                    <div className="space-y-4">
                      <h4 className="text-sm tracking-wider text-gold-400 font-serif font-bold uppercase flex items-center mb-1.5">
                        <Sparkles className="w-4 h-4 text-gold-500 mr-2" />
                        시그니처 아틀리에 맞춤 혜택
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { title: '맞춤 사이즈 제작', desc: '1mm 단위 공간 최적화 설계' },
                          { title: '최고급 강화유리 적용', desc: '안전하고 투명한 강화유리 기본' },
                          { title: '견고한 알루미늄 프레임', desc: '뒤틀림 없이 슬림하고 강인한 하중 지지' },
                          { title: '블랙 / 화이트 프레임 선택', desc: '모던 무광 화이트 컬러 무료 선택 가능' },
                          { title: '보안 잠금장치 기본 선택', desc: '소중한 전시품의 안전한 보호' },
                          { title: 'LED 광원 옵션', desc: '작품을 돋보이게 하는 연출 조명' },
                          { title: '이동식 바퀴 옵션', desc: '공간 재배치 시 편리한 이동 바퀴' },
                          { title: '전국 배송 및 안심 설치', desc: '전문 가구 전담 기사 안전 직배송' },
                        ].map((spec, index) => (
                          <div key={index} className="bg-slate-950/40 border border-slate-800/80 p-3 rounded hover:border-gold-500/20 transition-all duration-200">
                            <div className="flex items-center space-x-2.5">
                              <Check className="w-4 h-4 text-gold-400 shrink-0" />
                              <span className="text-[13px] text-white font-medium">{spec.title}</span>
                            </div>
                            <span className="text-[11px] text-slate-450 font-light block pl-6.5 mt-1">{spec.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Direct-to-Consumer Guarantee */}
                    <div className="bg-gradient-to-r from-gold-950/30 to-slate-950/80 border border-gold-500/20 p-4 rounded-md text-center">
                      <p className="text-[13px] text-gold-300 font-light">
                        🏭 <strong className="font-semibold text-white">공장 직영 설계</strong>로 중간 유통 단계를 줄여 합리적인 가격과 신속하고 정확한 제작을 약속드립니다.
                      </p>
                    </div>

                    {/* Instant Quote Form Guide */}
                    <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-md space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                        <span className="text-sm font-semibold text-gold-400 flex items-center">
                          <Sliders className="w-4 h-4 text-gold-500 mr-2" />
                          원하는 맞춤형 사이즈 견적 신청 예시
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">Specification</span>
                      </div>
                      <div className="space-y-2 text-[13px] font-mono text-slate-300 bg-slate-900/60 p-4 rounded border border-slate-800/50">
                        <p><span className="text-slate-500">■ 높이 :</span> 1800mm</p>
                        <p><span className="text-slate-500">■ 가로 :</span> 550mm</p>
                        <p><span className="text-slate-500">■ 깊이 :</span> 450mm</p>
                        <p><span className="text-slate-500">■ 프레임 색상 :</span> 블랙 / 화이트 선택 가능 <span className="text-gold-400 font-sans text-xs">(무료 변경)</span></p>
                        <p><span className="text-slate-500">■ 선반 개수 :</span> 4단 (또는 원하는 선반 수)</p>
                        <p><span className="text-slate-500">■ 선반 간격 :</span> 임의 균등 / 자유 선택 가능</p>
                        <p><span className="text-slate-500">■ LED 유무 :</span> 유 / 무 선택</p>
                      </div>
                      <p className="text-[12px] text-slate-350 font-light leading-relaxed">
                        💡 위 규격 정보를 의뢰서에 자유롭게 남겨 주시면 공장 직영 담당자가 빠르게 전담 전화를 드려 최종 상세 무료 견적과 최적의 추천 배송 요금을 즉각 안내해 드립니다.
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-slate-800">
                    <button
                      onClick={() => {
                        const isWhite = activePreviewImage === '/src/assets/images/cabinet_white_1784168942419.jpg' || (selectedProduct.id === 'prod-white-cabinet' && !activePreviewImage);
                        const colorText = isWhite ? '무광 화이트' : '무광 블랙';
                        const quoteText = `[550x450 타워형 커스텀 진열장 견적 의뢰]\n높이 : 1800mm\n가로 : 550mm\n깊이 : 450mm\n프레임 색상 : ${colorText}\n선반 개수 : 4단\n선반 간격 : 균등 배분`;
                        onQuoteWithProduct(quoteText, selectedProduct.categoryLabel, 'W 550 x D 450 x H 1800');
                        setSelectedProduct(null);
                        setActivePreviewImage(null);
                      }}
                      className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 rounded-sm text-sm font-bold tracking-wider shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-pointer"
                    >
                      <span>이 규격(550x450x1800) 예시로 즉시 견적 문의 신청하기</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-3">
                      클릭하시면 원하시는 세부 옵션들이 문의서 폼으로 자동 세팅됩니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
