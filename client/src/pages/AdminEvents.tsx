import { useState } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ChevronLeft, Percent } from "lucide-react";

export default function AdminEvents() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Подготвяме payload-а според имената в твоя SQL (image_393161.png)
    const payload = {
      title: data.title as string,
      description: data.description as string,
      originalPrice: Number(data.originalPrice) || 0,
      discountedPrice: Number(data.discountedPrice) || 0,
      discountPercentage: Number(data.discountPercentage) || 0,
      imageUrl: (data.imageUrl as string) || "http://googleusercontent.com/9",
      startDate: data.startDate as string,
      endDate: data.endDate as string,
      status: "active", // Автоматично го правим активно
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

      const result = await res.json();

      if (res.ok) {
        toast.success("Промоцията е записана успешно!");
        setLocation("/events");
      } else {
        throw new Error(result.message || "Грешка при запис в SQL.");
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
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link href="/events">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="w-4 h-4" /> Назад
            </Button>
          </Link>
        </div>

        <Card className="shadow-xl border-t-4 border-t-amber-600">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Percent className="text-amber-600" /> Админ: Нова Промоция
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
              
              <div className="space-y-1">
                <label className="text-sm font-medium">Заглавие</label>
                <Input name="title" placeholder="напр. Юни Промоция" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Начало</label>
                  <Input name="startDate" type="datetime-local" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Край</label>
                  <Input name="endDate" type="datetime-local" required />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Ориг. Цена</label>
                  <Input name="originalPrice" type="number" step="0.01" placeholder="10.00" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Промо Цена</label>
                  <Input name="discountedPrice" type="number" step="0.01" placeholder="6.70" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Отстъпка %</label>
                  <Input name="discountPercentage" type="number" placeholder="33" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Описание</label>
                <Textarea name="description" placeholder="Детайли за промоцията..." required />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">URL на снимка</label>
                <Input name="imageUrl" placeholder="http://..." defaultValue="http://googleusercontent.com/9" />
              </div>
              
              <div className="pt-4 border-t space-y-2 bg-amber-50/50 p-4 rounded-b-lg">
                <label className="text-sm font-bold text-amber-900">Сигурност</label>
                <Input 
                  name="adminPassword" 
                  type="password" 
                  autoComplete="new-password"
                  placeholder="Парола за SQL достъп" 
                  required 
                />
              </div>

              <Button type="submit" className="w-full text-lg bg-amber-600 hover:bg-amber-700" disabled={loading}>
                {loading ? "Записване..." : "Публикувай в Базата Данни"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
