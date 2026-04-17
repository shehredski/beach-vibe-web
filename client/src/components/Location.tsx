import { MapView } from "./Map";

export default function Location() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
          Контакт
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
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
                  <p className="text-gray-800 text-lg">
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
            
            {/* Social Links */}
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
          
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-xl h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.9847562949584!2d28.051537076595283!3d43.307184074212714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4a4a4a4a4a4a5%3A0x1234567890abcdef!2sBeach%20Vibe%20-%20Camping%20Laguna!5e0!3m2!1sen!2sbg!4v1234567890"
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
