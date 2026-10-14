import React, { useEffect } from 'react';
import { ChevronUp, ChevronDown, ArrowUp } from 'lucide-react';

interface SlideControllerProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onScrollTop: () => void;
}

export const SlideController: React.FC<SlideControllerProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onScrollTop,
}) => {
  // Global arrow keys navigation for smooth slide swapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return; // Don't intercept while typing in form
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        onNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev]);

  return (
    <aside
      aria-label="Slide quick controller"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-emerald-900/80 bg-[#07130e]/90 p-1.5 sm:p-2 shadow-2xl backdrop-blur-md"
    >
      <div className="px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono font-semibold text-emerald-400 border-r border-emerald-900/80">
        Slide {currentSlide} <span className="text-slate-500">/ {totalSlides}</span>
      </div>

      <div className="flex items-center gap-0.5 sm:gap-1">
        <button
          onClick={onPrev}
          title="Previous Slide (Arrow Up/Left)"
          className="p-1 sm:p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-emerald-900/50 transition-colors cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        <button
          onClick={onNext}
          title="Next Slide (Arrow Down/Right)"
          className="p-1 sm:p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-emerald-900/50 transition-colors cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        <button
          onClick={onScrollTop}
          title="Scroll to Top"
          className="p-1 sm:p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-emerald-900/50 transition-colors cursor-pointer ml-0.5"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>
    </aside>
  );
};
