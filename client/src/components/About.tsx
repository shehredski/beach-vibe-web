import React from 'react';

export default function About() {
  return (
    <section id="beach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">За плажа</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Добре дошли на плаж Beach Vibe – тихо и спокойно място за отдих, разположено на Къмпинг Лагуна до Златни пясъци. Предлагаме модерни шезлонги, чадъри и просторни шатри.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-amber-500 text-2xl">🏖️</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Модерна инфраструктура</h3>
                  <p className="text-gray-600">Всички удобства за перфектен плажен ден</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-amber-500 text-2xl">🍹</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Барът Beach Vibe</h3>
                  <p className="text-gray-600">Свежи коктейли и хладни напитки</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-amber-500 text-2xl">☀️</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Защита от слънце</h3>
                  <p className="text-gray-600">Чадъри и шатри за максимален комфорт</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_setup_73f4ca96.webp"
              alt="Beach Setup"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
