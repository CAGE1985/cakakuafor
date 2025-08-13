"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ImageIcon } from "@/components/Icons";
import Image from "next/image";

// Mevcut salon resimleri için array
const SALON_RESIMLERI = [
  { id: 1, src: "/salonumuz/1.jpg", alt: "Salonumuz 1", title: "Salonumuz 1" },
  { id: 2, src: "/salonumuz/2.jpg", alt: "Salonumuz 2", title: "Salonumuz 2" },
  { id: 3, src: "/salonumuz/3.jpg", alt: "Salonumuz 3", title: "Salonumuz 3" },
  { id: 4, src: "/salonumuz/4.jpg", alt: "Salonumuz 4", title: "Salonumuz 4" },
  { id: 5, src: "/salonumuz/5.jpg", alt: "Salonumuz 5", title: "Salonumuz 5" },
  { id: 6, src: "/salonumuz/6.jpg", alt: "Salonumuz 6", title: "Salonumuz 6" },
  { id: 7, src: "/salonumuz/7.jpg", alt: "Salonumuz 7", title: "Salonumuz 7" },
  { id: 8, src: "/salonumuz/8.jpg", alt: "Salonumuz 8", title: "Salonumuz 8" },
  { id: 13, src: "/salonumuz/13.jpg", alt: "Salonumuz 13", title: "Salonumuz 13" },
  { id: 14, src: "/salonumuz/14.jpg", alt: "Salonumuz 14", title: "Salonumuz 14" },
  { id: 15, src: "/salonumuz/15.jpg", alt: "Salonumuz 15", title: "Salonumuz 15" },
  { id: 16, src: "/salonumuz/16.jpg", alt: "Salonumuz 16", title: "Salonumuz 16" },
  { id: 17, src: "/salonumuz/17.jpg", alt: "Salonumuz 17", title: "Salonumuz 17" },
  { id: 18, src: "/salonumuz/18.jpg", alt: "Salonumuz 18", title: "Salonumuz 18" },
  { id: 19, src: "/salonumuz/19.jpg", alt: "Salonumuz 19", title: "Salonumuz 19" },
  { id: 20, src: "/salonumuz/20.jpg", alt: "Salonumuz 20", title: "Salonumuz 20" },
  { id: 21, src: "/salonumuz/21.jpg", alt: "Salonumuz 21", title: "Salonumuz 21" },
  { id: 26, src: "/salonumuz/26.jpg", alt: "Salonumuz 26", title: "Salonumuz 26" },
  { id: 27, src: "/salonumuz/27.jpg", alt: "Salonumuz 27", title: "Salonumuz 27" },
  { id: 28, src: "/salonumuz/28.jpg", alt: "Salonumuz 28", title: "Salonumuz 28" },
  { id: 29, src: "/salonumuz/29.jpg", alt: "Salonumuz 29", title: "Salonumuz 29" },
  { id: 30, src: "/salonumuz/30.jpg", alt: "Salonumuz 30", title: "Salonumuz 30" },
  { id: 31, src: "/salonumuz/31.jpg", alt: "Salonumuz 31", title: "Salonumuz 31" },
  { id: 32, src: "/salonumuz/32.jpg", alt: "Salonumuz 32", title: "Salonumuz 32" },
  { id: 33, src: "/salonumuz/33.jpg", alt: "Salonumuz 33", title: "Salonumuz 33" },
];

export default function SalonumuzPage() {
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
      setSelectedImage((selectedImage + 1) % SALON_RESIMLERI.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? SALON_RESIMLERI.length - 1 : selectedImage - 1);
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
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionHeading 
                title="Salonumuz" 
                subtitle="Modern ve Şık Tasarım" 
                icon={<ImageIcon />} 
              />
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                CAKA Kuaför&apos;ün modern ve şık tasarımını keşfedin. 
                Müşterilerimizin konforu için özenle tasarlanmış mekanımızda 
                profesyonel hizmet alabilirsiniz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Salonumuzu Tanıyın
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Modern tasarımımızı ve konforlu ortamımızı video ile keşfedin
              </p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/salonumuz/video-poster.jpg"
              >
                <source src="/salonumuz/salon-video.mp4" type="video/mp4" />
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
              
              {/* Video overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Salon Fotoğrafları
              </h2>
                             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                 25 farklı açıdan salonumuzun modern ve şık tasarımını inceleyin
               </p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {SALON_RESIMLERI.map((resim, index) => (
                <Reveal key={resim.id} delayMs={index * 50}>
                  <div 
                    className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                                         {/* Gerçek resim */}
                     <Image
                       src={resim.src}
                       alt={resim.alt}
                       width={300}
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
                src={SALON_RESIMLERI[selectedImage].src}
                alt={SALON_RESIMLERI[selectedImage].alt}
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
              {selectedImage + 1} / {SALON_RESIMLERI.length}
            </div>

            {/* Image title */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              {SALON_RESIMLERI[selectedImage].title}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Salonumuzu Ziyaret Edin
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Modern ve konforlu ortamımızda profesyonel hizmet almak için 
              hemen randevu alın ve salonumuzu ziyaret edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05548843878"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
