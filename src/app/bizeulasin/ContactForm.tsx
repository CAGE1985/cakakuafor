"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { MailIcon } from "@/components/Icons";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Form verilerini hazırla
      const emailData = {
        to: "cakarandevu@gmail.com",
        subject: `CAKA Kuaför İletişim Formu: ${formData.subject}`,
        html: `
          <h2>CAKA Kuaför İletişim Formu</h2>
          <p><strong>İsim Soyisim:</strong> ${formData.name}</p>
          <p><strong>E-posta:</strong> ${formData.email}</p>
          <p><strong>Telefon:</strong> ${formData.phone}</p>
          <p><strong>Konu:</strong> ${formData.subject}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `
      };

      // API endpoint'e gönder
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <SectionHeading 
              title={t('contact.form.title')} 
              subtitle={t('contact.form.subtitle')} 
              icon={<MailIcon />} 
            />
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.form.subtitle')}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-8 text-white">
                <h2 className="text-2xl font-bold mb-2">{t('contact.form.title')}</h2>
                <p className="text-purple-100">
                  {t('contact.form.subtitle')}
                </p>
              </div>

              {/* Form Content */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.form.name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.form.email')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder={t('contact.form.phone')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                      placeholder={t('contact.form.message')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                    </button>

                    {submitStatus === "success" && (
                      <div className="text-green-600 font-medium">
                        {t('contact.form.success')}
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="text-red-600 font-medium">
                        {t('contact.form.error')}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
