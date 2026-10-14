import React, { useState } from 'react';
import { Globe2, Network, DollarSign, Award, Sparkles, ArrowUpRight } from 'lucide-react';

export const SlideSection7: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const pillars = [
    {
      id: 'supply-chain',
      title: 'গ্লোবাল সাপ্লাই চেইন নিয়ন্ত্রণ',
      english: 'Supply Chain Command',
      desc: 'উৎপাদন থেকে সরাসরি আন্তর্জাতিক বাজারে নিরবচ্ছিন্ন পণ্য প্রবাহ',
      icon: Network,
    },
    {
      id: 'silk-road',
      title: 'ডিজিটাল সিল্ক রোড সম্প্রসারণ',
      english: 'Digital Silk Road',
      desc: 'বাংলাদেশকে বিশ্ববাণিজ্যের কেন্দ্রীয় ডিজিটাল হাব ও ট্রানজিট পয়েন্টে রূপান্তর',
      icon: Globe2,
    },
    {
      id: 'currency',
      title: 'আন্তর্জাতিক মুদ্রা ও রপ্তানি নেতৃত্ব',
      english: 'Forex & Trade Supremacy',
      desc: 'ইউরোপ, আমেরিকা, এশিয়া ও মধ্যপ্রাচ্যে বিলিয়ন ডলারের বাণিজ্যিক সাম্রাজ্য',
      icon: DollarSign,
    },
  ];

  return (
    <section
      id="slide-7"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 select-none border-b border-slate-800/80"
      style={{
        background: 'radial-gradient(ellipse at 50% 35%, #0e3722 0%, #082617 40%, #03130b 75%, #010603 100%)',
      }}
    >
      {/* Background Cosmic Celestial Auroras & Global Satellite Orbital Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="orbitalLaser" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
            <radialGradient id="celestialCorona" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#059669" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Celestial Corona */}
          <circle cx="720" cy="380" r="420" fill="url(#celestialCorona)" />

          {/* Planetary Orbital Rings encompassing the viewport */}
          <ellipse cx="720" cy="380" rx="600" ry="220" stroke="url(#orbitalLaser)" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.4" transform="rotate(-15 720 380)" />
          <ellipse cx="720" cy="380" rx="480" ry="170" stroke="#34d399" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.3" transform="rotate(18 720 380)" />

          {/* Global Satellites & Intercontinental Laser Trade Vectors */}
          <g>
            <circle cx="240" cy="220" r="4" fill="#fbbf24" />
            <circle cx="240" cy="220" r="14" stroke="#fbbf24" strokeWidth="1" opacity="0.5" className="animate-ping" />
            <circle cx="1200" cy="240" r="4" fill="#34d399" />
            <circle cx="1200" cy="240" r="14" stroke="#34d399" strokeWidth="1" opacity="0.5" className="animate-ping" />
            <circle cx="340" cy="580" r="3.5" fill="#38bdf8" />
            <circle cx="1100" cy="600" r="3.5" fill="#38bdf8" />
          </g>

          {/* International Currency Symbols floating faintly in orbit */}
          <g opacity="0.25" fill="#34d399" fontSize="24" fontFamily="'Outfit', sans-serif" fontWeight="bold">
            <text x="180" y="380">$</text>
            <text x="1240" y="360">€</text>
            <text x="280" y="520">৳</text>
            <text x="1160" y="520">¥</text>
            <text x="710" y="140">£</text>
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
          className="absolute -bottom-20 left-1/3 w-80 h-80 text-[#0a2316] filter blur-[3px] transform -rotate-30"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M30,170 C40,90 90,40 180,30 C140,110 100,150 30,170 Z" />
        </svg>
      </div>

      {/* Center Soft Ambient Glow */}
      <div
        className="pointer-events-none absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[460px] bg-[#10b981]/20 blur-[130px] rounded-full animate-pulse"
        style={{ animationDuration: '5s' }}
      />

      {/* Main Slide Content */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center my-auto">
        {/* Top Typography Lockup: Green Shop . Com & কীভাবে বিশ্ববাজারে রাজত্ব করবে */}
        <div className="text-center mb-4 sm:mb-8 transition-transform duration-500 hover:scale-[1.01]">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-normal leading-[1.1] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
            style={{
              color: '#8ac593',
              fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            Green Shop . Com
          </h1>

          <h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-[3.1rem] font-bold text-white tracking-wide mt-1 sm:mt-2 leading-[1.15] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] px-2"
            style={{
              fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
            }}
          >
            কীভাবে বিশ্ববাজারে রাজত্ব করবে
          </h2>
        </div>

        {/* Central Composite Illustration: Emblem + Majestic World Globe with Bangladesh Map Controlling Global Trade */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full max-w-3xl flex items-center justify-center cursor-pointer transition-transform duration-700 hover:scale-[1.02] mb-6 sm:mb-10"
        >
          {/* Symmetrical Botanical Vine Flourishes (hidden on small mobile to avoid overflow) */}
          <div className="hidden sm:flex pointer-events-none absolute inset-y-0 w-full items-center justify-between px-2 sm:px-6 opacity-45">
            <div className="flex-1 flex justify-end pr-2 sm:pr-6 md:pr-10">
              <svg className="w-32 sm:w-48 md:w-56 h-12 text-[#669970]" viewBox="0 0 200 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40 C60 36 120 25 190 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M40 38 C46 30 58 28 65 33 C62 38 52 42 40 38 Z" fill="currentColor" />
                <path d="M75 34 C82 22 98 22 104 29 C99 34 88 38 75 34 Z" fill="currentColor" />
                <path d="M115 28 C124 16 140 17 146 24 C140 29 128 32 115 28 Z" fill="currentColor" />
                <path d="M155 22 C165 9 182 11 188 18 C181 23 169 25 155 22 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="flex-1 flex justify-start pl-2 sm:pl-6 md:pr-10">
              <svg className="w-32 sm:w-48 md:w-56 h-12 text-[#669970] transform scale-x-[-1]" viewBox="0 0 200 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40 C60 36 120 25 190 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M40 38 C46 30 58 28 65 33 C62 38 52 42 40 38 Z" fill="currentColor" />
                <path d="M75 34 C82 22 98 22 104 29 C99 34 88 38 75 34 Z" fill="currentColor" />
                <path d="M115 28 C124 16 140 17 146 24 C140 29 128 32 115 28 Z" fill="currentColor" />
                <path d="M155 22 C165 9 182 11 188 18 C181 23 169 25 155 22 Z" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Central Composite Art Container */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8">
            {/* 1. Green Shop . Com Logo Emblem */}
            <div className="relative shrink-0 filter drop-shadow-[0_4px_16px_rgba(34,197,94,0.4)] transition-transform duration-500 hover:scale-105">
              <svg
                className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bagGradS7ProV2" x1="20" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="45%" stopColor="#d1fae5" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>

                  <linearGradient id="leafGradS7ProV2" x1="45" y1="90" x2="95" y2="35" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#065f46" />
                    <stop offset="35%" stopColor="#059669" />
                    <stop offset="70%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#6ee7b7" />
                  </linearGradient>

                  <linearGradient id="veinGradS7ProV2" x1="45" y1="90" x2="90" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="60%" stopColor="#a7f3d0" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>

                <path d="M44 42 V28 C44 19 50 14 60 14 C70 14 76 19 76 28 V42" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 46 H88 C91 46 93.5 48.5 93 51.5 L86 101 C85.5 104.5 82.5 107 79 107 H41 C37.5 107 34.5 104.5 34 101 L27 51.5 C26.5 48.5 29 46 32 46 Z" stroke="url(#bagGradS7ProV2)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="#0b2418" fillOpacity="0.85" />
                <path d="M38 52 C37 68 31 82 38 98 C42 104 52 105 57 101" stroke="#34d399" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M40 98 C36 80 44 65 62 48 C78 33 93 30 94 30 C94 30 96 46 88 64 C79 81 60 98 40 98 Z" fill="url(#leafGradS7ProV2)" />
                <path d="M42 96 C50 82 63 64 93 32" stroke="url(#veinGradS7ProV2)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* 2. Majestic Globe + Authentic Map of Bangladesh Dominating Global Trade Network */}
            <div className="relative filter drop-shadow-[0_8px_32px_rgba(0,0,0,0.65)]">
              <svg
                className="w-64 h-64 sm:w-88 sm:h-88 md:w-[26rem] md:h-[26rem] lg:w-[28rem] lg:h-[28rem]"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="globeSphereProV2" cx="42%" cy="38%" r="62%">
                    <stop offset="0%" stopColor="#41708a" />
                    <stop offset="40%" stopColor="#22495f" />
                    <stop offset="80%" stopColor="#112b3b" />
                    <stop offset="100%" stopColor="#081721" />
                  </radialGradient>

                  <radialGradient id="atmosphereGlowV2" cx="50%" cy="50%" r="50%">
                    <stop offset="85%" stopColor="#38bdf8" stopOpacity="0" />
                    <stop offset="97%" stopColor="#38bdf8" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.8" />
                  </radialGradient>

                  <linearGradient id="bdNationalGreenV2" x1="200" y1="120" x2="310" y2="340" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#007953" />
                    <stop offset="50%" stopColor="#006a4e" />
                    <stop offset="100%" stopColor="#004d38" />
                  </linearGradient>

                  <radialGradient id="bdRedSunV2" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#ff5757" />
                    <stop offset="65%" stopColor="#f42a41" />
                    <stop offset="100%" stopColor="#af1224" />
                  </radialGradient>

                  <linearGradient id="handSkinGradV2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e8b197" />
                    <stop offset="50%" stopColor="#cc9173" />
                    <stop offset="100%" stopColor="#9e664b" />
                  </linearGradient>

                  <filter id="neonGlowV2" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <circle cx="250" cy="250" r="145" fill="none" stroke="#38bdf8" strokeWidth="3" opacity="0.25" />
                <circle cx="250" cy="250" r="140" fill="url(#atmosphereGlowV2)" />

                {/* The 3D World Globe */}
                <circle cx="250" cy="250" r="140" fill="url(#globeSphereProV2)" stroke="#67b2d6" strokeWidth="2.5" />

                <g opacity="0.25" fill="#a5d8eb">
                  <path d="M 170 180 Q 200 160 230 170 T 320 180 T 350 240 Q 300 270 280 290 Q 220 280 170 240 Z" />
                  <path d="M 130 200 Q 150 170 170 190 T 160 250 Q 130 230 130 200 Z" />
                </g>

                <ellipse cx="250" cy="250" rx="140" ry="48" stroke="#7ec3e6" strokeWidth="1.3" opacity="0.65" />
                <ellipse cx="250" cy="250" rx="140" ry="96" stroke="#7ec3e6" strokeWidth="1.3" opacity="0.65" />
                <line x1="110" y1="250" x2="390" y2="250" stroke="#a5e0fc" strokeWidth="1.6" opacity="0.8" />
                <ellipse cx="250" cy="250" rx="48" ry="140" stroke="#7ec3e6" strokeWidth="1.3" opacity="0.65" />
                <ellipse cx="250" cy="250" rx="96" ry="140" stroke="#7ec3e6" strokeWidth="1.3" opacity="0.65" />
                <line x1="250" y1="110" x2="250" y2="390" stroke="#a5e0fc" strokeWidth="1.6" opacity="0.8" />

                {/* Orbital Trade Ring encompassing the globe */}
                <ellipse
                  cx="250"
                  cy="250"
                  rx="165"
                  ry="65"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0.8"
                  transform="rotate(-25 250 250)"
                  className="animate-pulse"
                />

                {/* Trade / Control Arcs Radiating Outward from Bangladesh */}
                <g stroke="#34d399" strokeWidth="1.8" opacity="0.85" strokeLinecap="round">
                  <path d="M 245 220 Q 170 150 135 185" strokeDasharray="4 3" />
                  <circle cx="135" cy="185" r="4" fill="#a7f3d0" />
                  <path d="M 245 220 Q 200 130 170 145" strokeDasharray="4 3" />
                  <circle cx="170" cy="145" r="3.5" fill="#a7f3d0" />
                  <path d="M 255 220 Q 320 150 365 175" strokeDasharray="4 3" />
                  <circle cx="365" cy="175" r="4" fill="#a7f3d0" />
                  <path d="M 255 240 Q 340 280 355 330" strokeDasharray="4 3" />
                  <circle cx="355" cy="330" r="4" fill="#a7f3d0" />
                  <path d="M 235 240 Q 160 280 145 320" strokeDasharray="4 3" />
                  <circle cx="145" cy="320" r="3.5" fill="#a7f3d0" />
                </g>

                {/* Authentic Map of Bangladesh at Center */}
                <g filter="url(#neonGlowV2)">
                  <path
                    d="M 230 140 
                       C 235 130, 245 125, 252 135 
                       C 255 130, 268 135, 275 142
                       C 285 145, 298 152, 292 165
                       C 288 175, 295 185, 282 198
                       C 285 208, 278 228, 275 245
                       C 272 260, 282 285, 285 305
                       C 280 315, 272 312, 268 298
                       C 264 285, 258 275, 252 282
                       C 246 290, 238 295, 232 285
                       C 225 275, 218 288, 212 280
                       C 205 270, 210 252, 215 238
                       C 208 225, 202 208, 212 192
                       C 218 178, 222 162, 226 150 Z"
                    fill="url(#bdNationalGreenV2)"
                    stroke="#ffffff"
                    strokeWidth="3.2"
                    strokeLinejoin="round"
                  />
                </g>

                <path
                  d="M 230 140 
                     C 235 130, 245 125, 252 135 
                     C 255 130, 268 135, 275 142
                     C 285 145, 298 152, 292 165
                     C 288 175, 295 185, 282 198
                     C 285 208, 278 228, 275 245
                     C 272 260, 282 285, 285 305
                     C 280 315, 272 312, 268 298
                     C 264 285, 258 275, 252 282
                     C 246 290, 238 295, 232 285
                     C 225 275, 218 288, 212 280
                     C 205 270, 210 252, 215 238
                     C 208 225, 202 208, 212 192
                     C 218 178, 222 162, 226 150 Z"
                  fill="url(#bdNationalGreenV2)"
                  stroke="#5eead4"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Coastal Sundarbans & Meghna Delta Inset Details */}
                <path d="M 220 275 Q 228 285 235 280" stroke="#ffffff" strokeWidth="1.2" fill="none" />
                <path d="M 245 282 Q 252 292 258 288" stroke="#ffffff" strokeWidth="1.2" fill="none" />

                {/* Iconic National Red Sun */}
                <circle
                  cx="248"
                  cy="216"
                  r="28"
                  fill="url(#bdRedSunV2)"
                  stroke="#ffffff"
                  strokeWidth="2.2"
                  className={isHovered ? 'animate-pulse' : ''}
                  filter="drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))"
                />

                {/* Central Command Beacon Pulse from Dhaka */}
                <circle cx="248" cy="216" r="6" fill="#ffffff" />
                <circle cx="248" cy="216" r="14" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" className="animate-ping" style={{ animationDuration: '3s' }} />

                {/* Left Hand: cupping the globe */}
                <g>
                  <path d="M 115 320 C 110 295, 125 260, 155 240 L 175 275 C 160 305, 140 330, 115 320 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" />
                  <path d="M 155 242 C 178 238, 205 244, 218 258 C 210 268, 185 262, 165 260 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 148 266 C 172 264, 208 274, 215 288 C 205 296, 178 290, 156 284 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 140 290 C 165 292, 198 304, 204 318 C 192 325, 168 316, 148 308 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 135 312 C 158 316, 185 330, 188 342 C 176 348, 156 338, 142 328 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="162" y1="252" x2="168" y2="260" stroke="#683925" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="156" y1="276" x2="162" y2="284" stroke="#683925" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="150" y1="300" x2="155" y2="308" stroke="#683925" strokeWidth="1.6" strokeLinecap="round" />
                </g>

                {/* Right Hand: cupping the globe */}
                <g>
                  <path d="M 385 320 C 390 295, 375 260, 345 240 L 325 275 C 340 305, 360 330, 385 320 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" />
                  <path d="M 345 242 C 322 238, 295 244, 282 258 C 290 268, 315 262, 335 260 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 352 266 C 328 264, 292 274, 285 288 C 295 296, 322 290, 344 284 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 360 290 C 335 292, 302 304, 296 318 C 308 325, 332 316, 352 308 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 365 312 C 342 316, 315 330, 312 342 C 324 348, 344 338, 358 328 Z" fill="url(#handSkinGradV2)" stroke="#2e1a0e" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="338" y1="252" x2="332" y2="260" stroke="#683925" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="344" y1="276" x2="338" y2="284" stroke="#683925" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="350" y1="300" x2="345" y2="308" stroke="#683925" strokeWidth="1.6" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Strategic Global Trade Command Plaques */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-4">
          {pillars.map((item) => {
            const isCardActive = hoveredCard === item.id;
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden flex flex-col justify-between rounded-xl cursor-pointer transition-all duration-400 p-4 sm:p-6 ${
                  isCardActive
                    ? 'transform -translate-y-2 scale-[1.03] shadow-[0_20px_40px_rgba(16,185,129,0.4),0_0_20px_rgba(251,191,36,0.3)] border-amber-400 ring-2 ring-amber-400/50 bg-gradient-to-b from-emerald-950/70 via-[#0a2f1e]/80 to-slate-950/90'
                    : 'shadow-[0_10px_25px_rgba(0,0,0,0.6)] bg-gradient-to-b from-emerald-950/45 via-[#082417]/55 to-slate-950/70 border-emerald-600/70 backdrop-blur-xl'
                }`}
                style={{
                  borderWidth: '2.5px',
                  borderStyle: 'solid',
                }}
              >
                {/* Top edge bevel */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />

                {/* Shimmer sweep */}
                <div
                  className={`absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent ${
                    isCardActive ? 'translate-x-full' : ''
                  }`}
                />

                <div className="flex items-center gap-3 mb-3 z-10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-900/80 text-amber-300 border border-emerald-500/40 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-amber-300 tracking-wider uppercase font-sans">
                    {item.english}
                  </span>
                </div>

                <h3
                  className="relative z-10 text-xl sm:text-2xl font-bold text-white tracking-wide mb-2 leading-snug"
                  style={{
                    fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
                    textShadow: isCardActive ? '0 0 12px rgba(251,191,36,0.5)' : 'none',
                  }}
                >
                  {item.title}
                </h3>

                <p className="relative z-10 text-xs sm:text-sm font-medium text-slate-300/90 leading-relaxed" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  {item.desc}
                </p>

                {/* Bottom accent glow strip */}
                <div
                  className={`absolute bottom-0 inset-x-8 h-[2px] rounded-full transition-all duration-300 ${
                    isCardActive ? 'bg-amber-400 opacity-100 scale-100' : 'bg-transparent opacity-0 scale-50'
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
