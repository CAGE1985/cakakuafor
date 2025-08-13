import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          <Reveal>
            {/* 404 Sayısı */}
            <div className="mb-8">
              <h1 className="text-9xl sm:text-[12rem] font-bold text-gray-800 mb-4">
                404
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto rounded-full mb-8"></div>
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            {/* Başlık */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Sayfa Bulunamadı
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
              Ana sayfaya dönerek istediğiniz içeriği bulabilirsiniz.
            </p>
          </Reveal>

          <Reveal delayMs={400}>
            {/* Ana Sayfa Butonu */}
            <div className="mb-12">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ana Sayfaya Dön
              </Link>
            </div>
          </Reveal>

          <Reveal delayMs={600}>
            {/* Popüler Sayfalar */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Popüler Sayfalarımız
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { href: "/fiyat-listesi", label: "Fiyat Listesi", icon: "💰" },
                  { href: "/galeri", label: "Galeri", icon: "🖼️" },
                  { href: "/ekibimiz", label: "Ekibimiz", icon: "👥" },
                  { href: "/bizeulasin", label: "İletişim", icon: "📞" },
                ].map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <span className="text-2xl">{page.icon}</span>
                    <span className="font-medium text-gray-700 group-hover:text-gray-900">
                      {page.label}
                    </span>
                    <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={800}>
            {/* İletişim Bilgileri */}
            <div className="mt-12 bg-gradient-to-r from-gray-800 to-black rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Yardıma mı ihtiyacınız var?
              </h3>
              <p className="text-gray-300 mb-6">
                Bizimle iletişime geçin, size yardımcı olalım.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:05548843878"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905548843878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
