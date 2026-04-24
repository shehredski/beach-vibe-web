import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language, t } = useLanguage();
  
  const googleMapsUrl = "https://www.google.com/maps/dir//Beach+Vibe+Varna"; 
  const googleReviewsUrl = "https://www.google.com/search?q=Beach+Vibe+Varna+Reviews#lrd=0x40a4adb7ffc5874f:0xe1868369ab97bb40,1,,,";

  // Ревютата се сменят автоматично спрямо езика
  const reviews = language === 'bg' ? [
    { name: "Ivan P.", text: "Страхотно място, супер обслужване и уникална атмосфера!", stars: 5 },
    { name: "Maria S.", text: "Най-добрите коктейли на северното черноморие. Мохитото е топ!", stars: 5 },
    { name: "George T.", text: "Тихо и спокойно място за почивка. Много чист плаж.", stars: 5 }
  ] : [
    { name: "Ivan P.", text: "Great place, super service and unique atmosphere!", stars: 5 },
    { name: "Maria S.", text: "Best cocktails on the Northern Black Sea coast. The Mojito is top-notch!", stars: 5 },
    { name: "George T.", text: "Quiet and peaceful place to relax. Very clean beach.", stars: 5 }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* НОВО ЧИСТО ЗАГЛАВИЕ: Премахнахме дублирането на title_main */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900 tracking-tight">
          {t('reviews_title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {/* ОПИСАНИЕ */}
            <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light italic">
                "{t('about_text_1')}"
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about_text_2')}
              </p>
            </div>

            {/* СЕКЦИЯ: РЕАЛНИ МИНИ РЕВЮТА */}
            <div className="space-y-6">
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {reviews.map((review, index) => (
                  <div 
                    key={index}
                    className="min-w-[280px] p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex text-amber-400 mb-2 text-sm">
                      {[...Array(review.stars)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">"{review.text}"</p>
                    <p className="text-blue-900 font-bold text-xs uppercase tracking-wider">— {review.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* БАР */}
            <div id="bar" className="scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="bg-blue-100 p-2 rounded-lg">🍹</span> {t('nav_bar')}
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {[
                  { emoji: "🍸", name: "Mojito", desc: language === 'bg' ? "Свежа мента и лайм" : "Fresh mint and lime" },
                  { emoji: "🍹", name: "Aperol Spritz", desc: language === 'bg' ? "Нашият летен подпис" : "Our summer signature" },
                  { emoji: "🥥", name: "Beach Vibe", desc: language === 'bg' ? "Тропически рай" : "Tropical paradise" }
                ].map((drink, index) => (
                  <div key={index} className="min-w-[150px] p-5 bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-3xl text-center border border-amber-100/50 hover:shadow-lg transition-all cursor-default">
                    <span className="text-4xl block mb-2">{drink.emoji}</span>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{drink.name}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">{drink.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ДЯСНА КОЛОНА */}
          <div className="space-y-8 sticky top-24">
            {/* БЛОК ЦЕНИ */}
            <div id="prices" className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-full text-2xl animate-pulse">🏖️</div>
                <h3 className="text-2xl font-bold text-gray-800">{t('season_prices')}</h3>
              </div>
              <p className="text-gray-500 text-sm italic border-l-2 border-amber-400 pl-4 mb-4">
                {t('currency_note')}
              </p>
            </div>

            {/* GOOGLE TRUST БАДЖ */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-xl font-bold">★</span>)}
                  </div>
                  <p className="font-bold text-gray-800 italic">4.9/5 {language === 'bg' ? "в Google Maps" : "on Google Maps"}</p>
                </div>
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-800 transition-colors text-sm shadow-lg shadow-blue-900/20"
                >
                  📍 {t('directions')}
                </a>
              </div>
              <a 
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-amber-50 text-amber-700 rounded-xl font-bold border border-amber-200 hover:bg-amber-100 transition-all text-sm"
              >
                {t('read_reviews')}
              </a>
            </div>

            {/* СНИМКА */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_setup_73f4ca96.webp"
                alt="Beach Setup"
                className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}