import { PortfolioItem, FAQItem, ReviewItem, ProductItem } from './types';
import realBlackCabinet from './assets/images/real_black_glass_showcase_1785983918252.jpg';
import exactWhiteCabinet from './assets/images/exact_white_glass_showcase_1785981488657.jpg';
import cabinetLiquor from './assets/images/cabinet_liquor_1784104573500.jpg';
import cabinetSports from './assets/images/cabinet_sports_1784104585024.jpg';
import cabinetTrophies from './assets/images/cabinet_trophies_1784104609691.jpg';
import cabinetFigures from './assets/images/cabinet_figures_1784104598682.jpg';

const blackShowcaseImg = realBlackCabinet;
const cabinetWhite = exactWhiteCabinet;

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: '청담동 가이아 하이엔드 주얼리 부티크',
    category: 'commercial',
    categoryLabel: '상업 공간',
    subtitle: '명품 주얼리의 격을 높이는 브라스 골드 슬림 쇼케이스',
    description: '최상급 천연 주얼리와 고급 보틀의 아름다움을 그대로 전달하기 위해 극도로 얇은 프레임을 적용했습니다. 철분 함량을 최소화하여 녹색 빛이 전혀 돌지 않는 최고급 저철분 초투명 유리(디아망)를 사용했습니다.',
    beforeImage: exactWhiteCabinet,
    afterImage: cabinetLiquor,
    size: 'W 550 x D 450 x H 1800 mm',
    materials: ['저철분 초투명 유리(디아망)', '아노다이징 프레임', '고연색성 97CRI 상부 LED', '원키 보안 잠금장치'],
    location: '서울 강남구 청담동 가이아 본점',
    year: '2026',
    highlighted: true
  },
  {
    id: 'port-2',
    title: '국립 중앙 예술 박물관 특별전시실',
    category: 'exhibition',
    categoryLabel: '전시 공간',
    subtitle: '명예 트로피와 유물 보존 및 진열을 위한 독립형 4단 유리 진열장',
    description: '박물관 및 기념관 내부의 귀중한 트로피와 유물을 외기 먼지로부터 완벽하게 보호하는 특수 쇼케이스입니다. 사방 디아망 투명 강화유리를 사용하여 도난 방지 및 파손 안전성을 극대화했습니다.',
    beforeImage: realBlackCabinet,
    afterImage: cabinetTrophies,
    size: 'W 550 x D 450 x H 1800 mm',
    materials: ['고강도 4단 투명 강화유리 선반', '아노다이징 사틴 블랙 스틸', '원키 보안 키박스', '무소음 이동식 캐스터'],
    location: '국립 중앙 예술 박물관 제3기획전시실',
    year: '2025',
    highlighted: true
  },
  {
    id: 'port-3',
    title: '한남동 펜트하우스 하이엔드 피규어 갤러리',
    category: 'home-office',
    categoryLabel: '가정/사무 공간',
    subtitle: '수집가의 열정을 완벽하게 담은 프리미엄 피규어 커스텀 쇼룸',
    description: '개인 수집가의 한정판 대형 스테츄 및 피규어 소장품을 완벽하게 진열하기 위해 설계된 프리미엄 타워 쇼케이스입니다. 선반마다 고강도 디아망 강화유리 선반을 배치하여 내부 먼지 유입을 철저히 차단합니다.',
    beforeImage: realBlackCabinet,
    afterImage: cabinetFigures,
    size: 'W 550 x D 450 x H 1800 mm',
    materials: ['4단 디아망 강화유리 선반', '매트 블랙 아노다이징', '상단 보안 잠금장치', '손잡이 없는 하부 수납함'],
    location: '서울 용산구 한남동 프리미엄 빌라',
    year: '2026',
    highlighted: true
  },
  {
    id: 'port-4',
    title: '스위스 크로노그래프 롯데 에비뉴엘 쇼룸',
    category: 'commercial',
    categoryLabel: '상업 공간',
    subtitle: '고급 와인 & 프레스티지 보틀을 위한 프리미엄 바 쇼케이스',
    description: '백화점 부티크 및 고급 와인 바를 위한 사방 개방형 4단 유리 진열장입니다. 은은한 LED 조명이 보틀의 투명함과 깊이를 살려 브랜드 헤리티지를 증폭시킵니다.',
    beforeImage: exactWhiteCabinet,
    afterImage: cabinetLiquor,
    size: 'W 550 x D 450 x H 1800 mm',
    materials: ['매트 블랙 아노다이징 프레임', '디아망 유리 4면 접합', 'CRI 97+ 매립형 LED', '하단 수납함 (민자 도어)'],
    location: '서울 중구 백화점 롯데 에비뉴엘 명품관',
    year: '2025',
    highlighted: false
  },
  {
    id: 'port-5',
    title: '글로벌 테크기업 R&D 센터 비전 홀 스포츠 메모라빌리아 쇼룸',
    category: 'home-office',
    categoryLabel: '가정/사무 공간',
    subtitle: '프로 스포츠 사인볼 및 기념 소장품을 전시하는 메탈 타워 진열장',
    description: '기업 로비 및 개인 스포츠 수집가를 위해 친필 사인볼, 기념 용품들을 입체감 있게 전시하는 프리미엄 메탈 타워 쇼케이스입니다.',
    beforeImage: realBlackCabinet,
    afterImage: cabinetSports,
    size: 'W 550 x D 450 x H 1800 mm',
    materials: ['아노다이징 사틴 블랙 알루미늄', '초투명 강화 접합유리', '상단 보안 키박스', '우레탄 회전 캐스터 바퀴'],
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
    id: 'prod-black-cabinet',
    name: '아틀리에 무광 블랙 타워형 4단 유리 진열장',
    category: 'cabinet',
    categoryLabel: '타워형 블랙 4단 진열장',
    image: blackShowcaseImg,
    dimensions: 'W 550 x D 450 x H 1800 mm',
    materials: ['알루미늄 무광 블랙 프레임', '하단 밀폐 수납함 (손잡이/열쇠 없는 민자 도어)', '강화유리 (선반 4개 기본 포함)'],
    description: '현대적이고 고급스러운 매트 블랙 프레임과 사방 디아망 강화유리창이 조화를 이루는 프리미엄 쇼케이스 (W 550 x D 450 x H 1800 mm)입니다. 고강도 강화유리 선반 4개가 기본 탑재되어 있으며, 상단 유리도어 좌측 중앙에 보안 원키 잠금장치가 장착되어 있습니다. 하부 수납함은 손잡이, 열쇠, 장식이 전혀 없는 깔끔한 민자 패널 수납 공간입니다.',
    features: ['고강도 디아망 강화유리 선반 4개 기본 탑재', '매트 블랙 정밀 아노다이징 프레임 (W 550 x D 450 x H 1800 mm)', '상단 유리도어 좌측 원키 보안 잠금장치 (하부 수납함은 손잡이/열쇠 없는 매끈한 민자 도어)', '하단 무소음 회전 캐스터 바퀴 기본 장착']
  },
  {
    id: 'prod-white-cabinet',
    name: '아틀리에 하단수납 이동식 올-화이트 4단 유리 진열장',
    category: 'cabinet',
    categoryLabel: '하단수납 이동식 4단 진열장',
    image: cabinetWhite,
    dimensions: 'W 550 x D 450 x H 1800 mm',
    materials: ['알루미늄 올-화이트 프레임', '하단 밀폐 수납함 (손잡이/열쇠 없는 민자 도어)', '강화유리 (선반 4개 기본 포함)'],
    description: '세련된 무드와 화사함을 선사하는 프리미엄 올-화이트 4단 유리 진열장 (W 550 x D 450 x H 1800 mm)입니다. 고강도 강화유리 선반 4개가 기본 탑재되어 있으며, 상단 유리도어 좌측 중앙에 보안 원키 잠금장치가 장착되어 있습니다. 하부 수납함은 손잡이나 열쇠 등 장식물 없이 깔끔하고 매끈한 민자 도어 스타일입니다.',
    features: ['고강도 디아망 강화유리 선반 4개 기본 탑재', '올-화이트 정밀 아노다이징 프레임 (W 550 x D 450 x H 1800 mm)', '상단 유리도어 좌측 원키 보안 잠금장치 (하부 수납함은 손잡이/열쇠 없는 매끈한 민자 도어)', '하단 무소음 회전 캐스터 바퀴 기본 장착']
  }
];

