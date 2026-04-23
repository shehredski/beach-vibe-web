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
              <<div className="flex gap-4 mt-6 overflow-x-auto pb-4">
  <div className="min-w-[150px] p-4 bg-amber-50 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">
    <span className="text-3xl">🍸</span>
    <h4 className="font-bold text-sm mt-2">Signature Mojito</h4>
  </div>
  <div className="min-w-[150px] p-4 bg-amber-50 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">
    <span className="text-3xl">🍹</span>
    <h4 className="font-bold text-sm mt-2">Beach Vibe Spritz</h4>
  </div>
  <div className="min-w-[150px] p-4 bg-amber-50 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">
    <span className="text-3xl">🥥</span>
    <h4 className="font-bold text-sm mt-2">Pina Colada</h4>
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
