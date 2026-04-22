import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "wouter"; // Използваме wouter за лесна навигация
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react"; // Икона за по-добър UX

export default function EventsPage() {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ["/api/events"],
    queryFn: async () => {
      const res = await fetch("/api/events");
      if (!res.ok) {
        throw new Error("Неуспешно зареждане на събитията");
      }
      return res.json();
    },
  });

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Бутон за връщане към началната страница */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 hover:bg-primary/10 transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Назад към плажа
            </Button>
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-8 text-center font-serif">
            Предстоящи събития
          </h1>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="ml-4 text-xl">Зареждане на купона...</p>
            </div>
          ) : error ? (
            <div className="text-center p-8 bg-destructive/10 rounded-xl text-destructive">
              Грешка при зареждането. Моля, опитайте по-късно.
            </div>
          ) : (
            <div className="grid gap-8">
              {events?.length === 0 && (
                <p className="text-center text-xl text-muted-foreground">
                  В момента няма планирани събития. Очаквайте скоро! 🍹
                </p>
              )}
              
              {events?.map((event: any) => (
                <div key={event.id} className="bg-card overflow-hidden rounded-xl shadow-lg border border-border hover:border-primary/50 transition-colors">
                  {event.imageUrl && (
                    <div className="h-48 w-full overflow-hidden">
                      <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-card-foreground">{event.title}</h2>
                      <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold border border-primary/20">
                        📅 {new Date(event.startDate).toLocaleDateString('bg-BG', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">{event.description}</p>
                    
                    <div className="mt-6 flex items-center text-sm font-medium text-primary">
                      <span className="flex items-center gap-1">
                        📍 {event.location || "Beach Vibe, Varna"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
