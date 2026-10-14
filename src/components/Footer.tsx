import React from 'react';
import { SLIDES_DATA } from '../types.ts';

interface FooterProps {
  onSelectSlide: (id: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSlide }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#070b13] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <a
            href="#slide-1"
            onClick={(e) => {
              e.preventDefault();
              onSelectSlide(1);
              document.getElementById('slide-1')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5"
          >
            <span className="text-[#8ac593]">Green Shop</span>
            <span className="text-white">. Com</span>
          </a>
          <p className="mt-1 text-xs text-slate-500 max-w-sm" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
            Green Shop . Com - ৭টি স্লাইডযুক্ত প্রেজেন্টেশন ও ডিজিটাল প্ল্যাটফর্ম।
          </p>
        </div>

        {/* 7 Slides Mirror in Footer */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-medium text-slate-400">
          {SLIDES_DATA.map((slide) => (
            <button
              key={slide.id}
              onClick={() => {
                onSelectSlide(slide.id);
                document.getElementById(`slide-${slide.id}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-emerald-300 transition-colors cursor-pointer py-1 px-1.5"
            >
              {slide.label}
            </button>
          ))}
        </div>

        {/* Copyright notice */}
        <div className="text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} SlideFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
