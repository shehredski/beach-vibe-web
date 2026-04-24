import React from 'react';

export default function About() {
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Beach+Vibe+Camping+Laguna";
  const googleReviewsUrl = "https://www.google.com/search?q=Beach+Vibe+Varna+Reviews#lrd=0x40a4adb7ffc5874f:0xe1868369ab97bb40,1,,,";

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900 tracking-tight">
          Повече от просто плаж... <br className="hidden md:block" />
          <span className="text-amber-500 text-2xl md:text-3xl font-light italic">Твоето лятно изживяване на Къмпинг Лагуна</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {/* ОПИСАНИЕ */}
            <div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light italic">
                "Beach Vibe не е просто локация, а усещане за свобода, съчетано с първокласен комфорт."
              </p>
              <p className="text-gray-600 leading-relaxed">
                Разположен в сърцето на Къмпинг Лагуна (до Златни Пясъци), нашият плаж предлага идеалния баланс между природа и модерен лукс.
              </p>
            </div>

            {/* СЕКЦИЯ: РЕАЛНИ МИНИ РЕВЮТА */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-amber-100 p-2 rounded-lg">💬</span> Какво казват гостите ни
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {[
                  { name: "Ivan P.", text: "Страхотно място, супер обслужване и уникална атмосфера!", stars: 5 },
                  { name: "Maria S.", text: "Най-добрите коктейли на северното черноморие. Мохитото е топ!", stars: 5 },
                  { name: "George T.", text: "Тихо и спокойно място за почивка. Много чист плаж.", stars: 5 }
                ].map((review, index) => (
                  <div 
                    key={index}
                    className="min-w-[280px] p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex text-amber-400 mb-2 text-sm">
                      {[...Array(review.stars)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p className="text-gray-700 text-sm italic mb-4 leading-relaxed italic">"{review.text}"</p>
                    <p className="text-blue-900 font-bold text-xs uppercase tracking-wider">— {review.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* БАР */}
            <div id="bar" className="scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="bg-blue-100 p-2 rounded-lg">🍹</span> Барът Beach Vibe
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {[
                  { emoji: "🍸", name: "Classic Mojito", desc: "Свежа мента и лайм" },
                  { emoji: "🍹", name: "Vibe Spritz", desc: "Нашият летен подпис" },
                  { emoji: "🥥", name: "Pina Colada", desc: "Тропически рай" }
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
                <h3 className="text-2xl font-bold text-gray-800">Цени Сезон 2026</h3>
              </div>
              <p className="text-gray-500 text-sm italic border-l-2 border-amber-400 pl-4 mb-4">
                Всички услуги могат да бъдат заплатени на място в лева или евро.
              </p>
            </div>

            {/* GOOGLE TRUST БАДЖ */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-xl font-bold">★</span>)}
                  </div>
                  <p className="font-bold text-gray-800 italic">4.9/5 в Google Maps</p>
                </div>
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-800 transition-colors text-sm shadow-lg shadow-blue-900/20"
                >
                  📍 Упътване
                </a>
              </div>
              <a 
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-amber-50 text-amber-700 rounded-xl font-bold border border-amber-200 hover:bg-amber-100 transition-all text-sm"
              >
                Виж всички 50+ реални отзиви ⭐
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
