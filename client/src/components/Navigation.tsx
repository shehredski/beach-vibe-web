import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#" + id;
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "За плажа", id: "about" },
    { label: "Барът", id: "bar" },
    { label: "Цени", id: "prices" },
    { label: "Галерия", id: "gallery" },
    { label: "Промоции", id: "promotions" },
    { label: "Резервации", id: "reservations" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* ЛОГО СЕКЦИЯ */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img 
              src="/logo.png" 
              alt="Beach Vibe Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl md:text-2xl font-bold text-amber-600 hidden sm:block font-serif">
              Beach Vibe
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          
          <Link href="/events">
            <button className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Събития
            </button>
          </Link>

          <Link href="/menu">
            <button className="bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition-all shadow-md hover:shadow-lg active:scale-95 font-bold">
              Меню 🍹
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-amber-600 p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
              className="block w-full text-left p-3 text-gray-700 hover:bg-amber-50 rounded-md font-medium"
            >
              {item.label}
            </button>
          ))}
          <Link href="/events">
            <button className="block w-full text-left p-3 text-gray-700 hover:bg-amber-50 rounded-md font-medium">
              Събития
            </button>
          </Link>
          <div className="pt-2">
            <Link href="/menu">
              <button className="block w-full text-center p-3 bg-amber-600 text-white rounded-md font-bold shadow-sm">
                Виж Менюто 🍹
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
