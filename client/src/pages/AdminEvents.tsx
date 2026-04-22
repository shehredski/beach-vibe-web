import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function AdminEvents() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Подготвяме данните точно както ги очаква твоя backend (routes.ts)
    const payload = {
      title: data.title as string,
      description: data.description as string,
      date: data.date as string, 
      imageUrl: (data.imageUrl as string) || "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      adminPassword: data.adminPassword as string,
    };

    try {
      // Опитваме първо с /api/events, но ако сървърът ти ползва tRPC или 
      // стандартен роутинг, това е мястото, където става грешката.
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      // Ако получим HTML вместо JSON, ще хванем грешката тук
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("Сървърът не върна JSON, а:", await res.text());
        throw new Error("Сървърът върна грешен формат (вероятно 404 или 500).");
      }

      const result = await res.json();

      if (res.ok) {
        toast.success("Събитието е записано успешно в SQL!");
        setLocation("/events");
      } else {
        throw new Error(result.message || "Грешка при запис.");
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
      <Card className="max-w-lg mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Админ: Ново събитие</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="title" placeholder="Заглавие на събитието" required />
            <Input name="date" type="datetime-local" required />
            <Textarea name="description" placeholder="Описание..." required className="min-h-[100px]" />
            <Input name="imageUrl" placeholder="Линк към снимка (URL)" />
            
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">Сигурност:</p>
              <Input 
                name="adminPassword" 
                type="password" 
                placeholder="Админ парола (beachvibe2024)" 
                required 
              />
            </div>

            <Button type="submit" className="w-full text-lg" disabled={loading}>
              {loading ? "Записване в SQL..." : "Публикувай събитието"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
