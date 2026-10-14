import React, { useState } from 'react';
import { Mail, Truck, Navigation, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const SlideSection2: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const deliveryOptions = [
    {
      id: 'postal',
      label: 'ডাক বিভাগ',
      subtitle: 'Bangladesh Post Office',
      desc: 'দেশব্যাপী ৬৪ জেলায় সরকারি নির্ভরযোগ্য দ্রুত ডাক সেবা',
      icon: Mail,
      badge: 'সরকারি ডাক নেটওয়ার্ক',
    },
    {
      id: 'others',
      label: 'অন্যান্য',
      subtitle: 'Express Couriers & Logistics',
      desc: 'প্রাইভেট কুরিয়ার, এক্সপ্রেস হোম ডেলিভারি ও রিয়েল-টাইম ট্র্যাকিং',
      icon: Truck,
      badge: 'এক্সপ্রেস পার্সেল সার্ভিস',
    },
  ];

  return (
    <section
      id="slide-2"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 select-none border-b border-slate-800/80"
      style={{
        background: 'radial-gradient(ellipse at 50% 35%, #0c3321 0%, #072316 45%, #03140d 80%, #010805 100%)',
      }}
    >
      {/* Background Logistics Expressway Network & GPS Tracking Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="routeLineGrad" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Nationwide highway arterials */}
          <path d="M 200 850 Q 550 500, 720 450 T 1300 200" stroke="url(#routeLineGrad)" strokeWidth="2.5" strokeDasharray="10 8" />
          <path d="M 150 300 Q 500 380, 720 450 T 1250 750" stroke="url(#routeLineGrad)" strokeWidth="1.8" strokeDasharray="6 6" opacity="0.6" />
          <path d="M 720 100 L 720 450 L 720 850" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.4" />

          {/* Regional Hub Waypoints with Ping Animations */}
          <g>
            {/* Dhaka Central Hub */}
            <circle cx="720" cy="450" r="8" fill="#38bdf8" />
            <circle cx="720" cy="450" r="22" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
            
            {/* Chittagong Port Hub */}
            <circle cx="1050" cy="620" r="6" fill="#34d399" />
            <circle cx="1050" cy="620" r="18" stroke="#34d399" strokeWidth="1.2" opacity="0.5" className="animate-ping" />

            {/* Sylhet Hub */}
            <circle cx="1080" cy="260" r="5" fill="#34d399" />
            {/* Rajshahi Hub */}
            <circle cx="380" cy="380" r="5" fill="#34d399" />
            {/* Khulna Hub */}
            <circle cx="420" cy="660" r="5" fill="#34d399" />
          </g>

          {/* Delivery Radar Navigation Arcs */}
          <circle cx="720" cy="450" r="220" stroke="#10b981" strokeWidth="1" strokeDasharray="4 8" opacity="0.25" />
          <circle cx="720" cy="450" r="380" stroke="#10b981" strokeWidth="1" strokeDasharray="4 8" opacity="0.15" />
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
          className="absolute -bottom-20 right-1/4 w-80 h-80 text-[#0a2316] filter blur-[3px] transform rotate-12"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M30,170 C40,90 90,40 180,30 C140,110 100,150 30,170 Z" />
        </svg>
      </div>

      {/* Main Slide Content */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center my-auto">
        {/* Top Typography Lockup: Green Shop . Com & ডেলিভারি ম্যানেজমেন্ট */}
        <div className="text-center mb-4 sm:mb-8 transition-transform duration-500 hover:scale-[1.01]">
          {/* Green Shop . Com */}
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-normal leading-[1.1] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            Green Shop . Com
          </h1>

          {/* ডেলিভারি ম্যানেজমেন্ট */}
          <h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-[3.1rem] font-bold text-white tracking-wide mt-1 sm:mt-2 leading-[1.15] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
            style={{
              fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
            }}
          >
            ডেলিভারি ম্যানেজমেন্ট
          </h2>
        </div>

        {/* The Exact Center Green Delivery Truck Illustration from pic2.jpg */}
        <div className="relative w-full max-w-[92vw] sm:max-w-xl aspect-[16/10] max-h-[200px] sm:max-h-[300px] md:max-h-[340px] flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-500 hover:scale-[1.02]">
          {/* Truck Scene Container with SVG */}
          <div className="relative w-full h-full filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)]">
            <svg
              className="w-full h-full"
              viewBox="0 0 520 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Truck Cargo Body Gradient */}
                <linearGradient id="cargoGrad" x1="100" y1="120" x2="360" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0a2a19" />
                  <stop offset="35%" stopColor="#0d3520" />
                  <stop offset="70%" stopColor="#124429" />
                  <stop offset="100%" stopColor="#082214" />
                </linearGradient>

                {/* Truck Cab Front Gradient */}
                <linearGradient id="cabGrad" x1="340" y1="170" x2="440" y2="310" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#43ba6d" />
                  <stop offset="40%" stopColor="#309b55" />
                  <stop offset="85%" stopColor="#237b42" />
                  <stop offset="100%" stopColor="#175c30" />
                </linearGradient>

                {/* Road Gradient with light shine */}
                <linearGradient id="roadGrad" x1="260" y1="280" x2="260" y2="350" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#111c15" />
                  <stop offset="40%" stopColor="#1e2c23" />
                  <stop offset="100%" stopColor="#0a120d" />
                </linearGradient>

                {/* Glass reflections */}
                <linearGradient id="glassGrad" x1="360" y1="210" x2="420" y2="260" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#e2f8ec" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#96d4b2" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3d7e59" stopOpacity="0.8" />
                </linearGradient>

                {/* Wheels Radial Gradient */}
                <radialGradient id="wheelRim" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#87998e" />
                  <stop offset="45%" stopColor="#3d4942" />
                  <stop offset="85%" stopColor="#181e1a" />
                  <stop offset="100%" stopColor="#0d110f" />
                </radialGradient>

                {/* Soft ground shadow blur */}
                <filter id="truckShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
              </defs>

              {/* Road Ground Surface */}
              <ellipse cx="260" cy="330" rx="230" ry="24" fill="url(#roadGrad)" />
              {/* Road Center Dashed Line */}
              <path d="M 60 334 L 110 334 M 160 334 L 230 334 M 290 334 L 380 334 M 430 334 L 470 334" stroke="#718779" strokeWidth="2.5" strokeDasharray="16 14" opacity="0.6" />

              {/* Truck Ground Shadow */}
              <ellipse cx="260" cy="324" rx="190" ry="14" fill="#000000" opacity="0.65" filter="url(#truckShadow)" />

              {/* Background Foliage/Tree Elements on the Horizon */}
              <g opacity="0.25">
                <circle cx="80" cy="275" r="30" fill="#0c2f1c" />
                <circle cx="115" cy="265" r="24" fill="#134429" />
                <circle cx="440" cy="270" r="34" fill="#0c2f1c" />
                <circle cx="475" cy="275" r="26" fill="#134429" />
              </g>

              {/* THE TRUCK ASSEMBLY */}
              <g className="transition-transform duration-500">
                {/* 1. Wheels */}
                {/* Rear Dual Wheels */}
                <g>
                  <circle cx="155" cy="310" r="26" fill="url(#wheelRim)" stroke="#232d27" strokeWidth="3" />
                  <circle cx="155" cy="310" r="14" fill="#586b60" stroke="#879b8f" strokeWidth="2" />
                  <circle cx="155" cy="310" r="5" fill="#1d2520" />
                  <line x1="155" y1="298" x2="155" y2="322" stroke="#abbcb1" strokeWidth="1.5" />
                  <line x1="143" y1="310" x2="167" y2="310" stroke="#abbcb1" strokeWidth="1.5" />
                </g>

                <g>
                  <circle cx="215" cy="310" r="26" fill="url(#wheelRim)" stroke="#232d27" strokeWidth="3" />
                  <circle cx="215" cy="310" r="14" fill="#586b60" stroke="#879b8f" strokeWidth="2" />
                  <circle cx="215" cy="310" r="5" fill="#1d2520" />
                  <line x1="215" y1="298" x2="215" y2="322" stroke="#abbcb1" strokeWidth="1.5" />
                  <line x1="203" y1="310" x2="227" y2="310" stroke="#abbcb1" strokeWidth="1.5" />
                </g>

                {/* Front Wheel */}
                <g>
                  <circle cx="390" cy="310" r="26" fill="url(#wheelRim)" stroke="#232d27" strokeWidth="3" />
                  <circle cx="390" cy="310" r="14" fill="#586b60" stroke="#879b8f" strokeWidth="2" />
                  <circle cx="390" cy="310" r="5" fill="#1d2520" />
                  <line x1="390" y1="298" x2="390" y2="322" stroke="#abbcb1" strokeWidth="1.5" />
                  <line x1="378" y1="310" x2="402" y2="310" stroke="#abbcb1" strokeWidth="1.5" />
                </g>

                {/* 2. Chassis and Under-guards */}
                <rect x="110" y="294" width="270" height="12" fill="#1d2520" rx="2" />
                <rect x="250" y="296" width="70" height="14" fill="#323f37" rx="3" stroke="#1d2520" strokeWidth="1.5" />

                {/* 3. Main Cargo Box (Dark Green Container) */}
                <g>
                  {/* Container Outer Shell */}
                  <rect
                    x="90"
                    y="130"
                    width="264"
                    height="165"
                    rx="8"
                    fill="url(#cargoGrad)"
                    stroke="#1d5c36"
                    strokeWidth="3"
                  />

                  {/* Corner edge protectors (metallic silver-green) */}
                  <rect x="88" y="128" width="8" height="169" rx="2" fill="#2d6a45" />
                  <rect x="346" y="128" width="8" height="169" rx="2" fill="#2d6a45" />
                  <rect x="88" y="128" width="266" height="7" rx="2" fill="#35784f" />
                  <rect x="88" y="290" width="266" height="7" rx="2" fill="#1b422a" />

                  {/* Subtle vertical corrugated ribs of the cargo box */}
                  <line x1="130" y1="135" x2="130" y2="290" stroke="#184b2c" strokeWidth="2.5" />
                  <line x1="170" y1="135" x2="170" y2="290" stroke="#184b2c" strokeWidth="2.5" />
                  <line x1="210" y1="135" x2="210" y2="290" stroke="#184b2c" strokeWidth="2.5" />
                  <line x1="250" y1="135" x2="250" y2="290" stroke="#184b2c" strokeWidth="2.5" />
                  <line x1="290" y1="135" x2="290" y2="290" stroke="#184b2c" strokeWidth="2.5" />
                  <line x1="330" y1="135" x2="330" y2="290" stroke="#184b2c" strokeWidth="2.5" />

                  {/* GREEN SHOP . COM LOGO ON THE SIDE OF CARGO BOX */}
                  <g transform="translate(140, 160)">
                    {/* Glowing Logo Plaque / Decal Background */}
                    <rect x="0" y="0" width="165" height="100" rx="8" fill="#082214" fillOpacity="0.85" stroke="#256b3e" strokeWidth="2" />

                    {/* Logo Text: Green Shop . Com */}
                    <text
                      x="82"
                      y="32"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="14"
                      fontWeight="bold"
                      fontFamily="'Outfit', sans-serif"
                      letterSpacing="0.5"
                    >
                      Green Shop . Com
                    </text>

                    {/* Mini Delivery Bag & Leaf Emblem */}
                    <g transform="translate(64, 40) scale(0.35)">
                      <path
                        d="M32 46 H88 C91 46 93.5 48.5 93 51.5 L86 101 C85.5 104.5 82.5 107 79 107 H41 C37.5 107 34.5 104.5 34 101 L27 51.5 C26.5 48.5 29 46 32 46 Z"
                        stroke="#ffffff"
                        strokeWidth="5"
                        fill="#10b981"
                      />
                      <path
                        d="M44 42 V28 C44 19 50 14 60 14 C70 14 76 19 76 28 V42"
                        stroke="#ffffff"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M37 73 C43 62 53 48 76 22"
                        stroke="#ffffff"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>

                {/* Truck Cab Structure - Straight, Aerodynamic, Professional Front */}
                <g>
                  {/* Aerodynamic Cab Roof Wind Deflector (Spoiler aligning with container) */}
                  <path
                    d="M 354 130 C 375 130, 410 142, 428 162 L 354 162 Z"
                    fill="url(#cabGrad)"
                    stroke="#14532d"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  {/* Spoiler Highlight Reflection */}
                  <path
                    d="M 358 134 C 376 134, 405 145, 422 160"
                    stroke="#86efac"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />

                  {/* Main Cab Body - Upright, Straight, Clean Posture */}
                  <path
                    d="M 354 162 L 430 162 L 452 225 L 454 290 L 454 300 L 424 300 C 424 274, 358 274, 358 300 L 354 300 Z"
                    fill="url(#cabGrad)"
                    stroke="#14532d"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />

                  {/* Cab Top Edge Highlight */}
                  <line x1="356" y1="163" x2="428" y2="163" stroke="#86efac" strokeWidth="1.5" opacity="0.6" />

                  {/* Side Door Window */}
                  <path
                    d="M 362 168 L 420 168 L 436 218 L 362 218 Z"
                    fill="url(#glassGrad)"
                    stroke="#14532d"
                    strokeWidth="1.5"
                  />
                  {/* Window Pillar / Vent Window Divider */}
                  <line x1="416" y1="168" x2="430" y2="218" stroke="#14532d" strokeWidth="2" />
                  {/* Window Sunlight Reflection Streak */}
                  <line x1="375" y1="172" x2="400" y2="214" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />

                  {/* Driver Door Panel Seam Line */}
                  <path
                    d="M 360 220 L 440 220 L 440 268 L 424 282"
                    fill="none"
                    stroke="#0f3d21"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />

                  {/* Door Handle */}
                  <rect x="368" y="234" width="16" height="5" rx="2" fill="#1f2937" stroke="#374151" strokeWidth="1" />
                  <circle cx="372" cy="236.5" r="1.2" fill="#9ca3af" />

                  {/* Driver Foot Step Board */}
                  <rect x="364" y="294" width="22" height="6" rx="1.5" fill="#374151" stroke="#111827" strokeWidth="1" />
                  <line x1="368" y1="297" x2="382" y2="297" stroke="#9ca3af" strokeWidth="1" />

                  {/* Front Side-view Mirror (Mounted forward on A-pillar) */}
                  <g>
                    <path
                      d="M 432 186 L 445 183 L 445 212 L 436 214"
                      fill="none"
                      stroke="#111827"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect x="443" y="180" width="7" height="34" rx="2.5" fill="#111827" stroke="#374151" strokeWidth="1" />
                    <rect x="444" y="182" width="2" height="30" rx="1" fill="#93c5fd" opacity="0.85" />
                  </g>

                  {/* Front Grille & Air Intake (Positioned on the front nose facing forward) */}
                  <g>
                    <rect x="446" y="238" width="9" height="38" rx="2" fill="#111827" stroke="#374151" strokeWidth="1" />
                    <line x1="447" y1="244" x2="453" y2="244" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="447" y1="250" x2="453" y2="250" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="447" y1="256" x2="453" y2="256" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="447" y1="262" x2="453" y2="262" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="447" y1="268" x2="453" y2="268" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" />
                  </g>

                  {/* Modern LED Headlight & Turn Signal (Facing Forward to the Right) */}
                  <g>
                    {/* Headlight Housing */}
                    <rect x="446" y="278" width="9" height="16" rx="2" fill="#1f2937" stroke="#374151" strokeWidth="1" />
                    {/* Main LED Lens */}
                    <rect x="449" y="280" width="5" height="7" rx="1.5" fill="#ffffff" />
                    <circle cx="451.5" cy="283.5" r="2.5" fill="#fef08a" />
                    {/* Amber Turn Indicator */}
                    <rect x="449" y="289" width="5" height="3.5" rx="1" fill="#f59e0b" />

                    {/* Forward Radiant Headlight Beam */}
                    <defs>
                      <linearGradient id="forwardBeam" x1="454" y1="284" x2="520" y2="295" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                        <stop offset="20%" stopColor="#fef08a" stopOpacity="0.4" />
                        <stop offset="65%" stopColor="#34d399" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon points="454,280 520,240 520,335 454,292" fill="url(#forwardBeam)" />
                  </g>

                  {/* Heavy Duty Front Bumper */}
                  <rect x="432" y="293" width="24" height="13" rx="3" fill="#1f2937" stroke="#111827" strokeWidth="1.5" />
                  {/* Fog Lamp */}
                  <circle cx="449" cy="299" r="2.5" fill="#fef08a" stroke="#4b5563" strokeWidth="0.8" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

        {/* The Two Elevated Delivery Cards: ডাক বিভাগ & অন্যান্য */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 px-4">
          {deliveryOptions.map((item) => {
            const isHovered = activeCard === item.id;
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative overflow-hidden flex flex-col items-center justify-between rounded-xl cursor-pointer transition-all duration-400 py-6 sm:py-7 md:py-8 px-6 ${
                  isHovered
                    ? 'transform -translate-y-2.5 scale-[1.03] shadow-[0_24px_45px_-5px_rgba(16,185,129,0.4),0_0_25px_rgba(52,211,153,0.3)] border-emerald-400 ring-2 ring-emerald-400/50 bg-gradient-to-b from-white via-[#f7faf8] to-[#edf6f0]'
                    : 'shadow-[0_10px_25px_-4px_rgba(0,0,0,0.6),0_2px_6px_rgba(0,0,0,0.4)] border-[#164731] bg-gradient-to-b from-white via-white to-[#f4f8f5]'
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

                {/* Badge at Top */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    <IconComponent className="w-3.5 h-3.5 text-emerald-700" />
                    {item.badge}
                  </span>
                </div>

                {/* The card main title: ডাক বিভাগ / অন্যান্য */}
                <span
                  className="relative z-10 text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-normal select-none leading-none transition-all duration-200"
                  style={{
                    color: isHovered ? '#064e2e' : '#123826',
                    fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
                    textShadow: isHovered ? '0 1px 2px rgba(16,185,129,0.2)' : 'none',
                  }}
                >
                  {item.label}
                </span>

                {/* English subtitle & Bengali description */}
                <div className="text-center mt-3 z-10">
                  <div className="text-xs font-semibold text-emerald-800/80 tracking-wider uppercase font-sans">
                    {item.subtitle}
                  </div>
                  <div className="text-sm font-medium text-slate-600 mt-1 max-w-xs" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    {item.desc}
                  </div>
                </div>

                {/* Bottom accent glow strip */}
                <div
                  className={`absolute bottom-1 inset-x-8 h-[2.5px] rounded-full transition-all duration-300 ${
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
