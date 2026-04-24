import React, { useEffect, useState } from 'react';
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext"; // Импортираме контекста

export default function Hero() {
  const { language, t } = useLanguage(); // Вземаме езика и функцията за превод
  const [displayedText, setDisplayedText] = useState('');
  
  // Вземаме текстовете динамично от твоя LanguageContext.tsx
  const typewriterText = t('hero.tagline'); 
  const staticSubtext = t('about.description'); // Или друг ключ, който си избрал за подтекст

  useEffect(() => {
    // Рестартираме текста при смяна на езика
    setDisplayedText(''); 
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < typewriterText.length) {
        setDisplayedText(typewriterText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [language, typewriterText]); // Следим за промяна на езика!

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ВИДЕО ФОН */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_3999_f882c966.webp"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-90 contrast-110"
      >
        <source src="/beach-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* СЪДЪРЖАНИЕ */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        
        {/* Анимираното заглавие */}
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl min-h-[1.2em]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100">
            {displayedText}
          </span>
          <span className="animate-pulse text-amber-500">|</span>
        </h1>
        
        {/* Статичният подтекст */}
        <p className="text-xl md:text-3xl text-white/95 mb-10 drop-shadow-md max-w-4xl mx-auto font-light italic leading-relaxed animate-fade-in duration-1000">
          {staticSubtext}
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="#reservations"
            className="w-full md:w-auto inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-[0_0_30px_rgba(217,119,6,0.5)]"
          >
            {t('hero.cta')} 🏖️
          </a>

          <Link href="/menu">
            <button className="w-full md:w-auto inline-block bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full text-xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 shadow-xl">
              {t('nav.menu')} 🍹
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
    </section>
  );
}
