"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const SLIDES: Slide[] = [
  { src: "/sliders/1.jpg", alt: "Slide 1" },
  { src: "/sliders/2.jpg", alt: "Slide 2" },
  { src: "/sliders/3.jpg", alt: "Slide 3" },
  { src: "/sliders/4.jpg", alt: "Slide 4" },
  { src: "/sliders/5.jpg", alt: "Slide 5" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [errored, setErrored] = useState<Record<number, boolean>>({});
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    intervalRef.current = window.setInterval(next, 2000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const pauseAuto = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeAuto = () => {
    if (!intervalRef.current) intervalRef.current = window.setInterval(next, 2000);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-none md:rounded-xl border border-black/10 select-none"
      onMouseEnter={pauseAuto}
      onMouseLeave={resumeAuto}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
        pauseAuto();
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current !== null) {
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 50) {
            delta > 0 ? prev() : next();
          }
        }
        touchStartX.current = null;
        resumeAuto();
      }}
      aria-roledescription="carousel"
    >
      <div
        className="relative h-[300px] sm:h-[360px] lg:h-[460px]"
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== index}
          >
            {!errored[i] ? (
              // Using img instead of next/image to avoid dev log noise for missing placeholders
              // and to allow simple onError fallback
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
                onError={() => setErrored((s) => ({ ...s, [i]: true }))}
              />
            ) : (
              <div className="h-full w-full bg-[linear-gradient(135deg,#e5e7eb,white)] flex items-center justify-center text-center p-6">
                <div>
                  <div className="text-2xl font-semibold">Slider görseli</div>
                  <div className="text-sm text-black/60 mt-1">Görsellerinizi şu yola ekleyin:</div>
                  <code className="text-xs text-black/70">/public/sliders/1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg</code>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
        <button
          type="button"
          aria-label="Önceki"
          onClick={(e) => {
            e.preventDefault();
            prev();
          }}
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Sonraki"
          onClick={(e) => {
            e.preventDefault();
            next();
          }}
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-black" : "w-2 bg-black/40"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

