export default function About() {
  const beachImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_real_1_62623b0c.webp";

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
          За плажа
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Добре дошли на плаж Beach Vibe – тихо и спокойно място за отдих, разположено на Къмпинг Лагуна до Златни пясъци. Предлагаме модерни шезлонги, чадъри и простортни шатри.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏖️</div>
                <div>
                  <h3 className="font-bold text-gray-800">Комфорт</h3>
                  <p className="text-gray-600">Модерни шезлонги и чадъри</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🍹</div>
                <div>
                  <h3 className="font-bold text-gray-800">Напитки</h3>
                  <p className="text-gray-600">Авторски коктейли и студена бира</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">👥</div>
                <div>
                  <h3 className="font-bold text-gray-800">Атмосфера</h3>
                  <p className="text-gray-600">Идеално място за всички</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={beachImage}
              alt="Beach Vibe"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
