import { Facebook, Instagram, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Beach Vibe</h3>
            <p className="text-gray-400">
              Вашето идеално място за релакс, коктейли и незабравими моменти на плажа.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Работно време</h4>
            <p className="text-gray-400">
              Всеки ден<br />
              09:00 - 20:00<br />
              <span className="text-sm">(Летен сезон)</span>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Следете ни</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576723747325"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 rounded-full transition-colors"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.beachvibe.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-amber-600 hover:bg-amber-700 rounded-full transition-colors"
                title="Website"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Beach Vibe. Всички права запазени.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Условия на ползване
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Политика на поверителност
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
