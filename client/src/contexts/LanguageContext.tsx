import React, { createContext, useContext, useState } from 'react';

type Language = 'bg' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  bg: {
    'nav.home': 'Начало',
    'nav.beach': 'За плажа',
    'nav.bar': 'Барът',
    'nav.prices': 'Цени',
    'nav.gallery': 'Галерия',
    'nav.menu': 'Меню',
    'nav.promotions': 'Промоции',
    'nav.reservations': 'Резервация',
    'nav.contact': 'Контакт',
    
    'hero.tagline': 'Мечтаеш за лято?',
    'hero.cta': 'Резервирай сега',
    
    'about.title': 'За плажа',
    'about.description': 'Добре дошли на плаж Beach Vibe – тихо и спокойно място за отдих, разположено на Кемпинг Лагуна до Златни пясъци. Предлагаме модерни шезлонги, чадъри и просторни шатра. Идеално място за семейства, приятели и двойки, които търсят перфектния летен ден.',
    
    'bar.title': 'Барът',
    'bar.description': 'Отворен всеки ден от 09:00 до 20:00. Насладете се на студена бира, авторски коктейли и леки закуски под звучите на морския бриз. Нашите опитни барманове ще ви приготвят всяко желание с перфектна прецизност.',
    
    'prices.title': 'Цени',
    'prices.lounger': 'Шезлонг',
    'prices.umbrella': 'Чадър',
    'prices.combo': 'Комплект (шезлонг + чадър)',
    'prices.tent': 'Шатра (до 4 души)',
    
    'menu.title': 'Коктейлно меню',
    'menu.beachvibe': 'Beach Vibe',
    'menu.mojito': 'Mojito',
    'menu.bluelagoon': 'Blue Lagoon',
    'menu.aperolspritz': 'Aperol Spritz',
    'menu.margarita': 'Margarita',
    'menu.sangria': 'Sangria',
    'menu.bellini': 'Bellini',
    'menu.sexonthebeach': 'Sex on the Beach',
    
    'gallery.title': 'Галерия',
    
    'promotions.title': 'Сезонни промоции',
    'promotions.discount': 'Намаление',
    'promotions.original': 'Оригинална цена',
    'promotions.discounted': 'Цена със намаление',
    
    'reservation.title': 'Резервация',
    'reservation.date': 'Дата',
    'reservation.time': 'Час',
    'reservation.partysize': 'Брой гости',
    'reservation.name': 'Име',
    'reservation.email': 'Имейл',
    'reservation.phone': 'Телефон',
    'reservation.submit': 'Резервирай',
    'reservation.success': 'Резервацията е успешна!',
    
    'location.title': 'Контакт',
    'location.address': 'Адрес',
    'location.phone': 'Телефон',
    'location.email': 'Имейл',
    'location.hours': 'Работно време',
    'location.hours.value': '09:00 - 20:00 всеки ден',
    
    'footer.copyright': '© 2026 Beach Vibe. Всички права запазени.',
    'footer.instagram': 'Instagram',
  },
  en: {
    'nav.home': 'Home',
    'nav.beach': 'About Beach',
    'nav.bar': 'The Bar',
    'nav.prices': 'Prices',
    'nav.gallery': 'Gallery',
    'nav.menu': 'Menu',
    'nav.promotions': 'Promotions',
    'nav.reservations': 'Reservation',
    'nav.contact': 'Contact',
    
    'hero.tagline': 'Dreaming of summer?',
    'hero.cta': 'Book Now',
    
    'about.title': 'About the Beach',
    'about.description': 'Welcome to Beach Vibe – a quiet and peaceful beach resort located at Camping Laguna near Golden Sands. We offer modern sun loungers, umbrellas, and spacious tents. The perfect place for families, friends, and couples looking for an ideal summer day.',
    
    'bar.title': 'The Bar',
    'bar.description': 'Open every day from 09:00 to 20:00. Enjoy cold beer, signature cocktails, and light snacks to the sound of the sea breeze. Our experienced bartenders will prepare any drink with perfect precision.',
    
    'prices.title': 'Prices',
    'prices.lounger': 'Sun Lounger',
    'prices.umbrella': 'Umbrella',
    'prices.combo': 'Combo (Lounger + Umbrella)',
    'prices.tent': 'Tent (up to 4 people)',
    
    'menu.title': 'Cocktail Menu',
    'menu.beachvibe': 'Beach Vibe',
    'menu.mojito': 'Mojito',
    'menu.bluelagoon': 'Blue Lagoon',
    'menu.aperolspritz': 'Aperol Spritz',
    'menu.margarita': 'Margarita',
    'menu.sangria': 'Sangria',
    'menu.bellini': 'Bellini',
    'menu.sexonthebeach': 'Sex on the Beach',
    
    'gallery.title': 'Gallery',
    
    'promotions.title': 'Seasonal Promotions',
    'promotions.discount': 'Discount',
    'promotions.original': 'Original Price',
    'promotions.discounted': 'Discounted Price',
    
    'reservation.title': 'Reservation',
    'reservation.date': 'Date',
    'reservation.time': 'Time',
    'reservation.partysize': 'Party Size',
    'reservation.name': 'Name',
    'reservation.email': 'Email',
    'reservation.phone': 'Phone',
    'reservation.submit': 'Book',
    'reservation.success': 'Reservation successful!',
    
    'location.title': 'Contact',
    'location.address': 'Address',
    'location.phone': 'Phone',
    'location.email': 'Email',
    'location.hours': 'Working Hours',
    'location.hours.value': '09:00 - 20:00 every day',
    
    'footer.copyright': '© 2026 Beach Vibe. All rights reserved.',
    'footer.instagram': 'Instagram',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('bg');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
