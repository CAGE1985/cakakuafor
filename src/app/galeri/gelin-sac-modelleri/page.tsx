import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { HeartIcon } from "@/components/Icons";
import Image from "next/image";

export const metadata = {
  title: "Gelin Saç Modelleri - CAKA Kuaför",
  description: "Muhteşem gelin saç modelleri galerimizi keşfedin. 46 farklı tasarım ile gelinleriniz için en mükemmel saç modelini seçin.",
};

// 46 gelin saç modeli görseli için array - gerçek dosya isimleri
const GELIN_SAC_MODELLERI = [
  { id: 1, src: "/gelin-sac-modelleri/1.jpg", alt: "Gelin Saç Modeli 1", title: "Gelin Saç Modeli 1" },
  { id: 2, src: "/gelin-sac-modelleri/2.jpg", alt: "Gelin Saç Modeli 2", title: "Gelin Saç Modeli 2" },
  { id: 3, src: "/gelin-sac-modelleri/3.jpg", alt: "Gelin Saç Modeli 3", title: "Gelin Saç Modeli 3" },
  { id: 4, src: "/gelin-sac-modelleri/4.jpg", alt: "Gelin Saç Modeli 4", title: "Gelin Saç Modeli 4" },
  { id: 5, src: "/gelin-sac-modelleri/5.jpg", alt: "Gelin Saç Modeli 5", title: "Gelin Saç Modeli 5" },
  { id: 6, src: "/gelin-sac-modelleri/6.jpg", alt: "Gelin Saç Modeli 6", title: "Gelin Saç Modeli 6" },
  { id: 7, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (7).jpg", alt: "CAKA GELİNLERİ (7)", title: "CAKA GELİNLERİ (7)" },
  { id: 8, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (8).jpg", alt: "CAKA GELİNLERİ (8)", title: "CAKA GELİNLERİ (8)" },
  { id: 9, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (9).jpg", alt: "CAKA GELİNLERİ (9)", title: "CAKA GELİNLERİ (9)" },
  { id: 10, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (10).jpg", alt: "CAKA GELİNLERİ (10)", title: "CAKA GELİNLERİ (10)" },
  { id: 11, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (11).jpg", alt: "CAKA GELİNLERİ (11)", title: "CAKA GELİNLERİ (11)" },
  { id: 12, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (12).jpg", alt: "CAKA GELİNLERİ (12)", title: "CAKA GELİNLERİ (12)" },
  { id: 13, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (13).jpg", alt: "CAKA GELİNLERİ (13)", title: "CAKA GELİNLERİ (13)" },
  { id: 14, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (14).jpg", alt: "CAKA GELİNLERİ (14)", title: "CAKA GELİNLERİ (14)" },
  { id: 15, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (15).jpg", alt: "CAKA GELİNLERİ (15)", title: "CAKA GELİNLERİ (15)" },
  { id: 16, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (16).jpg", alt: "CAKA GELİNLERİ (16)", title: "CAKA GELİNLERİ (16)" },
  { id: 17, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (17).jpg", alt: "CAKA GELİNLERİ (17)", title: "CAKA GELİNLERİ (17)" },
  { id: 18, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (18).jpg", alt: "CAKA GELİNLERİ (18)", title: "CAKA GELİNLERİ (18)" },
  { id: 19, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (19).jpg", alt: "CAKA GELİNLERİ (19)", title: "CAKA GELİNLERİ (19)" },
  { id: 20, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (20).jpg", alt: "CAKA GELİNLERİ (20)", title: "CAKA GELİNLERİ (20)" },
  { id: 21, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (21).jpg", alt: "CAKA GELİNLERİ (21)", title: "CAKA GELİNLERİ (21)" },
  { id: 22, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (22).jpg", alt: "CAKA GELİNLERİ (22)", title: "CAKA GELİNLERİ (22)" },
  { id: 23, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (23).jpg", alt: "CAKA GELİNLERİ (23)", title: "CAKA GELİNLERİ (23)" },
  { id: 24, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (24).jpg", alt: "CAKA GELİNLERİ (24)", title: "CAKA GELİNLERİ (24)" },
  { id: 25, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (25).jpg", alt: "CAKA GELİNLERİ (25)", title: "CAKA GELİNLERİ (25)" },
  { id: 26, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (26).jpg", alt: "CAKA GELİNLERİ (26)", title: "CAKA GELİNLERİ (26)" },
  { id: 27, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (27).jpg", alt: "CAKA GELİNLERİ (27)", title: "CAKA GELİNLERİ (27)" },
  { id: 28, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (28).jpg", alt: "CAKA GELİNLERİ (28)", title: "CAKA GELİNLERİ (28)" },
  { id: 29, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (29).jpg", alt: "CAKA GELİNLERİ (29)", title: "CAKA GELİNLERİ (29)" },
  { id: 30, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (30).jpg", alt: "CAKA GELİNLERİ (30)", title: "CAKA GELİNLERİ (30)" },
  { id: 31, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (31).jpg", alt: "CAKA GELİNLERİ (31)", title: "CAKA GELİNLERİ (31)" },
  { id: 32, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (32).jpg", alt: "CAKA GELİNLERİ (32)", title: "CAKA GELİNLERİ (32)" },
  { id: 33, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (33).jpg", alt: "CAKA GELİNLERİ (33)", title: "CAKA GELİNLERİ (33)" },
  { id: 34, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (34).jpg", alt: "CAKA GELİNLERİ (34)", title: "CAKA GELİNLERİ (34)" },
  { id: 35, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (35).jpg", alt: "CAKA GELİNLERİ (35)", title: "CAKA GELİNLERİ (35)" },
  { id: 36, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (36).jpg", alt: "CAKA GELİNLERİ (36)", title: "CAKA GELİNLERİ (36)" },
  { id: 37, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (37).jpg", alt: "CAKA GELİNLERİ (37)", title: "CAKA GELİNLERİ (37)" },
  { id: 38, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (38).jpg", alt: "CAKA GELİNLERİ (38)", title: "CAKA GELİNLERİ (38)" },
  { id: 39, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (39).jpg", alt: "CAKA GELİNLERİ (39)", title: "CAKA GELİNLERİ (39)" },
  { id: 40, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (40).jpg", alt: "CAKA GELİNLERİ (40)", title: "CAKA GELİNLERİ (40)" },
  { id: 41, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (41).jpg", alt: "CAKA GELİNLERİ (41)", title: "CAKA GELİNLERİ (41)" },
  { id: 42, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (42).jpg", alt: "CAKA GELİNLERİ (42)", title: "CAKA GELİNLERİ (42)" },
  { id: 43, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (43).jpg", alt: "CAKA GELİNLERİ (43)", title: "CAKA GELİNLERİ (43)" },
  { id: 44, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (44).jpg", alt: "CAKA GELİNLERİ (44)", title: "CAKA GELİNLERİ (44)" },
  { id: 45, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (45).jpg", alt: "CAKA GELİNLERİ (45)", title: "CAKA GELİNLERİ (45)" },
  { id: 46, src: "/gelin-sac-modelleri/CAKA GELİNLERİ (46).jpg", alt: "CAKA GELİNLERİ (46)", title: "CAKA GELİNLERİ (46)" },
];

export default function GelinSacModelleriPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
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
                  <div className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-200 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    
                    {/* Gerçek görsel */}
                    <Image
                      src={model.src}
                      alt={model.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-pink-600 font-semibold text-sm">
                          {model.title}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          Detayları Gör
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

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
