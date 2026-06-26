import { PortfolioItem, FAQItem, ReviewItem, ProductItem } from './types';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: '청담동 가이아 하이엔드 주얼리 부티크',
    category: 'commercial',
    categoryLabel: '상업 공간',
    subtitle: '명품 주얼리의 격을 높이는 브라스 골드 슬림 쇼케이스',
    description: '최상급 천연 주얼리의 아름다움을 그대로 전달하기 위해 극도로 얇은 12mm 브라스 골드 헤어라인 프레임을 적용했습니다. 철분 함량을 최소화하여 녹색 빛이 전혀 돌지 않는 최고급 저철분 초투명 유리(디아망)를 사용했으며, 미세 접합(UV Bonding) 기술을 통해 볼트 노출이 전혀 없는 시야각을 연출했습니다.',
    beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600', // 기성 가구 이미지 느낌
    afterImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200', // 고급 주얼리
    size: 'W 1800 x D 650 x H 950 mm (상부 유리 H 280 mm)',
    materials: ['저철분 초투명 유리(디아망)', '브라스 골드 헤어라인 스테인리스 스틸', '고연색성 97CRI 매립형 마이크로 LED', '독일산 최고급 전자식 잠금장치'],
    location: '서울 강남구 청담동 가이아 본점',
    year: '2026',
    highlighted: true
  },
  {
    id: 'port-2',
    title: '국립 중앙 예술 박물관 특별전시실',
    category: 'exhibition',
    categoryLabel: '전시 공간',
    subtitle: '고대 유물 보존과 전시를 위한 항온항습 전용 독립형 진열장',
    description: '박물관 내부의 역사적 유물을 외기 변화로부터 완벽하게 보호할 수 있도록 기밀성(Air-tight) 0.1 이하를 달성한 특수 매립형 진열장입니다. 8mm+8mm 다중 접합 안전 강화유리를 사용하여 도난 방지 및 파손 안전성을 극대화했고, 유해 가스가 방출되지 않는 친환경 보존용 자재와 가스켓을 사용했습니다.',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600', // 이전 낡은 전시장 느낌
    afterImage: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&q=80&w=1200', // 박물관 조각상 / 전시
    size: 'W 2400 x D 1000 x H 2200 mm',
    materials: ['8.76mm 도난방지 접합 강화유리', '방청 정전도장 프리미엄 스틸 세이프 프레임', '항온항습 모듈(밀폐형)', '무자외선(No UV) 섬유광학 스포트라이트'],
    location: '국립 중앙 예술 박물관 제3기획전시실',
    year: '2025',
    highlighted: true
  },
  {
    id: 'port-3',
    title: '한남동 펜트하우스 하이엔드 피규어 갤러리',
    category: 'home-office',
    categoryLabel: '가정/사무 공간',
    subtitle: '수집가의 열정을 완벽하게 담은 월-투-월(Wall-to-Wall) 커스텀 쇼룸',
    description: '개인 수집가의 한정판 대형 스테츄 및 피규어 소장품을 완벽하게 진열하기 위해 벽면 전체를 일체형으로 설계한 초대형 쇼케이스입니다. 선반마다 40kg 이상의 하중을 견디는 12mm 강화유리 선반을 배치하고, 선반 매립형 자석식 전력 전송 레일을 탑재해 선반 높낮이를 조절해도 배선 노출 없이 LED 조명이 항상 켜지도록 고도의 기술력을 적용했습니다.',
    beforeImage: 'https://images.unsplash.com/photo-1595206133361-b1fe343e5e23?auto=format&fit=crop&q=80&w=600', // 이전 번잡한 조립식 선반 느낌
    afterImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1200', // 피규어룸
    size: 'W 4500 x D 550 x H 2400 mm',
    materials: ['12mm 투명 강화유리 선반', '무선 전력 자석식 레일 시스템', '고휘도 디밍가능 LED 리니어 조명', '다크 안트라사이트 친환경 보드 프레임'],
    location: '서울 용산구 한남동 프리미엄 빌라',
    year: '2026',
    highlighted: true
  },
  {
    id: 'port-4',
    title: '스위스 크로노그래프 롯데 에비뉴엘 쇼룸',
    category: 'commercial',
    categoryLabel: '상업 공간',
    subtitle: '워치 브랜드의 정체성을 담은 딥 초콜릿 우드 & 골드 아일랜드 진열장',
    description: '백화점 중심부에 위치한 워치 부티크를 위한 사방 개방형 아일랜드 쇼케이스입니다. 천연 아메리칸 월넛 무늬목 마감과 무광 골드 스틸의 중후한 조합이 명품 시계의 브랜드 헤리티지를 증폭시킵니다. 내부에는 스웨이드 마감 처리를 하여 럭셔리함을 한층 더 높였습니다.',
    beforeImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600', // 일반 가구
    afterImage: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a11?auto=format&fit=crop&q=80&w=1200', // 명품 시계 테마
    size: 'W 1400 x D 600 x H 1000 mm',
    materials: ['아메리칸 월넛 프리미엄 무늬목', '디아망 유리 4면 접합', 'CRI 95+ 매립형 무지향 LED', '소프트 클로징 최고급 댐퍼 언더레일'],
    location: '서울 중구 백화점 롯데 에비뉴엘 명품관',
    year: '2025',
    highlighted: false
  },
  {
    id: 'port-5',
    title: '글로벌 테크기업 R&D 센터 비전 홀 트로피 쇼룸',
    category: 'home-office',
    categoryLabel: '가정/사무 공간',
    subtitle: '기업의 영광을 기리는 대형 알루미늄 메탈 라이트 라인 타워 진열장',
    description: '기업 로비에 설치되어 수상 이력과 특허 제품들을 전시하는 프리미엄 메탈 타워 쇼케이스입니다. 전면 강화유리 도어에 숨겨진 터치 버튼으로 도어를 부드럽게 스윙 구동할 수 있으며, 상하단 전체에 흐르는 간접 미러 그라데이션 조명으로 기술적인 우아함을 자랑합니다.',
    beforeImage: 'https://images.unsplash.com/photo-1531971589569-0d93700fd1c5?auto=format&fit=crop&q=80&w=600', // 일반 사무실 수납장
    afterImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200', // 모던 진열 공간
    size: 'W 3000 x D 500 x H 2200 mm',
    materials: ['아노다이징 사틴 블랙 알루미늄', '초투명 강화 접합유리', '스마트 원격 IoT 디밍 조명 시스템', '고강도 미러 코팅 후면 글라스'],
    location: '경기 성남시 글로벌 IT 테크타워 로비',
    year: '2026',
    highlighted: false
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: '제작 기간은 얼마나 걸리나요?',
    answer: '아틀리에 쇼케이스의 전 제품은 100% 주문 고객별 맞춤형 설계 및 수제작으로 제작됩니다. 일반적으로 설계 확정 및 도면 검토 완료 후 제작 기간은 약 2~3주일 소요되며, 다량 주문이나 박물관급 특수 사양 진열장의 경우 설치 규모와 정밀도에 따라 3~4주일 이상 소요될 수 있습니다. 정확한 제작 기간은 견적 확정 시 상세 설계 도면 스케줄러와 함께 안내해 드립니다.',
    category: 'process'
  },
  {
    id: 'faq-2',
    question: '배송 및 세팅 서비스는 어떻게 진행되나요? 배송비는 얼마인가요?',
    answer: '유리진열장의 특성상 택배나 일반 화물 서비스로 배송 시 파손 및 오설치 위험이 매우 큽니다. 이에 따라 아틀리에 쇼케이스는 수도권 및 전국 전 지역에 자사 소속의 전문 시공·설치 전담 물류팀이 진열 전용 무진동 특장 차량으로 안전하게 직접 운송합니다. 현장에 방문하여 완벽한 수평 세팅, 유리 마감 검수, LED 조명 배선 통합 및 작동 테스트까지 완벽히 세팅을 완료해 드립니다. 서울 및 수도권 기본형 설치는 무상 지원해 드리며, 도서산간이나 사다리차 등 장비가 동원되어야 하는 특수 현장은 사전 상담 시 상세 운송료를 실비 기준으로 정밀 안내합니다.',
    category: 'delivery'
  },
  {
    id: 'faq-3',
    question: '강화유리와 디아망 유리는 어떤 차이가 있나요? 왜 고급 브랜드는 디아망을 쓰나요?',
    answer: '일반 투명 유리는 철분(Iron Oxide) 성분으로 인해 측면이나 단면을 볼 때, 혹은 흰색 소장품을 투과해 볼 때 짙은 녹색 빛을 띠게 됩니다. 이는 수집 가치를 왜곡시키며 명품 매장의 고급스러움을 떨어뜨리는 주원인입니다. 반면 "디아망(저철분 초투명) 유리"는 유리를 제조할 때 철분 함량을 극소화하여 빛 투과율을 92% 이상으로 극대화한 최고급 유리입니다. 소장품 본연의 순수한 화이트, 골드, 원색을 왜곡 없이 100% 온전하고 투명하게 보여주어 명품 주얼리숍, 미술관, 고급 피규어룸 등 하이엔드 공간에서 기본 채택하고 있습니다.',
    category: 'materials'
  },
  {
    id: 'faq-4',
    question: '유리가 깨지거나 LED 조명에 문제가 생기면 A/S가 가능한가요?',
    answer: '네, 철저하게 책임집니다. 아틀리에 쇼케이스는 자체 공장에서 모든 자재를 다루고 조립하므로 신속하고 온전한 평생 보수 시스템을 가지고 있습니다. 제품 인도일로부터 1년간은 사용자 과실을 제외한 하드웨어 조인트, 마그네틱 레일, 전원 공급 트랜스포머(SMPS) 및 LED 조명 모듈에 대해 무상 A/S를 완벽히 지원합니다. 무상 기간 이후나 유리가 깨진 고객 과실의 파손 건에 대해서도 최소한의 원가 비용(유리 재단 및 실비 출장 세팅비)만으로 자사 전문 기사가 전담 방문하여 부분 유리 교체 등의 유지 보수 서비스를 신속하게 해드립니다.',
    category: 'service'
  },
  {
    id: 'faq-5',
    question: '타사 기성품과 아틀리에 쇼케이스의 기술적인 핵심 차이는 무엇인가요?',
    answer: '가장 큰 차이는 "보이지 않는 디테일"과 "내구성"입니다. 1) 타사 저가 기성품은 실리콘 마감이 노출되거나 알루미늄 두꺼운 샤시가 유리 시야를 가리지만, 당사는 초슬림 고강도 강철 프레임 및 초정밀 UV Bonding 접합 방식을 사용하여 기계적 볼트나 실리콘 자국이 보이지 않아 유리가 공중에 뜬 듯한 "플로팅 룩"을 선사합니다. 2) 조명 역시 값싼 플라스틱 LED바가 아닌 연색 지수(CRI) 95 이상의 자연광급 초정밀 LED 다이오드를 배치하여 눈부심은 줄이고 소장품의 깊이를 살립니다. 3) 전 선반 무선 마그네틱 전력 전송 특허 공법을 통해 지저분한 내부 전선 노출이 아예 없습니다.',
    category: 'materials'
  }
];

export const REVIEW_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: '안소현 대표',
    role: '청담동 가이아 주얼리 살롱',
    rating: 5,
    content: '백화점 매장 인테리어를 새로 하면서 아틀리에 쇼케이스에 6개의 아일랜드 진열장을 주문 제작했습니다. 디아망 유리로 제작했더니 확실히 주얼리가 번쩍거리는 게 이전 저가 진열장이랑 비교가 불가능할 정도로 영롱하네요. 방문하시는 고객분들마다 진열장 어디서 했냐고 정말 고급스럽다고 극찬하십니다. 꼼꼼한 실측과 완벽한 야간 설치까지 너무 감사했습니다.',
    date: '2026.04.12',
    portfolioTitle: '청담동 가이아 하이엔드 주얼리 부티크',
    avatarText: '안'
  },
  {
    id: 'rev-2',
    author: '박정민 수집가',
    role: '개인 갤러리 피규어 컬렉터',
    rating: 5,
    content: '한정판 스타워즈 및 마블 스테츄들을 모으면서 가장 스트레스가 먼지 청소와 배선 노출이었습니다. 아틀리에에서 한남동 거실 전체 벽면 진열장을 자석 전력 공급 선반 시스템으로 제작했는데 배선이 100% 감춰지니 갤러리에 온 듯한 전경이 나옵니다. 밀폐가 정말 잘 되어서 수 개월째 내부 먼지가 한 톨도 안 앉았습니다. 강력 추천합니다.',
    date: '2026.05.29',
    portfolioTitle: '한남동 펜트하우스 하이엔드 피규어 갤러리',
    avatarText: '박'
  },
  {
    id: 'rev-3',
    author: '김승환 학예연구사',
    role: '예술의전당 특별전 시공 부서',
    rating: 5,
    content: '박물관 전시용 유물의 보존 수준을 만족시키면서 관람객이 사방에서 빛 왜곡 없이 유물을 관람하도록 유리 접합 완성도가 뛰어난 업체를 찾았는데, 아틀리에 쇼케이스가 정답이었습니다. 유리 단면에 기포가 전혀 없고, 완벽한 하중 분산으로 매우 안정적입니다. 까다로운 도면 검수와 보존 기준 검사도 한 번에 통과했습니다.',
    date: '2025.11.05',
    portfolioTitle: '국립 중앙 예술 박물관 특별전시실',
    avatarText: '김'
  }
];

export const PRODUCT_DATA: ProductItem[] = [
  {
    id: 'prod-1',
    name: '아틀리에 시그니처 디아망 타워형 쇼케이스',
    category: 'tower',
    categoryLabel: '타워형 진열장',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    basePrice: 1850000,
    dimensions: 'W 600 x D 600 x H 1800 mm',
    materials: ['저철분 초투명 유리(디아망) 8mm', '브라스 골드 헤어라인 프레임', '자석식 무선 전력 3단 LED 선반'],
    description: '360도 전 방향에서 컬렉션을 영롱하게 감상할 수 있는 시그니처 타워형 쇼케이스입니다. 배선 노출이 일절 없는 스마트 마그네틱 전원 인계 기술을 도입해, 선반 높낮이를 손쉽게 조절하면서도 완벽한 조명을 연출합니다.',
    features: ['디아망 유리 기본 탑재', '무선 전력 자석 레일 특허 적용', '97CRI 자연광 LED 스포트라이트', '전자식 정전식 히든 락']
  },
  {
    id: 'prod-2',
    name: '청담 에비뉴엘 프리미엄 아일랜드 진열장',
    category: 'island',
    categoryLabel: '아일랜드형 진열장',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    basePrice: 1450000,
    dimensions: 'W 1200 x D 600 x H 950 mm',
    materials: ['디아망 초투명 유리 10mm (UV 미세 접합)', '아메리칸 천연 월넛 원목 베이스', '고연색 매립형 마이크로 리니어 LED'],
    description: '명품 쥬얼리 살롱 및 하이엔드 시계 매장에서 필수적으로 채택하는 개방형 탑 뷰 진열장입니다. UV 초정밀 본딩 가공으로 유리 결합부의 기포와 볼트를 완벽 제거하여 마치 보석이 공중에 떠 있는 듯한 느낌을 줍니다.',
    features: ['독일산 언더레일 댐퍼 슬라이딩 서랍', 'CRI 95+ 초슬림 리니어 간접조명', '친환경 가죽/스웨이드 내부 패딩 선택 가능', '하부 수납공간 비밀번호 도어락 장착']
  },
  {
    id: 'prod-3',
    name: '마스터피스 컬렉터 피규어 전용 쇼케이스',
    category: 'wall',
    categoryLabel: '피규어 전용 진열장',
    image: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?auto=format&fit=crop&q=80&w=800',
    basePrice: 1500000,
    dimensions: 'W 1000 x D 500 x H 1800 mm',
    materials: ['디아망 초투명 유리 8mm', '먼지 차단 특수 고기밀 가스켓', '앱 제어형 풀컬러 스마트 LED 조명'],
    description: '수집가들의 소중한 한정판 피규어, 하이엔드 스테츄, 건담 프라모델 컬렉션을 완벽한 컨디션으로 보존하기 위해 설계된 장식장입니다. 미세 먼지를 완벽히 차단하는 기밀 가스켓 실링과 수집품 고유의 색감을 복원해 주는 고연색 조명을 결합했습니다.',
    features: ['미세 먼지 차단률 99.8% 달성 특수 기밀 설계', '수집품 변색 방지 자외선(UV) 차단 안전유리', '하중 부담 없는 고강도 10mm 강화 선반 탑재', '스마트폰 원격 조명 연출 및 밝기 제어 시스템']
  },
  {
    id: 'prod-4',
    name: '뮤지엄 히스토리 특수 독립형 전시 케이스',
    category: 'museum',
    categoryLabel: '미술관/박물관형',
    image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&q=80&w=800',
    basePrice: 3900000,
    dimensions: 'W 800 x D 800 x H 2000 mm',
    materials: ['8.76mm 안전 접합유리(도난/비산방지)', '밀폐식 기밀구조 실리콘 프리 가스켓', '광섬유 무자외선 보존용 스포트 조명'],
    description: '고가치 고미술품이나 박물관 역사 유물 보존 가이드를 온전히 충족하는 최고 등급의 기밀 밀폐형 진열장입니다. 온도/습도 유지를 위한 실리카겔 트레이가 하부에 기본 내장되어 유물 노화를 가로막습니다.',
    features: ['Air-tight 기밀성 0.1 이하 달성', '내부 자재 방출 유해가스 제로(Zero-emission) 검증', '무자외선 광섬유 쿨링 라이팅', '도난 경보 무선 센서 커스텀 탑재']
  },
  {
    id: 'prod-5',
    name: '아틀리에 미니멀 슬림 콘솔 쇼케이스',
    category: 'island',
    categoryLabel: '아일랜드형 진열장',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    basePrice: 1150000,
    dimensions: 'W 900 x D 450 x H 900 mm',
    materials: ['디아망 유리 8mm', '12mm 초슬림 스틸 프레임 (사틴 블랙/브론즈)', '고연색 하이포인트 LED'],
    description: '모던한 서재, 현관 전실, 침실 콘솔용으로 설계되어 일상의 소장품을 예술 오브제로 만드는 컴팩트 콘솔 쇼케이스입니다. 극한으로 얇은 철제 다리라인이 공간을 탁 트여 보이게 만듭니다.',
    features: ['사방 면접합 엣지 피니싱', '초경량 고강도 특수 스틸 아우터 프레임', '바닥부 미세 수평 조절 스크류 장착', '무선 충전형 무배선 리튬 배터리 모델 옵션 가능']
  },
  {
    id: 'prod-6',
    name: '모던 라이트 인테리어 월-마운트 쇼케이스',
    category: 'wall',
    categoryLabel: '벽면형 진열장',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    basePrice: 2400000,
    dimensions: 'W 1500 x D 400 x H 1200 mm',
    materials: ['저철분 초투명 유리 8mm', '사틴 샴페인 골드 서스 304 프레임', '하부 히든 서라운드 LED 조명'],
    description: '벽면에 직접 거치하거나 가구 위에 빌트인하여 모던한 분위기를 완성하는 가로형 인테리어 쇼케이스입니다. 세련된 골드 프레임과 내부의 조화로운 빛의 흐름이 리빙룸이나 복도를 호텔 라운지처럼 꾸며줍니다.',
    features: ['하프 미러(반반사 거울) 후면 옵션 가능', '리모트 컨트롤 무단계 밝기 미세 조절(Dimming)', '간편 먼지 털이형 세미 가스켓', '20년 연식 내마모 하이엔드 경첩 탑재']
  }
];
