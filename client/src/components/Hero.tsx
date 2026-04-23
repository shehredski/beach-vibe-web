import React, { useEffect, useState } from 'react';
import { Link } from "wouter";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Мечтаеш за лято?!!!';

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
    >
      {/* ВИДЕО ФОН - Уау ефектът започва тук */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_3999_f882c966.webp" // Показва оригиналната снимка, докато видеото зареди
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105" // Леко мащабиране за по-плавно усещане
      >
        <source src="/beach-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ПО-ДЪЛБОК OVERLAY - за по-добър контраст с текста */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* СЪДЪРЖАНИЕ - Сега е над видеото благодарение на z-20 */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100">
            {displayedText}
          </span>
          <span className="animate-pulse text-amber-500">|</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto font-light italic">
          Открийте идеалното място за релакс, коктейли и незабравими моменти на плаж Beach Vibe
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="#booking"
            className="w-full md:w-auto inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-[0_0_20px_rgba(217,119,6,0.4)]"
          >
            Направи запитване
          </a>

          <Link href="/menu">
            <button className="w-full md:w-auto inline-block bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-10 rounded-full text-lg backdrop-blur-md transition-all duration-300 transform hover:scale-110 shadow-xl">
              Разгледай менюто 🍹
            </button>
          </Link>
        </div>
      </div>

      {/* МАЛЪК ДЕТАЙЛ: ПЛАВЕН ГРАДИЕНТ В ДОЛНАТА ЧАСТ */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
