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
    { label: "Събития", id: "events" },
    { label: "Промоции", id: "promotions" },
    { label: "Резервации", id: "reservations" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/"><div className="text-2xl font-bold text-amber-600 cursor-pointer">Beach Vibe</div></Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              {item.label}
            </button>
          ))}
          <Link href="/menu">
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700">Меню 🍹</button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-2">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left p-2 hover:bg-amber-50">
              {item.label}
            </button>
          ))}
          <Link href="/menu"><button className="block w-full text-left p-2 text-amber-600 font-bold">Меню 🍹</button></Link>
        </div>
      )}
    </nav>
  );
}
