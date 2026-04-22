import { MapView } from "./Map";

export default function Location() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900 font-serif">
          Контакт
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Контактна информация */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Информация</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 font-semibold">Телефон:</p>
                  <a href="tel:0888995528" className="text-amber-600 hover:text-amber-700 text-lg font-medium">
                    0888 995 528
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-600 font-semibold">Имейл:</p>
                  <a href="mailto:bar@beachvibe.eu" className="text-amber-600 hover:text-amber-700 text-lg font-medium">
                    bar@beachvibe.eu
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-600 font-semibold">Адрес:</p>
                  <p className="text-gray-800 text-lg leading-snug">
                    Кемпинг Лагуна<br />
                    Златни пясъци, Варна
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-600 font-semibold">Работно време:</p>
                  <p className="text-gray-800 text-lg">
                    Всеки ден: 09:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
            
            {/* Социални мрежи */}
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Следи ни</h3>
              <div className="flex gap-6">
                <a 
                  href="https://www.facebook.com/profile.php?id=61576723747325" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-2xl font-bold transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/beach_vibe___?igsh=b25yZXZmOWdsczZ5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 text-2xl font-bold transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          
          {/* Интерактивна карта с ПИН */}
          <div className="rounded-lg overflow-hidden shadow-xl h-96 border border-gray-100">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              // Линкът използва q= за червен пин и точните координати 43.30716, 28.05444
              src="https://maps.google.com/maps?q=43.30716,28.05444&hl=bg&z=17&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
