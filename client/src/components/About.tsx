import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заглавие, оптимизирано за емоция и SEO */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900 tracking-tight">
          Повече от просто плаж... <br className="hidden md:block" />
          <span className="text-amber-500 text-2xl md:text-3xl font-light italic">Твоето лятно изживяване на Къмпинг Лагуна</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* ЛЯВА КОЛОНА: ТЕКСТ И ИНТЕРАКТИВНОСТ */}
          <div className="space-y-12">
            <div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light italic">
                "Beach Vibe не е просто локация, а усещане за свобода, съчетано с първокласен комфорт."
              </p>
              <p className="text-gray-600 leading-relaxed">
                Разположен в сърцето на Къмпинг Лагуна (до Златни Пясъци), нашият плаж предлага идеалния баланс между природа и модерен лукс. От просторни шатри до авторски коктейли – всеки детайл е мислен за вашето спокойствие.
              </p>
            </div>

            {/* СЕКЦИЯ БАР С УАУ ЕФЕКТ */}
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
                  <div 
                    key={index}
                    className="min-w-[150px] p-5 bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-3xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-amber-100/50"
                  >
                    <span className="text-4xl block mb-2">{drink.emoji}</span>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{drink.name}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{drink.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ СЕКЦИЯ - ВДИГА РЕЙТИНГА В GOOGLE */}
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Често задавани въпроси</h3>
              <div className="space-y-4">
                <details className="group bg-white rounded-2xl shadow-sm overflow-hidden transition-all">
                  <summary className="p-4 cursor-pointer font-medium text-gray-800 flex justify-between items-center list-none">
                    Приемате ли плащания в Евро (€)?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 text-sm italic">
                    Да, за ваше удобство приемаме плащания както в лева, така и в евро на място.
                  </div>
                </details>
                <details className="group bg-white rounded-2xl shadow-sm overflow-hidden transition-all">
                  <summary className="p-4 cursor-pointer font-medium text-gray-800 flex justify-between items-center list-none">
                    Има ли осигурен паркинг?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 text-sm italic">
                    Да, Къмпинг Лагуна разполага с обособен паркинг в непосредствена близост до плажа.
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* ДЯСНА КОЛОНА: ЦЕНИ, СНИМКА И ДОВЕРИЕ */}
          <div className="space-y-8 sticky top-24">
            {/* БЛОК ЦЕНИ */}
            <div id="prices" className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-full text-2xl animate-pulse">🏖️</div>
                <h3 className="text-2xl font-bold text-gray-800">Цени Сезон 2026</h3>
              </div>
              <p className="text-gray-500 text-sm mb-6 border-l-2 border-amber-400 pl-4 italic">
                Всички услуги могат да бъдат заплатени на място. Работим всеки ден от 08:00 до 20:00 ч.
              </p>
              {/* Автоматична таблица от CONTENT.md */}
            </div>

            {/* GOOGLE TRUST БАДЖ С РЕАЛНИ ЛИНКОВЕ */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="font-bold text-gray-800 italic">4.9/5 в Google Maps</p>
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Beach+Vibe+Camping+Laguna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-800 transition-colors text-sm shadow-lg shadow-blue-900/20"
                >
                  📍 Упътване
                </a>
              </div>
              <a 
                href="https://search.google.com/local/writereview?placeid=ChIJT4fF_6-nt0ARQLuXq2mDhuE"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-amber-50 text-amber-700 rounded-xl font-bold border border-amber-200 hover:bg-amber-100 transition-all text-sm"
              >
                Хареса ли ти при нас? Остави отзив ⭐
              </a>
            </div>

            {/* СНИМКА С ЕФЕКТ */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-blue-500 opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_setup_73f4ca96.webp"
                alt="Beach Setup"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <p className="text-white font-light italic">Вашето място под слънцето...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
