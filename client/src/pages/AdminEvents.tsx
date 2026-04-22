import { useState } from "react";
import { useLocation, Link } from "wouter"; // Добавяме Link за навигация
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ChevronLeft } from "lucide-react"; // Икона за бутона назад

export default function AdminEvents() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const payload = {
      title: data.title as string,
      description: data.description as string,
      date: data.date as string, 
      imageUrl: (data.imageUrl as string) || "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      adminPassword: data.adminPassword as string,
    };

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Сървърът върна грешен формат. Провери OAUTH_SERVER_URL!");
      }

      const result = await res.json();

      if (res.ok) {
        toast.success("Събитието е записано успешно в SQL!");
        setLocation("/events");
      } else {
        throw new Error(result.message || "Грешна парола или проблем със сървъра.");
      }
    } catch (err: any) {
      console.error("Грешка:", err);
      toast.error(err.message || "Неуспешно свързване със сървъра.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-lg mx-auto">
        
        {/* Бутон за връщане към списъка със събития */}
        <div className="mb-6">
          <Link href="/events">
            <Button variant="ghost" className="gap-2 hover:bg-primary/10 transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Назад към събитията
            </Button>
          </Link>
        </div>

        <Card className="shadow-xl border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Админ: Ново събитие</CardTitle>
          </CardHeader>
          <CardContent>
            {/* autoComplete="off" забранява на браузъра да попълва автоматично формата */}
            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
              <div className="space-y-1">
                <label className="text-sm font-medium">Име на събитието</label>
                <Input name="title" placeholder="напр. Beach Party" required />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Дата и час</label>
                <Input name="date" type="datetime-local" required />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Описание</label>
                <Textarea name="description" placeholder="Детайли..." required className="min-h-[100px]" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Линк към снимка</label>
                <Input name="imageUrl" placeholder="URL към изображение" />
              </div>
              
              <div className="pt-4 border-t space-y-2">
                <label className="text-sm font-bold text-primary">Сигурност</label>
                <Input 
                  name="adminPassword" 
                  type="password"           // Крие паролата с точки
                  autoComplete="new-password" // Спира подсказките на браузъра
                  placeholder="Въведете парола за достъп" 
                  required 
                />
                <p className="text-[10px] text-muted-foreground">
                  Паролата се проверява директно в SQL сървъра.
                </p>
              </div>

              <Button type="submit" className="w-full text-lg font-bold" disabled={loading}>
                {loading ? "Записване в SQL..." : "Публикувай събитието"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
