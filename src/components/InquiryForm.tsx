import React, { useState, useEffect } from 'react';
import { Ruler, Sparkles, Phone, User, Mail, Send, Check, Settings, Eye, RefreshCw, Layers, Sliders, ReceiptText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryFormData } from '../types';

interface InquiryFormProps {
  initialStyleTitle?: string;
  initialCategory?: string;
  initialPrice?: number;
  initialDimensions?: string;
}

export default function InquiryForm({ 
  initialStyleTitle = '', 
  initialCategory = '',
  initialPrice,
  initialDimensions = ''
}: InquiryFormProps) {
  // 1. Showcase Customizer States
  const [width, setWidth] = useState<number>(1200); // 600 - 2400 mm
  const [depth, setDepth] = useState<number>(600);   // 400 - 1000 mm
  const [height, setHeight] = useState<number>(1000); // 400 - 2400 mm

  const [glassType, setGlassType] = useState<InquiryFormData['glassType']>('low-iron');
  const [frameMaterial, setFrameMaterial] = useState<InquiryFormData['frameMaterial']>('brass-gold');
  const [lightingType, setLightingType] = useState<InquiryFormData['lightingType']>('side-led');
  const [handleType, setHandleType] = useState<InquiryFormData['handleType']>('push-to-open');
  const [lockType, setLockType] = useState<InquiryFormData['lockType']>('none');

  // 2. Contact lead states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [usage, setUsage] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Auto-filled reference
  const [refPortfolio, setRefPortfolio] = useState('');

  // Status & submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [submissionHistory, setSubmissionHistory] = useState<any[]>([]);

  useEffect(() => {
    if (initialStyleTitle) {
      if (initialStyleTitle.includes('[선택 모델:')) {
        // This is a product choice from our Catalog Customizer
        setSpecialRequest(initialStyleTitle);
        
        // Extract product name
        const nameMatch = initialStyleTitle.match(/\[선택 모델:\s*([^\]]+)\]/);
        if (nameMatch) {
          setRefPortfolio(nameMatch[1].trim());
        }

        // Parse Glass
        if (initialStyleTitle.includes('디아망 초투명유리')) setGlassType('low-iron');
        else if (initialStyleTitle.includes('안전강화유리')) setGlassType('tempered');
        else if (initialStyleTitle.includes('일반유리')) setGlassType('normal');

        // Parse Frame
        if (initialStyleTitle.includes('스테인리스')) setFrameMaterial('stainless');
        else if (initialStyleTitle.includes('브라스 골드')) setFrameMaterial('brass-gold');
        else if (initialStyleTitle.includes('고급 원목')) setFrameMaterial('wood');
        else if (initialStyleTitle.includes('프레임리스')) setFrameMaterial('frameless');

        // Parse Lighting
        if (initialStyleTitle.includes('조명 없음')) setLightingType('none');
        else if (initialStyleTitle.includes('상부 스포트라이트')) setLightingType('top-spot');
        else if (initialStyleTitle.includes('좌우 매립')) setLightingType('side-led');
        else if (initialStyleTitle.includes('입체 올-라운드')) setLightingType('all-round');

        // Parse Handle
        if (initialStyleTitle.includes('푸시 오픈')) setHandleType('push-to-open');
        else if (initialStyleTitle.includes('황동 브라스 노브')) setHandleType('brass-pull');
        else if (initialStyleTitle.includes('매립형 미니멀 바')) setHandleType('minimal-grip');
        else if (initialStyleTitle.includes('잠금장치 일체형')) setHandleType('key-grip');

        // Parse Lock
        if (initialStyleTitle.includes('잠금장치 없음')) setLockType('none');
        else if (initialStyleTitle.includes('실린더 열쇠형')) setLockType('key-lock');
        else if (initialStyleTitle.includes('전자식 번호')) setLockType('digital-lock');
        else if (initialStyleTitle.includes('지문인식 히든락') || initialStyleTitle.includes('지문인식 히든 락')) setLockType('fingerprint');

        // Parse Dimensions from string (e.g. W 600 x D 600 x H 1800 mm)
        const dimMatch = initialStyleTitle.match(/W\s*(\d+)\s*x\s*D\s*(\d+)\s*x\s*H\s*(\d+)/i);
        if (dimMatch) {
          setWidth(parseInt(dimMatch[1]));
          setDepth(parseInt(dimMatch[2]));
          setHeight(parseInt(dimMatch[3]));
        }
      } else {
        // This is a standard portfolio selection
        setRefPortfolio(initialStyleTitle);
      }
    }
    
    // Explicit initial dimensions if provided separately
    if (initialDimensions) {
      const dimMatch = initialDimensions.match(/W\s*(\d+)\s*x\s*D\s*(\d+)\s*x\s*H\s*(\d+)/i);
      if (dimMatch) {
        setWidth(parseInt(dimMatch[1]));
        setDepth(parseInt(dimMatch[2]));
        setHeight(parseInt(dimMatch[3]));
      }
    }
  }, [initialStyleTitle, initialDimensions]);

  // Load submissions from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('atelier_inquiries');
      if (saved) {
        setSubmissionHistory(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load inquiries history', e);
    }
  }, []);

  // Real-time pricing calculator
  const calculateEstimatedPrice = () => {
    // Base setup
    let basePrice = 550000; // 550,000 KRW baseline

    // Volume multiplier
    const volumeIndex = (width / 1000) * (depth / 1000) * (height / 1000);
    const volumeAdd = volumeIndex * 350000;

    // Glass multiplier
    let glassMultiplier = 1.0;
    if (glassType === 'tempered') glassMultiplier = 1.25;
    if (glassType === 'low-iron') glassMultiplier = 1.45; // Diamant is more premium

    // Frame multiplier
    let frameAdd = 0;
    if (frameMaterial === 'brass-gold') frameAdd = 280000;
    if (frameMaterial === 'stainless') frameAdd = 150000;
    if (frameMaterial === 'wood') frameAdd = 220000;
    if (frameMaterial === 'frameless') frameAdd = 350000; // UV adhesive expertise

    // Lighting multiplier
    let lightingAdd = 0;
    if (lightingType === 'top-spot') lightingAdd = 90000;
    if (lightingType === 'side-led') lightingAdd = 160000;
    if (lightingType === 'all-round') lightingAdd = 280000;

    let flatOptionAdd = 0;
    // Handle premium
    if (handleType === 'brass-pull') flatOptionAdd += 30000;
    if (handleType === 'minimal-grip') flatOptionAdd += 20000;
    if (handleType === 'key-grip') flatOptionAdd += 60000;

    // Lock premium
    if (lockType === 'key-lock') flatOptionAdd += 50000;
    if (lockType === 'digital-lock') flatOptionAdd += 150000;
    if (lockType === 'fingerprint') flatOptionAdd += 250000;

    const totalCalculated = Math.round((basePrice + volumeAdd + frameAdd + lightingAdd) * glassMultiplier + flatOptionAdd);
    
    // Estimate range ± 10%
    const minEstimate = Math.floor((totalCalculated * 0.9) / 10000) * 10000;
    const maxEstimate = Math.ceil((totalCalculated * 1.1) / 10000) * 10000;

    return {
      min: minEstimate,
      max: maxEstimate,
      avg: totalCalculated
    };
  };

  const { min, max, avg } = calculateEstimatedPrice();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact || !agreedToTerms) {
      alert('필수 입력 항목을 작성해 주시고 개인정보 수집 및 동의에 체크해 주세요.');
      return;
    }

    setIsSubmitting(true);

    // Simulate server response
    setTimeout(() => {
      const ticketId = `AT-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`;
      const newInquiry = {
        ticketId,
        date: new Date().toLocaleDateString('ko-KR'),
        name,
        company: company || '개인 수집가',
        contact,
        email: email || '이메일 미입력',
        width,
        depth,
        height,
        glassType,
        frameMaterial,
        lightingType,
        handleType,
        lockType,
        usage: usage || '일반 진열',
        specialRequest,
        refPortfolio,
        estimatedMin: min,
        estimatedMax: max
      };

      // Save to localStorage
      const updatedHistory = [newInquiry, ...submissionHistory];
      setSubmissionHistory(updatedHistory);
      localStorage.setItem('atelier_inquiries', JSON.stringify(updatedHistory));

      setSubmittedData(newInquiry);
      setIsSubmitting(false);

      // Scroll modal into view
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 1500);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setName('');
    setCompany('');
    setContact('');
    setEmail('');
    setUsage('');
    setSpecialRequest('');
    setAgreedToTerms(false);
    setRefPortfolio('');
  };

  // Dynamic visual configurations based on customization selections
  const getFrameColorClass = () => {
    switch (frameMaterial) {
      case 'brass-gold': return 'border-gold-400 bg-gold-400/5 shadow-[0_0_15px_rgba(194,161,106,0.15)]';
      case 'stainless': return 'border-slate-300 bg-slate-300/5 shadow-[0_0_15px_rgba(203,213,225,0.1)]';
      case 'wood': return 'border-amber-800 bg-amber-900/5 shadow-[0_0_15px_rgba(146,64,14,0.1)]';
      case 'frameless': return 'border-cyan-300/40 bg-cyan-400/5 border-dashed shadow-[0_0_20px_rgba(103,232,249,0.1)]';
      default: return 'border-gold-400';
    }
  };

  const getGlassLabel = () => {
    if (glassType === 'normal') return '일반 5mm 투명유리';
    if (glassType === 'tempered') return '고강도 강화 8mm 안전유리';
    return '최고급 벨기에 저철분 디아망 초투명 유리';
  };

  const getFrameLabel = () => {
    if (frameMaterial === 'stainless') return 'Satin 헤어라인 실버 서스 프레임';
    if (frameMaterial === 'brass-gold') return '무광 사틴 브라스 골드 특수 프레임';
    if (frameMaterial === 'wood') return '아메리칸 천연 월넛 원목 베니어';
    return '프레임리스 45도 초밀착 UV 투명 접합 방식';
  };

  const getLightingLabel = () => {
    if (lightingType === 'none') return '조명 안함';
    if (lightingType === 'top-spot') return '상부 천장 빌트인 스포트라이트 (No UV)';
    if (lightingType === 'side-led') return '좌우 내장형 슬림 마그네틱 LED 리니어 바';
    return '전면 3D 서라운드 입체 지향성 디밍 조명';
  };

  const getHandleLabel = () => {
    if (handleType === 'push-to-open') return '푸시 오픈 방식 (터치 압축 개폐형)';
    if (handleType === 'brass-pull') return '황동 브라스 노브 손잡이 마감';
    if (handleType === 'minimal-grip') return '매립형 슬림 미니멀 수직 바';
    return '잠금장치 겸용 일체형 보안 그립';
  };

  const getLockLabel = () => {
    if (lockType === 'none') return '잠금장치 미적용 (일반 가정)';
    if (lockType === 'key-lock') return '아날로그 정밀 실린더 잠금키';
    if (lockType === 'digital-lock') return '비밀번호 입력 터치 도어락';
    return '최고 보안 생체인식 지문 히든 도어락';
  };

  return (
    <div id="inquiry-page" className="bg-slate-950 text-white py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <span className="font-serif text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase block mb-3">
            Atelier Live Cost Estimator
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-white mb-4">
            실시간 맞춤형 견적 산출 및 상담 신청
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light">
            규격 사이즈와 원하는 자재를 조절하여 즉각적인 견적을 알아보고,<br />
            아틀리에 마스터와의 1:1 디테일 맞춤형 전용 설계 상담을 접수하세요.
          </p>
        </div>

        {/* Dynamic Multi-Step Wizard and Summary */}
        <AnimatePresence mode="wait">
          {!submittedData ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Interactive Showcase Customizer (7 Cols) */}
              <div className="lg:col-span-7 bg-slate-900/40 border border-slate-850 p-6 sm:p-8 rounded-sm">
                <div className="flex items-center space-x-2 mb-6 text-gold-400">
                  <Settings className="w-5 h-5 animate-spin-slow" />
                  <h2 className="font-serif text-sm font-semibold tracking-wider uppercase">
                    1. 진열장 옵션 빌더 (Showcase Customizer)
                  </h2>
                </div>

                {/* Part A: Dimensions sliders */}
                <div className="mb-8 border-b border-slate-850 pb-6">
                  <h3 className="text-xs font-bold text-slate-300 mb-5 flex items-center space-x-1.5 uppercase tracking-wide">
                    <Ruler className="w-4 h-4 text-gold-400" />
                    <span>진열장 제작 치수 조절 (단위: mm)</span>
                  </h3>

                  <div className="space-y-5">
                    {/* Width slider */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400">가로 폭 (Width)</span>
                        <span className="font-mono text-gold-400 font-bold">{width.toLocaleString()} mm</span>
                      </div>
                      <input
                        type="range"
                        min="600"
                        max="2400"
                        step="50"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="w-full accent-gold-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-600 font-mono mt-1">
                        <span>Min: 600</span>
                        <span>Max: 2,400</span>
                      </div>
                    </div>

                    {/* Depth slider */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400">세로 폭/깊이 (Depth)</span>
                        <span className="font-mono text-gold-400 font-bold">{depth.toLocaleString()} mm</span>
                      </div>
                      <input
                        type="range"
                        min="400"
                        max="1000"
                        step="50"
                        value={depth}
                        onChange={(e) => setDepth(Number(e.target.value))}
                        className="w-full accent-gold-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-600 font-mono mt-1">
                        <span>Min: 400</span>
                        <span>Max: 1,000</span>
                      </div>
                    </div>

                    {/* Height slider */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400">높이 (Height)</span>
                        <span className="font-mono text-gold-400 font-bold">{height.toLocaleString()} mm</span>
                      </div>
                      <input
                        type="range"
                        min="400"
                        max="2400"
                        step="50"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full accent-gold-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-600 font-mono mt-1">
                        <span>Min: 400</span>
                        <span>Max: 2,400</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part B: Glass Select */}
                <div className="mb-8 border-b border-slate-850 pb-6">
                  <h3 className="text-xs font-bold text-slate-300 mb-4 uppercase tracking-wide">
                    유리 소재 필터 선택
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { id: 'normal', title: '일반 투명유리', sub: '기본 보급형 피팅', mult: '기준가' },
                      { id: 'tempered', title: '강화 안전유리', sub: '우수한 보존 하중', mult: '1.25배 할증' },
                      { id: 'low-iron', title: '디아망 초투명 유리', sub: '녹색 배제 최고 투과율', mult: '1.45배 할증' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setGlassType(opt.id as any)}
                        className={`p-4 text-left border rounded-sm transition-all text-xs cursor-pointer ${
                          glassType === opt.id
                            ? 'bg-slate-900 border-gold-400 text-gold-300 font-semibold'
                            : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                        }`}
                      >
                        <span className="block font-semibold text-white">{opt.title}</span>
                        <span className="text-[10px] text-slate-500 block mt-1 font-light leading-snug">{opt.sub}</span>
                        <span className="text-[10px] text-gold-500 font-mono block mt-2">{opt.mult}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Part C: Frame Select */}
                <div className="mb-8 border-b border-slate-850 pb-6">
                  <h3 className="text-xs font-bold text-slate-300 mb-4 uppercase tracking-wide">
                    외경 프레임 마감 선택
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {[
                      { id: 'brass-gold', title: '사틴 브라스 골드', sub: '황동광 최고급형' },
                      { id: 'stainless', title: '사틴 실버 헤어라인', sub: '모던 스틸 인테리어' },
                      { id: 'wood', title: '아메리칸 원목 월넛', sub: '클래식 정취 디자인' },
                      { id: 'frameless', title: '프레임리스 UV 접합', sub: '사방 테두리 없는 시야' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFrameMaterial(opt.id as any)}
                        className={`p-3.5 text-left border rounded-sm transition-all text-xs cursor-pointer ${
                          frameMaterial === opt.id
                            ? 'bg-slate-900 border-gold-400 text-gold-300 font-semibold'
                            : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                        }`}
                      >
                        <span className="block font-semibold text-white">{opt.title}</span>
                        <span className="text-[9px] text-slate-500 block mt-1 leading-snug font-light">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Part D: Lighting Select */}
                <div className="mb-8 border-b border-slate-850 pb-6">
                  <h3 className="text-xs font-bold text-slate-300 mb-4 uppercase tracking-wide">
                    LED 조명 및 배선 솔루션
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {[
                      { id: 'none', title: '조명 없음', sub: '자연광 배치용' },
                      { id: 'top-spot', title: '상부 스포트라이트', sub: '박물관 국부 투사' },
                      { id: 'side-led', title: '좌우 리니어 LED', sub: '그늘 없는 일체 조명' },
                      { id: 'all-round', title: '전선숨김 마그네틱', sub: '무선 레일 자유 조절' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setLightingType(opt.id as any)}
                        className={`p-3.5 text-left border rounded-sm transition-all text-xs cursor-pointer ${
                          lightingType === opt.id
                            ? 'bg-slate-900 border-gold-400 text-gold-300 font-semibold'
                            : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                        }`}
                      >
                        <span className="block font-semibold text-white">{opt.title}</span>
                        <span className="text-[9px] text-slate-500 block mt-1 leading-snug font-light">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Part E: Handle Select */}
                <div className="mb-8 border-b border-slate-850 pb-6">
                  <h3 className="text-xs font-bold text-slate-300 mb-4 uppercase tracking-wide">
                    문 및 손잡이 개폐 방식
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {[
                      { id: 'push-to-open', title: '푸시 오픈', sub: '터치 압축 개폐형' },
                      { id: 'brass-pull', title: '황동 브라스 노브', sub: '솔리드 바 마감 노브' },
                      { id: 'minimal-grip', title: '매립형 미니멀 바', sub: '슬림 수직 돌출 그립' },
                      { id: 'key-grip', title: '잠금 일체형', sub: '손잡이 겸용 잠금키' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setHandleType(opt.id as any)}
                        className={`p-3.5 text-left border rounded-sm transition-all text-xs cursor-pointer ${
                          handleType === opt.id
                            ? 'bg-slate-900 border-gold-400 text-gold-300 font-semibold'
                            : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                        }`}
                      >
                        <span className="block font-semibold text-white">{opt.title}</span>
                        <span className="text-[9px] text-slate-500 block mt-1 leading-snug font-light">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Part F: Lock Select */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-slate-300 mb-4 uppercase tracking-wide">
                    보안 및 잠금장치 선택
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {[
                      { id: 'none', title: '잠금장치 없음', sub: '간편한 가정 전용' },
                      { id: 'key-lock', title: '실린더 열쇠형', sub: '클래식 정밀 실린더' },
                      { id: 'digital-lock', title: '전자 번호키', sub: '터치패드 전자 도어락' },
                      { id: 'fingerprint', title: '지문인식 히든락', sub: '생체센서 최고 보안' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setLockType(opt.id as any)}
                        className={`p-3.5 text-left border rounded-sm transition-all text-xs cursor-pointer ${
                          lockType === opt.id
                            ? 'bg-slate-900 border-gold-400 text-gold-300 font-semibold'
                            : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                        }`}
                      >
                        <span className="block font-semibold text-white">{opt.title}</span>
                        <span className="text-[9px] text-slate-500 block mt-1 leading-snug font-light">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: 3D CAD Preview + Instant Quote Summary + Contact Form (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col space-y-8">
                
                {/* A. Live CAD Vector Preview Container */}
                <div className="bg-slate-900 p-6 border border-slate-800 rounded-sm">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="flex items-center space-x-1.5 text-slate-400 font-semibold uppercase tracking-wider">
                      <Eye className="w-3.5 h-3.5 text-gold-400" />
                      <span>3D Blueprint Preview</span>
                    </span>
                    <span className="text-[10px] font-mono text-gold-500/80">LIVE DIMENSIONS</span>
                  </div>

                  {/* SVG / CSS dynamic showcase rendering */}
                  <div className="h-56 bg-slate-950 border border-slate-850 rounded-sm flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(194,161,106,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(194,161,106,0.01)_1px,transparent_1px)] bg-[size:12px_12px]" />
                    
                    {/* Decorative 3D Axis indicator */}
                    <div className="absolute bottom-3 left-3 font-mono text-[8px] text-slate-600 flex flex-col">
                      <span>X-AXIS: {width} mm</span>
                      <span>Y-AXIS: {height} mm</span>
                      <span>Z-AXIS: {depth} mm</span>
                    </div>

                    {/* Dynamic Showcase Cabinet Frame */}
                    <div
                      className={`relative w-40 h-44 border-2 flex flex-col justify-between p-1 transition-all duration-300 ${getFrameColorClass()}`}
                      style={{
                        width: `${Math.max(90, Math.min(180, (width / 2400) * 180))}px`,
                        height: `${Math.max(120, Math.min(180, (height / 2400) * 180))}px`,
                      }}
                    >
                      {/* Top Glass Plate */}
                      <div className="h-4 border-b border-slate-800 flex items-center justify-center text-[7px] text-slate-600 font-mono">
                        GLASS CAP
                      </div>

                      {/* Side Glass Lines & LED glowing line effects */}
                      <div className="flex-grow flex justify-between relative px-1 py-4">
                        {/* Left LED bar glow if side-led / all-round is active */}
                        {(lightingType === 'side-led' || lightingType === 'all-round') && (
                          <div className="w-[3px] h-full bg-yellow-200/80 shadow-[0_0_8px_rgba(253,224,71,0.8)] rounded-full animate-pulse" />
                        )}

                        <div className="flex-grow flex items-center justify-center">
                          <span className="text-[9px] text-slate-400 font-mono font-light select-none">
                            {getFrameLabel().split(' ')[0]}
                          </span>
                        </div>

                        {/* Right LED bar glow */}
                        {(lightingType === 'side-led' || lightingType === 'all-round') && (
                          <div className="w-[3px] h-full bg-yellow-200/80 shadow-[0_0_8px_rgba(253,224,71,0.8)] rounded-full animate-pulse" />
                        )}

                        {/* Top Spot light indicator if active */}
                        {lightingType === 'top-spot' && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-yellow-200 shadow-[0_4px_15px_rgba(253,224,71,0.9)] rounded-b-sm" />
                        )}
                      </div>

                      {/* Bottom Cabinet / Wood Base */}
                      <div className="h-8 border-t border-slate-800 bg-slate-900/80 flex items-center justify-center text-[8px] text-slate-500 font-mono">
                        BASE PLINTH
                      </div>
                    </div>

                    {/* Dynamic Dimension Overlays on top of rendering */}
                    <div className="absolute top-2 right-4 text-right">
                      <div className="text-[10px] font-mono text-gold-400 font-semibold">{width}w × {depth}d × {height}h mm</div>
                      <div className="text-[8px] text-slate-500 font-light mt-0.5">{getGlassLabel().split(' ')[1]}</div>
                    </div>
                  </div>
                </div>

                {/* B. Live Estimator Calculator Output */}
                <div className="bg-slate-900/90 border border-gold-400/30 p-6 rounded-sm relative overflow-hidden shadow-lg shadow-gold-500/5">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gold-400/5 rounded-full filter blur-xl" />
                  
                  <span className="text-[9px] font-mono text-gold-400 tracking-widest block uppercase mb-1">
                    Atelier Estimation Calculator
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-white mb-4">
                    실시간 견적 범위 산정
                  </h3>

                  <div className="flex items-baseline justify-between mb-4 border-b border-slate-800 pb-4">
                    <span className="text-xs text-slate-400">자체제작 예상 견적</span>
                    <div className="text-right">
                      <span className="font-mono text-lg sm:text-xl font-bold text-gold-300">
                        {min.toLocaleString()} ~ {max.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold ml-1">원</span>
                    </div>
                  </div>

                  {/* Calculations Details Accordion checklist */}
                  <div className="space-y-2 text-[11px] text-slate-400 font-light mb-1">
                    <div className="flex justify-between">
                      <span>• 기본 공정 기준가</span>
                      <span className="font-mono">550,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 정밀 규격 체적비 ({width}x{depth}x{height})</span>
                      <span className="font-mono text-slate-300">+ {Math.round((width/1000)*(depth/1000)*(height/1000)*350000).toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• {getGlassLabel().split(' ')[1]} ({glassType === 'low-iron' ? '디아망 저철분' : '안전유리'})</span>
                      <span className="font-mono text-slate-300">할증 {glassType === 'normal' ? '없음' : glassType === 'tempered' ? '1.25x' : '1.45x'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 프레임: {getFrameLabel().split(' ')[0]}</span>
                      <span className="font-mono text-slate-300">적용 완료</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 조명: {getLightingLabel().split(' ')[1]}</span>
                      <span className="font-mono text-slate-300">셋업 포함</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 손잡이: {getHandleLabel().split(' ')[0]}</span>
                      <span className="font-mono text-slate-300">선택 완료</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 보안락: {getLockLabel().split(' ')[0]}</span>
                      <span className="font-mono text-slate-300">선택 완료</span>
                    </div>
                  </div>

                  <p className="text-[9px] text-slate-500 leading-relaxed mt-4">
                    * 상기 견적은 제작 난이도, 자재 수급가, 현장 실측 가공 여건에 따라 실 시공 견적서와 다소 차이가 있을 수 있으며, 디테일 설계 미팅을 통해 변동될 수 있습니다.
                  </p>
                </div>

                {/* C. Lead Contact Lead Capture Form */}
                <form id="lead-consultation-form" onSubmit={handleSubmit} className="bg-slate-900 p-6 border border-slate-850 rounded-sm">
                  <div className="flex items-center space-x-2 mb-6 text-gold-400 border-b border-slate-850 pb-3">
                    <Send className="w-4 h-4" />
                    <h3 className="font-serif text-xs font-semibold tracking-wider uppercase">
                      2. 상담 접수 및 정보 기입
                    </h3>
                  </div>

                  {refPortfolio && (
                    <div className="mb-4 bg-slate-950 p-3 border border-gold-500/20 rounded-sm text-xs">
                      <span className="text-slate-500 block">선택한 참고 시공 레퍼런스</span>
                      <span className="text-gold-300 font-semibold block mt-0.5">➔ {refPortfolio}</span>
                      <button
                        type="button"
                        onClick={() => setRefPortfolio('')}
                        className="text-[10px] text-slate-500 hover:text-white underline mt-1.5"
                      >
                        선택 취소하기
                      </button>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Name / Company */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1 font-medium">고객명 / 성함 <span className="text-gold-400">*</span></label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="홍길동"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-sm py-2 px-3 pl-9 text-xs focus:border-gold-400 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1 font-medium">회사명 / 브랜드</label>
                        <input
                          type="text"
                          placeholder="가이아 부티크"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-sm py-2 px-3 text-xs focus:border-gold-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Contact Phone / Email */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1 font-medium">연락처 (휴대폰) <span className="text-gold-400">*</span></label>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                          <input
                            type="tel"
                            required
                            placeholder="010-1234-5678"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-sm py-2 px-3 pl-9 text-xs focus:border-gold-400 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1 font-medium">이메일 주소</label>
                        <div className="relative">
                          <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                          <input
                            type="email"
                            placeholder="client@brand.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-sm py-2 px-3 pl-9 text-xs focus:border-gold-400 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Usage */}
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1 font-medium">진열 용도 (예: 고급 가죽백, 시계, 주얼리 등)</label>
                      <input
                        type="text"
                        placeholder="천연 보석 주얼리 및 한정판 시계 복합 진열"
                        value={usage}
                        onChange={(e) => setUsage(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-sm py-2 px-3 text-xs focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Special requests */}
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1 font-medium">특별 가공 요청사항 (실리카겔 보관함, 특수 지문 잠금 등)</label>
                      <textarea
                        rows={3}
                        placeholder="뒷면을 유리 대신 은경(미러 글라스)으로 설계 가능할까요? 조명이 입체적으로 보이길 원합니다."
                        value={specialRequest}
                        onChange={(e) => setSpecialRequest(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-sm py-2 px-3 text-xs focus:border-gold-400 focus:outline-none transition-colors font-sans"
                      />
                    </div>

                    {/* Terms & GDPR Agreement */}
                    <div className="pt-2">
                      <label className="flex items-start space-x-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          required
                          checked={agreedToTerms}
                          onChange={(e) => setAgreedToTerms(e.target.checked)}
                          className="mt-0.5 accent-gold-500 rounded border-slate-800"
                        />
                        <span className="text-[10px] text-slate-400 leading-snug font-light">
                          개인정보 수집 및 설계 상담 연락을 위한 이용 동의서 필수 약관에 동의합니다. (목적 이외 보관 없음)
                        </span>
                      </label>
                    </div>

                    {/* Submit lead button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 disabled:from-slate-800 disabled:to-slate-900 disabled:text-slate-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase rounded-sm transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>도면 및 견적 처리 중...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>맞춤 정밀 견적 신청 및 예약하기</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          ) : (
            /* Submission Success Letter */
            <motion.div
              id="submission-success-modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto bg-slate-900 border border-gold-400/40 p-6 sm:p-10 shadow-2xl relative rounded-sm"
            >
              {/* Gold confetti particles decoration with subtle glow */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold-400/5 rounded-full filter blur-3xl" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-400/5 rounded-full filter blur-3xl" />

              <div className="relative text-center">
                <div className="w-14 h-14 bg-gold-400/10 border border-gold-400 flex items-center justify-center mx-auto mb-6 rounded-full">
                  <Check className="w-6 h-6 text-gold-400" />
                </div>

                <span className="font-serif text-xs font-semibold text-gold-400 tracking-[0.2em] block mb-2">
                  CONSULTATION TICKET ISSUED
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
                  정밀 설계 상담 예약 완료
                </h2>
                <p className="text-slate-400 text-xs font-light max-w-md mx-auto mb-8">
                  고객님의 공간 치수와 자재 요구사항이 아틀리에 CAD 도면 연구소에 완벽하게 수집되었습니다. 영업일 기준 3시간 이내에 담당 마스터가 직접 전화를 드려 상세 실측 미팅 스케줄을 확정합니다.
                </p>

                {/* Printable Digital Receipt / Summary */}
                <div className="bg-slate-950 border border-slate-850 p-6 rounded-sm text-left mb-8 text-xs font-mono">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-4">
                    <span className="text-gold-400 font-serif font-bold tracking-wider flex items-center space-x-1">
                      <ReceiptText className="w-4 h-4" />
                      <span>ATELIER SHOWCASE ESTIMATE</span>
                    </span>
                    <span className="text-slate-500 font-light text-[10px]">{submittedData.date}</span>
                  </div>

                  <div className="space-y-2 border-b border-slate-850 pb-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">상담 예약 관리 번호:</span>
                      <span className="text-white font-bold">{submittedData.ticketId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">고객명 / 회사명:</span>
                      <span className="text-white">{submittedData.name} ({submittedData.company})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">연락처 / 이메일:</span>
                      <span className="text-white">{submittedData.contact} / {submittedData.email}</span>
                    </div>
                    {submittedData.refPortfolio && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">참고 시공 스타일:</span>
                        <span className="text-gold-300">{submittedData.refPortfolio}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 border-b border-slate-850 pb-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">설계 외경 사이즈:</span>
                      <span className="text-white">W {submittedData.width} × D {submittedData.depth} × H {submittedData.height} mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">유리 사양 필터:</span>
                      <span className="text-white">{getGlassLabel()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">프레임 및 몰딩:</span>
                      <span className="text-white">{getFrameLabel()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">조명 배선 설계:</span>
                      <span className="text-white">{getLightingLabel()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">문 및 손잡이 방식:</span>
                      <span className="text-white">{getHandleLabel()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">보안 잠금장치:</span>
                      <span className="text-white">{getLockLabel()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">진열 수납 용도:</span>
                      <span className="text-white">{submittedData.usage}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline text-sm">
                    <span className="text-slate-400 font-sans">1차 온라인 산정가:</span>
                    <span className="text-gold-400 font-bold font-mono text-base sm:text-lg">
                      {submittedData.estimatedMin.toLocaleString()} ~ {submittedData.estimatedMax.toLocaleString()} 원
                    </span>
                  </div>
                </div>

                {/* Back / Reset actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    id="new-inquiry-btn"
                    onClick={handleReset}
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-semibold rounded-sm tracking-wider uppercase transition-colors"
                  >
                    추가 다른 견적 산출하기
                  </button>
                  <button
                    id="back-home-btn"
                    onClick={() => {
                      // Simulating direct callback or simple parent handle
                      handleReset();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase rounded-sm transition-transform"
                  >
                    상담 완료 및 돌아가기
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lead Inquiry History block from localStorage */}
        {submissionHistory.length > 0 && !submittedData && (
          <div className="mt-16 border-t border-slate-900 pt-12">
            <h3 className="font-serif text-sm font-semibold text-slate-400 mb-6 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-gold-400" />
              <span>최근 나의 온라인 견적 문의 이력 (localStorage)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {submissionHistory.map((item, idx) => (
                <div
                  key={idx}
                  id={`history-inquiry-item-${idx}`}
                  className="bg-slate-900/40 border border-slate-850 p-4 rounded-sm text-xs"
                >
                  <div className="flex justify-between text-[11px] mb-2 text-slate-500">
                    <span className="font-mono">{item.ticketId}</span>
                    <span>{item.date}</span>
                  </div>
                  <div className="flex justify-between mb-1.5 font-medium text-white">
                    <span>W {item.width} x D {item.depth} x H {item.height} mm</span>
                    <span className="text-gold-400 font-mono font-bold">
                      {item.estimatedMin.toLocaleString()}~{item.estimatedMax.toLocaleString()}원
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-light truncate">
                    자재: {item.glassType === 'low-iron' ? '디아망' : '강화유리'} / {item.frameMaterial} / {item.lightingType}
                    {item.handleType && ` / 손잡이: ${item.handleType}`}
                    {item.lockType && ` / 잠금장치: ${item.lockType}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
