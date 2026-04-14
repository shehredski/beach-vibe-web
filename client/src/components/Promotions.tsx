import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, TrendingDown } from "lucide-react";

export default function Promotions() {
  const { data: promotions, isLoading } = trpc.promotions.active.useQuery();

  if (isLoading) {
    return (
      <section id="promotions" className="py-20 md:py-32 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Сезонни Промоции
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Открийте нашите специални оферти за лятото
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-card rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="promotions" className="py-20 md:py-32 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-primary" size={28} />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Сезонни Промоции
            </h2>
            <Zap className="text-primary" size={28} />
          </div>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Открийте нашите специални оферти за лятото. Ограничени по време, максимален вкус!
          </p>
        </div>

        {promotions && promotions.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo) => {
              const discount = promo.discountPercentage;
              return (
                <Card
                  key={promo.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-card border-primary/20"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                    {promo.imageUrl ? (
                      <img
                        src={promo.imageUrl}
                        alt={promo.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <TrendingDown className="text-primary/40 mx-auto mb-2" size={40} />
                          <p className="text-foreground/30">Специална оферта</p>
                        </div>
                      </div>
                    )}

                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                      -{discount}%
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {promo.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 line-clamp-2">
                      {promo.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-3xl font-bold text-primary">
                        {promo.discountedPrice} лв
                      </span>
                      <span className="text-lg text-foreground/50 line-through">
                        {promo.originalPrice} лв
                      </span>
                    </div>

                    {/* Savings Info */}
                    <div className="bg-primary/10 rounded-lg p-3 mb-6 text-center">
                      <p className="text-sm text-primary font-semibold">
                        Спестявате: {(parseFloat(promo.originalPrice) - parseFloat(promo.discountedPrice)).toFixed(2)} лв
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-all"
                      onClick={() => {
                        const element = document.getElementById("reservations");
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Резервирай Сега
                    </Button>

                    {/* Validity Info */}
                    <p className="text-xs text-foreground/50 text-center mt-4">
                      Валидна до {new Date(promo.endDate).toLocaleDateString("bg-BG")}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-foreground/70 text-lg">
              Няма активни промоции в момента. Проверете отново скоро!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
