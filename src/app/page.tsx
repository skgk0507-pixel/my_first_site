"use client";

import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50/40 text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-700">
      {/* 연한 배경 이미지 */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/bg.png')" }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. 상단 네비게이션 헤더 */}
      <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* 로고 */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                NEXA<span className="text-blue-600">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                Technologies
              </span>
            </div>
          </a>

          {/* PC 네비게이션 메뉴 */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors py-1">
              회사소개
            </a>
            <a href="#products" className="hover:text-blue-600 transition-colors py-1">
              제품
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors py-1">
              문의하기
            </a>
          </nav>

          {/* 헤더 우측 액션 버튼 */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
            >
              로그인
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20 hover:shadow transition-all"
            >
              상담 신청
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
          <div className="md:hidden border-b border-slate-100 bg-white/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-3">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              회사소개
            </a>
            <a
              href="#products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              제품
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              문의하기
            </a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-sm"
              >
                상담 신청하기
              </a>
            </div>
          </div>
        )}
        </header>

      {/* 2. 메인 배너 영역 (히어로 섹션) */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* 부드러운 파란색 계열 배경 장식 그라데이션 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-20 right-[-100px] w-72 h-72 bg-blue-200/30 rounded-full blur-2xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 상단 뱃지 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 border border-blue-200/60 text-blue-700 mb-8 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            2026 차세대 엔터프라이즈 솔루션
          </div>

          {/* 메인 큰 제목 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.3] mb-6 max-w-4xl mx-auto font-cute break-keep">
            <span className="text-slate-600">안녕하세요</span>
            <br />
            <span className="text-slate-900 text-[1.08em] font-bold inline-block mt-1">진미현</span>
            <span className="text-slate-600">입니다</span>
          </h1>

          {/* 프로필 이미지 */}
          <div className="flex justify-center mb-8">
            <img 
              src="/profile.png" 
              alt="프로필 사진" 
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white shrink-0 max-w-full"
            />
          </div>

          {/* 설명 문구 */}
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 font-normal break-keep px-2">
            복잡한 비즈니스 프로세스를 간소화하고, 클라우드와 AI 기술로
            더 빠르고 안전한 디지털 전환을 실현합니다.
          </p>

          {/* 버튼 2개: "제품 보기", "문의하기" */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>제품 보기</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 font-semibold text-base border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>문의하기</span>
            </a>
          </div>

          {/* 신뢰 지표 바 */}
          <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">99.9%</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">무중단 가동률</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">500+</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">기업 고객사</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">10배</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">업무 처리 속도</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">기술 지원 서비스</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 카드 3개 배치 영역 (제품/특징 섹션) */}
      <section id="products" className="py-16 md:py-24 bg-white/40 backdrop-blur-[2px] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">
              Our Key Solutions
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight break-keep">
              기업 성장을 가속하는 핵심 서비스
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 break-keep">
              안정성과 혁신성을 겸비한 3가지 맞춤형 솔루션으로 비즈니스를 지원합니다.
            </p>
          </div>

          {/* 카드 3개 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 카드 1 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Cloud Infrastructure
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3 group-hover:text-blue-600 transition-colors">
                  초고속 클라우드 인프라
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  트래픽 변동에도 중단 없는 안정성과 글로벌 전역에 최적화된 저지연 전송망을 제공합니다.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                <span>상세 정보 보기</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  AI & Automation
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3 group-hover:text-blue-600 transition-colors">
                  스마트 업무 자동화
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  반복적인 일상 업무를 AI 에이전트가 자동 처리하여 작업 속도를 높이고 인적 실수를 방지합니다.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                <span>상세 정보 보기</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* 카드 3 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Enterprise Security
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3 group-hover:text-blue-600 transition-colors">
                  엔터프라이즈 통합 보안
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  국제 규격을 만족하는 엔드투엔드 데이터 암호화 및 실시간 위협 감지로 기업 자산을 보호합니다.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                <span>상세 정보 보기</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 회사소개 & 문의하기 CTA 배너 */}
      <section id="contact" className="py-16 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-8 sm:p-12 lg:p-16 text-white shadow-xl shadow-blue-600/15">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 break-keep">
                새로운 도약을 준비 중이신가요?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 break-keep">
                전문 컨설턴트가 귀사의 비즈니스 환경에 가장 최적화된 맞춤형 솔루션을 제안해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:contact@nexatech.com"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors shadow-md text-sm"
                >
                  무료 컨설팅 신청하기
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-medium border border-white/20 transition-colors text-sm"
                >
                  회사 소개서 다운로드
                </a>
              </div>
            </div>
            {/* 장식 배경 */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 5. 푸터 */}
      <footer id="about" className="mt-auto bg-white/60 backdrop-blur-sm border-t border-slate-200/80 py-12 text-slate-500 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                N
              </div>
              <span className="font-bold text-slate-800 text-base">NEXA Technologies</span>
            </div>
            <div className="flex flex-wrap gap-6 text-slate-600">
              <a href="#about" className="hover:text-blue-600 transition-colors">회사소개</a>
              <a href="#products" className="hover:text-blue-600 transition-colors">제품</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">문의하기</a>
              <a href="#" className="hover:text-blue-600 transition-colors">개인정보처리방침</a>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3 text-slate-400 text-xs">
            <p>© 2026 NEXA Technologies, Inc. All rights reserved.</p>
            <p>서울특별시 강남구 테헤란로 123 | 문의: contact@nexatech.com | 대표전화: 02-1234-5678</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
