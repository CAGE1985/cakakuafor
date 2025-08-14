"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { InfoIcon } from "@/components/Icons";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MikroKaynakPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionHeading 
                title={t('microKaynak.hero.title')} 
                subtitle={t('microKaynak.hero.subtitle')} 
                icon={<InfoIcon />} 
              />
              <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('microKaynak.hero.description')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">{t('microKaynak.warning.title')}</h3>
                  <p className="text-red-700 leading-relaxed">
                    {t('microKaynak.warning.description')}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {t('microKaynak.quality.title')}
                </h2>
                <p className="text-lg text-purple-100 leading-relaxed">
                  {t('microKaynak.quality.description')}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {t('microKaynak.faq.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('microKaynak.faq.subtitle')}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8">
            {/* FAQ Item 1 */}
            <Reveal delayMs={100}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  {t('microKaynak.faq.q1.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('microKaynak.faq.q1.answer')}
                </p>
              </div>
            </Reveal>

            {/* FAQ Item 2 */}
            <Reveal delayMs={200}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  {t('microKaynak.faq.q2.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('microKaynak.faq.q2.answer')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('microKaynak.faq.q2.detail')}
                </p>
              </div>
            </Reveal>

            {/* FAQ Item 3 */}
            <Reveal delayMs={300}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  {t('microKaynak.faq.q3.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('microKaynak.faq.q3.answer')}
                </p>
              </div>
            </Reveal>

            {/* FAQ Item 4 */}
            <Reveal delayMs={400}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  {t('microKaynak.faq.q4.title')}
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    {t('microKaynak.faq.q4.answer')}
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="font-semibold text-blue-800 mb-2">{t('microKaynak.faq.q4.tip.title')}</p>
                    <p className="text-blue-700">{t('microKaynak.faq.q4.tip.description')}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* FAQ Item 5 */}
            <Reveal delayMs={500}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  {t('microKaynak.faq.q5.title')}
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    {t('microKaynak.faq.q5.answer')}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="font-semibold text-green-800 mb-2">{t('microKaynak.faq.q5.important.title')}</p>
                    <p className="text-green-700">{t('microKaynak.faq.q5.important.description')}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* FAQ Item 6 */}
            <Reveal delayMs={600}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  {t('microKaynak.faq.q6.title')}
                </h3>
                <div className="grid gap-3">
                  {[
                    t('microKaynak.faq.q6.advantage1'),
                    t('microKaynak.faq.q6.advantage2'),
                    t('microKaynak.faq.q6.advantage3'),
                    t('microKaynak.faq.q6.advantage4'),
                    t('microKaynak.faq.q6.advantage5'),
                    t('microKaynak.faq.q6.advantage6'),
                    t('microKaynak.faq.q6.advantage7')
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-gray-600">{advantage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* FAQ Item 7 */}
            <Reveal delayMs={700}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">7</span>
                  {t('microKaynak.faq.q7.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('microKaynak.faq.q7.answer')}
                </p>
              </div>
            </Reveal>

            {/* FAQ Item 8 */}
            <Reveal delayMs={800}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">8</span>
                  {t('microKaynak.faq.q8.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('microKaynak.faq.q8.answer')}
                </p>
              </div>
            </Reveal>

            {/* FAQ Item 9 */}
            <Reveal delayMs={900}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">9</span>
                  {t('microKaynak.faq.q9.title')}
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    {t('microKaynak.faq.q9.answer')}
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="font-semibold text-yellow-800 mb-2">{t('microKaynak.faq.q9.guarantee.title')}</p>
                    <p className="text-yellow-700">{t('microKaynak.faq.q9.guarantee.description')}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Usage Guide Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {t('microKaynak.usageGuide.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('microKaynak.usageGuide.subtitle')}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{t('microKaynak.usageGuide.hairWash.title')}</h3>
              <div className="grid gap-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <p>{t('microKaynak.usageGuide.hairWash.step1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <p>{t('microKaynak.usageGuide.hairWash.step2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <p>{t('microKaynak.usageGuide.hairWash.step3')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <p>{t('microKaynak.usageGuide.hairWash.step4')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                  <p>{t('microKaynak.usageGuide.hairWash.step5')}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t('microKaynak.cta.title')}
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              {t('microKaynak.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05548843878"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('microKaynak.cta.callButton')}
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
                {t('microKaynak.cta.whatsappButton')}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

