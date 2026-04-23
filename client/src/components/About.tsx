import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">За плажа</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ЛЯВА КОЛОНА: ТЕКСТ, ЦЕНИ И БАР */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Добре дошли на плаж Beach Vibe – тихо и спокойно място за отдих, разположено на Къмпинг Лагуна до Златни Пясъци. Предлагаме модерни шезлонги, чадъри и просторни шатри.
            </p>

            <div className="space-y-12">
              {/* СЕКЦИЯ ЦЕНИ */}
              <div id="prices" className="scroll-mt-28">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full text-2xl animate-pulse">🏖️</div>
                  <h3 className="text-2xl font-bold text-gray-800">Цени на плажа</h3>
                </div>
                <p className="text-gray-600 mb-4 border-l-4 border-amber-400 pl-4">
                  Поддържаме достъпни цени за сезона 2026. Всички услуги могат да бъдат платени на място в евро (€).
                </p>
                {/* Тук ще се зареди таблицата от CONTENT.md автоматично */}
              </div>

              {/* СЕКЦИЯ БАР */}
              <div id="bar" className="scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full text-2xl">🍹</div>
                  <h3 className="text-2xl font-bold text-gray-800">Барът Beach Vibe</h3>
                </div>
                
                {/* КОКТЕЙЛ КАРТИЧКИ (WOW EFFECT) */}
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                  {[
                    { emoji: "🍸", name: "Signature Mojito" },
                    { emoji: "🍹", name: "Beach Vibe Spritz" },
                    { emoji: "🥥", name: "Pina Colada" }
                  ].map((drink, index) => (
                    <div 
                      key={index}
                      className="min-w-[140px] p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-amber-100"
                    >
                      <span className="text-4xl block mb-2">{drink.emoji}</span>
                      <h4 className="font-bold text-gray-800 text-sm leading-tight">{drink.name}</h4>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-gray-600 text-sm italic italic">
                  * Насладете се на авторски рецепти и свежи съставки под слънчевите лъчи.
                </p>
              </div>
            </div>
          </div>

          {/* ДЯСНА КОЛОНА: СНИМКА */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_setup_73f4ca96.webp"
                alt="Beach Setup"
                className="w-full h-[550px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-medium italic">Feel the summer vibe...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
