import { Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Beach Vibe</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Luxury cocktail bar at Laguna Beach, Varna. Experience elegance, flavor, and unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Бързи линкове</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#hero" className="hover:text-primary transition-colors">Начало</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Меню</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Галерия</a></li>
              <li><a href="#reservations" className="hover:text-primary transition-colors">Резервации</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Местоположение</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Контакт</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+359888995528" className="hover:text-primary transition-colors">
                  +359 88 899 5528
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:office@beachvibe.eu" className="hover:text-primary transition-colors">
                  office@beachvibe.eu
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Работно време</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Пн-Нд: 10:00 - 23:00</li>
              <li>Лятен сезон: 10:00 - 00:00</li>
              <li className="pt-2 border-t border-border/50 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61576723747325" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Facebook size={16} />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70">
          <p>&copy; 2026 Beach Vibe. Всички права запазени.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://beachvibe.eu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Уебсайт
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576723747325" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
