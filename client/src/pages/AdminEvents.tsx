import { useState } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ChevronLeft, CalendarDays, MapPin } from "lucide-react";

export default function AdminEvents() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Подготвяме чист обект само за СЪБИТИЕ
    const payload = {
      title: data.title as string,
      description: data.description as string,
      imageUrl: (data.imageUrl as string) || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      eventDate: data.eventDate as string, // Важно: В базата е eventDate
      location: data.location as string || "Beach Vibe, Кемпинг Лагуна",
      adminPassword: data.adminPassword as string,
    };

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Събитието е създадено успешно!");
        setLocation("/events");
      } else {
        throw new Error(result.message || "Грешка при запис.");
      }
    } catch (err: any) {
      toast.error(err.message || "Неуспешно свързване.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link href="/events">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="w-4 h-4" /> Назад към сайта
            </Button>
          </Link>
        </div>

        <Card className="shadow-xl border-t-4 border-t-blue-600">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <CalendarDays className="text-blue-600" /> Админ: Ново Събитие
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Име на събитието</label>
                <Input name="title" placeholder="напр. Beach Party" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Дата и час</label>
                  <Input name="eventDate" type="datetime-local" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Локация</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input name="location" className="pl-10" placeholder="Кемпинг Лагуна" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Описание</label>
                <Textarea name="description" placeholder="Какво ще се случва..." required />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Линк към снимка</label>
                <Input name="imageUrl" placeholder="https://..." />
              </div>
              
              <div className="pt-4 border-t space-y-2 bg-blue-50/50 p-4 rounded-b-lg">
                <label className="text-sm font-bold text-blue-900">Сигурност</label>
                <Input name="adminPassword" type="password" placeholder="Парола за достъп" required />
              </div>

              <Button type="submit" className="w-full text-lg bg-blue-600 hover:bg-blue-700" disabled={loading}>
                {loading ? "Записване..." : "Създай Събитие"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
