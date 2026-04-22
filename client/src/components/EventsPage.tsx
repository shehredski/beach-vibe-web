import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Tag } from "lucide-react";
import { format } from "date-fns";
import { bg } from "date-fns/locale";

// Обновен интерфейс, който отговаря на твоя SQL (image_3996fe.png)
interface Event {
  id: number;
  title: string;
  description: string;
  eventDate: string; // Използваме името от твоя SQL
  location?: string;
  imageUrl?: string;
  // Правим тези опционални, за да не гърми, ако ги няма в базата
  originalPrice?: number;
  discountedPrice?: number;
  discountPercentage?: number;
  status?: string;
}

export default function EventsPage() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 text-center">
        <p className="text-xl text-muted-foreground animate-pulse">Зареждане...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-amber-900 font-serif">
        Промоции и Събития
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events?.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-2xl transition-shadow border-none bg-white/50 backdrop-blur-sm">
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src={event.imageUrl || "http://googleusercontent.com/9"}
                alt={event.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
              {/* Показваме процента само ако съществува и е над 0 */}
              {event.discountPercentage && event.discountPercentage > 0 && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white text-lg font-bold px-3 py-1">
                  -{event.discountPercentage}%
                </Badge>
              )}
            </div>

            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-amber-700 border-amber-200">
                  {event.status === 'active' ? 'Активно' : 'Промоция'}
                </Badge>
              </div>
              <CardTitle className="text-2xl text-amber-900 leading-tight">
                {event.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-600 line-clamp-3">
                {event.description}
              </p>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>
                    {/* Проверка за валидна дата, за да не гърми сайта */}
                    {event.eventDate ? format(new Date(event.eventDate), "d MMMM", { locale: bg }) : "Промоция"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{event.location || "Кемпинг Лагуна, Златни пясъци"}</span>
                </div>
              </div>

              {/* Показваме цените само ако ги има в обекта */}
              {event.discountedPrice && (
                <div className="pt-4 border-t flex items-center justify-between">
                  <div className="flex flex-col">
                    {event.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {Number(event.originalPrice).toFixed(2)} лв.
                      </span>
                    )}
                    <span className="text-2xl font-bold text-amber-900">
                      {Number(event.discountedPrice).toFixed(2)} лв.
                    </span>
                  </div>
                  <Tag className="w-6 h-6 text-amber-200" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {(!events || events.length === 0) && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">В момента няма активни промоции.</p>
        </div>
      )}
    </div>
  );
}
