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
      <div className="container max-w-7xl mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        
        {/* ЛОГО СЕКЦИЯ - УВЕЛИЧЕНА */}
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
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="text-gray-700 hover:text-amber-600 transition-colors font-semibold whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          
          <Link href="/events">
            <button className="text-gray-700 hover:text-amber-600 transition-colors font-semibold">
              Събития
            </button>
          </Link>

          <Link href="/menu">
            <button className="bg-amber-600 text-white px-6 py-2.5 rounded-xl hover:bg-amber-700 transition-all shadow-md hover:shadow-xl active:scale-95 font-bold">
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
          <Link href="/events">
            <button className="block w-full text-left p-4 text-gray-700 hover:bg-amber-50 rounded-xl font-medium">
              Събития
            </button>
          </Link>
          <div className="pt-3">
            <Link href="/menu">
              <button className="block w-full text-center p-4 bg-amber-600 text-white rounded-xl font-bold shadow-md">
                Виж Менюто 🍹
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
