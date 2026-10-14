import React, { useState } from 'react';
import { Building2, Box, ShoppingCart, Globe2, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const businessModels = [
    {
      id: 'b2b',
      label: 'B2B',
      subtitle: 'Business to Business',
      desc: 'পাইকারি ও বাল্ক সাপ্লাই',
      icon: Building2,
    },
    {
      id: 'd2c',
      label: 'D2C',
      subtitle: 'Direct to Consumer',
      desc: 'সরাসরি প্রস্তুতকারক থেকে গ্রাহক',
      icon: Box,
    },
    {
      id: 'b2c',
      label: 'B2C',
      subtitle: 'Business to Consumer',
      desc: 'অনলাইন রিটেইল মার্কেটপ্লেস',
      icon: ShoppingCart,
    },
    {
      id: 'export',
      label: 'Export',
      subtitle: 'Global Trade',
      desc: 'আন্তর্জাতিক রপ্তানি বাণিজ্য',
      icon: Globe2,
    },
  ];

  return (
    <section
      id="slide-1"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 select-none"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #0f3523 0%, #092417 40%, #04140c 75%, #020a06 100%)',
      }}
    >
      {/* Dynamic Background Architectural Commerce Grid & Supply-Chain Corridors */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tradeLineGrad" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
            </linearGradient>
            <radialGradient id="meshCenterGlow" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central aura circle */}
          <circle cx="720" cy="380" r="380" fill="url(#meshCenterGlow)" />

          {/* Perspective grid lines */}
          <line x1="100" y1="900" x2="520" y2="400" stroke="#10b981" strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />
          <line x1="350" y1="900" x2="620" y2="400" stroke="#10b981" strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />
          <line x1="1340" y1="900" x2="920" y2="400" stroke="#10b981" strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />
          <line x1="1090" y1="900" x2="820" y2="400" stroke="#10b981" strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />

          {/* Global supply chain curved transit arcs */}
          <path d="M 120 220 Q 420 80, 720 220 T 1320 180" stroke="url(#tradeLineGrad)" strokeWidth="2" strokeDasharray="8 6" />
          <path d="M 80 480 Q 450 320, 720 420 T 1360 400" stroke="url(#tradeLineGrad)" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.6" />

          {/* Network trading nodes */}
          <g>
            <circle cx="280" cy="160" r="5" fill="#34d399" />
            <circle cx="280" cy="160" r="14" stroke="#34d399" strokeWidth="1" opacity="0.5" className="animate-ping" />
            <circle cx="1160" cy="200" r="5" fill="#34d399" />
            <circle cx="1160" cy="200" r="14" stroke="#34d399" strokeWidth="1" opacity="0.5" className="animate-ping" />
            <circle cx="480" cy="460" r="4" fill="#6ee7b7" />
            <circle cx="960" cy="430" r="4" fill="#6ee7b7" />
          </g>
        </svg>
      </div>

      {/* Background Dark Botanical Leaf Silhouettes / Texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-35">
        {/* Top left leaf silhouette */}
        <svg
          className="absolute -top-16 -left-16 w-96 h-96 text-[#0d2a1b] filter blur-[1px] transform -rotate-12"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M40,160 C20,100 60,30 160,20 C140,80 120,140 40,160 Z" />
          <path d="M60,140 C80,100 110,60 150,30" stroke="#05140c" strokeWidth="2" fill="none" />
          <path d="M85,115 C100,105 120,100 135,102" stroke="#05140c" strokeWidth="1.5" fill="none" />
          <path d="M70,130 C80,125 95,122 105,124" stroke="#05140c" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Top right foliage */}
        <svg
          className="absolute -top-12 -right-16 w-[32rem] h-[32rem] text-[#0d2e1e] filter blur-[2px] transform rotate-45"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M20,180 C50,110 110,50 190,30 C150,100 110,150 20,180 Z" />
          <path d="M50,150 C90,110 130,80 180,40" stroke="#061a10" strokeWidth="2" fill="none" />
        </svg>

        {/* Bottom leaf shadow */}
        <svg
          className="absolute -bottom-20 left-1/4 w-80 h-80 text-[#0a2316] filter blur-[3px] transform -rotate-45"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M30,170 C40,90 90,40 180,30 C140,110 100,150 30,170 Z" />
        </svg>
      </div>

      {/* Floating Animated Background Shopping Carts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cart 1: Top Right */}
        <div
          className="absolute top-[22%] right-[22%] text-[#528a63]/30 animate-pulse"
          style={{ animationDuration: '6s' }}
        >
          <svg className="w-10 h-10 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>

        {/* Cart 2: Mid-Right lower */}
        <div
          className="absolute top-[52%] right-[16%] text-[#528a63]/25 animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '2s' }}
        >
          <svg className="w-9 h-9 transform -rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>

        {/* Cart 3: Subtle upper left */}
        <div
          className="absolute top-[18%] left-[18%] text-[#528a63]/20 animate-pulse"
          style={{ animationDuration: '7s', animationDelay: '3s' }}
        >
          <svg className="w-8 h-8 transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
      </div>

      {/* Center Soft Ambient Glow behind Logo */}
      <div
        className="pointer-events-none absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] bg-[#10b981]/18 blur-[110px] rounded-full animate-pulse"
        style={{ animationDuration: '5s' }}
      />

      {/* Main Slide Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center my-auto">
        {/* Brand Lockup: Logo + Text + Botanical Vines */}
        <div className="relative flex flex-col items-center justify-center mb-8 sm:mb-14 w-full">
          {/* Top row: Bag Leaf Logo + Green Shop . Com & বিজনেস মডেল */}
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-6 md:gap-7 transition-transform duration-700 hover:scale-[1.02]">
            {/* Shopping Bag with Glowing Green Leaf Logo */}
            <div className="relative shrink-0 filter drop-shadow-[0_4px_20px_rgba(34,197,94,0.4)]">
              <svg
                className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bagGradientHero" x1="20" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="45%" stopColor="#d1fae5" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>

                  <linearGradient id="leafGradHero1" x1="45" y1="90" x2="95" y2="35" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#065f46" />
                    <stop offset="35%" stopColor="#059669" />
                    <stop offset="70%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#6ee7b7" />
                  </linearGradient>

                  <linearGradient id="leafGradHero2" x1="40" y1="85" x2="80" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#047857" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#a7f3d0" />
                  </linearGradient>

                  <linearGradient id="veinGradHero" x1="45" y1="90" x2="90" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="60%" stopColor="#a7f3d0" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>

                {/* Bag Handle */}
                <path
                  d="M44 42 V28 C44 19 50 14 60 14 C70 14 76 19 76 28 V42"
                  stroke="#ffffff"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Shopping Bag Outer Frame */}
                <path
                  d="M32 46 H88 C91 46 93.5 48.5 93 51.5 L86 101 C85.5 104.5 82.5 107 79 107 H41 C37.5 107 34.5 104.5 34 101 L27 51.5 C26.5 48.5 29 46 32 46 Z"
                  stroke="url(#bagGradientHero)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#0b2418"
                  fillOpacity="0.85"
                />

                {/* Inner Bag Accent Contour */}
                <path
                  d="M38 52 C37 68 31 82 38 98 C42 104 52 105 57 101"
                  stroke="#34d399"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Radiant Botanical Leaf (Layer 1) */}
                <path
                  d="M40 98 C36 80 44 65 62 48 C78 33 93 30 94 30 C94 30 96 46 88 64 C79 81 60 98 40 98 Z"
                  fill="url(#leafGradHero1)"
                />

                {/* Radiant Botanical Leaf (Layer 2) */}
                <path
                  d="M44 95 C41 81 48 68 64 53 C76 42 88 36 93 32 C91 44 83 60 76 74 C67 87 54 94 44 95 Z"
                  fill="url(#leafGradHero2)"
                  opacity="0.85"
                />

                {/* Main Central Vein of the Leaf */}
                <path
                  d="M42 96 C50 82 63 64 93 32"
                  stroke="url(#veinGradHero)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Side Leaf Veins */}
                <path
                  d="M56 75 C62 73 70 74 74 77"
                  stroke="#a7f3d0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                <path
                  d="M66 62 C73 59 80 61 84 64"
                  stroke="#a7f3d0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                <path
                  d="M74 50 C80 47 85 49 89 51"
                  stroke="#d1fae5"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </div>

            {/* Typography Lockup: Green Shop . Com & বিজনেস মডেল */}
            <div className="flex flex-col text-left justify-center">
              {/* Brand Name: Green Shop . Com */}
              <div
                className="text-xl sm:text-2xl md:text-4xl lg:text-[3.25rem] font-bold tracking-normal leading-[1.05]"
                style={{
                  color: '#8ac593',
                  fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                Green Shop . Com
              </div>

              {/* Subtitle: বিজনেস মডেল */}
              <div
                className="text-lg sm:text-xl md:text-3xl lg:text-[2.85rem] font-bold text-white tracking-wide mt-0.5 sm:mt-1 leading-[1.1]"
                style={{
                  fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
                }}
              >
                বিজনেস মডেল
              </div>
            </div>
          </div>

          {/* Symmetrical Botanical Leaves / Vines Flourishes (hidden on small mobile to avoid overflow) */}
          <div className="hidden sm:flex w-full items-center justify-between pointer-events-none mt-2 sm:mt-3 px-2 sm:px-6">
            {/* Left Vine Flourish */}
            <div className="flex-1 flex justify-end pr-2 sm:pr-6 md:pr-10">
              <svg
                className="w-32 sm:w-48 md:w-60 lg:w-72 h-8 sm:h-11 md:h-14 text-[#669970]"
                viewBox="0 0 260 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 40 C70 38 150 25 250 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M40 38 C45 30 58 28 65 33 C62 38 52 42 40 38 Z" fill="currentColor" />
                <path d="M75 34 C82 22 98 22 104 29 C99 34 88 38 75 34 Z" fill="currentColor" />
                <path d="M115 28 C124 16 140 17 146 24 C140 29 128 32 115 28 Z" fill="currentColor" />
                <path d="M155 22 C165 9 182 11 188 18 C181 23 169 25 155 22 Z" fill="currentColor" />
                <path d="M195 16 C206 4 223 6 228 13 C221 17 209 19 195 16 Z" fill="currentColor" />
              </svg>
            </div>

            {/* Right Vine Flourish */}
            <div className="flex-1 flex justify-start pl-2 sm:pl-6 md:pr-10">
              <svg
                className="w-32 sm:w-48 md:w-60 lg:w-72 h-8 sm:h-11 md:h-14 text-[#669970] transform scale-x-[-1]"
                viewBox="0 0 260 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 40 C70 38 150 25 250 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M40 38 C45 30 58 28 65 33 C62 38 52 42 40 38 Z" fill="currentColor" />
                <path d="M75 34 C82 22 98 22 104 29 C99 34 88 38 75 34 Z" fill="currentColor" />
                <path d="M115 28 C124 16 140 17 146 24 C140 29 128 32 115 28 Z" fill="currentColor" />
                <path d="M155 22 C165 9 182 11 188 18 C181 23 169 25 155 22 Z" fill="currentColor" />
                <path d="M195 16 C206 4 223 6 228 13 C221 17 209 19 195 16 Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* The 4 Elevated Business Model Cards: B2B, D2C, B2C, Export */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-5 md:gap-7 px-1 sm:px-2">
          {businessModels.map((item) => {
            const isHovered = activeCard === item.id;
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative overflow-hidden flex flex-col items-center justify-between rounded-xl cursor-pointer transition-all duration-400 py-4 sm:py-6 md:py-8 px-2.5 sm:px-4 ${
                  isHovered
                    ? 'transform -translate-y-2.5 scale-[1.03] shadow-[0_22px_40px_-5px_rgba(16,185,129,0.4),0_0_25px_rgba(52,211,153,0.3)] border-emerald-400 ring-2 ring-emerald-400/50 bg-gradient-to-b from-white via-[#f7faf8] to-[#edf6f0]'
                    : 'shadow-[0_10px_24px_-4px_rgba(0,0,0,0.6),0_2px_6px_rgba(0,0,0,0.4)] border-[#164731] bg-gradient-to-b from-white via-white to-[#f4f8f5]'
                }`}
                style={{
                  borderWidth: '2.5px',
                  borderStyle: 'solid',
                }}
              >
                {/* Subtle top bevel light reflection */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                {/* Animated sheen shimmer across card on hover */}
                <div
                  className={`absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent ${
                    isHovered ? 'translate-x-full' : ''
                  }`}
                />

                {/* Card Top Thematic Icon */}
                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-1.5 sm:mb-2.5 transition-all duration-300 ${
                    isHovered
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-110'
                      : 'bg-emerald-100/80 text-emerald-800'
                  }`}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>

                {/* The card primary label: B2B, D2C, B2C, Export */}
                <span
                  className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-bold tracking-tight select-none leading-none transition-all duration-200"
                  style={{
                    color: isHovered ? '#064e2e' : '#123826',
                    fontFamily: "'Playfair Display', Georgia, Cambria, serif",
                    textShadow: isHovered ? '0 1px 2px rgba(16,185,129,0.2)' : 'none',
                  }}
                >
                  {item.label}
                </span>

                {/* Contextual Description */}
                <div className="text-center mt-1.5 sm:mt-2.5 z-10">
                  <div className="text-[9px] sm:text-[11px] md:text-xs font-semibold text-emerald-800/80 tracking-wider uppercase font-sans">
                    {item.subtitle}
                  </div>
                  <div className="text-[10px] sm:text-[12px] md:text-[13px] font-medium text-slate-600 mt-0.5 line-clamp-2" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    {item.desc}
                  </div>
                </div>

                {/* Bottom accent glow strip */}
                <div
                  className={`absolute bottom-1 inset-x-4 sm:inset-x-6 h-[2.5px] rounded-full transition-all duration-300 ${
                    isHovered ? 'bg-emerald-500 opacity-100 scale-100' : 'bg-transparent opacity-0 scale-50'
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
