import React, { useState } from 'react';
import { Anchor, Plane, Compass, Globe2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const SlideSection5: React.FC = () => {
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  const hubs = [
    {
      id: 'sea-port',
      label: 'নৌ - বন্দর',
      english: 'Maritime Mega Sea Port',
      desc: 'চট্টগ্রাম, মোংলা ও পায়রা গভীর সমুদ্রবন্দর দিয়ে বৈশ্বিক কন্টেইনার শিপিং',
      iconType: 'ship',
      badge: 'Oceanic Container Freight',
    },
    {
      id: 'air-port',
      label: 'বিমান - বন্দর',
      english: 'International Cargo Airport',
      desc: 'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর দিয়ে দ্রুতগতির এয়ার কার্গো সরবরাহ',
      iconType: 'plane',
      badge: 'Supersonic Air Cargo',
    },
  ];

  return (
    <section
      id="slide-5"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 select-none border-b border-slate-800/80"
      style={{
        background: 'radial-gradient(ellipse at 50% 35%, #073142 0%, #04212d 45%, #02121b 80%, #01080f 100%)',
      }}
    >
      {/* Background Thematic Radar & Global Transit Maritime / Air Cargo Corridors */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="oceanGrad" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Oceanic shipping routes */}
          <path d="M 80 500 Q 350 350, 720 480 T 1360 400" stroke="url(#oceanGrad)" strokeWidth="2.5" strokeDasharray="10 8" />
          <path d="M 120 720 Q 500 580, 850 680 T 1400 620" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="6 6" opacity="0.6" />

          {/* Air flight supersonic trajectory arcs */}
          <path d="M 100 280 Q 450 100, 720 220 T 1340 140" stroke="#a7f3d0" strokeWidth="2" strokeDasharray="8 6" opacity="0.5" />

          {/* Global Navigation Radar concentric rings */}
          <circle cx="720" cy="460" r="180" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 8" opacity="0.3" />
          <circle cx="720" cy="460" r="340" stroke="#34d399" strokeWidth="1.2" strokeDasharray="6 10" opacity="0.2" />
          <circle cx="720" cy="460" r="500" stroke="#38bdf8" strokeWidth="1" strokeDasharray="8 12" opacity="0.1" />

          {/* Harbor Gantry Crane Silhouettes in lower background */}
          <g transform="translate(150, 700)" opacity="0.35">
            <line x1="0" y1="120" x2="40" y2="0" stroke="#38bdf8" strokeWidth="2" />
            <line x1="60" y1="120" x2="40" y2="0" stroke="#38bdf8" strokeWidth="2" />
            <line x1="20" y1="0" x2="160" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
            <line x1="80" y1="0" x2="80" y2="60" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="70" y="60" width="20" height="15" fill="#38bdf8" />
          </g>

          <g transform="translate(1150, 680)" opacity="0.35">
            <line x1="0" y1="140" x2="50" y2="0" stroke="#38bdf8" strokeWidth="2" />
            <line x1="70" y1="140" x2="50" y2="0" stroke="#38bdf8" strokeWidth="2" />
            <line x1="30" y1="0" x2="180" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
            <line x1="100" y1="0" x2="100" y2="70" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="90" y="70" width="20" height="15" fill="#38bdf8" />
          </g>
        </svg>
      </div>

      {/* Center Soft Ambient Glow behind Logo */}
      <div
        className="pointer-events-none absolute top-[34%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] bg-[#38bdf8]/15 blur-[120px] rounded-full animate-pulse"
        style={{ animationDuration: '5s' }}
      />

      {/* Main Slide Content */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center my-auto">
        {/* Line 1: Green Shop . Com */}
        <h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-normal leading-[1.1] text-center mb-2.5 sm:mb-4 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
          style={{
            fontFamily: "'Playfair Display', Georgia, Cambria, serif",
          }}
        >
          Green Shop . Com
        </h1>

        {/* Line 2: Logo + Step 2 Project */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 mb-2.5 sm:mb-4 transition-transform duration-500 hover:scale-[1.02]">
          <div className="relative shrink-0 filter drop-shadow-[0_4px_14px_rgba(34,197,94,0.4)]">
            <svg className="w-9 h-9 sm:w-13 sm:h-13 md:w-15 md:h-15" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bagGradS5ProV2" x1="20" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="45%" stopColor="#d1fae5" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                <linearGradient id="leafGradS5ProV2" x1="45" y1="90" x2="95" y2="35" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#065f46" />
                  <stop offset="35%" stopColor="#059669" />
                  <stop offset="70%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#6ee7b7" />
                </linearGradient>
                <linearGradient id="veinGradS5ProV2" x1="45" y1="90" x2="90" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="60%" stopColor="#a7f3d0" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
              <path d="M44 42 V28 C44 19 50 14 60 14 C70 14 76 19 76 28 V42" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32 46 H88 C91 46 93.5 48.5 93 51.5 L86 101 C85.5 104.5 82.5 107 79 107 H41 C37.5 107 34.5 104.5 34 101 L27 51.5 C26.5 48.5 29 46 32 46 Z" stroke="url(#bagGradS5ProV2)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="#0b2418" fillOpacity="0.85" />
              <path d="M38 52 C37 68 31 82 38 98 C42 104 52 105 57 101" stroke="#34d399" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M40 98 C36 80 44 65 62 48 C78 33 93 30 94 30 C94 30 96 46 88 64 C79 81 60 98 40 98 Z" fill="url(#leafGradS5ProV2)" />
              <path d="M42 96 C50 82 63 64 93 32" stroke="url(#veinGradS5ProV2)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <span
            className="text-xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-white tracking-normal leading-none"
            style={{
              fontFamily: "'Playfair Display', Georgia, Cambria, serif",
            }}
          >
            Step 2 Project
          </span>
        </div>

        {/* Line 3: প্রথম লক্ষ্য বন্দর বা গ্লোবাল হাব সংস্করণ */}
        <h2
          className="text-xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-white tracking-wide text-center mb-4 sm:mb-8 leading-[1.2] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] px-2"
          style={{
            fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
          }}
        >
          প্রথম লক্ষ্য বন্দর বা গ্লোবাল হাব সংস্করণ
        </h2>

        {/* Symmetrical Botanical Leaf Flourishes (hidden on small screens to prevent overflow) */}
        <div className="hidden sm:flex w-full items-center justify-between pointer-events-none mb-6 sm:mb-8 px-2 sm:px-6">
          <div className="flex-1 flex justify-end pr-2 sm:pr-6 md:pr-10">
            <svg className="w-32 sm:w-48 md:w-60 lg:w-72 h-8 sm:h-11 md:h-14 text-[#669970]" viewBox="0 0 260 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40 C70 38 150 25 250 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M40 38 C45 30 58 28 65 33 C62 38 52 42 40 38 Z" fill="currentColor" />
              <path d="M75 34 C82 22 98 22 104 29 C99 34 88 38 75 34 Z" fill="currentColor" />
              <path d="M115 28 C124 16 140 17 146 24 C140 29 128 32 115 28 Z" fill="currentColor" />
              <path d="M155 22 C165 9 182 11 188 18 C181 23 169 25 155 22 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex-1 flex justify-start pl-2 sm:pl-6 md:pr-10">
            <svg className="w-32 sm:w-48 md:w-60 lg:w-72 h-8 sm:h-11 md:h-14 text-[#669970] transform scale-x-[-1]" viewBox="0 0 260 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40 C70 38 150 25 250 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M40 38 C45 30 58 28 65 33 C62 38 52 42 40 38 Z" fill="currentColor" />
              <path d="M75 34 C82 22 98 22 104 29 C99 34 88 38 75 34 Z" fill="currentColor" />
              <path d="M115 28 C124 16 140 17 146 24 C140 29 128 32 115 28 Z" fill="currentColor" />
              <path d="M155 22 C165 9 182 11 188 18 C181 23 169 25 155 22 Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* The Two Elevated Hub Boxes: নৌ - বন্দর & বিমান - বন্দর */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-10 px-2 sm:px-4">
          {hubs.map((item) => {
            const isHovered = hoveredBox === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredBox(item.id)}
                onMouseLeave={() => setHoveredBox(null)}
                className={`group relative overflow-hidden flex flex-col items-center justify-between rounded-2xl cursor-pointer transition-all duration-400 py-6 sm:py-8 px-6 ${
                  isHovered
                    ? 'transform -translate-y-2.5 scale-[1.03] shadow-[0_24px_50px_rgba(56,189,248,0.4),0_0_25px_rgba(52,211,153,0.35)] border-sky-400 ring-2 ring-sky-400/50 bg-gradient-to-br from-emerald-900/60 via-slate-900/80 to-[#072430]/90'
                    : 'shadow-[0_10px_28px_rgba(0,0,0,0.65)] bg-gradient-to-br from-emerald-950/50 via-[#0a2733]/60 to-slate-950/70 border-emerald-600/70 backdrop-blur-xl'
                }`}
                style={{
                  borderWidth: '2.5px',
                  borderStyle: 'solid',
                }}
              >
                {/* Top Bevel Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />

                {/* Shimmer Light Sweep on Hover */}
                <div
                  className={`absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-sky-400/20 to-transparent ${
                    isHovered ? 'translate-x-full' : ''
                  }`}
                />

                {/* Top Badge Tag */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-950/80 text-sky-200 border border-sky-500/40 shadow-sm font-sans mb-3">
                  {item.badge}
                </span>

                {/* THEMATIC ICON ILLUSTRATION */}
                <div className="mb-4 transition-transform duration-500 group-hover:scale-110">
                  {item.iconType === 'ship' ? (
                    /* High-tech Maritime Container Cargo Ship */
                    <svg className="w-24 h-18 sm:w-28 sm:h-22 text-emerald-400" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 48 L22 60 H78 L88 48 H12 Z" fill="#064e3b" stroke="#34d399" strokeWidth="2.2" strokeLinejoin="round" />
                      <path d="M5 64 Q 25 58, 50 64 T 95 64" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M15 67 Q 35 62, 60 67 T 85 67" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                      <rect x="64" y="28" width="16" height="20" rx="1.5" fill="#047857" stroke="#a7f3d0" strokeWidth="1.8" />
                      <rect x="68" y="22" width="8" height="6" fill="#10b981" />
                      <line x1="72" y1="16" x2="72" y2="22" stroke="#e2e8f0" strokeWidth="2" />
                      <circle cx="72" cy="15" r="2" fill="#ef4444" className="animate-ping" />
                      {/* Stacked Cargo Shipping Containers (Multi-colored) */}
                      <rect x="22" y="38" width="12" height="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.2" rx="1" />
                      <rect x="36" y="38" width="12" height="10" fill="#f59e0b" stroke="#fde68a" strokeWidth="1.2" rx="1" />
                      <rect x="50" y="38" width="12" height="10" fill="#10b981" stroke="#a7f3d0" strokeWidth="1.2" rx="1" />
                      <rect x="28" y="28" width="12" height="10" fill="#8b5cf6" stroke="#c4b5fd" strokeWidth="1.2" rx="1" />
                      <rect x="42" y="28" width="12" height="10" fill="#10b981" stroke="#a7f3d0" strokeWidth="1.2" rx="1" />
                    </svg>
                  ) : (
                    /* High-tech International Cargo Airplane */
                    <svg className="w-24 h-18 sm:w-28 sm:h-22 text-emerald-400" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="10" y1="50" x2="35" y2="44" stroke="#a7f3d0" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.7" />
                      <line x1="18" y1="56" x2="45" y2="48" stroke="#a7f3d0" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.7" />
                      <g transform="translate(10, 5) rotate(-15 50 35)">
                        <path d="M 25 32 Q 55 28, 85 35 Q 92 38, 86 42 Q 55 45, 25 40 Z" fill="#064e3b" stroke="#34d399" strokeWidth="2.2" strokeLinejoin="round" />
                        <polygon points="80,34 84,36 80,38 77,36" fill="#67e8f9" />
                        <polygon points="46,32 30,12 40,12 60,32" fill="#047857" stroke="#a7f3d0" strokeWidth="1.8" />
                        <polygon points="48,42 34,58 44,58 62,42" fill="#047857" stroke="#a7f3d0" strokeWidth="1.8" />
                        <polygon points="22,33 12,18 20,18 30,33" fill="#10b981" stroke="#34d399" strokeWidth="1.6" />
                        <rect x="45" y="44" width="10" height="5" rx="2" fill="#0284c7" stroke="#67e8f9" strokeWidth="1" />
                      </g>
                    </svg>
                  )}
                </div>

                {/* Primary Bengali Label */}
                <span
                  className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-normal select-none leading-none transition-all duration-200"
                  style={{
                    fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
                    textShadow: isHovered ? '0 0 16px rgba(56,189,248,0.6)' : '0 2px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  {item.label}
                </span>

                {/* English title & Bengali description */}
                <div className="text-center mt-3 z-10 max-w-xs">
                  <div className="text-xs font-semibold text-sky-300 tracking-wider uppercase font-sans">
                    {item.english}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    {item.desc}
                  </div>
                </div>

                {/* Bottom accent glow strip */}
                <div
                  className={`absolute bottom-2 inset-x-12 h-[2.5px] rounded-full transition-all duration-300 ${
                    isHovered ? 'bg-sky-400 opacity-100 scale-100' : 'bg-transparent opacity-0 scale-50'
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
