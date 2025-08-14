"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import { InfoIcon, EyeIcon, TargetIcon, HeartIcon, UsersIcon, ShieldIcon } from "@/components/Icons";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HakkimizdaPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionHeading 
                title={t('about.hero.title')} 
                subtitle={t('about.hero.subtitle')} 
                icon={<InfoIcon />} 
              />
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('about.hero.description')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {t('about.stats.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('about.stats.subtitle')}
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={150}>
            <Stats />
          </Reveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <SectionHeading 
                  title={t('about.story.title')} 
                  subtitle={t('about.story.subtitle')} 
                  icon={<HeartIcon />} 
                />
                <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {t('about.story.paragraph1')}
                  </p>
                  <p>
                    {t('about.story.paragraph2')}
                  </p>
                  <p>
                    {t('about.story.paragraph3')}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <EyeIcon />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('about.vision.title')}</h3>
                      <p className="text-gray-600">
                        {t('about.vision.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <TargetIcon />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('about.mission.title')}</h3>
                      <p className="text-gray-600">
                        {t('about.mission.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <SectionHeading 
                title={t('about.values.title')} 
                subtitle={t('about.values.subtitle')} 
                icon={<ShieldIcon />} 
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t('about.values.honesty.title'),
                description: t('about.values.honesty.description'),
                icon: "🤝",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: t('about.values.quality.title'),
                description: t('about.values.quality.description'),
                icon: "⭐",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                title: t('about.values.customerFocus.title'),
                description: t('about.values.customerFocus.description'),
                icon: "💖",
                color: "from-pink-500 to-pink-600"
              },
              {
                title: t('about.values.innovation.title'),
                description: t('about.values.innovation.description'),
                icon: "🚀",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: t('about.values.sustainability.title'),
                description: t('about.values.sustainability.description'),
                icon: "🌱",
                color: "from-green-500 to-green-600"
              },
              {
                title: t('about.values.teamwork.title'),
                description: t('about.values.teamwork.description'),
                icon: "👥",
                color: "from-red-500 to-red-600"
              }
            ].map((value, index) => (
              <Reveal key={value.title} delayMs={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <SectionHeading 
                title={t('about.team.title')} 
                subtitle={t('about.team.subtitle')} 
                icon={<UsersIcon />} 
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  {t('about.team.description1')}
                </p>
                <p>
                  {t('about.team.description2')}
                </p>
                <p>
                  {t('about.team.description3')}
                </p>
                <div className="mt-8">
                  <a
                    href="/ekibimiz"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t('about.team.meetTeam')}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <img
                  src="/tarik.jpeg"
                  alt={t('about.team.founder.name')}
                  className="w-full aspect-[4/5] object-cover object-[top_20%]"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('about.team.founder.name')}</h3>
                  <p className="text-purple-600 font-medium mb-3">{t('about.team.founder.title')}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('about.team.founder.description')}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {t('about.services.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('about.services.subtitle')}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t('about.services.haircut'), icon: "✂️" },
              { name: t('about.services.coloring'), icon: "🎨" },
              { name: t('about.services.microResource'), icon: "💇‍♀️" },
              { name: t('about.services.bridal'), icon: "👰" },
              { name: t('about.services.makeup'), icon: "💄" },
              { name: t('about.services.hairCare'), icon: "💆‍♀️" },
              { name: t('about.services.skinCare'), icon: "✨" },
              { name: t('about.services.makeupService'), icon: "💋" }
            ].map((service, index) => (
              <Reveal key={service.name} delayMs={index * 50}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-md text-center">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-gray-800">{service.name}</h3>
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
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              {t('about.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05548843878"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('about.cta.callButton')}
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
                {t('about.cta.whatsappButton')}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

