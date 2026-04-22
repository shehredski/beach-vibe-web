import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Tag } from "lucide-react";
import { format } from "date-fns";
import { bg } from "date-fns/locale";

// Дефинираме общ интерфейс, който покрива и двете таблици
interface CombinedItem {
  id: number;
  title: string;
  description: string | null;
  // Полета от 'events'
  eventDate?: string;
  location?: string | null;
  // Полета от 'promotions'
  startDate?: string;
  originalPrice?: string | number;
  discountedPrice?: string | number;
  discountPercentage?: number;
  imageUrl: string | null;
}

export default function EventsPage() {
  // 1. Вземаме събитията
  const { data: events, isLoading: loadingEvents } = useQuery<CombinedItem[]>({
    queryKey: ["/api/events"],
  });

  // 2. Вземаме промоциите (тези, които виждаш в SQL)
  const { data: promotions, isLoading: loadingPromos } = useQuery<CombinedItem[]>({
    queryKey: ["/api/promotions"],
  });

  if (loadingEvents || loadingPromos) {
    return <div className="text-center py-20 animate-pulse text-amber-900">Зареждане на летни оферти...</div>;
  }

  // Обединяваме двата списъка в един
  const allItems = [...(events || []), ...(promotions || [])];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-amber-900 font-serif">
        Промоции и Събития
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allItems.map((item, index) => {
          // Унифицираме датата (ползваме или eventDate, или startDate)
          const displayDate = item.eventDate || item.startDate;
          
          return (
            <Card key={`${item.id}-${index}`} className="overflow-hidden border-none bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  src={item.imageUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {item.discountPercentage && (
                  <Badge className="absolute top-4 right-4 bg-red-600 text-white font-bold text-lg px-3 shadow-lg">
                    -{item.discountPercentage}%
                  </Badge>
                )}
              </div>

              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2 border-amber-500 text-amber-700">
                  {item.discountedPrice ? "ПРОМОЦИЯ" : "СЪБИТИЕ"}
                </Badge>
                <CardTitle className="text-2xl text-amber-900 font-bold leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 line-clamp-3 text-sm">
                  {item.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>
                      {displayDate ? format(new Date(displayDate), "d MMMM yyyy", { locale: bg }) : "Целогодишно"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>{item.location || "Beach Vibe, Кемпинг Лагуна"}</span>
                  </div>
                </div>

                {/* Секция за цени - показва се само ако имаме промоция */}
                {item.discountedPrice && (
                  <div className="pt-4 border-t flex items-center justify-between">
                    <div className="flex flex-col">
                      {item.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          {Number(item.originalPrice).toFixed(2)} лв.
                        </span>
                      )}
                      <span className="text-2xl font-bold text-amber-900">
                        {Number(item.discountedPrice).toFixed(2)} лв.
                      </span>
                    </div>
                    <Tag className="w-5 h-5 text-amber-300" />
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {allItems.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          В момента няма активни оферти.
        </div>
      )}
    </div>
  );
}
