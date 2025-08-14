"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ImageIcon } from "@/components/Icons";

// YouTube video ID'leri - CAKA Kuaför kanalından
const YOUTUBE_VIDEOS = [
  {
    id: "JHzg1mh1NoA",
    title: "ANTALYA FASHION WEEK - CAKA Kuaför",
    description: "Antalya Fashion Week etkinliğinde CAKA Kuaför çalışmaları",
    thumbnail: "https://img.youtube.com/vi/JHzg1mh1NoA/maxresdefault.jpg"
  },
  {
    id: "keUpu5dfJTI", 
    title: "ANTALYA FASHION WEEK - Özel Tasarımlar",
    description: "Antalya Fashion Week'te sergilediğimiz özel saç tasarımları",
    thumbnail: "https://img.youtube.com/vi/keUpu5dfJTI/maxresdefault.jpg"
  },
  {
    id: "R1kI9CxdRRw",
    title: "ANTALYA FASHION WEEK - Moda Defilesi",
    description: "Antalya Fashion Week moda defilesinde CAKA Kuaför imzası",
    thumbnail: "https://img.youtube.com/vi/R1kI9CxdRRw/maxresdefault.jpg"
  },
  {
    id: "LfS3S-9a1KI",
    title: "ANTALYA FASHION WEEK - Koleksiyon",
    description: "Antalya Fashion Week'te sergilediğimiz özel koleksiyon",
    thumbnail: "https://img.youtube.com/vi/LfS3S-9a1KI/maxresdefault.jpg"
  },
  {
    id: "y2_Tuu3_-oM",
    title: "SALONUMUZ - CAKA Kuaför",
    description: "CAKA Kuaför salonumuzun tanıtım videosu",
    thumbnail: "https://img.youtube.com/vi/y2_Tuu3_-oM/maxresdefault.jpg"
  }
];

export default function VideolarPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedVideo && e.key === 'Escape') {
      closeVideo();
    }
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionHeading 
                title="Videolar" 
                subtitle="Çalışmalarımızdan Kareler" 
                icon={<ImageIcon />} 
              />
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                CAKA Kuaför&apos;ün profesyonel çalışmalarından video kareleri. 
                Saç kesimi, boyama, makyaj ve styling süreçlerimizi izleyin.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                YouTube Kanalımız
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                CAKA Kuaför YouTube kanalımızda en güncel çalışmalarımızı takip edin
              </p>
              <a
                href="https://www.youtube.com/@cakakuafor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube Kanalımızı Ziyaret Edin
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Videos Grid */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Öne Çıkan Videolar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                En popüler ve güncel video içeriklerimizi keşfedin
              </p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {YOUTUBE_VIDEOS.map((video, index) => (
                <Reveal key={video.id} delayMs={index * 100}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-gray-200 overflow-hidden">
                      {video.id === "y2_Tuu3_-oM" ? (
                        // Salonumuz için özel placeholder
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-4xl mb-2">💈</div>
                            <div className="text-lg font-bold">Salonumuz</div>
                            <div className="text-sm">Tanıtım Videosu</div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <button
                          onClick={() => openVideo(video.id)}
                          className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 transform group-hover:scale-110"
                        >
                          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                      </div>
                      
                      {/* YouTube Logo */}
                      <div className="absolute top-3 right-3">
                        <svg className="w-8 h-8 text-red-600 bg-white rounded-full p-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {video.description}
                      </p>
                      <button
                        onClick={() => openVideo(video.id)}
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        İzle
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Daha Fazla Video İçin
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              YouTube kanalımızda daha fazla video içeriği bulabilir, 
              en güncel çalışmalarımızı takip edebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                           <a
               href="https://www.youtube.com/@cakakuafor"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
             >
               <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
               </svg>
               YouTube Kanalımız
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
