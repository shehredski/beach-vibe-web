import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter"; // Използваме Link за навигация към страницата със събития

export default function About() {
  const { language, t } = useLanguage();
  
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Beach+Vibe+Camping+Laguna";
  const googleReviewsUrl = "https://www.google.com/search?q=Beach+Vibe+Varna+Reviews#lrd=0x40a4adb7ffc5874f:0xe1868369ab97bb40,1,,,";

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* 1. СЕКЦИЯ: ЛИНКОВЕ КЪМ ТВОЯТА SQL СТРАНИЦА */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-[2rem] border border-amber-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                🔥 {t('nav_promotions')}
              </h3>
              <p className="text-amber-800/70 mb-6">
                {language === 'bg' 
                  ? "Разгледайте нашите специални летни предложения и отстъпки." 
                  : "Check out our special summer offers and discounts."}
              </p>
            </div>
            <Link href="/events">
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-all">
                {language === 'bg' ? "Виж Промоциите" : "View Promotions"}
              </button>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-[2rem] border border-blue-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                📅 {t('nav_events')}
              </h3>
              <p className="text-blue-800/70 mb-6">
                {language === 'bg' 
                  ? "Не пропускайте най-добрите партита и събития на плажа." 
                  : "Don't miss the best beach parties and events."}
              </p>
            </div>
            <Link href="/events">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all">
                {language === 'bg' ? "Към Календара" : "View Calendar"}
              </button>
            </Link>
          </div>
        </div>

        {/* 2. ОСТАНАЛОТО СЪДЪРЖАНИЕ */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light italic">
                "{t('about_text_1')}"
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about_text_2')}
              </p>
            </div>

            {/* БАР */}
            <div id="bar" className="scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                🍹 {t('nav_bar')}
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar text-center">
                {["Mojito", "Aperol Spritz", "Beach Vibe"].map((drink, index) => (
                  <div key={index} className="min-w-[130px] p-5 bg-amber-50/50 rounded-3xl border border-amber-100">
                    <h4 className="font-bold text-gray-800 text-sm">{drink}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ДЯСНА КОЛОНА */}
          <div className="space-y-8 sticky top-24">
            <div id="prices" className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">🏖️ {t('season_prices')}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-gray-600">{language === 'bg' ? "Шезлонг" : "Sun Lounger"}</span>
                  <span className="font-bold text-blue-900">10.00 лв.</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-gray-600">{language === 'bg' ? "Чадър" : "Umbrella"}</span>
                  <span className="font-bold text-blue-900">10.00 лв.</span>
                </div>
              </div>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest text-center">{t('currency_note')}</p>
            </div>

            <a 
              href={googleMapsUrl} 
              target="_blank" 
              className="block w-full text-center py-4 bg-blue-900 text-white rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-lg"
            >
              📍 {t('directions')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
