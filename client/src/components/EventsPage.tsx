import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Tag, ChevronLeft } from "lucide-react";
import { format } from "date-fns";
import { bg } from "date-fns/locale";

// Дефинираме интерфейс за данните
interface CombinedItem {
  id: number;
  title: string;
  description: string | null;
  eventDate?: string;
  location?: string | null;
  startDate?: string;
  originalPrice?: string | number;
  discountedPrice?: string | number;
  discountPercentage?: number;
  imageUrl: string | null;
}

export default function EventsPage() {
  // 1. Вземаме събитията с добавена queryFn (Фикс за конзолната грешка)
  const { data: events, isLoading: loadingEvents } = useQuery<CombinedItem[]>({
    queryKey: ["/api/events"],
    queryFn: async () => {
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error("Грешка при зареждане на събития");
      return res.json();
    },
  });

  // 2. Вземаме промоциите с добавена queryFn
  const { data: promotions, isLoading: loadingPromos } = useQuery<CombinedItem[]>({
    queryKey: ["/api/promotions"],
    queryFn: async () => {
      const res = await fetch("/api/promotions");
      if (!res.ok) throw new Error("Грешка при зареждане на промоции");
      return res.json();
    },
  });

  if (loadingEvents || loadingPromos) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-amber-900 font-medium font-serif italic text-lg">
          Зареждаме летните емоции...
        </div>
      </div>
    );
  }

  // Обединяваме двата списъка
  const allItems = [...(events || []), ...(promotions || [])];

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen">
      {/* БУТОН ЗА ВРЪЩАНЕ */}
      <div className="mb-8 flex justify-start">
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-amber-800 hover:bg-amber-100/50 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Назад към началната страница
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-900 font-serif">
        Летни Събития и Промоции
      </h1>

      {allItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allItems.map((item, index) => {
            const displayDate = item.eventDate || item.startDate;
            
            return (
              <Card key={`${item.id}-${index}`} className="overflow-hidden border-none bg-white/60 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="aspect-video w-full relative overflow-hidden">
                  <img
                    src={item.imageUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {item.discountPercentage && (
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white font-bold text-lg px-3 shadow-xl">
                      -{item.discountPercentage}%
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <Badge variant="outline" className="w-fit mb-2 border-amber-500 text-amber-700 font-medium">
                    {item.discountedPrice ? "ПРОМОЦИЯ" : "СЪБИТИЕ"}
                  </Badge>
                  <CardTitle className="text-2xl text-amber-900 font-bold leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex-grow">
                  <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-3 pt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-amber-100 rounded-md">
                        <Calendar className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="font-medium">
                        {displayDate ? format(new Date(displayDate), "d MMMM yyyy", { locale: bg }) : "Целогодишно"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-amber-100 rounded-md">
                        <MapPin className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="font-medium">{item.location || "Beach Vibe, Кемпинг Лагуна"}</span>
                    </div>
                  </div>

                  {/* Ценова секция */}
                  {item.discountedPrice && (
                    <div className="pt-4 mt-auto border-t border-amber-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        {item.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {Number(item.originalPrice).toFixed(2)} евро.
                          </span>
                        )}
                        <span className="text-2xl font-black text-amber-900">
                          {Number(item.discountedPrice).toFixed(2)} евро.
                        </span>
                      </div>
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Tag className="w-5 h-5 text-amber-600" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-32 bg-white/30 rounded-3xl backdrop-blur-sm border-2 border-dashed border-amber-200">
          <div className="text-amber-900/50 text-xl font-medium">
            В момента няма активни предложения. 
            <br /> <span className="text-sm italic">Проверете отново по-късно!</span>
          </div>
        </div>
      )}
    </div>
  );
}
