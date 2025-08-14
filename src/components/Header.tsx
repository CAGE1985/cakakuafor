"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type NavigationItem = {
  href: string;
  label: string;
};

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const NAVIGATION_ITEMS: NavigationItem[] = [
    { href: "/", label: t('navigation.home') },
    { href: "/hakkimizda", label: t('navigation.about') },
    { href: "/ekibimiz", label: t('navigation.team') },
    { href: "/fiyat-listesi", label: t('navigation.prices') },
    { href: "/mikrokaynak", label: t('navigation.microKaynak') },
    { href: "/galeri", label: t('navigation.gallery') },
    { href: "/anket", label: t('navigation.survey') },
    { href: "/bizeulasin", label: t('navigation.contact') },
  ];






  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
    <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
            ? "bg-white/95 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 min-h-0">
            <Link href="/" className="flex items-center gap-0 h-full py-3">
            {logoError ? (
              <span className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-black text-white text-base font-bold">C</span>
            ) : (
              <Image
                src="/cakalogo.png"
                alt="Logo"
                width={216}
                height={80}
                className="bg-transparent object-contain max-h-full"
                onError={() => setLogoError(true)}
                priority
              />
            )}
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                
                // Galeri artık dropdown değil, direkt link
                
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black/80 hover:text-black hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* Language Switcher */}
            <div className="ml-4 flex items-center gap-1">
              <button
                onClick={() => setLanguage('tr')}
                className={`p-1 rounded transition-all duration-300 hover:scale-110 ${
                  language === 'tr' 
                    ? 'ring-2 ring-black' 
                    : 'hover:ring-1 hover:ring-gray-300'
                }`}
                title="Türkçe"
              >
                <Image 
                  src="/icons/flags/tr.svg" 
                  alt="Türkçe" 
                  width={24} 
                  height={18} 
                  className="rounded-sm"
                />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`p-1 rounded transition-all duration-300 hover:scale-110 ${
                  language === 'en' 
                    ? 'ring-2 ring-black' 
                    : 'hover:ring-1 hover:ring-gray-300'
                }`}
                title="English"
              >
                <Image 
                  src="/icons/flags/en.svg" 
                  alt="English" 
                  width={24} 
                  height={18} 
                  className="rounded-sm"
                />
              </button>
            </div>
          </nav>

          <button
            aria-label="Menüyü Aç/Kapat"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/20 text-black hover:bg-black/5"
            onClick={() => setIsMenuOpen((state) => !state)}
          >
            <span className="sr-only">Menü</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-black transition-transform ${
                  isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-black transition-opacity ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-black transition-transform ${
                  isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      </header>

      {/* Mobile Menu Portal - Outside Header */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[9999]"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999
          }}
        >
          {/* Blurred Background */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Modal */}
          <div
            className="fixed inset-0 flex items-center justify-center"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000
            }}
          >
            <div
              className="w-[95%] max-w-sm bg-white rounded-2xl shadow-2xl"
              style={{
                maxHeight: '80vh',
                overflowY: 'auto'
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-black/10">
                <h2 className="text-xl font-bold text-black">{t('navigation.menu')}</h2>
                
                {/* Language Switcher - Mobile Header */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setLanguage('tr')}
                    className={`px-2 py-1 rounded transition-all duration-300 hover:scale-110 border ${
                      language === 'tr' 
                        ? 'border-black bg-red-500 text-white' 
                        : 'border-gray-300 bg-white text-black hover:border-gray-400'
                    }`}
                    title="Türkçe"
                  >
                    <span className="text-xs font-medium">TR</span>
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 rounded transition-all duration-300 hover:scale-110 border ${
                      language === 'en' 
                        ? 'border-black bg-blue-600 text-white' 
                        : 'border-gray-300 bg-white text-black hover:border-gray-400'
                    }`}
                    title="English"
                  >
                    <span className="text-xs font-medium">EN</span>
                  </button>
                </div>
                
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {t('navigation.close')}
                </button>
              </div>

              {/* Menu Grid */}
          <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/"
                    className={`group p-3 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      pathname === "/"
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-400 shadow-lg"
                        : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        pathname === "/"
                          ? "bg-white/20 text-white"
                          : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <div className={`font-semibold text-xs transition-colors duration-300 ${
                          pathname === "/" ? "text-white" : "text-black group-hover:text-blue-600"
                        }`}>{t('mobileMenu.home.title')}</div>
                        <div className={`text-xs transition-colors duration-300 ${
                          pathname === "/" ? "text-white/80" : "text-black/60 group-hover:text-blue-500"
                        }`}>{t('mobileMenu.home.subtitle')}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/hakkimizda"
                    className={`group p-3 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      pathname === "/hakkimizda"
                        ? "bg-gradient-to-br from-purple-500 to-purple-600 border-purple-400 shadow-lg"
                        : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        pathname === "/hakkimizda"
                          ? "bg-white/20 text-white"
                          : "bg-purple-100 text-purple-600 group-hover:bg-purple-200"
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className={`font-semibold text-xs transition-colors duration-300 ${
                          pathname === "/hakkimizda" ? "text-white" : "text-black group-hover:text-purple-600"
                        }`}>{t('mobileMenu.about.title')}</div>
                        <div className={`text-xs transition-colors duration-300 ${
                          pathname === "/hakkimizda" ? "text-white/80" : "text-black/60 group-hover:text-purple-500"
                        }`}>{t('mobileMenu.about.subtitle')}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/ekibimiz"
                    className={`group p-3 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      pathname === "/ekibimiz"
                        ? "bg-gradient-to-br from-green-500 to-green-600 border-green-400 shadow-lg"
                        : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-green-300 hover:bg-gradient-to-br hover:from-green-50 hover:to-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        pathname === "/ekibimiz"
                          ? "bg-white/20 text-white"
                          : "bg-green-100 text-green-600 group-hover:bg-green-200"
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className={`font-semibold text-xs transition-colors duration-300 ${
                          pathname === "/ekibimiz" ? "text-white" : "text-black group-hover:text-green-600"
                        }`}>{t('mobileMenu.team.title')}</div>
                        <div className={`text-xs transition-colors duration-300 ${
                          pathname === "/ekibimiz" ? "text-white/80" : "text-black/60 group-hover:text-green-500"
                        }`}>{t('mobileMenu.team.subtitle')}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/fiyat-listesi"
                    className={`group p-3 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      pathname === "/fiyat-listesi"
                        ? "bg-gradient-to-br from-yellow-500 to-yellow-600 border-yellow-400 shadow-lg"
                        : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-yellow-300 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        pathname === "/fiyat-listesi"
                          ? "bg-white/20 text-white"
                          : "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200"
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <div className={`font-semibold text-xs transition-colors duration-300 ${
                          pathname === "/fiyat-listesi" ? "text-white" : "text-black group-hover:text-yellow-600"
                        }`}>{t('mobileMenu.prices.title')}</div>
                        <div className={`text-xs transition-colors duration-300 ${
                          pathname === "/fiyat-listesi" ? "text-white/80" : "text-black/60 group-hover:text-yellow-500"
                        }`}>{t('mobileMenu.prices.subtitle')}</div>
                      </div>
                    </div>
            </Link>

                  <Link
                    href="/mikrokaynak"
                    className={`group p-3 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      pathname === "/mikrokaynak"
                        ? "bg-gradient-to-br from-orange-500 to-orange-600 border-orange-400 shadow-lg"
                        : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        pathname === "/mikrokaynak"
                          ? "bg-white/20 text-white"
                          : "bg-orange-100 text-orange-600 group-hover:bg-orange-200"
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className={`font-semibold text-xs transition-colors duration-300 ${
                          pathname === "/mikrokaynak" ? "text-white" : "text-black group-hover:text-orange-600"
                        }`}>{t('mobileMenu.microKaynak.title')}</div>
                        <div className={`text-xs transition-colors duration-300 ${
                          pathname === "/mikrokaynak" ? "text-white/80" : "text-black/60 group-hover:text-orange-500"
                        }`}>{t('mobileMenu.microKaynak.subtitle')}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/galeri"
                    className={`group p-3 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      pathname.startsWith("/galeri")
                        ? "bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 shadow-lg"
                        : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-pink-300 hover:bg-gradient-to-br hover:from-pink-50 hover:to-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        pathname.startsWith("/galeri")
                          ? "bg-white/20 text-white"
                          : "bg-pink-100 text-pink-600 group-hover:bg-pink-200"
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className={`font-semibold text-xs transition-colors duration-300 ${
                          pathname.startsWith("/galeri") ? "text-white" : "text-black group-hover:text-pink-600"
                        }`}>{t('mobileMenu.gallery.title')}</div>
                        <div className={`text-xs transition-colors duration-300 ${
                          pathname.startsWith("/galeri") ? "text-white/80" : "text-black/60 group-hover:text-pink-500"
                        }`}>{t('mobileMenu.gallery.subtitle')}</div>
                      </div>
                    </div>
                  </Link>
                  
                  

                  <Link
                    href="/anket"
                    className={`group p-3 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      pathname === "/anket"
                        ? "bg-gradient-to-br from-indigo-500 to-indigo-600 border-indigo-400 shadow-lg"
                        : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-indigo-300 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        pathname === "/anket"
                          ? "bg-white/20 text-white"
                          : "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200"
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <div className={`font-semibold text-xs transition-colors duration-300 ${
                          pathname === "/anket" ? "text-white" : "text-black group-hover:text-indigo-600"
                        }`}>{t('mobileMenu.survey.title')}</div>
                        <div className={`text-xs transition-colors duration-300 ${
                          pathname === "/anket" ? "text-white/80" : "text-black/60 group-hover:text-indigo-500"
                        }`}>{t('mobileMenu.survey.subtitle')}</div>
                      </div>
                    </div>
                  </Link>

              <Link
                     href="/bizeulasin"
                     className={`group p-3 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                       pathname === "/bizeulasin"
                         ? "bg-gradient-to-br from-red-500 to-red-600 border-red-400 shadow-lg"
                         : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-red-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white"
                     }`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     <div className="flex flex-col items-center text-center space-y-1">
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                         pathname === "/bizeulasin"
                           ? "bg-white/20 text-white"
                           : "bg-red-100 text-red-600 group-hover:bg-red-200"
                       }`}>
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                         </svg>
                       </div>
                       <div>
                         <div className={`font-semibold text-xs transition-colors duration-300 ${
                           pathname === "/bizeulasin" ? "text-white" : "text-black group-hover:text-red-600"
                         }`}>{t('mobileMenu.contact.title')}</div>
                         <div className={`text-xs transition-colors duration-300 ${
                           pathname === "/bizeulasin" ? "text-white/80" : "text-black/60 group-hover:text-red-500"
                         }`}>{t('mobileMenu.contact.subtitle')}</div>
                       </div>
                     </div>
              </Link>
                </div>

                {/* Contact Channels */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-black/80 mb-3 text-center">{t('mobileMenu.contactChannels')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/905548843878"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span className="text-sm">WhatsApp</span>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:05548843878"
                      className="group flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{t('mobileMenu.call')}</span>
                    </a>

                    {/* Location */}
                    <a
                      href="https://maps.google.com/maps?q=Caka+Kuaför,+Şirinyalı,+İsmet+Gökşen+Cd.,+07160+Muratpaşa/Antalya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{t('mobileMenu.location')}</span>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/cakakuafor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-sm">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
