import React, { useState } from 'react';
import { Ruler, ShieldCheck, Cpu, Truck, FileCheck, PhoneCall, Check, ArrowRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 1,
      title: '상담 및 정밀 현장 실측',
      subTitle: '공간의 특성 파악 및 기틀 마련',
      icon: Ruler,
      description: '고객의 진열 용도(명품 시계, 주얼리, 개인 피규어 등)에 따라 최적의 디자인 기조를 잡고, 아틀리에 실측 전담 팀이 직접 현장에 방문하여 완벽한 수평도, 마감 벽면 간격, 전기 배선 경로를 0.5mm 단위로 오차 없이 측정합니다.',
      technicalDetails: [
        '진열 목적물 전용 맞춤 하중 사전 시뮬레이션',
        '설치 벽면 수평 오차 측량 및 보정 마감 설계',
        'SMPS 변압기 매립 및 배선 연계 루트 확보'
      ],
      diagramLabel: '현장 실측 스키매틱',
      renderDiagram: () => (
        <div className="relative w-full h-48 bg-slate-950 border border-slate-800 rounded-sm flex items-center justify-center p-4 overflow-hidden font-mono text-[10px] text-slate-500">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(194,161,106,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(194,161,106,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
          <div className="relative w-4/5 h-3/4 border-2 border-dashed border-slate-700 flex flex-col justify-between p-2">
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span>W: 1800mm (±0.5)</span>
              <span>H: 2200mm</span>
            </div>
            <div className="flex justify-center items-center h-full">
              <div className="w-1/3 h-1/2 border border-gold-400/40 flex items-center justify-center text-gold-400 font-sans text-xs">
                실측 공간
              </div>
            </div>
            <div className="flex justify-between border-t border-slate-800 pt-1">
              <span>D: 600mm</span>
              <span>수평 보정 범위: 12mm</span>
            </div>
            {/* Dimension lines */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-[70%] border-l border-gold-400/50 flex items-center justify-between"><span className="text-[8px] bg-slate-950 px-1 rotate-90">H</span></div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] border-b border-gold-400/50 text-center"><span className="text-[8px] bg-slate-950 px-1">W</span></div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: '3D CAD 디자인 설계 & 검수',
      subTitle: '오차 방지를 위한 입체 시뮬레이션',
      icon: Cpu,
      description: '실측 데이터를 가공해 3D CAD 오토캐드 및 렌더링 솔루션으로 실제 배치 뷰를 설계합니다. 프레임 굵기, 전원 스위치 매립 구조, 선반 높낮이 조절 범위 및 시야 각을 가상으로 시각화하여 수정 사항을 사전 예방합니다.',
      technicalDetails: [
        '정밀 부품 단위 조립 도면 1차 컨펌',
        '실감 렌더링을 통한 목재 무늬 및 브라스 헤어라인 질감 매칭',
        '조명 퍼짐 각도 시뮬레이션을 통한 암부(Shadow) 제로화 설계'
      ],
      diagramLabel: '3D 와이어프레임 설계',
      renderDiagram: () => (
        <div className="relative w-full h-48 bg-slate-950 border border-slate-800 rounded-sm flex items-center justify-center p-4 overflow-hidden font-mono text-[10px] text-slate-500">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(194,161,106,0.04)_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="w-1/2 h-4/5 border border-gold-400/40 relative transform rotate-12 flex flex-col justify-between p-2">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-gold-400" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-gold-400" />
            <div className="border-b border-slate-800 flex justify-between"><span className="text-gold-400">CAD MODEL</span><span>v2.16</span></div>
            <div className="h-full border border-dashed border-slate-800/80 my-1 flex items-center justify-center">
              <div className="w-10 h-10 border border-gold-500/20 rounded-full animate-spin" />
            </div>
            <span className="text-[8px] text-right text-slate-600">RENDER STAGE: READY</span>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: '자체 공장 마스터 아티장 수제작',
      subTitle: '타협 없는 정교한 장인 제조 공정',
      icon: FileCheck,
      description: '설계가 최종 확정되면 아틀리에 자체 공장 마스터들의 수작업 가공이 시작됩니다. 레이저 튜브 절단, 초정밀 프레임 용접 및 특수 도막 코팅, 그리고 기포나 먼지가 전혀 허용되지 않는 아틀리에 고유의 "무접점 UV 유리 본딩" 접합 공정으로 진행됩니다.',
      technicalDetails: [
        '자체 고온 정전 도장으로 변색 없는 세미 매트 코팅막 형성',
        '초정밀 45도 사각 용접 마감 공정',
        '기포 제로 청정 공기 가압 유리 본딩 실내 작업'
      ],
      diagramLabel: '무결점 UV 본딩 공법',
      renderDiagram: () => (
        <div className="relative w-full h-48 bg-slate-950 border border-slate-800 rounded-sm flex items-center justify-center p-4 overflow-hidden font-mono text-[10px] text-slate-500">
          <div className="absolute top-2 left-2 text-gold-500 font-bold uppercase tracking-widest text-[8px]">
            ATELIER GLASS BONDING PROCESS
          </div>
          <div className="flex space-x-6 items-center">
            <div className="w-14 h-24 border border-slate-800 relative flex items-center justify-center">
              <div className="absolute top-0 w-full h-[1px] bg-gold-400" />
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gold-400" />
              <span className="text-[8px] text-center text-slate-400">GLASS A</span>
            </div>
            <div className="text-gold-400 font-bold animate-pulse text-xs">➔</div>
            <div className="w-14 h-24 border border-gold-400 bg-gold-400/5 relative flex flex-col justify-between p-1">
              <div className="text-[7px] text-gold-300">UV LIGHT</div>
              <div className="text-center text-[8px] text-white font-sans">경화 완료</div>
              <div className="text-[7px] text-slate-500 text-right">0.0mm Gap</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: '직영 물류팀 무진동 차량 안전 배송 & 세팅',
      subTitle: '오설치 파손 제로 책임 설치 공정',
      icon: Truck,
      description: '외주 용달이나 일반 택배는 유리가 파손되거나 비틀릴 위험이 극도로 큽니다. 아틀리에는 직영 시공팀이 자체 무진동 특장 리프트 차량으로 현장에 전용 포장 수송을 진행합니다. 수평 레이저 피팅을 통해 완벽한 안착과 LED 전선 정리를 지원합니다.',
      technicalDetails: [
        '진열 전 전용 특수 충격 흡수 몰딩 패킹 차량 수송',
        '레이저 수평 측정기를 활용한 완전 수평 고정 피팅',
        '배선 완전 숨김 및 LED 원격 스위칭 시스템 작동 교육'
      ],
      diagramLabel: '무진동 리프트 특장 배송',
      renderDiagram: () => (
        <div className="relative w-full h-48 bg-slate-950 border border-slate-800 rounded-sm flex items-center justify-center p-4 overflow-hidden font-mono text-[10px] text-slate-500">
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="relative border border-slate-800 p-4 rounded-sm bg-slate-950 flex flex-col justify-between w-4/5 h-4/5">
            <div className="flex items-center justify-between border-b border-slate-850 pb-1.5">
              <span className="text-gold-400 font-bold">ATELIER LOGISTICS</span>
              <span className="text-emerald-400">● LIVE SAFE</span>
            </div>
            <div className="flex justify-around items-center py-2">
              <div className="text-center">
                <div className="text-[8px] text-slate-600">진동 감쇠율</div>
                <div className="text-white text-xs font-bold font-mono">98.4%</div>
              </div>
              <div className="text-center border-l border-slate-800 pl-4">
                <div className="text-[8px] text-slate-600">수평 정밀 조정</div>
                <div className="text-gold-300 text-xs font-bold font-mono">0.05°</div>
              </div>
            </div>
            <span className="text-[8px] text-slate-600 text-right">SYSTEM ACTIVE / NO VIBRATION</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: '인증서 발급 및 평생 A/S 케어',
      subTitle: '보증서 발급 및 철저한 애프터 서비스',
      icon: ShieldCheck,
      description: '시공 완료 시 정품 보증 번호와 품질 보증서가 인쇄물 및 디지털 카드로 발급됩니다. 1년간 무상 품질 수리를 완벽히 지원하며, 유상 기간 후에도 유리 파손 시 자체 공장 가격 수준의 최소 실비 원가로 평생 애프터서비스 케어를 보장합니다.',
      technicalDetails: [
        '고유 라이센스 번호가 부여된 아틀리에 정품 골드 카드 제공',
        '인도 후 1년 이내 LED 모듈, SMPS 무상 1:1 선교체 지원',
        '사용 중 유리 파손 시 직영 전문가 출장 긴급 보수 프로그램'
      ],
      diagramLabel: '프리미엄 보증 시스템',
      renderDiagram: () => (
        <div className="relative w-full h-48 bg-slate-950 border border-slate-800 rounded-sm flex items-center justify-center p-4 overflow-hidden font-mono text-[10px] text-slate-500">
          <div className="relative w-64 h-36 bg-gradient-to-br from-slate-900 to-slate-950 border border-gold-400/40 p-4 shadow-xl flex flex-col justify-between rounded-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-gold-300 font-serif font-bold text-xs tracking-widest block">ATELIER</span>
                <span className="text-[8px] text-slate-500">WARRANTY CARD</span>
              </div>
              <div className="w-5 h-5 border border-gold-400 flex items-center justify-center rounded-full"><Check className="w-3 h-3 text-gold-400" /></div>
            </div>
            <div>
              <span className="text-[8px] text-slate-500 block">SERIAL NUMBER</span>
              <span className="text-white text-[11px] font-mono tracking-wider">AT-2026-9482-GOLD</span>
            </div>
            <div className="flex justify-between items-center text-[7px] text-gold-400 border-t border-slate-850 pt-1">
              <span>LIFETIME CARE</span>
              <span>EST. 1996</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div id="process-page" className="bg-slate-950 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="font-serif text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase block mb-3">
            ATELIER CRAFT PROCESS
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-white mb-4">
            프리미엄 오더메이드 진행 프로세스
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light">
            아틀리에는 소장품의 크기, 공간의 배선 여건에 맞추어 맞춤 설계 형태로 정밀 제작됩니다.<br />
            설계부터 사후보장까지의 모든 단계를 명확하고 투명하게 제공합니다.
          </p>
        </div>

        {/* Dynamic 5-Step Process Timeline Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline Step List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  id={`process-step-btn-${idx}`}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-start text-left p-5 border transition-all duration-300 rounded-sm cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-gold-400/60 shadow-lg shadow-gold-500/5'
                      : 'bg-slate-950 border-slate-900 hover:bg-slate-900/40 hover:border-slate-800'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className={`w-8 h-8 rounded-sm border flex items-center justify-center font-serif text-xs font-bold mr-4 flex-shrink-0 transition-colors ${
                    isActive
                      ? 'bg-gold-500 border-gold-500 text-slate-950'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}>
                    {step.id}
                  </div>

                  <div className="flex-grow">
                    <h3 className={`text-sm font-semibold transition-colors ${isActive ? 'text-gold-300' : 'text-white'}`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-light mt-1.5 line-clamp-1">
                      {step.subTitle}
                    </p>
                  </div>

                  <ArrowRight className={`w-4 h-4 ml-2 mt-1 transition-transform ${isActive ? 'text-gold-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Step Detail & CSS Diagram (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-850 p-6 sm:p-8 rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                {/* Header info */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gold-400/10 border border-gold-400/20 flex items-center justify-center rounded-sm">
                    {React.createElement(steps[activeStep].icon, { className: 'w-5 h-5 text-gold-400' })}
                  </div>
                  <div>
                    <span className="text-[10px] text-gold-400 tracking-widest font-bold uppercase block">
                      STAGE 0{steps[activeStep].id}
                    </span>
                    <h4 className="text-white text-base sm:text-lg font-bold">
                      {steps[activeStep].title}
                    </h4>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {steps[activeStep].description}
                </p>

                {/* Vector Diagram Block */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-medium">
                    <span className="flex items-center space-x-1.5">
                      <Eye className="w-3.5 h-3.5 text-gold-400" />
                      <span>{steps[activeStep].diagramLabel}</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-600">ATELIER DRAWING MODULE</span>
                  </div>
                  {steps[activeStep].renderDiagram()}
                </div>

                {/* Technical Points */}
                <div className="mt-4">
                  <h5 className="text-xs font-semibold text-gold-300 uppercase tracking-wider mb-3">
                    핵심 기술적 특성
                  </h5>
                  <ul className="space-y-2.5">
                    {steps[activeStep].technicalDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start text-xs text-slate-400 font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-gold-400 mt-1.5 mr-2.5 rounded-full flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Process Guarantee Info */}
        <div className="mt-16 text-center border-t border-slate-900 pt-12">
          <div className="max-w-xl mx-auto">
            <h4 className="text-sm font-semibold text-white mb-2">언제든지 상담 및 도면 수정 가능</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              자체 설계 연구실을 직접 운영하므로, 공장 실질 원목/금속 가공에 들어가기 직전인 3D 디자인 최종 확정 단계까지는 외경 크기, 선반 층수 및 마감 컬러를 무상으로 언제든 유연하게 수정하실 수 있습니다.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
