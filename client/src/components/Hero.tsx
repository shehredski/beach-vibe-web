import React, { useEffect, useState } from 'react';
import { Link } from "wouter"; // 1. Добавяме това

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Мечтаеш за лято?';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_3999_f882c966.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto">
          Открийте идеалното място за релакс, коктейли и незабравими моменти на плажа
        </p>
        
        {/* Контейнер за бутоните, за да стоят един до друг */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#reservations"
            className="w-full md:w-auto inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Резервирай сега
          </a>

          {/* НОВИЯТ БУТОН ЗА МЕНЮТО */}
          <Link href="/menu">
            <button className="w-full md:w-auto inline-block bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 font-bold py-4 px-8 rounded-full text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg">
              Разгледай менюто 🍹
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
