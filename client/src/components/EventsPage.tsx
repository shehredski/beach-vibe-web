import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

export default function EventsPage() {
  // Тук правим заявка към сървъра за събитията от SQL
  const { data: events, isLoading } = useQuery({
    queryKey: ["/api/events"],
  });

  return (
    <div className="min-h-screen bg-background p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Предстоящи събития</h1>
        
        {isLoading ? (
          <p className="text-center">Зареждане на купона...</p>
        ) : (
          <div className="grid gap-6">
            {events?.length === 0 && <p className="text-center">В момента няма планирани събития. Очаквайте скоро!</p>}
            {events?.map((event: any) => (
              <div key={event.id} className="bg-card p-6 rounded-xl shadow-lg border border-border">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-semibold text-card-foreground">{event.title}</h2>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {new Date(event.eventDate).toLocaleDateString('bg-BG')}
                  </span>
                </div>
                <p className="mt-4 text-muted-foreground">{event.description}</p>
                {event.location && (
                  <p className="mt-2 text-sm text-primary/80">📍 {event.location}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
