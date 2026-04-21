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

    // ВАЖНО: Проверка за парола, за да е защитено
    if (data.adminPassword !== "beachvibe2024") { // Смени си паролата тук
      toast.error("Грешна парола!");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          date: new Date(data.date as string).toISOString(),
          imageUrl: data.imageUrl || "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
        }),
      });

      if (res.ok) {
        toast.success("Събитието е добавено успешно!");
        setLocation("/events");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Грешка при запис в базата.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Добави ново събитие</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="title" placeholder="Име на партито (напр. July Morning)" required />
            <Input name="date" type="datetime-local" required />
            <Textarea name="description" placeholder="Описание на събитието..." required />
            <Input name="imageUrl" placeholder="Линк към снимка (незадължително)" />
            <div className="pt-4 border-t">
              <Input name="adminPassword" type="password" placeholder="Админ парола" required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Записване..." : "Публикувай събитието"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
