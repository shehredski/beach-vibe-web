import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter"; // 1. Добавяме Link и useLocation

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(window.location.pathname);

  const scrollToSection = (id: string) => {
    // Ако сме на началната страница, превърти
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Ако сме на друга страница (напр. /menu), първо се върни в началото
      window.location.href = "/#" + id;
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "За плажа", id: "about" },
    { label: "Барът", id: "bar" },
    { label: "Цени", id: "prices" },
    { label: "Галерия", id: "gallery" },
    { label: "Събития", id: "events" },
    { label: "Промоции", id: "promotions" },
    { label: "Резервации", id: "reservations" },
    { label: "Контакт", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - Цъкането върху него ни връща в началото */}
        <Link href="/">
          <div className="text-2xl font-bold text-amber-600 cursor-pointer">Beach Vibe</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          
          {/* СПЕЦИАЛЕН БУТОН ЗА МЕНЮТО */}
          <Link href="/menu">
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium">
              Меню 🍹
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Link href="/menu">
              <button className="block w-full text-left px-4 py-2 text-amber-600 font-bold">
                Меню 🍹
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
