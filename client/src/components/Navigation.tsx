import { Menu, X, Globe } from "lucide-react"; // Добавихме икона Globe за езиците
import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext"; // Импорт на твоя контекст

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage(); // Използваме твоите функции

  const scrollToSection = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#" + id;
    }
    setIsOpen(false);
  };

  // Превеждаме етикетите чрез функцията t('') от твоя файл
  const navItems = [
    { label: t('nav.beach'), id: "about" },
    { label: t('nav_bar'), id: "bar" },
    { label: t('nav.prices'), id: "prices" },
    { label: t('nav.gallery'), id: "gallery" },
    { label: t('nav.promotions'), id: "promotions" },
    { label: t('nav.reservations'), id: "reservations" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container max-w-7xl mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        
        {/* ЛОГО СЕКЦИЯ */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img 
              src="/logo.png" 
              alt="Beach Vibe Logo" 
              className="h-14 md:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm"
            />
            <span className="text-2xl md:text-3xl font-bold text-amber-600 hidden sm:block font-serif tracking-tight">
              Beach Vibe
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="text-gray-700 hover:text-amber-600 transition-colors font-semibold whitespace-nowrap text-sm lg:text-base"
            >
              {item.label}
            </button>
          ))}
          
          {/* ПРЕВКЛЮЧВАТЕЛ НА ЕЗИЦИ */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1 ml-2">
            <button
              onClick={() => setLanguage('bg')}
              className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${
                language === 'bg' ? 'bg-amber-600 text-white shadow-sm' : 'text-gray-500 hover:text-amber-600'
              }`}
            >
              BG
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${
                language === 'en' ? 'bg-amber-600 text-white shadow-sm' : 'text-gray-500 hover:text-amber-600'
              }`}
            >
              EN
            </button>
          </div>

          <Link href="/menu">
            <button className="bg-amber-600 text-white px-5 py-2 rounded-xl hover:bg-amber-700 transition-all shadow-md font-bold text-sm">
              {t('nav.menu')} 🍹
            </button>
          </Link>
        </div>

        {/* Mobile Button Group */}
        <div className="md:hidden flex items-center gap-3">
          {/* Мобилен превключвател на език */}
          <button 
            onClick={() => setLanguage(language === 'bg' ? 'en' : 'bg')}
            className="flex items-center gap-1 text-xs font-bold text-amber-600 border border-amber-200 px-2 py-1 rounded-lg uppercase"
          >
            <Globe size={14} /> {language}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-amber-600 p-2"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-1 shadow-inner">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="block w-full text-left p-4 text-gray-700 hover:bg-amber-50 rounded-xl font-medium"
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-3">
            <Link href="/menu">
              <button className="block w-full text-center p-4 bg-amber-600 text-white rounded-xl font-bold shadow-md">
                {t('nav.menu')} 🍹
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
