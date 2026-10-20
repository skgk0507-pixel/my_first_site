"use client";

import { useState } from "react";

// 시온유통 공식 네이버 스마트스토어 링크
const SION_SMARTSTORE_URL = "https://smartstore.naver.com/delightfuls";

interface ProductCatalog {
  id: string;
  name: string;
  subName: string;
  category: string;
  badge: string;
  image: string;
  frequency: string;
  range: string;
  accuracy: string;
  output: string;
  temp: string;
  beamAngle: string;
  desc: string;
  features: string[];
  applications: string[];
  catalogUrl: string;
}

interface StoreItem {
  id: string;
  name: string;
  category: string;
  specs: string;
  price: string;
  badge: string;
  tag: string;
  image: string;
}

const radarProducts: ProductCatalog[] = [
  {
    id: "lr150",
    name: "SITRANS LR150",
    subName: "80 GHz 콤팩트 레이더 레벨 트랜스미터",
    category: "지멘스 (Siemens) 레이더",
    badge: "대표 주력 모델",
    image: "/siemens_lr150.jpg",
    frequency: "80 GHz FMCW W-Band",
    range: "최대 15 m (49.2 ft)",
    accuracy: "± 2 mm 고정밀",
    output: "4 ~ 20 mA HART",
    temp: "-40 ~ +80 °C",
    beamAngle: "8° 초협각 빔",
    desc: "액체, 슬러리 및 부식성 화학물질의 정밀 연속 레벨 측정을 위한 차세대 80GHz 콤팩트 레이더입니다. 블루투스(Bluetooth)를 탑재하여 스마트폰 전용 앱으로 위험 구역에 진입하지 않고도 원격 설정 및 에코 커브 분석이 가능합니다.",
    features: [
      "W-Band 80 GHz 기술로 노즐 간섭 및 장애물 반사 최소화",
      "블루투스 무선 통신 탑재 (SITRANS mobile IQ 앱 지원)",
      "IP66 / IP67 / IP68 완전 밀폐형 방수·방진 하우징",
      "소형 스레드(Threaded) 나사 결합 방식으로 좁은 배관 및 소형 탱크 용이",
      "플러그 앤 플레이 방식의 빠른 제로점/스팬 캘리브레이션"
    ],
    applications: ["화학 약품 저장 탱크", "정수/하수 수처리 시설", "슬러리 및 침전조", "농업/식음료 개방형 수조"],
    catalogUrl: "https://cache.industry.siemens.com/dl/files/777/109780777/att_1044439/v1/sitrans_lr150_catalog_datasheet_en.pdf"
  },
  {
    id: "lr120",
    name: "SITRANS LR120",
    subName: "80 GHz 콤팩트 장거리 방수 레이더 레벨 센서",
    category: "지멘스 (Siemens) 레이더",
    badge: "초슬림 & 장거리",
    image: "/siemens_lr120.jpg",
    frequency: "80 GHz FMCW W-Band",
    range: "최대 30 m (98.4 ft)",
    accuracy: "± 2 mm 고정밀",
    output: "4 ~ 20 mA / Modbus RTU",
    temp: "-40 ~ +80 °C",
    beamAngle: "4° 초협각 고지향성",
    desc: "케이블 일체형 완전 방수(IP68) 구조로 설계되어 침수 위험이 있는 지하 맨홀, 하천, 수처리 펌프장 및 대형 사일로에 최적화된 30m 장거리 레이더 계측기입니다. 유지보수가 거의 필요 없는 경제적 모델입니다.",
    features: [
      "최대 30m 장거리 측정 및 4°의 매우 좁은 빔으로 내부 사다리/파이프 간섭 무시",
      "침수 환경 완벽 대응 (IP68 / NEMA 6P 수심 3m 48시간 침수 방수)",
      "PVDF 일체형 캡슐 밀봉 안테나로 오염물 및 응축수 부착 방지",
      "Modbus RTU 및 4-20mA 다중 출력 인터페이스 지원",
      "블루투스 무선 진단 및 현장 퀵 셋업"
    ],
    applications: ["배수 펌프장 및 하천 수위 측정", "개수로(Open Channel) 유량 측정", "대형 화학 수조 및 벌크 사일로", "우수관 및 지하 맨홀"],
    catalogUrl: "https://cache.industry.siemens.com/dl/files/778/109780778/att_1044440/v1/sitrans_lr120_catalog_datasheet_en.pdf"
  },
  {
    id: "lr250",
    name: "SITRANS LR250",
    subName: "플랜지 혼 안테나 고정밀 프로세스 레이더",
    category: "지멘스 (Siemens) 레이더",
    badge: "극한 공정 / 플랜지형",
    image: "/siemens_lr250.jpg",
    frequency: "25 GHz / 80 GHz Process Radar",
    range: "최대 20 m (고감도 확장 시 최대 100m)",
    accuracy: "± 3 mm 고신뢰성",
    output: "4 ~ 20 mA HART / Profibus PA",
    temp: "-40 ~ +200 °C (고온 특화)",
    beamAngle: "호환 플랜지 규격에 따른 최적화 빔",
    desc: "석유화학 플랜트, 고온·고압 반응기 및 부식성 강한 극한의 공정 유체를 정밀 모니터링하기 위한 견고한 스테인리스 플랜지 혼 안테나형 트랜스미터입니다. LCD 그래픽 디스플레이와 로컬 푸시버튼을 탑재했습니다.",
    features: [
      "최대 200°C 고온 및 40 bar 극한 압력 환경 완벽 대응",
      "316L 스테인리스 스틸 및 Hastelloy / PTFE 플랜지 혼 안테나 적용",
      "현장 LCD 디스플레이 및 로컬 파라미터 제어 버튼 내장",
      "교반기(Agitator) 회전 탱크 및 심한 증기·가스 환경에서도 안정적 에코 추적",
      "SIL 2 기능 안전(Functional Safety) 규격 인증 획득"
    ],
    applications: ["화학/정유 반응조 및 고온 고압 탱크", "아스팔트/오일 및 위험 화학물질 저장고", "교반기가 장착된 혼합 탱크", "위생 및 식음료 프로세스 용기"],
    catalogUrl: "https://cache.industry.siemens.com/dl/files/779/109780779/att_1044441/v1/sitrans_lr250_catalog_datasheet_en.pdf"
  }
];

// 시온유통 스마트스토어 인기 제품 리스트 (웹사이트 내 즉시 확인 가능)
const storeProductList: StoreItem[] = [
  {
    id: "item-1",
    name: "디지털 압력 트랜스미터 KTC-50",
    category: "압력 센서",
    specs: "4~20mA 2선식 출력 / 세라믹 피에조 센서 / IP65 방수",
    price: "98,000원",
    badge: "베스트셀러",
    tag: "빠른출고",
    image: "/smartstore_thumb.jpg"
  },
  {
    id: "item-2",
    name: "디지털 온도 컨트롤러 DS-100",
    category: "온도 제어기",
    specs: "PT100/열전대 멀티입력 / 듀얼 PID 제어 / 릴레이 출력",
    price: "45,000원",
    badge: "인기상품",
    tag: "당일배송",
    image: "/smartstore_thumb.jpg"
  },
  {
    id: "item-3",
    name: "마그네틱 플로트 레벨 스위치 SFS-10",
    category: "레벨 센서",
    specs: "SUS316 접액부 / 오일·약품 탱크 고신뢰성 접점 스위치",
    price: "65,000원",
    badge: "추천품목",
    tag: "정품보장",
    image: "/smartstore_thumb.jpg"
  },
  {
    id: "item-4",
    name: "정밀 전자유량계 FM-300",
    category: "유량 계측기",
    specs: "순간/적산 LCD 디스플레이 / 펄스 및 4-20mA 출력",
    price: "320,000원",
    badge: "정밀계측",
    tag: "기술지원",
    image: "/smartstore_thumb.jpg"
  },
  {
    id: "item-5",
    name: "진동식 분체/액체 레벨스위치 SVF-600",
    category: "레벨 스위치",
    specs: "사일로 분체·슬러리 레벨 감지 / 진동 튜닝포크 방식",
    price: "180,000원",
    badge: "산업특화",
    tag: "주문제작",
    image: "/smartstore_thumb.jpg"
  },
  {
    id: "item-6",
    name: "PT100 측온저항체 센서 프로브 RTD-P3",
    category: "온도 센서",
    specs: "Class A 3선식 백금 저항체 / 스테인리스 316L 보호관",
    price: "35,000원",
    badge: "기본부속",
    tag: "대량할인",
    image: "/smartstore_thumb.jpg"
  }
];

type MediaChannelKey = "youtube" | "naver" | "tistory";

interface MediaChannel {
  key: MediaChannelKey;
  title: string;
  subTitle: string;
  badge: string;
  badgeColor: string;
  image: string;
  desc: string;
  linkText: string;
  url: string;
  tagList: string[];
}

const mediaChannels: MediaChannel[] = [
  {
    key: "youtube",
    title: "서광계기 공식 유튜브 채널",
    subTitle: "지멘스 SITRANS LR150 블루투스 세팅 & 출고 검수 시연",
    badge: "YouTube 공식영상",
    badgeColor: "bg-red-600 text-white",
    image: "/seokwang_youtube_thumb.jpg",
    desc: "80GHz 비접촉식 레이더 센서의 스마트폰 앱(Mobile IQ) 무선 파라미터 셋업, 반사 에코 커브 파형 점검 및 현장 설치 노하우를 서광계기 기술팀이 알기 쉽게 영상으로 시연합니다.",
    linkText: "유튜브 영상 및 채널 보러가기",
    url: "https://www.youtube.com/@%EC%84%9C%EA%B4%91%EA%B3%84%EA%B8%B0",
    tagList: ["#지멘스LR150", "#블루투스세팅", "#수위계시연", "#서광계기유튜브"]
  },
  {
    key: "naver",
    title: "서광계기 네이버 공식 블로그",
    subTitle: "현장 계측 시스템 시공 일지 & 정밀 센서 기술 노트",
    badge: "NAVER 공식블로그",
    badgeColor: "bg-emerald-600 text-white",
    image: "/naver_blog_thumb.jpg",
    desc: "다양한 산업 현장(수처리장, 화학 플랜트, 사일로 등)의 레벨센서, 유량계 시공 사례와 납품 기술 리포트를 상세한 사진 및 분석 데이터와 함께 지속 연재하고 있습니다.",
    linkText: "네이버 블로그 포스팅 보러가기",
    url: "https://blog.naver.com/skgk-2023",
    tagList: ["#현장시공노트", "#센서기술자료", "#네이버공식블로그", "#레벨계측기"]
  },
  {
    key: "tistory",
    title: "서광계기 티스토리 기술 블로그",
    subTitle: "산업용 공장자동화 센서 솔루션 & 제품 출고 전 테스트 리뷰",
    badge: "TISTORY 블로그",
    badgeColor: "bg-amber-600 text-white",
    image: "/tistory_blog_thumb.jpg",
    desc: "지멘스, 서진인스텍, 노켄, 간사이 등 주요 협력사 계측기의 출고 전 신호 점검, 결선 가이드, 배선 문제 해결 팁을 전문 엔지니어 관점에서 정리한 기술 블로그입니다.",
    linkText: "티스토리 기술자료 보러가기",
    url: "https://skgk-ins.tistory.com/",
    tagList: ["#스마트팩토리", "#출고전테스트", "#센서결선가이드", "#계측기리뷰"]
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductCatalog | null>(null);
  const [activeMediaTab, setActiveMediaTab] = useState<MediaChannelKey>("youtube");
  const [isCopied, setIsCopied] = useState(false);

  // 온라인 문의사항 폼 상태
  const [inquiryData, setInquiryData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    productInterest: "SITRANS LR150 (80GHz 콤팩트 레이더)",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState<{ name: string; phone: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInquiryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.phone) {
      alert("성함과 연락처를 입력해 주세요.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "문의 전송에 실패했습니다.");
      }

      setSubmittedInfo({ name: inquiryData.name, phone: inquiryData.phone });
      setSubmitSuccess(true);
      setInquiryData({
        name: "",
        phone: "",
        company: "",
        email: "",
        productInterest: "SITRANS LR150 (80GHz 콤팩트 레이더)",
        message: ""
      });

      const formEl = document.getElementById("contact-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || "문의 전송 중 오류가 발생했습니다. 대표전화(02-6396-4671)로 문의 바랍니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyPhone = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const activeMedia = mediaChannels.find((m) => m.key === activeMediaTab) || mediaChannels[0];

  return (
    <div className="relative min-h-screen bg-slate-50/50 text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-700">
      {/* 배경 장식 패턴 */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/bg.png')" }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. 상단 네비게이션 헤더 */}
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* 서광계기 로고 */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
                <span className="font-extrabold text-base tracking-tighter">SK</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    (주)서광계기
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200/70">
                    공식 파트너
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                  Seokwang Instrument & Automation
                </span>
              </div>
            </a>

            {/* PC 네비게이션 메뉴 */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              <a href="#about" className="hover:text-blue-600 transition-colors py-1">
                회사소개
              </a>
              <a href="#products" className="hover:text-blue-600 transition-colors py-1 font-semibold text-blue-600">
                지멘스 레이더 카탈로그
              </a>
              <a href="#channels" className="hover:text-blue-600 transition-colors py-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                유튜브 & 블로그
              </a>
              <a href="#store-products" className="hover:text-emerald-600 transition-colors py-1 flex items-center gap-1 text-emerald-700 font-semibold">
                <span className="px-1 rounded bg-green-600 text-white text-[10px] font-black">N</span>
                시온유통 스토어
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-colors py-1">
                견적 및 문의
              </a>
            </nav>

            {/* 헤더 우측 버튼들 */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={SION_SMARTSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition-all shadow-2xs"
              >
                <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-white flex items-center justify-center text-[9px] font-black leading-none">N</span>
                시온유통 스마트스토어 ↗
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/25 transition-all"
              >
                견적문의
              </a>
            </div>

            {/* 모바일 햄버거 메뉴 버튼 */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* 모바일 드롭다운 메뉴 */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-6 space-y-2">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                회사소개
              </a>
              <a
                href="#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-blue-600 bg-blue-50/50"
              >
                지멘스 레이더 카탈로그
              </a>
              <a
                href="#channels"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                유튜브 & 블로그 미리보기
              </a>
              <a
                href={SION_SMARTSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-emerald-700 bg-emerald-50/70"
              >
                시온유통 스마트스토어 바로가기 ↗
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                견적 및 문의
              </a>
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:02-6396-4671"
                  className="w-full text-center py-2.5 px-4 rounded-lg bg-blue-600 text-white font-semibold text-sm shadow-sm"
                >
                  전화 상담 (02-6396-4671)
                </a>
              </div>
            </div>
          )}
        </header>

        {/* 2. 히어로 배너 영역 */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-blue-100/70 via-indigo-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* 상단 뱃지 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 border border-blue-200 text-blue-700 mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              지멘스(SIEMENS) 공정 계측기기 · 시온유통 스마트스토어
            </div>

            {/* 메인 타이틀 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.25] mb-6 max-w-4xl mx-auto break-keep">
              지멘스 <span className="text-blue-600">80 GHz 고정밀 레이더</span> 카탈로그<br className="hidden sm:inline" />
              & 산업용 센서 스마트스토어
            </h1>

            {/* 설명 문구 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal break-keep">
              (주)서광계기는 검증된 80GHz 스마트 레이더 레벨 트랜스미터와 정밀 현장 세팅 기술 지원,<br className="hidden sm:inline" />
              그리고 시온유통 스마트스토어의 전체 제품 리스트를 로그인 없이 바로 제공합니다.
            </p>

            {/* CTA 버튼들 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-2xl mx-auto">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg transition-all"
              >
                <span>레이더 라인업 3종 카탈로그</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#channels"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-red-50 text-slate-800 hover:text-red-600 font-bold text-sm border border-slate-200 hover:border-red-200 shadow-xs transition-all"
              >
                <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>유튜브 · 블로그 보기</span>
              </a>

              <a
                href="#store-products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all"
              >
                <span className="w-4 h-4 rounded bg-white text-emerald-600 flex items-center justify-center text-[10px] font-black">N</span>
                <span>시온유통 제품 리스트 바로보기</span>
              </a>
            </div>

            {/* 신뢰 지표 바 */}
            <div className="mt-12 pt-8 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
              <div className="bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-slate-100">
                <p className="text-2xl font-black text-blue-600">80 GHz</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">초협각 레이더 빔</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-slate-100">
                <p className="text-2xl font-black text-slate-900">±2 mm</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">초정밀 계측 오차</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-slate-100">
                <p className="text-2xl font-black text-emerald-600">N Pay</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">시온유통 온라인 결제</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-slate-100">
                <p className="text-2xl font-black text-blue-600">Bluetooth</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">모바일 무선 세팅 지원</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 지멘스 레이더 라인 LR 150 및 유사 제품 3종 카탈로그 섹션 */}
        <section id="products" className="py-16 md:py-24 bg-white/60 backdrop-blur-sm border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 mb-3">
                Siemens SITRANS Radar Product Catalog
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight break-keep">
                지멘스 레이더 LR150 및 추천 라인업 3종
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 break-keep">
                80 GHz FMCW 비접촉식 레이더 기술로 장애물 간섭 없이 액체, 슬러리, 부식성 약품의 수위를 정밀 측정합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {radarProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="p-6 pb-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 tracking-wide">
                      {product.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200/60">
                      {product.badge}
                    </span>
                  </div>

                  <div className="relative px-6 py-4 flex items-center justify-center bg-gradient-to-b from-slate-50/50 to-white">
                    <div className="relative w-full aspect-4/3 max-w-[280px] overflow-hidden rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-102 transition-transform duration-300">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-2"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="p-6 pt-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mt-0.5 mb-4">
                        {product.subName}
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-5">
                        {product.desc}
                      </p>

                      <div className="bg-slate-50 rounded-xl p-3.5 mb-5 border border-slate-100 space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">주파수</span>
                          <span className="font-semibold text-slate-800">{product.frequency}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">측정 거리</span>
                          <span className="font-bold text-blue-600">{product.range}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">측정 정밀도</span>
                          <span className="font-semibold text-slate-800">{product.accuracy}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">출력 인터페이스</span>
                          <span className="font-semibold text-slate-800">{product.output}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">빔 각도</span>
                          <span className="font-semibold text-slate-800">{product.beamAngle}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 py-2.5 px-3 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-xs transition-colors text-center"
                      >
                        상세 사양 보기
                      </button>
                      <a
                        href="#contact"
                        className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition-colors text-center shadow-xs"
                      >
                        견적 문의
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold">지멘스 전체 공정계측기 종합 카탈로그가 필요하신가요?</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    SITRANS 레이더, 초음파, 정전용량식 및 압력/차압 트랜스미터 한글 기술자료를 보내드립니다.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <a
                  href="#contact"
                  className="w-full md:w-auto text-center px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
                >
                  카탈로그 요청하기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 유튜브 & 공식 블로그 쇼케이스 섹션 */}
        <section id="channels" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white relative overflow-hidden">
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-blue-300 mb-3">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                서광계기 공식 기술 채널
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight break-keep">
                유튜브 & 공식 기술 블로그
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 break-keep">
                영상 시연 가이드부터 현장 시공 기술 블로그까지 최신 기술 노트를 한눈에 확인하세요.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-2xl mx-auto">
              {mediaChannels.map((channel) => {
                const isActive = activeMediaTab === channel.key;
                return (
                  <button
                    key={channel.key}
                    type="button"
                    onClick={() => setActiveMediaTab(channel.key)}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-white text-slate-900 shadow-lg scale-105"
                        : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60"
                    }`}
                  >
                    {channel.key === "youtube" && (
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                    )}
                    {channel.key === "naver" && (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    )}
                    {channel.key === "tistory" && (
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    )}
                    <span>{channel.title.replace("서광계기 ", "")}</span>
                  </button>
                );
              })}
            </div>

            <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-md rounded-3xl border border-slate-800 p-4 sm:p-7 shadow-2xl mb-12">
              <a
                href={activeMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-16/9 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60"
              >
                <img
                  src={activeMedia.image}
                  alt={activeMedia.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:bg-black/10 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  {activeMedia.key === "youtube" ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl shadow-red-600/50 group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                      <svg className="w-8 h-8 sm:w-9 sm:h-9 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-900 group-hover:bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${activeMedia.badgeColor} shadow-md`}>
                    {activeMedia.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-black/60 backdrop-blur-xs text-white">
                    공식 링크 바로가기 ↗
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="max-w-lg">
                    <p className="text-white font-bold text-sm sm:text-lg drop-shadow-md">
                      {activeMedia.subTitle}
                    </p>
                    <p className="text-slate-300 text-xs hidden sm:block mt-0.5">
                      클릭하시면 {activeMedia.title} 페이지로 바로 연결됩니다.
                    </p>
                  </div>
                  <div className="hidden sm:flex gap-1.5">
                    {activeMedia.tagList.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-black/70 text-slate-300 text-[11px] font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              <div className="mt-5 pt-5 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-base text-white flex items-center gap-2">
                    {activeMedia.title}
                    <span className="text-blue-400 text-xs" title="공식 채널">✓ 공식</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    {activeMedia.desc}
                  </p>
                </div>

                <a
                  href={activeMedia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 w-full md:w-auto ${
                    activeMedia.key === "youtube"
                      ? "bg-red-600 hover:bg-red-500 text-white shadow-red-600/30"
                      : activeMedia.key === "naver"
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30"
                      : "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30"
                  }`}
                >
                  <span>{activeMedia.linkText}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {mediaChannels.map((channel) => (
                <div
                  key={channel.key}
                  className={`bg-slate-900/70 rounded-2xl border p-4 flex flex-col justify-between transition-all hover:-translate-y-1 ${
                    activeMediaTab === channel.key
                      ? "border-blue-400 shadow-lg shadow-blue-500/10"
                      : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div>
                    <div 
                      onClick={() => setActiveMediaTab(channel.key)}
                      className="cursor-pointer relative aspect-16/9 rounded-xl overflow-hidden mb-3 bg-slate-800 group"
                    >
                      <img
                        src={channel.image}
                        alt={channel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold ${channel.badgeColor}`}>
                        {channel.badge}
                      </span>
                    </div>

                    <h5 className="font-bold text-sm text-white mb-1 line-clamp-1">
                      {channel.title}
                    </h5>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-3">
                      {channel.subTitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveMediaTab(channel.key)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                    >
                      상세 미리보기
                    </button>
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-200 hover:text-white"
                    >
                      <span>접속</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. [시온유통 스마트스토어 전용 배너 & 바로 보는 제품 리스트] */}
        <section id="store-products" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 상단 시온유통 스마트스토어 배너 */}
            <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <span className="text-2xl font-black">N</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 mb-1">
                    시온유통 네이버 스마트스토어
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    시온유통 스마트스토어 온라인 간편 주문
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                    로그인 번거로움 없이 아래 제품 리스트에서 가격과 규격을 바로 확인하시고 N Pay로 간편하게 구매하세요.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <a
                  href={SION_SMARTSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center px-6 py-3.5 rounded-xl bg-white text-emerald-900 font-extrabold text-xs sm:text-sm shadow-md hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
                >
                  <span className="w-4 h-4 rounded bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">N</span>
                  <span>시온유통 스토어 바로가기 ↗</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 제품 리스트 헤더 */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 mb-2">
                Zion Distribution Store Products
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight break-keep">
                시온유통 스마트스토어 대표 제품 리스트
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 break-keep">
                로그인 없이 아래 제품 목록에서 원하는 계측기 사양과 가격을 즉시 확인하실 수 있습니다.
              </p>
            </div>

            {/* 제품 리스트 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {storeProductList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 min-h-[36px]">
                      {item.specs}
                    </p>

                    <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                      <span className="text-xs text-slate-400 font-medium">스토어가</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-lg font-black text-slate-900">{item.price}</span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">N Pay</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-1 flex items-center gap-2">
                    <a
                      href="tel:02-6396-4671"
                      className="flex-1 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors text-center"
                    >
                      재고/견적 문의
                    </a>
                    <a
                      href={SION_SMARTSTORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors text-center shadow-xs flex items-center justify-center gap-1"
                    >
                      <span>시온유통 구매 ↗</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 주문 안내 */}
            <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <p>
                  <strong className="text-slate-800">시온유통 대량 주문 및 맞춤형 계측기 사양:</strong> 전자세금계산서 발행 및 현장 출장 점검은 직통전화(02-6396-4671)로 바로 신청 가능합니다.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 text-blue-600 font-bold hover:underline"
              >
                상담 문의하기 →
              </a>
            </div>
          </div>
        </section>

        {/* 6. 회사소개 & 문의하기 (서광계기) */}
        <section id="contact" className="py-16 md:py-24 bg-white/70 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 mb-3">
                Contact & Technical Service
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight break-keep">
                공장 자동화 및 정밀 계측 솔루션<br />
                <span className="text-blue-600">(주)서광계기</span>에 문의하세요
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 break-keep">
                지멘스 80GHz 스마트 레이더부터 산업용 센서 견적, 기술 자료, 출장 셋업까지 전문가가 친절히 상담해 드립니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* 좌측: 고객센터 안내 및 회사 정보 (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-5 bg-blue-600 rounded-full" />
                    빠른 전화 & 이메일 상담
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <p className="text-[11px] text-slate-500 font-semibold mb-0.5">대표 유선전화</p>
                      <a href="tel:02-6396-4671" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        02-6396-4671
                      </a>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <p className="text-[11px] text-slate-500 font-semibold mb-0.5">담당자 직통 모바일</p>
                      <a href="tel:010-6314-4671" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        010-6314-4671
                      </a>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <p className="text-[11px] text-slate-500 font-semibold mb-0.5">견적 문의 이메일</p>
                      <a href="mailto:tax@skgk.co.kr" className="text-xs font-bold text-blue-600 hover:underline">
                        tax@skgk.co.kr
                      </a>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <p className="text-[11px] text-slate-500 font-semibold mb-0.5">팩스 번호</p>
                      <p className="text-xs font-bold text-slate-900">
                        02-6397-4671
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => handleCopyPhone("02-6396-4671")}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>{isCopied ? "복사완료!" : "대표번호 복사"}</span>
                    </button>
                    <a
                      href={SION_SMARTSTORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-xs transition-colors"
                    >
                      <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-white flex items-center justify-center text-[9px] font-black">N</span>
                      <span>스마트스토어</span>
                    </a>
                  </div>
                </div>

                {/* 본사 위치 및 약도 */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">본사 및 기술지원 센터</h4>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">부천 옥길동</span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/9 mb-3 bg-slate-100">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12666.79938772431!2d126.8253428!3d37.4678082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x199e29f8acb0a471!2z7Jqw7ISx7YWM7YGs64W47YyM7YGsMQ!5e0!3m2!1sko!2skr!4v1670111873435!5m2!1sko!2skr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-800">주소:</span> 경기도 부천시 소사구 옥길동 794-1 우성테크노파크1차 507호
                  </p>
                </div>
              </div>

              {/* 우측: 온라인 문의사항 작성 폼 및 '문의사항 보내기' 버튼 (7 cols) */}
              <div id="contact-form" className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-6 sm:p-9 border border-slate-200 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100 via-indigo-50 to-transparent rounded-bl-full pointer-events-none -z-0" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-1 rounded text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60">
                        온라인 간편 접수
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        * 필수 입력 항목
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                      견적 및 기술 문의하기
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mb-6 break-keep">
                      문의사항을 남겨주시면 담당 엔지니어가 신속하게 확인 후 전화 또는 이메일로 회신드립니다.
                    </p>

                    {submitSuccess && (
                      <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3 animate-in fade-in duration-300">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold text-sm">문의사항이 성공적으로 접수되었습니다!</p>
                          <p className="text-[11px] text-emerald-700 mt-0.5">서광계기 기술영업팀에서 기재해주신 연락처로 신속히 안내드리겠습니다.</p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmitInquiry} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="inquiry-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                            성함 / 담당자명 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="inquiry-name"
                            name="name"
                            value={inquiryData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="예: 홍길동 팀장"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50/50 focus:bg-white"
                          />
                        </div>

                        <div>
                          <label htmlFor="inquiry-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                            연락처 (휴대전화) <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="inquiry-phone"
                            name="phone"
                            value={inquiryData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="010-0000-0000"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50/50 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="inquiry-company" className="block text-xs font-bold text-slate-700 mb-1.5">
                            회사명 / 상호
                          </label>
                          <input
                            type="text"
                            id="inquiry-company"
                            name="company"
                            value={inquiryData.company}
                            onChange={handleInputChange}
                            placeholder="예: (주)한국플랜트"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50/50 focus:bg-white"
                          />
                        </div>

                        <div>
                          <label htmlFor="inquiry-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                            이메일 주소
                          </label>
                          <input
                            type="email"
                            id="inquiry-email"
                            name="email"
                            value={inquiryData.email}
                            onChange={handleInputChange}
                            placeholder="contact@company.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50/50 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="inquiry-product" className="block text-xs font-bold text-slate-700 mb-1.5">
                          관심 제품 및 문의 유형
                        </label>
                        <select
                          id="inquiry-product"
                          name="productInterest"
                          value={inquiryData.productInterest}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50/50 focus:bg-white text-slate-800"
                        >
                          <option value="SITRANS LR150 (80GHz 콤팩트 레이더)">지멘스 SITRANS LR150 (80GHz 콤팩트 레이더)</option>
                          <option value="SITRANS LR120 (장거리 방수 레이더)">지멘스 SITRANS LR120 (30m 장거리 방수 레이더)</option>
                          <option value="SITRANS LR250 (플랜지 혼 프로세스 레이더)">지멘스 SITRANS LR250 (고온고압 플랜지 레이더)</option>
                          <option value="시온유통 스마트스토어 제품 구매">시온유통 스마트스토어 제품군 (압력·온도·유량 센서)</option>
                          <option value="현장 기술지원 및 무선 세팅 컨설팅">현장 기술지원 및 블루투스 세팅 컨설팅</option>
                          <option value="기타 맞춤 계측기 견적 요청">기타 맞춤 계측기 견적 요청</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="inquiry-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                          문의 내용 (측정 매질, 탱크 규격, 희망 수량 등)
                        </label>
                        <textarea
                          id="inquiry-message"
                          name="message"
                          rows={4}
                          value={inquiryData.message}
                          onChange={handleInputChange}
                          placeholder="측정하실 유체 종류, 측정 거리, 설치 환경 및 필요한 수량이나 납기 등을 자유롭게 적어주세요."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50/50 focus:bg-white resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        {/* 화려하고 세련된 '문의사항 보내기' 메인 버튼 (노란색 테마) */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-slate-950 font-black py-4 px-6 shadow-lg shadow-amber-400/30 hover:shadow-xl hover:shadow-amber-400/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed border border-yellow-300/60"
                        >
                          {/* 버튼 샤인 효과 */}
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                          {isSubmitting ? (
                            <div className="flex items-center gap-2 text-slate-950">
                              <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span className="text-sm font-black tracking-wide">문의사항 전송 중...</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-slate-950">
                              <svg className="w-5 h-5 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                              <span className="text-base tracking-tight font-black">문의사항 보내기</span>
                              <span className="text-xs bg-slate-950/15 text-slate-950 px-2.5 py-0.5 rounded-full ml-1 font-bold group-hover:bg-slate-950/20 transition-colors">
                                빠른 회신
                              </span>
                            </div>
                          )}
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-400 text-center mt-2">
                        🔒 입력하신 정보는 문의 회신 및 기술 지원 목적으로만 안전하게 사용됩니다.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6.5. 플로팅 퀵 '문의사항 보내기' 버튼 (노란색 테마) */}
        <div className="fixed bottom-6 right-6 z-40 flex items-center">
          <a
            href="#contact-form"
            className="group flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-slate-950 text-xs sm:text-sm font-black shadow-xl shadow-amber-400/35 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-yellow-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span>문의사항 보내기</span>
            <div className="w-6 h-6 rounded-full bg-slate-950/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-950">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* 6.6. 문의사항 접수 성공 알림 팝업 모달 */}
        {submitSuccess && submittedInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center relative animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-inner">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60 inline-block mb-3">
                문의 접수 및 이메일 전송 완료
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                문의사항이 접수되었습니다!
              </h3>

              <div className="bg-slate-50 rounded-xl p-3.5 mb-5 text-xs text-left border border-slate-200/70 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">성함 / 담당자:</span>
                  <span className="font-bold text-slate-900">{submittedInfo.name} 고객님</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">회신 연락처:</span>
                  <span className="font-bold text-blue-600">{submittedInfo.phone}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 break-keep">
                서광계기 기술영업 담당자가 확인 후 기재해주신 연락처로 신속히 견적 및 기술 상담을 드리겠습니다.
              </p>

              <button
                type="button"
                onClick={() => setSubmitSuccess(false)}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        )}

        {/* 7. 모달: 제품 상세 카탈로그 스펙 */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="닫기"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-bold bg-blue-100 text-blue-800">
                  {selectedProduct.category}
                </span>
                <span className="text-xs text-slate-500 font-medium">카탈로그 사양서</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mb-6 pb-6 border-b border-slate-100">
                <div className="w-36 h-36 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{selectedProduct.name}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-2">{selectedProduct.subName}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{selectedProduct.desc}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
                  주요 기술 사양 (Technical Specifications)
                </h4>
                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 text-xs">
                  <div className="grid grid-cols-3 p-2.5 border-b border-slate-200 bg-slate-100/70 font-semibold text-slate-700">
                    <div>구분</div>
                    <div className="col-span-2">세부 사양</div>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 border-b border-slate-200">
                    <div className="text-slate-500 font-medium">동작 주파수</div>
                    <div className="col-span-2 font-semibold text-slate-800">{selectedProduct.frequency}</div>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 border-b border-slate-200">
                    <div className="text-slate-500 font-medium">측정 범위</div>
                    <div className="col-span-2 font-semibold text-blue-600">{selectedProduct.range}</div>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 border-b border-slate-200">
                    <div className="text-slate-500 font-medium">측정 정확도</div>
                    <div className="col-span-2 font-semibold text-slate-800">{selectedProduct.accuracy}</div>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 border-b border-slate-200">
                    <div className="text-slate-500 font-medium">신호 출력</div>
                    <div className="col-span-2 font-semibold text-slate-800">{selectedProduct.output}</div>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 border-b border-slate-200">
                    <div className="text-slate-500 font-medium">동작 온도</div>
                    <div className="col-span-2 font-semibold text-slate-800">{selectedProduct.temp}</div>
                  </div>
                  <div className="grid grid-cols-3 p-2.5">
                    <div className="text-slate-500 font-medium">방사 빔 각도</div>
                    <div className="col-span-2 font-semibold text-slate-800">{selectedProduct.beamAngle}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
                  제품 핵심 특징
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
                  주요 적용 분야
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.applications.map((app, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  닫기
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
                >
                  견적 및 납기 문의하기
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 8. 푸터 */}
        <footer id="about" className="mt-auto bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                  SK
                </div>
                <div>
                  <span className="font-bold text-white text-base">(주)서광계기</span>
                  <p className="text-[11px] text-slate-500">Seokwang Instrument & Automation Co., Ltd.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 text-slate-300">
                <a href="#about" className="hover:text-blue-400 transition-colors">회사소개</a>
                <a href="#products" className="hover:text-blue-400 transition-colors">지멘스 레이더 카탈로그</a>
                <a href="#channels" className="hover:text-red-400 transition-colors">유튜브·블로그</a>
                <a href={SION_SMARTSTORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold">시온유통 스마트스토어 ↗</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">고객지원 및 문의</a>
              </div>
            </div>
            
            <div className="pt-6 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-slate-500 leading-relaxed">
              <div>
                <p>상호명: (주)서광계기 | 대표자: 황정용 | 사업자등록번호: 532-86-03115</p>
                <p className="mt-0.5">주소: 경기도 부천시 소사구 옥길동 794-1 우성테크노파크1차 507호 (14786)</p>
                <p className="mt-0.5">전화: 02-6396-4671 | 직통: 010-6314-4671 | 팩스: 02-6397-4671 | 이메일: tax@skgk.co.kr</p>
              </div>
              <div className="md:text-right">
                <p>© (주)서광계기 & 시온유통. All Rights Reserved.</p>
                <p className="mt-0.5">지멘스(SIEMENS), 서진인스텍(SEOJIN), 노켄(NOHKEN), 간사이(KANSAI) 협력 대리점</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
