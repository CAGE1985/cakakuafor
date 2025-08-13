"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { InfoIcon } from "@/components/Icons";

export default function AnketClient() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionHeading 
                title="Müşteri Memnuniyeti Anketi" 
                subtitle="Bizi 6 Soruda Değerlendirir misiniz?" 
                icon={<InfoIcon />} 
              />
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Sizlere daha kaliteli hizmet verebilmek için bize geribildirimde bulunmanızı rica ediyoruz. 
                Anketimiz sadece birkaç dakikanızı alacak ve hizmet kalitemizi artırmamıza yardımcı olacaktır.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Survey Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Survey Header */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-8 text-white">
                <h2 className="text-2xl font-bold mb-2">CAKA Kuaför Müşteri Memnuniyeti Anketi</h2>
                <p className="text-purple-100">
                  Deneyiminizi değerlendirin, hizmetimizi geliştirmemize yardımcı olun
                </p>
              </div>

              {/* Google Forms Embed */}
              <div className="p-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdfU6hmVVPPd1xv5A5HWt8ASbbq58akpk5Sn1-F14rS4Y1zPQ/viewform?embedded=true"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="rounded-lg"
                      title="CAKA Kuaför Müşteri Memnuniyeti Anketi"
                    >
                      Yükleniyor...
                    </iframe>
                  </div>
                </div>

                {/* Survey Info */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">Hızlı</h3>
                    <p className="text-sm text-gray-600">Sadece 2-3 dakika</p>
                  </div>

                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">Güvenli</h3>
                    <p className="text-sm text-gray-600">Google Forms güvencesi</p>
                  </div>

                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">Etkili</h3>
                    <p className="text-sm text-gray-600">Hizmet kalitemizi artırır</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Survey Questions Preview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Anket Sorularımız
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aşağıdaki konularda görüşlerinizi alacağız
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "👋",
                title: "Karşılama",
                question: "Nasıl Karşılandınız?"
              },
              {
                icon: "⏰",
                title: "Zamanında Hizmet",
                question: "Randevunuza Zamanında Alındınız mı?"
              },
              {
                icon: "🧼",
                title: "Hijyen",
                question: "Hijyen Koşullarımızı Nasıl Buldunuz?"
              },
              {
                icon: "💄",
                title: "Ürün Bilgilendirmesi",
                question: "Salonumuzda Bulunan Ürünler Ve Markalar Hakkında Bilgilendirildiniz mi?"
              },
              {
                icon: "👥",
                title: "Personel Değerlendirmesi",
                question: "Hizmet Aldığınız Personellerimizi Değerlendirir misiniz?"
              },
              {
                icon: "📝",
                title: "Genel Memnuniyet",
                question: "Salonumuzda beklentilerinizin altında kalan bir durum ile karşılaştınız mı?"
              }
            ].map((item, index) => (
              <Reveal key={index} delayMs={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.question}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Geri Bildiriminiz Bizim İçin Değerli
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Anketimizi doldurarak hizmet kalitemizi artırmamıza yardımcı olun. 
              Her geri bildirim, sizlere daha iyi hizmet verebilmek için önemlidir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfU6hmVVPPd1xv5A5HWt8ASbbq58akpk5Sn1-F14rS4Y1zPQ/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Anketi Doldur
              </a>
              <a
                href="tel:05548843878"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bizi Arayın
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

