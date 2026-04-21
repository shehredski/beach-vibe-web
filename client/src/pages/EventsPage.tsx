import { useQuery } from "@tanstack/react-query";

export default function EventsPage() {
  const { data: events, isLoading } = useQuery({
    queryKey: ["/api/events"],
  });

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Предстоящи събития</h1>
      {isLoading ? <p>Зареждане...</p> : (
        <div className="grid gap-4">
          {events?.map(event => (
            <div key={event.id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{new Date(event.eventDate).toLocaleDateString('bg-BG')}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
