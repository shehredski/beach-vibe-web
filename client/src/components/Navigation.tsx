import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: t("nav.beach"), id: "about" },
    { label: t("nav.bar"), id: "bar" },
    { label: t("nav.prices"), id: "prices" },
    { label: t("nav.gallery"), id: "gallery" },
    { label: t("nav.menu"), id: "menu" },
    { label: t("nav.promotions"), id: "promotions" },
    { label: t("nav.reservations"), id: "reservations" },
    { label: t("nav.contact"), id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-amber-600">Beach Vibe</div>

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
        </div>

        {/* Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setLanguage("bg")}
              className={`px-3 py-1 rounded transition-colors ${
                language === "bg"
                  ? "bg-amber-600 text-white"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              БГ
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded transition-colors ${
                language === "en"
                  ? "bg-amber-600 text-white"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-amber-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
