import React, { useState } from 'react';
import { ShieldCheck, Video, UserCheck, CheckCircle2, Award, Sparkles, Radio } from 'lucide-react';

export const SlideSection4: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      num: '১.',
      text: 'আস্থা',
      subtitle: '১০০% বিশ্বস্ততা ও মানসম্মত সার্ভিসের নিশ্চয়তা',
      icon: ShieldCheck,
      badge: 'Uncompromised Trust',
    },
    {
      num: '২.',
      text: 'লাইভ প্রুফ মার্কেটিং',
      subtitle: 'সরাসরি পণ্য প্রদর্শন, স্বচ্ছ লাইভ সেশন ও গ্রাহক যাচাই',
      icon: Radio,
      badge: 'Live Transparency',
      isLive: true,
    },
    {
      num: '৩.',
      text: 'অথেন্টিকেশন (সেলার, বায়ার)',
      subtitle: 'উভয় পক্ষের শতভাগ ভেরিফায়েড ও নিরাপদ বাণিজ্যিক পরিবেশ',
      icon: UserCheck,
      badge: 'Dual Authentication',
    },
  ];

  return (
    <section
      id="slide-4"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 select-none border-b border-slate-800/80"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #073232 0%, #042223 45%, #021516 80%, #010a0b 100%)',
      }}
    >
      {/* Background Holographic Trust Shield & Live Verification Optics */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Central Security Shield Silhouette */}
          <path
            d="M 720 180 C 860 180, 960 260, 960 440 C 960 620, 840 730, 720 780 C 600 730, 480 620, 480 440 C 480 260, 580 180, 720 180 Z"
            stroke="url(#shieldGrad)"
            strokeWidth="2"
            strokeDasharray="8 6"
          />

          {/* Concentric Verification Radar Rings */}
          <circle cx="720" cy="460" r="160" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
          <circle cx="720" cy="460" r="280" stroke="#10b981" strokeWidth="1.2" strokeDasharray="6 10" opacity="0.3" />

          {/* Live Proof Broadcast Waves (Right side) */}
          <g opacity="0.4">
            <path d="M 1100 350 A 120 120 0 0 1 1100 550" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
            <path d="M 1140 310 A 170 170 0 0 1 1140 590" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
            <path d="M 1180 270 A 220 220 0 0 1 1180 630" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 6" />
          </g>

          {/* Digital Biometric Rings (Left side) */}
          <g opacity="0.35">
            <circle cx="300" cy="450" r="50" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="300" cy="450" r="90" stroke="#10b981" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="300" cy="450" r="130" stroke="#10b981" strokeWidth="1.2" strokeDasharray="8 8" />
          </g>
        </svg>
      </div>

      {/* Background Dark Botanical Leaf Silhouettes / Texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-35">
        <svg
          className="absolute -top-16 -left-16 w-96 h-96 text-[#0d2a1b] filter blur-[1px] transform -rotate-12"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M40,160 C20,100 60,30 160,20 C140,80 120,140 40,160 Z" />
          <path d="M60,140 C80,100 110,60 150,30" stroke="#05140c" strokeWidth="2" fill="none" />
        </svg>

        <svg
          className="absolute -top-12 -right-16 w-[32rem] h-[32rem] text-[#0d2e1e] filter blur-[2px] transform rotate-45"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M20,180 C50,110 110,50 190,30 C150,100 110,150 20,180 Z" />
          <path d="M50,150 C90,110 130,80 180,40" stroke="#061a10" strokeWidth="2" fill="none" />
        </svg>

        <svg
          className="absolute -bottom-20 right-1/3 w-80 h-80 text-[#0a2316] filter blur-[3px] transform rotate-20"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M30,170 C40,90 90,40 180,30 C140,110 100,150 30,170 Z" />
        </svg>
      </div>

      {/* Floating Animated Background Shopping Carts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[48%] right-[20%] text-[#528a63]/25 animate-pulse" style={{ animationDuration: '7s' }}>
          <svg className="w-10 h-10 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
      </div>

      {/* Center Soft Ambient Glow */}
      <div
        className="pointer-events-none absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[340px] bg-[#06b6d4]/15 blur-[110px] rounded-full animate-pulse"
        style={{ animationDuration: '5s' }}
      />

      {/* Main Slide Content */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center my-auto">
        {/* Brand Header: Logo + Green Shop . Com */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-2 transition-transform duration-500 hover:scale-[1.02]">
          <div className="relative shrink-0 filter drop-shadow-[0_4px_14px_rgba(34,197,94,0.4)]">
            <svg
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="bagGradS4Pro" x1="20" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="45%" stopColor="#d1fae5" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>

                <linearGradient id="leafGradS4Pro" x1="45" y1="90" x2="95" y2="35" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#065f46" />
                  <stop offset="35%" stopColor="#059669" />
                  <stop offset="70%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#6ee7b7" />
                </linearGradient>

                <linearGradient id="veinGradS4Pro" x1="45" y1="90" x2="90" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="60%" stopColor="#a7f3d0" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>

              <path
                d="M44 42 V28 C44 19 50 14 60 14 C70 14 76 19 76 28 V42"
                stroke="#ffffff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M32 46 H88 C91 46 93.5 48.5 93 51.5 L86 101 C85.5 104.5 82.5 107 79 107 H41 C37.5 107 34.5 104.5 34 101 L27 51.5 C26.5 48.5 29 46 32 46 Z"
                stroke="url(#bagGradS4Pro)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#0b2418"
                fillOpacity="0.85"
              />

              <path
                d="M38 52 C37 68 31 82 38 98 C42 104 52 105 57 101"
                stroke="#34d399"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              <path
                d="M40 98 C36 80 44 65 62 48 C78 33 93 30 94 30 C94 30 96 46 88 64 C79 81 60 98 40 98 Z"
                fill="url(#leafGradS4Pro)"
              />

              <path
                d="M42 96 C50 82 63 64 93 32"
                stroke="url(#veinGradS4Pro)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-white tracking-normal leading-none"
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            Green Shop . Com
          </span>
        </div>

        {/* Subtitle: আমাদের প্ল্যাটফর্মে কেন মানুষ আসবে? */}
        <h2
          className="text-xl sm:text-3xl md:text-4xl lg:text-[3.1rem] font-bold text-white tracking-wide text-center mb-6 sm:mb-12 leading-[1.2] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
          style={{
            fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
          }}
        >
          আমাদের প্ল্যাটফর্মে কেন মানুষ আসবে?
        </h2>

        {/* The 3 Elevated Reasons Cards */}
        <div className="relative w-full max-w-3xl flex flex-col items-stretch gap-3 sm:gap-5 px-2 sm:px-4">
          {reasons.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 px-4 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-400 ${
                  isHovered
                    ? 'transform -translate-y-1.5 scale-[1.02] shadow-[0_20px_40px_rgba(6,182,212,0.35),0_0_25px_rgba(16,185,129,0.25)] border-cyan-400 ring-2 ring-cyan-400/50 bg-gradient-to-r from-emerald-950/70 via-[#072c2c]/80 to-slate-950/90'
                    : 'shadow-[0_10px_25px_rgba(0,0,0,0.6)] bg-gradient-to-r from-emerald-950/45 via-[#062424]/55 to-slate-950/70 border-emerald-600/70 backdrop-blur-xl'
                }`}
                style={{
                  borderWidth: '2.5px',
                  borderStyle: 'solid',
                }}
              >
                {/* Top edge bevel reflection */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

                {/* Shimmer light sweep */}
                <div
                  className={`absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent ${
                    isHovered ? 'translate-x-full' : ''
                  }`}
                />

                {/* Left side: Number + Icon + Title + Subtitle */}
                <div className="flex items-center gap-3 sm:gap-4 z-10">
                  {/* Number outside the text */}
                  <span
                    className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-cyan-300 select-none shrink-0 leading-none filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
                    style={{
                      fontFamily: "'Hind Siliguri', 'Outfit', system-ui, sans-serif",
                    }}
                  >
                    {item.num}
                  </span>

                  {/* Icon Emblem */}
                  <div
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                      isHovered
                        ? 'bg-gradient-to-br from-cyan-500 to-emerald-600 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-emerald-900/60 text-cyan-300 border border-emerald-500/40'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  {/* Text details */}
                  <div className="flex flex-col">
                    <span
                      className="text-xl sm:text-2xl md:text-[2.1rem] font-bold text-white select-none leading-tight tracking-wide"
                      style={{
                        fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
                        textShadow: isHovered ? '0 0 14px rgba(6,182,212,0.5)' : '0 2px 4px rgba(0,0,0,0.6)',
                      }}
                    >
                      {item.text}
                    </span>
                    <span className="text-[11px] sm:text-sm font-medium text-slate-300/90 mt-0.5 sm:mt-1" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Right side: Badge Tag */}
                <div className="self-end sm:self-center shrink-0 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-200 border border-cyan-500/40 shadow-sm font-sans">
                    {item.isLive && (
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    )}
                    {item.badge}
                  </span>
                </div>

                {/* Bottom accent glow strip */}
                <div
                  className={`absolute bottom-0 inset-x-8 h-[2px] rounded-full transition-all duration-300 ${
                    isHovered ? 'bg-cyan-400 opacity-100 scale-100' : 'bg-transparent opacity-0 scale-50'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
