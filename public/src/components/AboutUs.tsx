import React from 'react';
import { Award, Shield, CheckCircle2, Factory, Leaf, Star, Anchor } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  const certifications = [
    {
      title: 'KS L 2007 강화유리 공식 시험성적서',
      issuer: '한국건설생활환경시험연구원 (KCL)',
      desc: '일반 유리 대비 5배 이상의 내충격 및 내열 하중을 인정받았으며 파손 시 미세한 입자로 분쇄되어 상해를 원천 차단합니다.',
      icon: Shield,
    },
    {
      title: '친환경 최고등급 E0 목재 자재 인증',
      issuer: 'KOLAS 인증 기관',
      desc: '접착제와 무늬목 포름알데히드 방출량이 0.5mg/L 이하로, 밀폐 시에도 소장품 표면 변색이나 화학 반응 훼손을 방지합니다.',
      icon: Leaf,
    },
    {
      title: '고연색성 박물관 LED 전용 특허 설계',
      issuer: '특허청 등록 특허',
      desc: 'CRI 97% 이상의 태양광 파장 수준 고연색 발광 소자를 활용해 유해 자외선을 제로화하고 진열대 내부 축열 문제를 기술적으로 해결했습니다.',
      icon: Award,
    },
  ];

  const highlights = [
    {
      num: '01',
      title: '장인의 손끝에서 시작되는 집요함',
      content: '아틀리에는 단순 조립용 가구를 배제합니다. 금속 프레임 한 줄, 접합면 1mm의 마감 품질을 위해 수십 년 경력의 마스터 아티장들이 프레임 가공과 용접, 도장, 유리 조립의 모든 단계를 완전 수작업으로 감리하며 절대 타협하지 않는 철학을 지킵니다.',
    },
    {
      num: '02',
      title: '본연의 가치를 비추는 디아망 유리',
      content: '일반 유리 특유의 녹색 탁함을 제거한 저철분 초투명(디아망) 유리는 빛 투과율을 극도로 높입니다. 보석의 극미한 균열부터 시계 다이얼의 세공, 고유 미술품의 깊이감을 완벽히 투사해 마치 공중에 그대로 드러나 있는 최상의 시각 경험을 선물합니다.',
    },
    {
      num: '03',
      title: '완벽한 기밀(Air-Tight) 가스켓 기법',
      content: '아틀리에 쇼케이스는 전면 유리 사이에 미세 스폰지 가스켓이나 자석 결합 프로파일을 장착하여 완전 차단 기술을 제공합니다. 먼지와 기습적인 습기로부터 소중한 명품 백이나 피규어를 영구히 지키며, 장시간 수동 관리가 필요 없는 보존 환경을 설계합니다.',
    },
  ];

  return (
    <div id="about-us-page" className="bg-slate-950 text-white py-16 md:py-24">
      {/* Intro Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-serif text-xs font-semibold text-gold-400 tracking-[0.4em] uppercase block mb-4">
            Our Story &amp; Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-8">
            소장품이 빛나는 최고의 무대,<br />
            <span className="font-semibold text-gold-300">아틀리에 쇼케이스</span>
          </h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-8" />
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-light mb-6">
            "진열장은 단순히 물건을 보관하는 가구가 아닙니다. <br className="hidden sm:inline" />
            그 안에 담기는 물건의 가치와 수집가의 영광을 세상에 알리는 가장 정교한 예술적 액자입니다."
          </p>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-light">
            아틀리에는 소유자의 집념과 안목을 잘 알고 있습니다. 당사는 30년 넘게 이어진 도장 가공 공정과 초슬림 헤어라인 금속 프레임 특허 공법을 통해, 불필요한 테두리를 극도로 깎아내고 내용물에만 시선이 완전히 꽂히도록 비주얼 정밀도를 빚어냅니다.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Details Grid */}
      <section className="bg-slate-900/30 border-y border-slate-900/80 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-xs font-semibold text-gold-400 tracking-[0.2em] uppercase mb-2">
              Uncompromising Quality
            </h2>
            <h3 className="font-serif text-xl sm:text-2xl font-light">
              비교할 수 없는 아틀리에의 집요한 설계
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {highlights.map((h, index) => (
              <motion.div
                key={index}
                id={`philosophy-card-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-slate-950 p-8 border border-slate-900 hover:border-gold-400/20 transition-all rounded-sm flex flex-col h-full"
              >
                <span className="font-serif text-4xl font-semibold text-gold-500/10 absolute top-4 right-6 select-none">
                  {h.num}
                </span>
                <h4 className="font-serif text-base font-medium text-gold-300 mb-4 pt-4 border-t border-gold-400/20">
                  {h.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light flex-grow">
                  {h.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Quality Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-16">
          <span className="font-serif text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase block mb-3">
            TRUST &amp; SAFETY
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
            검증된 자재와 인증이 만드는 안전성
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-light">
            아틀리에는 소중한 유물 및 고가 명품의 무결점 보존을 위해 국가 공식 공인 기관으로부터 검증받은 최고 등급 원료 및 시험성적서 규격을 엄수합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={idx}
                id={`cert-card-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-900/60 border border-slate-800 p-8 hover:border-gold-400/30 transition-all group rounded-sm"
              >
                <div className="w-10 h-10 bg-gold-400/5 border border-gold-400/20 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-all rounded-sm">
                  <IconComponent className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-gold-300 transition-colors">
                  {cert.title}
                </h3>
                <span className="text-[10px] text-gold-500 font-mono tracking-wider block mb-4 uppercase">
                  {cert.issuer}
                </span>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {cert.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-950 p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gold-400/10 flex items-center justify-center rounded-full flex-shrink-0">
              <Star className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">현대해상 생산물배상책임보험 5억원 가입</h4>
              <p className="text-slate-400 text-xs font-light mt-1">혹시 모를 파손 사고나 제품 결함으로 인한 2차 자산 피해까지 완벽하게 보호해 드립니다.</p>
            </div>
          </div>
          <div className="text-[11px] font-mono text-gold-400 border border-gold-400/20 px-3 py-1.5 uppercase rounded-sm bg-slate-950/40">
            LIABILITY INSURED: 500,000,000 KRW
          </div>
        </div>
      </section>
    </div>
  );
}
