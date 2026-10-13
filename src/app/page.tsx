"use client";

import { useState } from "react";

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

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductCatalog | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyPhone = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-slate-50/50 text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-700">
      {/* 배경 장식 패턴 */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/bg.png')" }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. 상단 네비게이션 헤더 */}
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
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
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
              <a href="#about" className="hover:text-blue-600 transition-colors py-1">
                회사소개
              </a>
              <a href="#products" className="hover:text-blue-600 transition-colors py-1 font-semibold text-blue-600">
                지멘스 레이더 카탈로그
              </a>
              <a href="#youtube" className="hover:text-blue-600 transition-colors py-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                기술영상 (유튜브)
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-colors py-1">
                견적 및 문의
              </a>
            </nav>

            {/* 헤더 우측 빠른 전화/상담 버튼 */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:02-6396-4671"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              >
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                02-6396-4671
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/25 hover:shadow transition-all"
              >
                제품 견적문의
              </a>
            </div>

            {/* 모바일 햄버거 메뉴 버튼 */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
            <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-6 space-y-2">
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
                href="#youtube"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                서광계기 유튜브 기술영상
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
              지멘스(SIEMENS) 공정 계측기기 · 레이더 레벨 솔루션
            </div>

            {/* 메인 타이틀 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.25] mb-6 max-w-4xl mx-auto break-keep">
              지멘스 <span className="text-blue-600">80 GHz 고정밀 레이더</span><br className="hidden sm:inline" />
              SITRANS 라인업 공식 카탈로그
            </h1>

            {/* 설명 문구 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal break-keep">
              (주)서광계기는 지멘스(Siemens), 서진인스텍 공식 파트너로서<br className="hidden sm:inline" />
              검증된 80GHz 스마트 레이더 레벨 트랜스미터와 정밀 현장 세팅 기술 지원을 제공합니다.
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg transition-all"
              >
                <span>레이더 라인업 3종 보기</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#youtube"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-red-50 text-slate-800 hover:text-red-600 font-bold text-sm border border-slate-200 hover:border-red-200 shadow-xs transition-all"
              >
                <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>서광계기 시연 영상 보기</span>
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
                <p className="text-2xl font-black text-slate-900">IP68</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">완전 방수·방진 등급</p>
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
            {/* 섹션 헤더 */}
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

            {/* 제품 3개 카드 그리드 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {radarProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* 상단 뱃지 & 카테고리 */}
                  <div className="p-6 pb-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 tracking-wide">
                      {product.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200/60">
                      {product.badge}
                    </span>
                  </div>

                  {/* 제품 이미지 영역 */}
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

                  {/* 제품 텍스트 및 사양 */}
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

                      {/* 핵심 스펙 그리드 */}
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

                    {/* 액션 버튼들 */}
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

            {/* 카탈로그 다운로드 안내 배너 */}
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

        {/* 4. 서광계기 유튜브 링크 & 미리보기 섹션 */}
        <section id="youtube" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white relative overflow-hidden">
          {/* 장식용 글로우 배경 */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* 헤더 */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-red-500/10 border border-red-500/30 text-red-400 mb-3">
                <svg className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                서광계기 공식 유튜브 채널
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight break-keep">
                현장 설치 & 블루투스 세팅 시연 영상
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 break-keep">
                서광계기 전문가가 직접 시연하는 지멘스 LR150 레이더 센서 세팅법 및 출고 전 점검 영상을 유튜브에서 확인하세요.
              </p>
            </div>

            {/* 유튜브 비디오 프리뷰 카드 메인 */}
            <div className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-800 p-4 sm:p-6 shadow-2xl">
              {/* 비디오 썸네일 및 플레이 오버레이 링크 */}
              <a
                href="https://www.youtube.com/@%EC%84%9C%EA%B4%91%EA%B3%84%EA%B8%B0"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-16/9 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60"
              >
                <img
                  src="/seokwang_youtube_thumb.jpg"
                  alt="서광계기 지멘스 LR150 레이더 레벨 트랜스미터 유튜브 영상 미리보기"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* 어두운 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:bg-black/10 transition-colors" />

                {/* 유튜브 재생 버튼 (중앙) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl shadow-red-600/50 group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                    <svg className="w-8 h-8 sm:w-9 sm:h-9 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* 영상 상단 좌측 태그 */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-red-600 text-white flex items-center gap-1 shadow-md">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube HD
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-black/60 backdrop-blur-xs text-white">
                    지멘스 LR150 블루투스 세팅법
                  </span>
                </div>

                {/* 영상 하단 자막 안내 */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="max-w-lg">
                    <p className="text-white font-bold text-sm sm:text-base drop-shadow-md">
                      [서광계기] SIEMENS SITRANS LR150 80GHz 레이더 수위계 모바일 IQ 세팅 가이드
                    </p>
                    <p className="text-slate-300 text-xs hidden sm:block mt-0.5">
                      클릭하시면 서광계기 공식 유튜브 영상으로 연결됩니다.
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded bg-black/70 text-slate-200 text-xs font-mono font-bold">
                    08:45
                  </span>
                </div>
              </a>

              {/* 하단 채널 안내 바 */}
              <div className="mt-5 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 font-bold">
                    SK
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                      서광계기 공식 채널 (@서광계기)
                      <span className="text-blue-400" title="공식 인증">✓</span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      레벨센서, 유량계, 압력계 실무 및 제품 출고 전 테스트 영상 연재
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://www.youtube.com/@%EC%84%9C%EA%B4%91%EA%B3%84%EA%B8%B0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-600/25 transition-all"
                  >
                    <span>유튜브 채널 바로가기</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 회사소개 & 문의하기 (서광계기) */}
        <section id="contact" className="py-16 md:py-24 bg-white/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 왼쪽: 서광계기 소개 및 안내 */}
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Contact & Technical Service
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4 break-keep">
                  공장 자동화 및 정밀 계측 솔루션<br />
                  <span className="text-blue-600">(주)서광계기</span>에 문의하세요
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 break-keep">
                  서광계기는 지멘스(Siemens), 서진인스텍(Seojin Instech), 노켄(Nohken), 간사이(Kansai) 등 
                  세계적인 계측 장비의 공급과 현장 기술 지원을 30여 년간 담당해 온 신뢰의 계측기 전문 기업입니다.
                </p>

                {/* 연락처 카드 그리드 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <p className="text-xs text-slate-500 font-semibold mb-1">대표 유선전화</p>
                    <a href="tel:02-6396-4671" className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      02-6396-4671
                    </a>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <p className="text-xs text-slate-500 font-semibold mb-1">담당자 직통 모바일</p>
                    <a href="tel:010-6314-4671" className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      010-6314-4671
                    </a>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <p className="text-xs text-slate-500 font-semibold mb-1">견적 문의 이메일</p>
                    <a href="mailto:hjy@skgk.co.kr" className="text-sm font-bold text-blue-600 hover:underline">
                      hjy@skgk.co.kr
                    </a>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <p className="text-xs text-slate-500 font-semibold mb-1">팩스 번호</p>
                    <p className="text-sm font-bold text-slate-900">
                      02-6397-4671
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleCopyPhone("02-6396-4671")}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>{isCopied ? "전화번호 복사완료!" : "대표전화 번호 복사"}</span>
                  </button>

                  <a
                    href="https://blog.naver.com/skgk-2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <span>서광계기 네이버 블로그</span>
                  </a>

                  <a
                    href="https://skgk-ins.tistory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition-colors shadow-sm"
                  >
                    <span>서광계기 티스토리</span>
                  </a>
                </div>
              </div>

              {/* 오른쪽: 오시는 길 및 주소 카드 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">본사 및 기술 연구소 주소</h3>
                    <p className="text-xs text-slate-500">부천 옥길 우성테크노파크1차</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 mb-5 bg-slate-100">
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
                  <span className="font-semibold text-slate-800">도로명 주소:</span> 경기도 부천시 소사구 옥길동 794-1 우성테크노파크1차 507호 (우: 14786)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 모달: 제품 상세 카탈로그 스펙 */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              {/* 모달 닫기 버튼 */}
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

              {/* 스펙 표 */}
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

              {/* 특징 리스트 */}
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

              {/* 적용 분야 */}
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

              {/* 하단 모달 버튼 */}
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

        {/* 7. 푸터 */}
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
                <a href="#youtube" className="hover:text-red-400 transition-colors">서광계기 유튜브</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">고객지원 및 문의</a>
              </div>
            </div>
            
            <div className="pt-6 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-slate-500 leading-relaxed">
              <div>
                <p>상호명: (주)서광계기 | 대표자: 황정용 | 사업자등록번호: 532-86-03115</p>
                <p className="mt-0.5">주소: 경기도 부천시 소사구 옥길동 794-1 우성테크노파크1차 507호 (14786)</p>
                <p className="mt-0.5">전화: 02-6396-4671 | 팩스: 02-6397-4671 | 이메일: hjy@skgk.co.kr | 세금계산서: tax@skgk.co.kr</p>
              </div>
              <div className="md:text-right">
                <p>© (주)서광계기. All Rights Reserved.</p>
                <p className="mt-0.5">지멘스(SIEMENS), 서진인스텍(SEOJIN), 노켄(NOHKEN), 간사이(KANSAI) 협력 대리점</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
