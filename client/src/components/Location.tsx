import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { MapView } from "./Map";

export default function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Локация & Контакт
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Намерете ни на красивия плаж
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <MapView
              initialCenter={{ lat: 43.2075, lng: 27.9273 }}
              initialZoom={15}
              onMapReady={() => {}}
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Адрес
                </h3>
                <p className="text-gray-600">
                  Кемпинг Лагуна, Варна
                  <br />
                  България
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Телефон
                </h3>
                <p className="text-gray-600">
                  <a href="tel:+359" className="hover:text-red-500 transition-colors">
                    +359 (Позвънете за информация)
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Имейл
                </h3>
                <p className="text-gray-600">
                  <a href="mailto:info@beachvibe.eu" className="hover:text-red-500 transition-colors">
                    info@beachvibe.eu
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Работно време
                </h3>
                <p className="text-gray-600">
                  Всеки ден: 09:00 - 20:00
                  <br />
                  (Летен сезон)
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Следете ни
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61576723747325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full transition-colors"
                  title="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://www.beachvibe.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors"
                  title="Website"
                >
                  🌐
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
