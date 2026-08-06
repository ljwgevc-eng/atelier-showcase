import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Star, UserCheck, Heart, MessageSquare, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA, REVIEW_DATA } from '../data';
import { FAQItem } from '../types';

export default function SupportSection() {
  const [activeFaqTab, setActiveFaqTab] = useState<'all' | 'process' | 'delivery' | 'materials' | 'service'>('all');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1'); // Default open first FAQ

  const faqCategories = [
    { id: 'all', label: '전체 자주 묻는 질문' },
    { id: 'process', label: '제작 및 기간' },
    { id: 'delivery', label: '전문 배송 및 세팅' },
    { id: 'materials', label: '유리 및 자재 기술' },
    { id: 'service', label: '평생 유지 관리 A/S' }
  ];

  const filteredFaqs = activeFaqTab === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter(faq => faq.category === activeFaqTab);

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  return (
    <div id="support-page" className="bg-slate-950 text-white py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Support Section Header */}
        <div className="text-center mb-16">
          <span className="font-serif text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase block mb-3">
            Customer Support &amp; Reviews
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-white mb-4">
            고객 지원 및 실제 이용 후기
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light">
            아틀리에 쇼케이스를 직접 선택하시고 공간을 변화시키신 고객님들의 진솔한 이용 후기와 자주 하시는 질문을 정성을 다해 정리했습니다.
          </p>
        </div>

        {/* 1. Client Reviews Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-xs font-semibold text-gold-400 tracking-[0.2em] uppercase mb-2">
              Customer Reviews
            </h2>
            <h3 className="font-serif text-xl sm:text-2xl font-light">
              실제 시공 고객의 전경 후기
            </h3>
            <div className="w-10 h-[1px] bg-gold-400 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEW_DATA.map((rev) => (
              <div
                key={rev.id}
                id={`review-card-${rev.id}`}
                className="bg-slate-900/40 border border-slate-850 p-6 rounded-sm flex flex-col justify-between hover:border-gold-400/30 transition-all duration-300 relative group"
              >
                {/* Quote Icon overlay */}
                <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-800/20 group-hover:text-gold-400/5 transition-colors pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4 text-gold-400">
                    {Array.from({ length: rev.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-[11px] font-mono text-slate-500 ml-2">5.0 / 5.0</span>
                  </div>

                  {/* Review Content */}
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6 font-sans">
                    "{rev.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-3 mt-4">
                  <div className="w-9 h-9 bg-gold-400/10 border border-gold-400/30 flex items-center justify-center font-bold text-gold-400 text-xs rounded-full flex-shrink-0">
                    {rev.avatarText}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-semibold text-white">{rev.author}</span>
                      <UserCheck className="w-3 h-3 text-gold-400" />
                    </div>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{rev.role}</span>
                    <span className="text-[10px] text-slate-500 font-mono tracking-wider block mt-1">
                      설치 품목: <span className="text-gold-400/80 font-sans">{rev.portfolioTitle}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. FAQ Accordion section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-serif text-xs font-semibold text-gold-400 tracking-[0.2em] uppercase mb-2">
              F.A.Q
            </h2>
            <h3 className="font-serif text-xl sm:text-2xl font-light">
              가장 자주 묻는 질문 (FAQ)
            </h3>
            <p className="text-slate-400 text-xs font-light mt-2">
              맞춤 쇼케이스 상담 전 미리 파악해두시면 훨씬 명확하고 빠른 소통이 가능합니다.
            </p>
            <div className="w-10 h-[1px] bg-gold-400 mx-auto mt-4" />
          </div>

          {/* FAQ categories navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                id={`faq-cat-btn-${cat.id}`}
                onClick={() => {
                  setActiveFaqTab(cat.id as any);
                  setExpandedFaqId(null); // Close active FAQ
                }}
                className={`px-4 py-2 text-xs font-medium tracking-wide border rounded-sm cursor-pointer transition-all ${
                  activeFaqTab === cat.id
                    ? 'bg-slate-900 border-gold-400/60 text-gold-400 font-semibold'
                    : 'bg-transparent border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <div className="max-w-3xl mx-auto flex flex-col space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-accordion-item-${faq.id}`}
                  className="bg-slate-900/30 border border-slate-850/80 rounded-sm overflow-hidden"
                >
                  <button
                    id={`faq-question-btn-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-900/20 transition-all focus:outline-none"
                  >
                    <div className="flex items-start space-x-3.5 pr-4">
                      <HelpCircle className="w-5 h-5 text-gold-400/80 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                        {faq.question}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-container-${faq.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-850/60"
                      >
                        <div className="p-5 sm:px-8 text-xs sm:text-sm leading-relaxed text-slate-300 font-light font-sans whitespace-pre-line bg-slate-900/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
