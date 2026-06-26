import React from 'react';
import { Sparkles, MapPin, Phone, Mail, ShieldCheck, ExternalLink, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-slate-950 text-slate-400 text-xs py-16 border-t border-slate-900/80 font-sans relative">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo & Brand Slogan */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-8 h-8 border border-gold-400 flex items-center justify-center bg-slate-950/40">
                <span className="font-serif text-base font-bold text-gold-400 group-hover:scale-115 transition-transform duration-300">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xs tracking-[0.25em] font-semibold text-gold-400">
                  ATELIER
                </span>
                <span className="text-[9px] tracking-[0.15em] font-light text-slate-500">
                  SHOWCASE
                </span>
              </div>
            </div>
            
            <p className="text-[11px] leading-relaxed text-slate-500 font-light pr-4">
              아틀리에 쇼케이스는 가구를 제조하지 않습니다. 소장품의 깊이와 공간의 품격을 극대화하는 보존과 광학적 시야를 설계합니다.
            </p>

            <div className="flex items-center space-x-2 bg-slate-900/50 border border-slate-850 p-3 rounded-sm w-fit">
              <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span className="text-[10px] text-slate-400 font-light leading-none">
                SGI서울보증보험 이행보증 가입업체
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-serif text-white text-xs font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <div className="w-6 h-[1px] bg-gold-400 mb-2" />
            <ul className="space-y-2.5 font-light">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-gold-400 transition-colors cursor-pointer text-[11px]">
                  브랜드 스토리 (About Us)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-gold-400 transition-colors cursor-pointer text-[11px]">
                  포트폴리오 갤러리 (Portfolio)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-gold-400 transition-colors cursor-pointer text-[11px]">
                  제품 라인업 (Products Catalog)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-gold-400 transition-colors cursor-pointer text-[11px]">
                  주문 제작 프로세스 (Process)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('support')} className="hover:text-gold-400 transition-colors cursor-pointer text-[11px]">
                  고객 지원 &amp; 리뷰 (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('inquiry')} className="hover:text-gold-400 transition-colors cursor-pointer text-[11px]">
                  온라인 1분 견적 내기 (Inquiry)
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service Hours */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <h4 className="font-serif text-white text-xs font-semibold uppercase tracking-wider">
              Customer Support Center
            </h4>
            <div className="w-6 h-[1px] bg-gold-400" />
            
            <div className="flex items-baseline space-x-2">
              <a href="tel:010-6370-2509" className="text-xl font-bold font-serif text-gold-400 tracking-tight hover:underline">010-6370-2509</a>
              <span className="text-[10px] text-slate-500 font-light">수도권 전지역 무료 출장 및 가구 배송</span>
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-500 font-light leading-relaxed">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>서울 가공 공장: 경기 성남시 중원구 사기막골로 123 아틀리에 테크 타운 301호</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>청담 상담실: 서울특별시 강남구 압구정로 456 아틀리에 빌딩 2층</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>공식 이메일: lockershop1@naver.com</span>
              </div>
            </div>

            <div className="flex space-x-2 pt-2">
              <button
                onClick={() => window.open('https://open.kakao.com/o/skHwagBi', '_blank')}
                className="bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 px-3.5 py-1.5 rounded-sm border border-yellow-400/20 flex items-center space-x-1.5 text-[10px] tracking-wide transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>카카오톡 1:1 상담 개시</span>
              </button>
              <button
                onClick={() => window.open('https://naver.com', '_blank')}
                className="bg-slate-900 hover:bg-slate-850 text-slate-300 px-3.5 py-1.5 rounded-sm border border-slate-800 flex items-center space-x-1.5 text-[10px] tracking-wide transition-all"
              >
                <span>네이버 톡톡 연결</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Corporate Legal Footer Details */}
        <div className="border-t border-slate-900/60 pt-8 mt-8 text-[10px] text-slate-600 font-light leading-relaxed">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2.5">
                <span>(주)아틀리에 가구 주식회사</span>
                <span>대표이사: 김진수</span>
                <span>사업자등록번호: 220-88-12345</span>
                <span>통신판매업신고: 제 2026-서울강남-0123호</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span>본사: 서울특별시 강남구 학동로 123길 12 아틀리에 빌딩 3층</span>
                <span>가구제조공장 등록번호: 제 1240-5491호</span>
                <span>보증 책임 및 가입: SGI서울보증보험 5억원 배상 가입</span>
              </div>
            </div>
            <div className="text-left md:text-right">
              <div className="flex gap-4 mb-2 md:justify-end">
                <a href="#privacy" className="hover:text-gold-400 transition-colors">개인정보처리방침</a>
                <a href="#terms" className="hover:text-gold-400 transition-colors">서비스이용약관</a>
                <a href="#location" className="hover:text-gold-400 transition-colors">공장오시는길</a>
              </div>
              <p>© {currentYear} ATELIER SHOWCASE. All rights reserved. Designed for Luxury Excellence.</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
