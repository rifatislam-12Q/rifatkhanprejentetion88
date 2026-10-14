import React, { useState } from 'react';
import { Factory, Globe2, TrendingUp, Users, Sparkles, ArrowUpRight } from 'lucide-react';

export const SlideSection6: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const targets = [
    {
      id: 'production',
      label: 'উৎপাদন',
      english: 'Smart Manufacturing',
      desc: 'কৃষি ও স্থানীয় পণ্যের বৃহৎ উৎপাদন বৃদ্ধি',
      icon: Factory,
    },
    {
      id: 'export',
      label: 'রপ্তানি',
      english: 'Global Export',
      desc: 'বিশ্বজুড়ে মেইড ইন বাংলাদেশ পণ্যের সরবরাহ',
      icon: Globe2,
    },
    {
      id: 'gdp',
      label: 'GDP',
      english: 'Economic Growth',
      desc: 'জাতীয় অর্থনীতি ও মাথাপিছু আয়ের রেকর্ড সমৃদ্ধি',
      icon: TrendingUp,
    },
    {
      id: 'employment',
      label: 'কর্মসংস্থান',
      english: 'Job Creation',
      desc: 'লক্ষ লক্ষ তরুণ-তরুণীর নিশ্চিত কর্মসংস্থান',
      icon: Users,
    },
  ];

  return (
    <section
      id="slide-6"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 select-none border-b border-slate-800/80"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #0f351b 0%, #092613 45%, #041409 80%, #010a05 100%)',
      }}
    >
      {/* Background High-Tech Industrial Automation & Exponential Economic Growth Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gdpSkyGrad" x1="0" y1="900" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Soaring Exponential Growth Curve in the backdrop */}
          <path
            d="M 100 820 C 450 800, 750 650, 1050 350 C 1200 200, 1320 120, 1400 80"
            stroke="url(#gdpSkyGrad)"
            strokeWidth="3"
            strokeDasharray="12 8"
          />

          {/* Modern Smart Eco-Factory Silhouette (Left Lower) */}
          <g transform="translate(80, 680)" opacity="0.4">
            {/* Sawtooth Industrial Factory Roofs */}
            <path d="M 0 160 L 0 60 L 50 10 L 50 60 L 100 10 L 100 60 L 150 10 L 150 160 Z" stroke="#34d399" strokeWidth="2" fill="#062915" />
            <line x1="25" y1="35" x2="25" y2="55" stroke="#34d399" strokeWidth="1.5" />
            <line x1="75" y1="35" x2="75" y2="55" stroke="#34d399" strokeWidth="1.5" />
            <line x1="125" y1="35" x2="125" y2="55" stroke="#34d399" strokeWidth="1.5" />
            {/* Wind turbine / eco green energy mast */}
            <line x1="200" y1="160" x2="200" y2="30" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="200" cy="30" r="4" fill="#f59e0b" />
          </g>

          {/* Human Workforce Network Matrix (Right Lower) */}
          <g transform="translate(1180, 660)" opacity="0.4">
            <circle cx="50" cy="50" r="12" stroke="#34d399" strokeWidth="2" fill="#062915" />
            <circle cx="120" cy="30" r="12" stroke="#34d399" strokeWidth="2" fill="#062915" />
            <circle cx="80" cy="110" r="12" stroke="#34d399" strokeWidth="2" fill="#062915" />
            <line x1="50" y1="50" x2="120" y2="30" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="50" y1="50" x2="80" y2="110" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="120" y1="30" x2="80" y2="110" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>

          {/* Golden Prosperity Beams */}
          <circle cx="1250" cy="220" r="8" fill="#f59e0b" />
          <circle cx="1250" cy="220" r="24" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
        </svg>
      </div>

      {/* Center Soft Ambient Glow */}
      <div
        className="pointer-events-none absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] bg-[#10b981]/18 blur-[120px] rounded-full animate-pulse"
        style={{ animationDuration: '5s' }}
      />

      {/* Main Slide Content */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center my-auto">
        {/* Top Header: Green Shop . Com & দ্বিতীয় লক্ষ্য */}
        <div className="text-center mb-4 sm:mb-8 transition-transform duration-500 hover:scale-[1.01]">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-normal leading-[1.1] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            Green Shop . Com
          </h1>

          <h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-[3.1rem] font-bold text-white tracking-wide mt-1 sm:mt-2 leading-[1.15] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
            style={{
              fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
            }}
          >
            দ্বিতীয় লক্ষ্য
          </h2>
        </div>

        {/* Four Elevated White Cards: উৎপাদন, রপ্তানি, GDP, কর্মসংস্থান */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 px-1 sm:px-2 mb-3 sm:mb-5">
          {targets.map((item) => {
            const isHovered = hoveredCard === item.id;
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden flex flex-col items-center justify-between rounded-xl cursor-pointer transition-all duration-300 py-3 sm:py-5 md:py-6 px-2 sm:px-4 ${
                  isHovered
                    ? 'transform -translate-y-2.5 scale-[1.03] shadow-[0_22px_40px_-5px_rgba(16,185,129,0.4),0_0_20px_rgba(245,158,11,0.3)] border-emerald-400 ring-2 ring-emerald-400/50 bg-gradient-to-b from-white via-[#f7faf8] to-[#edf6f0]'
                    : 'shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5),0_2px_6px_rgba(0,0,0,0.3)] border-[#164731] bg-gradient-to-b from-white via-white to-[#f4f8f5]'
                }`}
                style={{
                  borderWidth: '2.5px',
                  borderStyle: 'solid',
                }}
              >
                {/* Subtle top bevel light reflection */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

                {/* Animated sheen shimmer */}
                <div
                  className={`absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent ${
                    isHovered ? 'translate-x-full' : ''
                  }`}
                />

                {/* Thematic Icon at Top */}
                <div
                  className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center mb-1.5 transition-all duration-300 ${
                    isHovered
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-110'
                      : 'bg-emerald-100/80 text-emerald-800'
                  }`}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* The card label */}
                <span
                  className="relative z-10 text-xl sm:text-2xl md:text-[2.25rem] font-bold tracking-normal select-none leading-none transition-all duration-200"
                  style={{
                    color: isHovered ? '#064e2e' : '#123826',
                    fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
                    textShadow: isHovered ? '0 1px 2px rgba(16,185,129,0.2)' : 'none',
                  }}
                >
                  {item.label}
                </span>

                {/* Contextual subtitle */}
                <div className="text-center mt-1.5 z-10">
                  <div className="text-[9px] sm:text-[11px] font-semibold text-emerald-800/80 uppercase font-sans">
                    {item.english}
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium text-slate-600 mt-0.5 line-clamp-2" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    {item.desc}
                  </div>
                </div>

                {/* Bottom accent glow strip */}
                <div
                  className={`absolute bottom-1 inset-x-4 sm:inset-x-5 h-[2px] rounded-full transition-all duration-300 ${
                    isHovered ? 'bg-emerald-500 opacity-100 scale-100' : 'bg-transparent opacity-0 scale-50'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Word: বাড়ানো */}
        <div className="text-center mb-3 sm:mb-4">
          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.7)]"
            style={{
              fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
            }}
          >
            বাড়ানো
          </h3>
        </div>

        {/* Vector Growth Trend Chart Art matching pic6.jpg */}
        <div className="relative w-full max-w-xl aspect-[16/10] max-h-[260px] sm:max-h-[300px] flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 500 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="chartLineGradPro" x1="50" y1="260" x2="450" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>

              <linearGradient id="chartAreaGradPro" x1="250" y1="60" x2="250" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#15803d" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#15803d" stopOpacity="0.0" />
              </linearGradient>

              <radialGradient id="sunGlowPro" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#22c55e" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Sunburst Glow behind the peak arrow */}
            <circle cx="430" cy="80" r="70" fill="url(#sunGlowPro)" />

            {/* Subtle Horizon Landscape */}
            <path d="M 30 260 Q 150 240, 250 255 T 470 245 L 470 280 L 30 280 Z" fill="#082917" opacity="0.6" />
            <path d="M 50 265 Q 200 250, 320 260 T 480 255 L 480 280 L 50 280 Z" fill="#0a321d" opacity="0.8" />

            {/* Tiny silhouettes of trees and wind turbines along horizon */}
            <g opacity="0.4">
              <circle cx="90" cy="245" r="8" fill="#14532d" />
              <circle cx="102" cy="242" r="11" fill="#166534" />
              <circle cx="115" cy="246" r="9" fill="#14532d" />
              <line x1="380" y1="248" x2="380" y2="210" stroke="#16a34a" strokeWidth="1.5" />
              <circle cx="380" cy="210" r="2.5" fill="#22c55e" />
            </g>

            {/* Base coordinate horizontal line */}
            <line x1="40" y1="268" x2="460" y2="268" stroke="#1f5433" strokeWidth="2.5" strokeLinecap="round" />

            {/* Dynamic Upward Area Fill under the Growth Line */}
            <path
              d="M 60 255 C 140 248, 200 230, 260 185 C 320 140, 370 100, 425 80 L 425 268 L 60 268 Z"
              fill="url(#chartAreaGradPro)"
            />

            {/* Dynamic Rising Growth Trend Line */}
            <path
              d="M 60 255 C 140 248, 200 230, 260 185 C 320 140, 370 100, 425 80"
              stroke="url(#chartLineGradPro)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Glowing Arrowhead at the peak */}
            <path
              d="M 405 82 L 432 75 L 422 102 Z"
              fill="#ffffff"
              stroke="#86efac"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Milestone Glow Points along the curve */}
            <circle cx="60" cy="255" r="4" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
            <circle cx="170" cy="240" r="4.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
            <circle cx="270" cy="180" r="5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
            <circle cx="360" cy="120" r="5.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
            <circle cx="425" cy="80" r="6" fill="#ffffff" stroke="#fef08a" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    </section>
  );
};
