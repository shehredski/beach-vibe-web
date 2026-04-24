import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
// ВНИМАНИЕ: Увери се, че тези пътища са правилни според твоята структура
// import Events from './Events'; 
// import Promotions from './Promotions';

export default function About() {
  const { language, t } = useLanguage();
  
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Beach+Vibe+Camping+Laguna";
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* ДИНАМИЧНА СЕКЦИЯ: ПРОМОЦИИ И СЪБИТИЯ (SQL DATA) */}
        <div className="mb-20 grid md:grid-cols-2 gap-8">
          <div id="promotions" className="scroll-mt-28 bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-[2rem] border border-amber-200 shadow-sm">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
              🔥 {language === 'bg' ? "Актуални Промоции" : "Current Promotions"}
            </h3>
            {/* ТУК Е ТВОЯТА SQL ЛОГИКА / КОМПОНЕНТ */}
            <div className="min-h-[100px] flex items-center justify-center border-2 border-dashed border-amber-300 rounded-xl">
               <p className="text-amber-800 font-medium">{t('promotions_loading_or_empty')}</p>
            </div>
          </div>

          <div id="events" className="scroll-mt-28 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-[2rem] border border-blue-200 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              📅 {language === 'bg' ? "Предстоящи Събития" : "Upcoming Events"}
            </h3>
            {/* ТУК Е ТВОЯТА SQL ЛОГИКА / КОМПОНЕНТ */}
            <div className="min-h-[100px] flex items-center justify-center border-2 border-dashed border-blue-300 rounded-xl">
               <p className="text-blue-800 font-medium">{t('events_loading_or_empty')}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {/* ОПИСАНИЕ */}
            <div className="bg-slate-50 p-8 rounded-3xl">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light italic">
                "{t('about_text_1')}"
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about_text_2')}
              </p>
            </div>

            {/* РЕВЮТА */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-amber-100 p-2 rounded-lg">💬</span> {t('reviews_title')}
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {reviews.map((review, index) => (
                  <div key={index} className="min-w-[280px] p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex text-amber-400 mb-2 text-sm">
                      {[...Array(review.stars)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p className="text-gray-700 text-sm italic mb-4">"{review.text}"</p>
                    <p className="text-blue-900 font-bold text-xs uppercase">— {review.name}</p>
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
                  { emoji: "🍸", name: "Mojito", desc: language === 'bg' ? "Свежа мента" : "Fresh mint" },
                  { emoji: "🍹", name: "Aperol", desc: language === 'bg' ? "Класика" : "Classic" },
                  { emoji: "🥥", name: "Beach Vibe", desc: language === 'bg' ? "Тропик" : "Tropical" }
                ].map((drink, index) => (
                  <div key={index} className="min-w-[150px] p-5 bg-amber-50/50 rounded-3xl text-center border border-amber-100">
                    <span className="text-4xl block mb-2">{drink.emoji}</span>
                    <h4 className="font-bold text-gray-800 text-sm">{drink.name}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{drink.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ДЯСНА КОЛОНА */}
          <div className="space-y-8 sticky top-24">
            <div id="prices" className="bg-white rounded-[2rem] p-8 shadow-2xl border border-gray-50 scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">🏖️ {t('season_prices')}</h3>
              <div className="space-y-4 mb-6">
                 <div className="flex justify-between font-medium"><span>{language === 'bg' ? "Шезлонг" : "Sun Lounger"}</span><span>10.00 лв.</span></div>
                 <div className="flex justify-between font-medium"><span>{language === 'bg' ? "Чадър" : "Umbrella"}</span><span>10.00 лв.</span></div>
                 <div className="flex justify-between font-bold text-amber-600 bg-amber-50 p-2 rounded-lg"><span>{language === 'bg' ? "Комплект" : "Set"}</span><span>30.00 лв.</span></div>
              </div>
              <p className="text-gray-500 text-xs italic">{t('currency_note')}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
               <a href={googleMapsUrl} target="_blank" className="bg-blue-900 text-white block w-full py-3 rounded-xl font-bold mb-4 shadow-lg">📍 {t('directions')}</a>
               <a href={googleReviewsUrl} target="_blank" className="text-amber-700 font-bold text-sm underline">{t('read_reviews')}</a>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_setup_73f4ca96.webp" alt="Beach" className="w-full h-[250px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}