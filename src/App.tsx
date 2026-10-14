/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { SlideSection2 } from './components/SlideSection2.tsx';
import { SlideSection3 } from './components/SlideSection3.tsx';
import { SlideSection4 } from './components/SlideSection4.tsx';
import { SlideSection5 } from './components/SlideSection5.tsx';
import { SlideSection6 } from './components/SlideSection6.tsx';
import { SlideSection7 } from './components/SlideSection7.tsx';
import { Footer } from './components/Footer.tsx';
import { SlideController } from './components/SlideController.tsx';

export default function App() {
  const [activeSlide, setActiveSlide] = useState(1);

  // Scroll spy with IntersectionObserver to automatically update active slide in Navbar as user scrolls
  useEffect(() => {
    const slideIds = [1, 2, 3, 4, 5, 6, 7];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = entry.target.id.match(/slide-(\d+)/);
          if (match) {
            const slideNum = parseInt(match[1], 10);
            setActiveSlide(slideNum);
          }
        }
      });
    }, observerOptions);

    slideIds.forEach((id) => {
      const el = document.getElementById(`slide-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectSlide = (slideId: number) => {
    setActiveSlide(slideId);
    const target = document.getElementById(`slide-${slideId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevSlide = () => {
    const prev = activeSlide <= 1 ? 7 : activeSlide - 1;
    handleSelectSlide(prev);
  };

  const handleNextSlide = () => {
    const next = activeSlide >= 7 ? 1 : activeSlide + 1;
    handleSelectSlide(next);
  };

  const handleScrollTop = () => {
    handleSelectSlide(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* 7-Item Navbar */}
      <Navbar
        activeSlide={activeSlide}
        onSelectSlide={handleSelectSlide}
      />

      {/* Main Content Area containing all 7 Slides */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Slide 1: Green Shop . Com বিজনেস মডেল Hero Section */}
        <HeroSection />

        {/* Slide 2: ডেলিভারি ম্যানেজমেন্ট */}
        <SlideSection2 />

        {/* Slide 3: এর ফিচার ও কার্যপ্রণালী */}
        <SlideSection3 />

        {/* Slide 4: আমাদের প্ল্যাটফর্ম এ কেন মানুষ আসবে? */}
        <SlideSection4 />

        {/* Slide 5: Step 2 progeect (বন্দর বা গ্লোবাল হাব) */}
        <SlideSection5 />

        {/* Slide 6: দ্বিতীয় লক্ষ্য (উৎপাদন, রফতানি, GDP, কর্মসংস্থান) */}
        <SlideSection6 />

        {/* Slide 7: কীভাবে বিশ্ববাজারে রাজত্ব করবে */}
        <SlideSection7 />
      </main>

      {/* Quiet Footer with Slide Mirror */}
      <Footer onSelectSlide={handleSelectSlide} />

      {/* Floating Quick Controller with Keyboard Listeners */}
      <SlideController
        currentSlide={activeSlide}
        totalSlides={7}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
        onScrollTop={handleScrollTop}
      />
    </div>
  );
}
