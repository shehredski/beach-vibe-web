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

    // Подготвяме тялото на заявката точно както го очаква сървърът (routes.ts)
    const payload = {
      title: data.title as string,
      description: data.description as string,
      date: data.date as string, // Изпращаме стринга директно, сървърът ще направи new Date()
      imageUrl: (data.imageUrl as string) || "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      adminPassword: data.adminPassword as string, // ТОВА БЕШЕ ПРОПУСНАТО
    };

    try {
      // Важно: Увери се, че пътят е /api/events. 
      // Ако ползваш tRPC, пътят може да е различен, но според лога ти търсим JSON тук.
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify(payload),
      });

      // Проверка дали отговорът е JSON
      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        const errorData = contentType?.includes("application/json") ? await res.json() : null;
        throw new Error(errorData?.message || "Грешка при запис");
      }

      toast.success("Събитието е добавено успешно в SQL!");
      setLocation("/events");
    } catch (err: any) {
      console.error("Save Error:", err);
      toast.error(err.message || "Грешка при връзката със сървъра.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <Card className="max-w-lg mx-auto shadow-2xl border-primary/20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Админ Панел: Събития</CardTitle>
          <p className="text-sm text-center text-muted-foreground">
            Добавете ново парти на плажа
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Заглавие</label>
              <Input name="title" placeholder="напр. July Morning 2024" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Дата и час</label>
              <Input name="date" type="datetime-local" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Описание</label>
              <Textarea 
                name="description" 
                placeholder="Разкажете повече за събитието..." 
                className="min-h-[100px]"
                required 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Линк към снимка</label>
              <Input name="imageUrl" placeholder="https://..." />
            </div>

            <div className="pt-4 border-t space-y-2">
              <label className="text-sm font-bold text-primary">Секретна парола</label>
              <Input 
                name="adminPassword" 
                type="password" 
                placeholder="Въведете паролата за достъп" 
                required 
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Изпращане към SQL..." : "Публикувай на стената"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
