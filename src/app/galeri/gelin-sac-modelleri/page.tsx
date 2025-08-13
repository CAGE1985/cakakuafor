"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { HeartIcon } from "@/components/Icons";
import Image from "next/image";

export const metadata = {
  title: "Gelin Saç Modelleri - CAKA Kuaför",
  description: "Muhteşem gelin saç modelleri galerimizi keşfedin. 46 farklı tasarım ile gelinleriniz için en mükemmel saç modelini seçin.",
};

// 46 gelin saç modeli görseli için array - yeni dosya isimleri
const GELIN_SAC_MODELLERI = Array.from({ length: 46 }, (_, i) => ({
  id: i + 1,
  src: `/gelin-sac-modelleri/${i + 1}.jpg`,
  alt: `Gelin Saç Modeli ${i + 1}`,
  title: `Gelin Saç Modeli ${i + 1}`,
}));

export default function GelinSacModelleriPage() {
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
      setSelectedImage((selectedImage + 1) % GELIN_SAC_MODELLERI.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? GELIN_SAC_MODELLERI.length - 1 : selectedImage - 1);
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
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionHeading 
                title="Gelin Saç Modelleri" 
                subtitle="Muhteşem Tasarımlar" 
                icon={<HeartIcon />} 
              />
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                En güzel gününüz için özenle seçilmiş 46 farklı gelin saç modeli. 
                Her tasarım, gelinlerinizin hayallerini gerçeğe dönüştürmek için yaratıldı.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {GELIN_SAC_MODELLERI.map((model, index) => (
                <Reveal key={model.id} delayMs={index * 50}>
                  <div 
                    className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-200 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    {/* Gerçek görsel */}
                    <Image
                      src={model.src}
                      alt={model.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
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
                src={GELIN_SAC_MODELLERI[selectedImage].src}
                alt={GELIN_SAC_MODELLERI[selectedImage].alt}
                width={800}
                height={800}
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
              {selectedImage + 1} / {GELIN_SAC_MODELLERI.length}
            </div>

            {/* Image title */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              {GELIN_SAC_MODELLERI[selectedImage].title}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Hayalinizdeki Gelin Saç Modelini Seçin
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Beğendiğiniz modeli seçin, uzman ekibimizle iletişime geçin ve en güzel gününüz için mükemmel saç tasarımınızı planlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05548843878"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905548843878"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
