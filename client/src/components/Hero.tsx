import React, { useEffect, useState } from 'react';
import { Link } from "wouter";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  
  // ЧАСТ 1: Този текст се пише автоматично (Уау ефект)
  const typewriterText = 'Твоето бягство на първа линия...'; 
  
  // ЧАСТ 2: Този текст стои статичен отдолу (за информация и SEO)
  const staticSubtext = 'Забрави за града. Наслади се на кристална вода, свежи коктейли и най-удобните шатри на Къмпинг Лагуна.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < typewriterText.length) {
        setDisplayedText(typewriterText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 90); // Малко по-бързо (90ms) за по-добър ритъм

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ВИДЕО ФОН - Вече с отлично качество (25MB) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_3999_f882c966.webp"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-90 contrast-110" // Лека корекция на цветовете за "premium" визия
      >
        <source src="/beach-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* OVERLAY - За по-добър контраст */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* СЪДЪРЖАНИЕ */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        
        {/* Анимираното заглавие - Сега е много по-бързо и ясно */}
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl min-h-[1.2em]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100">
            {displayedText}
          </span>
          <span className="animate-pulse text-amber-500">|</span>
        </h1>
        
        {/* Статичният подтекст - Появява се веднага */}
        <p className="text-xl md:text-3xl text-white/95 mb-10 drop-shadow-md max-w-4xl mx-auto font-light italic leading-relaxed animate-fade-in duration-1000">
          {staticSubtext}
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="#booking"
            className="w-full md:w-auto inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-[0_0_30px_rgba(217,119,6,0.5)]"
          >
            Резервирай своето място 🏖️
          </a>

          <Link href="/menu">
            <button className="w-full md:w-auto inline-block bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full text-xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 shadow-xl">
              Разгледай менюто 🍹
            </button>
          </Link>
        </div>
      </div>

      {/* ГРАДИЕНТ В ДОЛНАТА ЧАСТ - за мек преход */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
    </section>
  );
}
