// src/components/Hero/Hero.tsx
import React, { useEffect, useState } from "react";
import { HERO_SLIDES, BUTTON_LABELS } from "./constants";
import type { HeroSlide } from "./types";

const AUTO_PLAY_MS = 7000;

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slides: HeroSlide[] = HERO_SLIDES;

  const next = () => setCurrent((i) => (i + 1) % slides.length);
  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (idx: number) => setCurrent(idx);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, [slides.length]);

  const active = slides[current];

  return (
    <section className="relative h-[88svh] md:h-[92svh] overflow-hidden">
      {/* BG crossfade layers */}
      <div className="absolute inset-0">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-700 ${idx === current ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${s.image})` }}
            aria-hidden={idx !== current}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      {/* Контент */}
<div className="relative z-10 h-full flex items-center">
  <div className="w-full">
    <div className="max-w-[1280px] mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 text-white hero-content">
      <h1 className="Montserrat text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight animate-fade-in-up">
        {active.title}
      </h1>

      {active.subtitle && (
        <p className="mt-4 text-base sm:text-lg md:text-xl font-light animate-fade-in-up animation-delay-100">
          {active.subtitle}
        </p>
      )}

      {active.description && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg/7 max-w-[60ch] animate-fade-in-up animation-delay-200">
          {active.description}
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up animation-delay-300">
        <a
          href="#order"
          className="inline-flex items-center justify-center rounded-xl bg-neutral-600/90 hover:bg-neutral-600 active:bg-neutral-700 px-5 py-3 text-sm sm:text-base font-medium shadow-md transition"
        >
          {BUTTON_LABELS.ORDER}
        </a>
        <a
          href="#prices"
          className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 ring-1 ring-white/30 px-5 py-3 text-sm sm:text-base font-medium transition"
        >
          {BUTTON_LABELS.PRICES}
        </a>
      </div>
    </div>
  </div>
</div>


      {/* Controls */}
      {slides.length > 1 && (
        <>
          {/* arrows */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4">
            <button
              onClick={prev}
              className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-black/30 hover:bg-black/45 active:scale-95 text-white focus:outline-none focus:ring-2 focus:ring-white/60 transition"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-black/30 hover:bg-black/45 active:scale-95 text-white focus:outline-none focus:ring-2 focus:ring-white/60 transition"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          {/* dots */}
          <div className="absolute bottom-5 left-6 sm:left-10 lg:left-16 flex gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goTo(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${idx === current ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === current}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
