import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag } from "lucide-react";
import { format } from "date-fns";
import { bg } from "date-fns/locale";

// Интерфейсът за твоите данни от SQL
interface CombinedItem {
  id: number;
  title: string;
  description: string | null;
  eventDate?: string;
  startDate?: string;
  discountedPrice?: string | number;
  imageUrl: string | null;
}

export default function About() {
  const { language, t } = useLanguage();

  // 1. Вземаме СЪБИТИЯТА директно тук
  const { data: events } = useQuery<CombinedItem[]>({
    queryKey: ["/api/events"],
    queryFn: async () => {
      const res = await fetch("/api/events");
      return res.json();
    },
  });

  // 2. Вземаме ПРОМОЦИИТЕ директно тук
  const { data: promotions } = useQuery<CombinedItem[]>({
    queryKey: ["/api/promotions"],
    queryFn: async () => {
      const res = await fetch("/api/promotions");
      return res.json();
    },
  });

  const allItems = [...(events || []), ...(promotions || [])].slice(0, 3); // Вземаме само първите 3 за превю

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* ЗАГЛАВИЕ ЗА СЪБИТИЯ (Ако има такива в базата) */}
        {allItems.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 font-serif">
              {language === 'bg' ? "Актуално от плажа" : "Latest from the beach"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all">
                  <div className="aspect-video relative">
                    <img 
                      src={item.imageUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"} 
                      className="w-full h-full object-cover" 
                      alt={item.title} 
                    />
                    {item.discountedPrice && (
                      <Badge className="absolute top-2 right-2 bg-red-600">PROMO</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-amber-900 mb-2 line-clamp-1">{item.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <Calendar className="w-3 h-3" />
                      {item.eventDate || item.startDate ? format(new Date(item.eventDate || item.startDate!), "d MMM", { locale: bg }) : "Сезон 2024"}
                    </div>
                    <Link href="/events">
                      <span className="text-sm text-amber-600 font-bold cursor-pointer hover:underline">
                        Виж повече →
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ОСТАНАЛАТА ЧАСТ ОТ ABOUT (Цени, Бар и т.н.) */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="bg-slate-50 p-8 rounded-3xl">
              <p className="text-xl text-gray-700 leading-relaxed italic font-light italic">
                "{t('about_text_1')}"
              </p>
              <p className="text-gray-600 mt-4">{t('about_text_2')}</p>
            </div>

            <div id="bar" className="scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                🍹 {t('nav_bar')}
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {["Mojito", "Aperol Spritz", "Beach Vibe"].map((drink, i) => (
                  <div key={i} className="min-w-[120px] p-4 bg-amber-50/50 rounded-2xl text-center border border-amber-100">
                    <span className="font-bold text-gray-800 text-sm">{drink}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 sticky top-24">
            <div id="prices" className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">🏖️ {t('season_prices')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2"><span>Шезлонг</span><b>10.00 лв.</b></div>
                <div className="flex justify-between border-b pb-2"><span>Чадър</span><b>10.00 лв.</b></div>
                <div className="flex justify-between p-2 bg-amber-50 rounded-lg text-amber-700 font-bold"><span>Комплект</span><span>30.00 лв.</span></div>
              </div>
            </div>
            
            <Link href="/events">
              <button className="w-full py-4 bg-amber-500 text-white rounded-2xl font-bold hover:bg-amber-600 transition-all shadow-lg">
                🔥 ВСИЧКИ СЪБИТИЯ И ПРОМОЦИИ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
