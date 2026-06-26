export interface PortfolioItem {
  id: string;
  title: string;
  category: 'commercial' | 'exhibition' | 'home-office';
  categoryLabel: string;
  subtitle: string;
  description: string;
  beforeImage?: string; // For before/after showcase
  afterImage: string;
  size: string; // e.g., "W 1200 x D 600 x H 900 mm"
  materials: string[];
  location: string;
  year: string;
  highlighted: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  date: string;
  portfolioTitle: string;
  avatarText: string;
}

export interface InquiryFormData {
  name: string;
  company: string;
  contact: string;
  email: string;
  width: number;
  depth: number;
  height: number;
  glassType: 'normal' | 'tempered' | 'low-iron'; // 일반유리, 강화유리, 저철분(디아망)초투명유리
  frameMaterial: 'stainless' | 'brass-gold' | 'wood' | 'frameless'; // 스테인리스, 브라스골드, 원목, 프레임리스(유리접합)
  lightingType: 'none' | 'top-spot' | 'side-led' | 'all-round'; // 없음, 상부 스포트, 좌우 LED 바, 전면 입체 조명
  handleType?: 'push-to-open' | 'brass-pull' | 'minimal-grip' | 'key-grip'; // 푸시오픈, 브라스노브, 미니멀바, 잠금일체형
  lockType?: 'none' | 'key-lock' | 'digital-lock' | 'fingerprint'; // 없음, 열쇠형, 디지털 번호형, 지문인식형
  usage: string;
  specialRequest: string;
  agreedToTerms: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'tower' | 'island' | 'wall' | 'museum';
  categoryLabel: string;
  image: string;
  basePrice: number; // in KRW
  dimensions: string; // e.g. "W 600 x D 600 x H 1800 mm"
  materials: string[];
  description: string;
  features: string[];
}

