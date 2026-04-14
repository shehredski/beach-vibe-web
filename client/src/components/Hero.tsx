import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const tagline = "Мечтаеш за лято?";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= tagline.length) {
        setDisplayText(tagline.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [tagline]);

  const scrollToReservations = () => {
    const element = document.getElementById("reservations");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen bg-gradient-to-b from-amber-400 via-amber-300 to-amber-200 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          {displayText}
          {displayText.length < tagline.length && (
            <span className="animate-pulse">|</span>
          )}
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow-md">
          Откройте идеалното място за релакс, коктейли и незабравими моменти на плажа
        </p>

        <button
          onClick={scrollToReservations}
          className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Резервирай сега
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white drop-shadow-lg" />
      </div>
    </section>
  );
}
