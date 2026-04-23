import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">За плажа</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Добре дошли на плаж Beach Vibe – тихо и спокойно място за отдих, разположено на Къмпинг Лагуна до Златни пясъци. Предлагаме модерни шезлонги, чадъри и просторни шатри.
            </p>

            <div className="space-y-12">
              {/* СЕКЦИЯ ЦЕНИ */}
              <div id="prices" className="scroll-mt-28">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full text-2xl">🏖️</div>
                  <h3 className="text-2xl font-bold text-gray-800">Цени на плажа</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Поддържаме достъпни цени за сезона 2026. Всички услуги могат да бъдат платени на място в евро (€).
                </p>
                {/* Тук твоят компонент автоматично ще зареди таблицата от CONTENT.md */}
              </div>

              {/* СЕКЦИЯ БАР */}
              <div id="bar" className="scroll-mt-28">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full text-2xl">🍹</div>
                  <h3 className="text-2xl font-bold text-gray-800">Барът Beach Vibe</h3>
                </div>
                <p className="text-gray-600">
                  Насладете се на авторски коктейли, прясно изцедени сокове и подбрани вина, докато релаксирате под звуците на морето.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">Cocktails</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">Coffee</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">Cold Drinks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-50/50">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_setup_73f4ca96.webp"
              alt="Beach Setup"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
