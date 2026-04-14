import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    partySize: "",
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const createReservation = trpc.reservations.create.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.date || !formData.time || !formData.partySize || !formData.name || !formData.email || !formData.phone) {
      toast.error("Моля, попълнете всички полета");
      return;
    }

    setIsSubmitting(true);

    try {
      await createReservation.mutateAsync({
        date: formData.date,
        time: formData.time,
        partySize: parseInt(formData.partySize),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      toast.success("Резервацията е успешна! Ще се свържем с вас скоро.");
      setFormData({
        date: "",
        time: "",
        partySize: "",
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      toast.error("Възникна грешка при резервацията. Моля, опитайте отново.");
      console.error("Reservation error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservations" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
          Резервирай своето място
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Попълнете формата по-долу, за да резервирате маса в Beach Vibe
        </p>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-card shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <Label htmlFor="date" className="text-foreground font-semibold mb-2 block">
                    Дата
                  </Label>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                {/* Time */}
                <div>
                  <Label htmlFor="time" className="text-foreground font-semibold mb-2 block">
                    Час
                  </Label>
                  <Input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Party Size */}
              <div>
                <Label htmlFor="partySize" className="text-foreground font-semibold mb-2 block">
                  Брой гости
                </Label>
                <Select value={formData.partySize} onValueChange={(value) => handleSelectChange("partySize", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Изберете брой гости" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "гост" : "гости"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-foreground font-semibold mb-2 block">
                  Име
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Вашето име"
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground font-semibold mb-2 block">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="вашия@email.com"
                  className="w-full"
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-foreground font-semibold mb-2 block">
                  Телефон
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+359 88 999 9999"
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold rounded-lg"
              >
                {isSubmitting ? "Обработка..." : "Резервирай сега"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
