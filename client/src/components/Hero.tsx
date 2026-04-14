import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToReservations = () => {
    const element = document.getElementById("reservations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen bg-gradient-to-b from-orange-400 via-orange-300 to-amber-200 overflow-hidden flex items-center justify-center"
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Animated tagline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 animate-fade-in drop-shadow-lg">
          Мечтаеш за лято?
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md font-light">
          Откройте идеалното място за релакс, коктейли и незабравими моменти на плажа
        </p>

        <Button
          onClick={scrollToReservations}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Резервирай сега
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white drop-shadow-lg" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
