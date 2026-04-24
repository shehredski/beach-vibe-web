import React from 'react';
import { motion } from "framer-motion"; // Увери се, че си инсталирал framer-motion
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-white overflow-hidden bg-slate-900">
      
      {/* BACKGROUND VIDEO/IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Филтър за по-добър контраст на текста */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/beach-video.mp4" type="video/mp4" />
          {/* Fallback image ако видеото не зареди */}
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_setup_73f4ca96.webp" alt="Beach" className="w-full h-full object-cover" />
        </video>
      </div>

      {/* CONTENT LAYER */}
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* ОСНОВНО ЗАГЛАВИЕ */}
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl uppercase">
            {t('title_main')}
          </h1>
          
          {/* ДЕКОРАТИВНА ЛИНИЯ */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 w-32 bg-amber-500 mx-auto mb-10 rounded-full"
          />

          {/* ПОДЗАГЛАВИЕ */}
          <p className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg text-gray-100 italic">
            {t('title_sub')}
          </p>

          {/* БУТОНИ ЗА ДЕЙСТВИЕ */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 hover:bg-amber-500 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-amber-900/40"
            >
              {t('nav_reservations')} 🏖️
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('bar')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 px-12 py-5 rounded-2xl font-bold text-xl transition-all"
            >
              {t('nav_menu')} 🍹
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* АНИМИРАНА СТРЕЛКА (Scroll Indicator) */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1.5">
          <motion.div className="w-1 h-2 bg-amber-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}