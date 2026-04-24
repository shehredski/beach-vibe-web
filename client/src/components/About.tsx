import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language, t } = useLanguage();
  
  const googleMapsUrl = "https://goo.gl/maps/your-link-here"; 
  const googleReviewsUrl = "https://www.google.com/search?q=Beach+Vibe+Varna+Reviews#lrd=0x40a4adb7ffc5874f:0xe1868369ab97bb40,1,,,";

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
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* ЗАГЛАВИЕ СЕКЦИЯ */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900 tracking-tight">
          {t('reviews_title')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* ЛЯВА КОЛОНА: Описание, Ревюта и Бар */}
          <div className="space-y-16">
            
            {/* 1. ТЕКСТОВО ОПИСАНИЕ */}
            <div className="bg-amber-50/50 p-8 md:p-10 rounded-[2rem] border border-amber-100 shadow-sm">
              <p className="text-2xl text-gray-800 leading-relaxed mb-6 font-light italic">
                "{t('about_text_1')}"
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about_text_2')}
              </p>
            </div>

            {/* 2. СЛАЙДЕР С РЕВЮТА */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-amber-100 p-2 rounded-xl">💬</span> {language === 'bg' ? "Мнения на гости" : "Guest Reviews"}
              </h3>
              <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x">
                {reviews.map((review, index) => (
                  <div 
                    key={index}
                    className="min-w-[300px] snap-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex text-amber-400 mb-4 text-sm">
                      {[...Array(review.stars)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                    <p className="text-blue-900 font-bold text-xs uppercase tracking-[0.2em]">— {review.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. БАР СЕКЦИЯ */}
            <div id="bar" className="scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <span className="bg-blue-100 p-2 rounded-xl">🍹</span> {t('nav_bar')}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { emoji: "🍸", name: "Mojito", desc: language === 'bg' ? "Свежа мента" : "Fresh mint" },
                  { emoji: "🍹", name: "Aperol", desc: language === 'bg' ? "Класика" : "Classic" },
                  { emoji: "🥥", name: "Beach Vibe", desc: language === 'bg' ? "Тропик" : "Tropical" }
                ].map((drink, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2rem] text-center border border-amber-100/50">
                    <span className="text-4xl block mb-3">{drink.emoji}</span>
                    <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wider">{drink.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ДЯСНА КОЛОНА: Цени, Карта и Снимка */}
          <div className="space-y-8 lg:sticky lg:top-28">
            
            {/* 4. ЦЕНИ */}
            <div id="prices" className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-blue-900/5 border border-gray-100 scroll-mt-28">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-amber-100 p-3 rounded-2xl text-2xl animate-pulse">🏖️</div>
                <h3 className="text-2xl font-bold text-gray-800">{t('season_prices')}</h3>
              </div>
              
              <div className="space-y-5 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-gray-600 font-medium">{language === 'bg' ? "Шезлонг" : "Sun Lounger"}</span>
                  <span className="font-bold text-blue-900 text-lg">10.00 лв.</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-gray-600 font-medium">{language === 'bg' ? "Чадър" : "Umbrella"}</span>
                  <span className="font-bold text-blue-900 text-lg">10.00 лв.</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-amber-50/50 px-4 rounded-2xl">
                  <span className="text-amber-800 font-bold">{language === 'bg' ? "Комплект (2+1)" : "Set (2+1)"}</span>
                  <span className="font-black text-amber-600 text-xl">30.00 лв.</span>
                </div>
              </div>

              <p className="text-gray-400 text-xs italic text-center">
                {t('currency_note')}
              </p>
            </div>

            {/* 5. GOOGLE TRUST БЛОК */}
            <div className="bg-blue-900 text-white p-8 rounded-[2rem] shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                  </div>
                  <p className="font-bold text-lg">4.9/5 Google Maps</p>
                </div>
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-amber-400 hover:text-white transition-all shadow-lg"
                >
                  📍 {t('directions')}
                </a>
              </div>
              <a 
                href={googleReviewsUrl}
                target="_blank"
                className="block w-full text-center py-4 bg-blue-800/50 hover:bg-blue-800 rounded-xl font-bold border border-blue-700/50 transition-all text-sm"
              >
                {t('read_reviews')}
              </a>
            </div>

            {/* 6. СНИМКА */}
            <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_setup_73f4ca96.webp"
                alt="Beach Setup"
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}