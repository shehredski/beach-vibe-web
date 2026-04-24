import React, { createContext, useContext, useState } from 'react';

type Language = 'bg' | 'en';

const translations = {
  bg: {
    nav_bar: "БАР",
    nav_prices: "ЦЕНИ",
    nav_gallery: "ГАЛЕРИЯ",
    nav_menu: "МЕНЮ",
    nav_reservations: "РЕЗЕРВАЦИЯ",
    title_main: "Повече от просто плаж...",
    title_sub: "Твоето лятно изживяване на Къмпинг Лагуна",
    about_text_1: "Beach Vibe не е просто локация, а усещане за свобода, съчетано с първокласен комфорт.",
    about_text_2: "Разположен в сърцето на Къмпинг Лагуна (до Златни Пясъци), нашият плаж предлага идеалния баланс между природа и модерен лукс.",
    reviews_title: "Какво казват гостите ни",
    directions: "Упътване",
    read_reviews: "Виж нашите 50+ отзива ⭐",
    currency_note: "Приемаме плащания в лева и евро.",
    season_prices: "Цени Сезон 2026"
  },
  en: {
    nav_bar: "BAR",
    nav_prices: "PRICES",
    nav_gallery: "GALLERY",
    nav_menu: "MENU",
    nav_reservations: "RESERVATIONS",
    title_main: "More Than Just a Beach...",
    title_sub: "Your Ultimate Summer Experience at Camping Laguna",
    about_text_1: "Beach Vibe isn't just a location; it's a feeling of freedom combined with premium comfort.",
    about_text_2: "Located in the heart of Camping Laguna (near Golden Sands), our beach offers the perfect balance between nature and modern luxury.",
    reviews_title: "What Our Guests Say",
    directions: "Directions",
    read_reviews: "Read our 50+ real reviews ⭐",
    currency_note: "We accept payments in BGN and EUR.",
    season_prices: "2026 Season Prices"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('bg');
  const t = (key: string): string => (translations[language] as any)[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
