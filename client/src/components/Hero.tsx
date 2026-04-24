import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Video/Image би трябвало да е тук */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover brightness-50"
        >
          <source src="/beach-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          {/* СМЕНЕНО: От hero.tagline на title_main */}
          {t('title_main')}
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light italic drop-shadow-md">
          {/* СМЕНЕНО: От about.description на title_sub */}
          {t('title_sub')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            {/* Тук можеш да добавиш ключ в LanguageContext за бутона, напр. t('nav_reservations') */}
            {t('nav_reservations')} 🏖️
          </button>
          
          <button 
            onClick={() => window.location.href = '/menu'}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            {t('nav_menu')} 🍹
          </button>
        </div>
      </div>
    </section>
  );
}