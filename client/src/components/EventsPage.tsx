import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import { bg } from "date-fns/locale";

interface BeachEvent {
  id: number;
  title: string;
  description: string | null;
  eventDate: string;
  imageUrl: string | null;
  location: string | null;
}

export default function EventsPage() {
  const { data: events, isLoading } = useQuery<BeachEvent[]>({
    queryKey: ["/api/events"],
  });

  if (isLoading) return <div className="text-center py-20">Зареждане...</div>;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-amber-900 font-serif">
        Събития и Промоции
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events?.map((event) => (
          <Card key={event.id} className="overflow-hidden border-none bg-white/50 backdrop-blur-sm shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={event.imageUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <CardHeader>
              <Badge className="w-fit mb-2 bg-amber-600">СЪБИТИЕ</Badge>
              <CardTitle className="text-2xl text-amber-900">{event.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-600 line-clamp-3">{event.description}</p>
              
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>{format(new Date(event.eventDate), "d MMMM yyyy", { locale: bg })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{event.location || "Beach Vibe, Кемпинг Лагуна"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
