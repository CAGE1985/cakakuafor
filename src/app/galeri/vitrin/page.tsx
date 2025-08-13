"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ImageIcon } from "@/components/Icons";
import Image from "next/image";

// 3 vitrin resmi için array
const VITRIN_RESIMLERI = [
  {
    id: 1,
    src: "/vitrin/1.jpg",
    alt: "Vitrin Koleksiyonu 1",
    title: "Vitrin Koleksiyonu 1",
  },
  {
    id: 2,
    src: "/vitrin/2.jpg",
    alt: "Vitrin Koleksiyonu 2",
    title: "Vitrin Koleksiyonu 2",
  },
  {
    id: 3,
    src: "/vitrin/3.jpg",
    alt: "Vitrin Koleksiyonu 3",
    title: "Vitrin Koleksiyonu 3",
  },
];

export default function VitrinPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % VITRIN_RESIMLERI.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? VITRIN_RESIMLERI.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionHeading 
                title="Vitrin Koleksiyonları" 
                subtitle="Özel Vitrin Çalışmaları" 
                icon={<ImageIcon />} 
              />
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                CAKA Kuaför&apos;ün özel vitrin koleksiyonlarını keşfedin. 
                Her vitrin çalışması benzersiz ve özgün tasarımımızı yansıtır.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Vitrin Galerisi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                3 farklı vitrin koleksiyonumuzu inceleyin. Her tasarım özel ve benzersizdir.
              </p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VITRIN_RESIMLERI.map((resim, index) => (
                <Reveal key={resim.id} delayMs={index * 200}>
                  <div 
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    {/* Gerçek resim */}
                    <Image
                      src={resim.src}
                      alt={resim.alt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>

                    {/* Resim başlığı */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg">{resim.title}</h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative">
              <Image
                src={VITRIN_RESIMLERI[selectedImage].src}
                alt={VITRIN_RESIMLERI[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              {selectedImage + 1} / {VITRIN_RESIMLERI.length}
            </div>

            {/* Image title */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              {VITRIN_RESIMLERI[selectedImage].title}
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
