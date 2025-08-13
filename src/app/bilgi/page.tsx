'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function BilgiPage() {
  useEffect(() => {
    // Header ve footer'ı gizle
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (main) main.style.paddingTop = '0';
    
    // Cleanup function
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (main) main.style.paddingTop = '';
    };
  }, []);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (path === '/') {
      router.push('/');
    } else if (path === 'https://g.page/r/Cc3vk4Jw_VcdEBM/review') {
      window.open('https://g.page/r/Cc3vk4Jw_VcdEBM/review', '_blank');
    } else if (path === 'https://www.instagram.com/cakakuafor') {
      window.open('https://www.instagram.com/cakakuafor', '_blank');
    } else if (path === 'https://wa.me/905548843878') {
      window.open('https://wa.me/905548843878', '_blank');
    } else {
      router.push(path);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        {/* Başlık */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white mb-6">Hızlı Erişim</h1>
          
          {/* Çalışma Saatleri */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-lg font-semibold text-white mb-3">Çalışma Saatleri</h2>
            <div className="space-y-2 text-gray-300">
              <p>Hafta içi: 09:00 - 19:00</p>
              <p>Cumartesi: 09:00 - 19:00</p>
            </div>
          </div>

          {/* Uyarı Banner */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 border border-amber-400/30">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-white font-medium text-sm">
                Salonumuz Pazar ve Pazartesi günleri kapalıdır.
              </p>
            </div>
          </div>
        </div>

        {/* Hızlı Erişim Butonları */}
        <div className="grid grid-cols-2 gap-4">
          {/* Fiyat Listesi */}
          <button
            onClick={() => handleNavigation('/fiyat-listesi')}
            className="group bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl p-6 border border-purple-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Fiyat Listesi</span>
            </div>
          </button>

          {/* Google Yorumlar */}
          <button
            onClick={() => handleNavigation('https://g.page/r/Cc3vk4Jw_VcdEBM/review')}
            className="group bg-gradient-to-br from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-2xl p-6 border border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Google Yorumlar</span>
            </div>
          </button>

          {/* Ekibimiz */}
          <button
            onClick={() => handleNavigation('/ekibimiz')}
            className="group bg-gradient-to-br from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 rounded-2xl p-6 border border-green-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Ekibimiz</span>
            </div>
          </button>

          {/* Web Sitemiz */}
          <button
            onClick={() => handleNavigation('/')}
            className="group bg-gradient-to-br from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-2xl p-6 border border-indigo-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Web Sitemiz</span>
            </div>
          </button>

          {/* Instagram */}
          <button
            onClick={() => handleNavigation('https://www.instagram.com/cakakuafor')}
            className="group bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 rounded-2xl p-6 border border-pink-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Instagram</span>
            </div>
          </button>

          {/* WhatsApp İletişim */}
          <button
            onClick={() => handleNavigation('https://wa.me/905548843878')}
            className="group bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-2xl p-6 border border-green-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">WhatsApp İletişim</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
