import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 text-black">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/cakalogo.png" alt="Kuaför Logo" width={144} height={42} className="bg-transparent object-contain" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black/90">Menü</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li><Link href="/hakkimizda" className="hover:text-black">Hakkımızda</Link></li>
              <li><Link href="/ekibimiz" className="hover:text-black">Ekibimiz</Link></li>
              <li><Link href="/fiyat-listesi" className="hover:text-black">Fiyat Listesi</Link></li>
              <li><Link href="/mikro-kaynak" className="hover:text-black">Mikro Kaynak</Link></li>
              <li><Link href="/anket" className="hover:text-black">Anket</Link></li>
              <li><Link href="/bize-ulasin" className="hover:text-black">Bize Ulaşın</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black/90 flex items-center gap-2">
              <svg className="w-5 h-5 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              İletişim
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-black/70">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-black/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0554 884 38 78</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-black/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Şirinyalı, İsmet Gökşen Cd<br />Muratpaşa/Antalya</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black/90 flex items-center gap-2">
              <svg className="w-5 h-5 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Çalışma Saatleri
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-black/70">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Salı-Cmt: 09:00 - 19:00</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Pazar-Pazartesi: Kapalı</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-black/10 pt-6 text-xs text-black/60">
          <p className="flex items-center gap-2">
            <span>© Caka Kuaför Tüm hakları saklıdır.</span>
            <a 
              href="https://wa.me/905416311158" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-black/80 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all duration-200 font-medium text-xs"
            >
              <svg className="w-4 h-4 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Tasarım Murat KOCATAŞ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

