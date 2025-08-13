import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ImageIcon } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: "Galeri - CAKA Kuaför",
  description: "CAKA Kuaför galeri sayfası. Salonumuz, videolar, gelin saç modelleri, Instagram paylaşımları ve koleksiyon çalışmalarımızı keşfedin.",
};

const GALERI_KATEGORILERI = [
  {
    id: "salonumuz",
    title: "Salonumuz",
    subtitle: "Modern ve Şık Tasarım",
    description: "Salonumuzun modern ve şık tasarımını keşfedin. Müşterilerimizin konforu için özenle tasarlanmış mekanımız.",
    href: "/galeri/salonumuz",
    icon: "🏠",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    id: "videolar",
    title: "Videolar",
    subtitle: "Çalışmalarımızdan Kareler",
    description: "Profesyonel çalışmalarımızdan video kareleri. Saç kesimi, boyama ve makyaj süreçlerimizi izleyin.",
    href: "/galeri/videolar",
    icon: "🎥",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    id: "gelin-sac-modelleri",
    title: "Gelin Saç Modelleri",
    subtitle: "46 Muhteşem Tasarım",
    description: "En güzel gününüz için özenle seçilmiş 46 farklı gelin saç modeli. Her tasarım hayallerinizi gerçeğe dönüştürür.",
    href: "/galeri/gelin-sac-modelleri",
    icon: "💕",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50"
  },
  {
    id: "instagram",
    title: "Instagram Paylaşımlarımız",
    subtitle: "Güncel Çalışmalar",
    description: "Instagram hesabımızdan en güncel çalışmalarımızı takip edin. Yeni trendler ve yaratıcı tasarımlar.",
    href: "/galeri/instagram",
    icon: "📸",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50"
  },
  {
    id: "koleksiyon",
    title: "Koleksiyon Çalışmalarımız",
    subtitle: "Özel Tasarımlar",
    description: "Özel koleksiyon çalışmalarımızı keşfedin. Her tasarım benzersiz ve özgün yaratıcılığımızı yansıtır.",
    href: "/galeri/koleksiyon",
    icon: "✨",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50"
  },
  {
    id: "vitrin",
    title: "Vitrin Koleksiyonları",
    subtitle: "Sergi Çalışmaları",
    description: "Vitrin sergilerimizde yer alan özel koleksiyonlarımızı inceleyin. Yaratıcılığımızın en güzel örnekleri.",
    href: "/galeri/vitrin",
    icon: "🖼️",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50"
  }
];

export default function GaleriPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionHeading 
                title="Galeri" 
                subtitle="Çalışmalarımızdan Örnekler" 
                icon={<ImageIcon />} 
              />
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                CAKA Kuaför&apos;ün yaratıcı çalışmalarını keşfedin. Salonumuzdan gelin saç modellerine, 
                videolardan Instagram paylaşımlarımıza kadar tüm galerilerimizi inceleyin.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALERI_KATEGORILERI.map((kategori, index) => (
              <Reveal key={kategori.id} delayMs={index * 100}>
                <Link href={kategori.href} className="group">
                  <div className={`h-full bg-gradient-to-br ${kategori.bgColor} rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${kategori.color} text-white rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {kategori.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                        {kategori.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 mb-3">
                        {kategori.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {kategori.description}
                      </p>
                      <div className="mt-6 flex items-center justify-center">
                        <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${kategori.color} text-white text-sm font-semibold rounded-lg group-hover:scale-105 transition-transform duration-300`}>
                          Galeriyi Gör
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Beğendiğiniz Çalışmayı Seçin
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Galerilerimizde beğendiğiniz çalışmayı seçin ve uzman ekibimizle iletişime geçerek 
              kendi tasarımınızı planlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05548843878"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
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

