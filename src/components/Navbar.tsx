import React, { useState } from 'react';
import { SLIDES_DATA } from '../types.ts';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSlide: number;
  onSelectSlide: (slideId: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSlide, onSelectSlide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: number) => {
    onSelectSlide(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(`slide-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#090d16]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#slide-1"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(1);
          }}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
        >
          <span className="text-[#8ac593]">Green Shop</span>
          <span className="text-white">. Com</span>
        </a>

        {/* Zone 2: Exactly 6 single-line navigation links named Slide 1 to Slide 6 */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {SLIDES_DATA.map((slide) => {
            const isActive = activeSlide === slide.id;
            return (
              <button
                key={slide.id}
                onClick={() => handleNavClick(slide.id)}
                className={`group relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 rounded-md ${
                  isActive
                    ? 'text-white bg-emerald-950/60 border border-emerald-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{slide.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick(activeSlide >= 7 ? 1 : activeSlide + 1)}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-emerald-500 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer shadow-sm shadow-emerald-950"
          >
            <span>{activeSlide >= 7 ? 'Slide 1' : `Next Slide ${activeSlide + 1}`}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-emerald-900/60 bg-[#07130e]/95 backdrop-blur-xl px-4 pt-3 pb-5 transition-all">
          <div className="grid grid-cols-1 gap-1">
            {SLIDES_DATA.map((slide) => {
              const isActive = activeSlide === slide.id;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleNavClick(slide.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/60 font-semibold'
                      : 'text-slate-300 hover:bg-emerald-950/40 hover:text-white'
                  }`}
                >
                  <span className="font-semibold">{slide.label}</span>
                  <span className="text-xs text-emerald-400/80 font-normal truncate max-w-[180px] sm:max-w-xs" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    {slide.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-emerald-900/60">
            <button
              onClick={() => handleNavClick(activeSlide >= 7 ? 1 : activeSlide + 1)}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors cursor-pointer"
            >
              <span>{activeSlide >= 7 ? 'স্লাইড ১-এ ফিরে যান' : `পরবর্তী স্লাইড (${activeSlide + 1})`}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
