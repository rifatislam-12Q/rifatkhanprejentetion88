import React, { useState } from 'react';
import {
  User,
  LayoutDashboard,
  Store,
  MapPin,
  Radio,
  Video,
  Navigation,
  Handshake,
  MessageSquare,
  Star,
  FileText,
  Headphones,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const SlideSection3: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Group 1: Features & Workflow with dedicated icons
  const row1Features = [
    { label: 'Profile', icon: User },
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Marketplace', icon: Store },
    { label: 'Local Market', icon: MapPin },
    { label: 'Live Bazar', icon: Radio, isLive: true },
  ];

  const row2Features = [
    { label: 'Video', icon: Video },
    { label: 'Tracking', icon: Navigation },
    { label: 'Business Deal', icon: Handshake },
    { label: 'Chatting', icon: MessageSquare },
  ];

  // Group 2: Extra Features
  const extraFeatures = [
    { label: 'Review', icon: Star },
    { label: 'Product Info', icon: FileText },
    { label: 'Customer Support', icon: Headphones },
    { label: 'Seller Support', icon: ShieldCheck },
  ];

  return (
    <section
      id="slide-3"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 select-none border-b border-slate-800/80"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #0a3528 0%, #06231b 45%, #031410 80%, #010a08 100%)',
      }}
    >
      {/* Background High-Tech Digital Platform UI Wireframe & Interconnected Matrix */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyberGridGrad" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Connected Network Web */}
          <path d="M 100 200 C 350 150, 500 350, 720 300 C 940 250, 1100 450, 1340 380" stroke="url(#cyberGridGrad)" strokeWidth="1.8" strokeDasharray="8 6" />
          <path d="M 150 700 C 400 550, 650 750, 720 500 C 800 250, 1050 650, 1300 620" stroke="url(#cyberGridGrad)" strokeWidth="1.8" strokeDasharray="6 8" opacity="0.6" />

          {/* Digital SaaS UI Elements floating in backdrop */}
          {/* Dashboard Mini Chart wireframe (Left) */}
          <g transform="translate(100, 320)" opacity="0.4">
            <rect x="0" y="0" width="140" height="90" rx="8" stroke="#10b981" strokeWidth="1.2" fill="#062217" />
            <line x1="20" y1="70" x2="40" y2="45" stroke="#34d399" strokeWidth="2" />
            <line x1="40" y1="45" x2="70" y2="55" stroke="#34d399" strokeWidth="2" />
            <line x1="70" y1="55" x2="100" y2="30" stroke="#34d399" strokeWidth="2" />
            <line x1="100" y1="30" x2="120" y2="20" stroke="#34d399" strokeWidth="2" />
          </g>

          {/* Live Video / Chat bubble wireframe (Right) */}
          <g transform="translate(1200, 310)" opacity="0.4">
            <rect x="0" y="0" width="130" height="85" rx="8" stroke="#2dd4bf" strokeWidth="1.2" fill="#062217" />
            <circle cx="25" cy="25" r="8" fill="#ef4444" className="animate-ping" />
            <circle cx="25" cy="25" r="5" fill="#ef4444" />
            <rect x="42" y="21" width="60" height="7" rx="3" fill="#2dd4bf" opacity="0.8" />
            <rect x="20" y="45" width="85" height="6" rx="3" fill="#10b981" opacity="0.5" />
            <rect x="20" y="58" width="60" height="6" rx="3" fill="#10b981" opacity="0.5" />
          </g>

          {/* Platform Nodes */}
          <circle cx="720" cy="300" r="6" fill="#2dd4bf" />
          <circle cx="720" cy="300" r="18" stroke="#2dd4bf" strokeWidth="1" opacity="0.4" className="animate-ping" />
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

      {/* Floating Animated Background Shopping Carts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[22%] right-[24%] text-[#528a63]/30 animate-pulse" style={{ animationDuration: '6s' }}>
          <svg className="w-10 h-10 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <div className="absolute top-[54%] right-[19%] text-[#528a63]/25 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2.5s' }}>
          <svg className="w-9 h-9 transform -rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
      </div>

      {/* Main Slide Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center my-auto">
        {/* Top Typography: Green Shop . Com & এর ফিচার ও কার্যপ্রণালী */}
        <div className="text-center mb-6 sm:mb-10 transition-transform duration-500 hover:scale-[1.01]">
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
            এর ফিচার ও কার্যপ্রণালী
          </h2>
        </div>

        {/* Main Features Grid Container with Background Vine Flourishes */}
        <div className="relative w-full flex flex-col items-center gap-3 sm:gap-5 mb-6 sm:mb-10">
          {/* Row 1: 5 Cards (Profile, Dashboard, Marketplace, Local Market, Live Bazar) */}
          <div className="relative z-10 w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 md:gap-5 px-1">
            {row1Features.map((item) => {
              const isHovered = hoveredCard === item.label;
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => setHoveredCard(item.label)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative overflow-hidden flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-lg cursor-pointer transition-all duration-300 py-2 sm:py-3.5 md:py-4 px-3 sm:px-5 md:px-7 ${
                    isHovered
                      ? 'transform -translate-y-2 scale-[1.04] shadow-[0_16px_32px_-4px_rgba(16,185,129,0.4),0_0_20px_rgba(52,211,153,0.3)] border-emerald-400 ring-2 ring-emerald-400/50 bg-gradient-to-b from-white via-[#f7faf8] to-[#edf6f0]'
                      : 'shadow-[0_8px_18px_-2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.3)] border-[#164731] bg-gradient-to-b from-white via-white to-[#f4f8f5]'
                  }`}
                  style={{
                    borderWidth: '2.5px',
                    borderStyle: 'solid',
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                  <div
                    className={`absolute inset-0 -translate-x-full transition-transform duration-600 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent ${
                      isHovered ? 'translate-x-full' : ''
                    }`}
                  />
                  
                  {/* Micro Icon */}
                  <div className="relative shrink-0 text-emerald-800 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    {item.isLive && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                    )}
                  </div>

                  <span
                    className="relative z-10 text-sm sm:text-lg md:text-xl lg:text-[1.7rem] font-bold tracking-tight select-none leading-none transition-all duration-200 whitespace-nowrap"
                    style={{
                      color: isHovered ? '#064e2e' : '#123826',
                      fontFamily: "'Playfair Display', Georgia, Cambria, serif",
                      textShadow: isHovered ? '0 1px 2px rgba(16,185,129,0.2)' : 'none',
                    }}
                  >
                    {item.label}
                  </span>

                  <div
                    className={`absolute bottom-1 inset-x-3 sm:inset-x-4 h-[2px] rounded-full transition-all duration-300 ${
                      isHovered ? 'bg-emerald-500 opacity-100 scale-100' : 'bg-transparent opacity-0 scale-50'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Row 2: 4 Cards (Video, Tracking, Business Deal, Chatting) */}
          <div className="relative z-10 w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 md:gap-5 px-1">
            {row2Features.map((item) => {
              const isHovered = hoveredCard === item.label;
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => setHoveredCard(item.label)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative overflow-hidden flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-lg cursor-pointer transition-all duration-300 py-2 sm:py-3.5 md:py-4 px-3 sm:px-6 md:px-8 ${
                    isHovered
                      ? 'transform -translate-y-2 scale-[1.04] shadow-[0_16px_32px_-4px_rgba(16,185,129,0.4),0_0_20px_rgba(52,211,153,0.3)] border-emerald-400 ring-2 ring-emerald-400/50 bg-gradient-to-b from-white via-[#f7faf8] to-[#edf6f0]'
                      : 'shadow-[0_8px_18px_-2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.3)] border-[#164731] bg-gradient-to-b from-white via-white to-[#f4f8f5]'
                  }`}
                  style={{
                    borderWidth: '2.5px',
                    borderStyle: 'solid',
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                  <div
                    className={`absolute inset-0 -translate-x-full transition-transform duration-600 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent ${
                      isHovered ? 'translate-x-full' : ''
                    }`}
                  />

                  {/* Micro Icon */}
                  <div className="relative shrink-0 text-emerald-800 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>

                  <span
                    className="relative z-10 text-sm sm:text-lg md:text-xl lg:text-[1.7rem] font-bold tracking-tight select-none leading-none transition-all duration-200 whitespace-nowrap"
                    style={{
                      color: isHovered ? '#064e2e' : '#123826',
                      fontFamily: "'Playfair Display', Georgia, Cambria, serif",
                      textShadow: isHovered ? '0 1px 2px rgba(16,185,129,0.2)' : 'none',
                    }}
                  >
                    {item.label}
                  </span>

                  <div
                    className={`absolute bottom-1 inset-x-3 sm:inset-x-5 h-[2px] rounded-full transition-all duration-300 ${
                      isHovered ? 'bg-emerald-500 opacity-100 scale-100' : 'bg-transparent opacity-0 scale-50'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Divider & Title: এক্সট্রা ফিচার */}
        <div className="w-full flex flex-col items-center justify-center mb-4 sm:mb-8">
          <div className="relative flex items-center justify-center px-4">
            <h3
              className="text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white tracking-wide text-center leading-tight filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.7)]"
              style={{
                fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
              }}
            >
              এক্সট্রা ফিচার
            </h3>
          </div>
        </div>

        {/* Group 2: 4 Extra Feature Cards (Review, Product Info, Customer Support, Seller Support) */}
        <div className="w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-5 px-1 sm:px-2">
          {extraFeatures.map((item) => {
            const isHovered = hoveredCard === item.label;
            const IconComponent = item.icon;
            return (
              <div
                key={item.label}
                onMouseEnter={() => setHoveredCard(item.label)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden flex items-center justify-center gap-2 rounded-lg cursor-pointer transition-all duration-300 py-3.5 sm:py-4 px-4 sm:px-5 ${
                  isHovered
                    ? 'transform -translate-y-2 scale-[1.04] shadow-[0_16px_32px_-4px_rgba(16,185,129,0.4),0_0_20px_rgba(52,211,153,0.3)] border-emerald-400 ring-2 ring-emerald-400/50 bg-gradient-to-b from-white via-[#f7faf8] to-[#edf6f0]'
                    : 'shadow-[0_8px_18px_-2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.3)] border-[#164731] bg-gradient-to-b from-white via-white to-[#f4f8f5]'
                }`}
                style={{
                  borderWidth: '2.5px',
                  borderStyle: 'solid',
                }}
              >
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                <div
                  className={`absolute inset-0 -translate-x-full transition-transform duration-600 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent ${
                    isHovered ? 'translate-x-full' : ''
                  }`}
                />

                {/* Micro Icon */}
                <div className="relative shrink-0 text-emerald-800 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
                </div>

                <span
                  className="relative z-10 text-base sm:text-lg md:text-xl font-bold tracking-tight select-none leading-none transition-all duration-200 text-center whitespace-nowrap"
                  style={{
                    color: isHovered ? '#064e2e' : '#123826',
                    fontFamily: "'Playfair Display', Georgia, Cambria, serif",
                    textShadow: isHovered ? '0 1px 2px rgba(16,185,129,0.2)' : 'none',
                  }}
                >
                  {item.label}
                </span>

                <div
                  className={`absolute bottom-1 inset-x-4 h-[2px] rounded-full transition-all duration-300 ${
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
