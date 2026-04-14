import { Card } from "@/components/ui/card";

const cocktails = [
  {
    id: 1,
    name: "Мохито Райски",
    description: "Класически мохито с местна мента, лайм, сода и малко ром. Освежаващ и лек.",
    price: "18 BGN",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_1_mojito-PhhGMzDaKy4m3upe2SzbTg.webp",
  },
  {
    id: 2,
    name: "Слънчев Залез",
    description: "Тропически микс от манго, маракуя и кокосово мляко. Сладък и фруктов.",
    price: "20 BGN",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_2_sunset-LgHUQKndrgXfowYSt6BszQ.webp",
  },
  {
    id: 3,
    name: "Морски Бриз",
    description: "Елегантна комбинация от водка, синьо кюрасо и лимонов сок. Цвят като морето.",
    price: "19 BGN",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_3_ocean-UfHvM9ujmyBAwhwwzcAJip.webp",
  },
  {
    id: 4,
    name: "Кокосова Мечта",
    description: "Кокосов ром, кокосово мляко, ананас и малко лимон. Тропически рай в чаша.",
    price: "19 BGN",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_1_mojito-PhhGMzDaKy4m3upe2SzbTg.webp",
  },
  {
    id: 5,
    name: "Вечерна Магия",
    description: "Тъмен ром, лайм, мед и щипка корица. Богат, топъл и пълен със мистерия.",
    price: "21 BGN",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_2_sunset-LgHUQKndrgXfowYSt6BszQ.webp",
  },
  {
    id: 6,
    name: "Цветна Лагуна",
    description: "Водка, синьо кюрасо, маракуя и сок от лимон. Визуално спектакуларен.",
    price: "20 BGN",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_3_ocean-UfHvM9ujmyBAwhwwzcAJip.webp",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
          Наше меню
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          Откройте нашата колекция от изискани коктейли, всеки един е майстерство на вкус и стил
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cocktails.map((cocktail) => (
            <Card
              key={cocktail.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2 text-foreground">
                  {cocktail.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {cocktail.description}
                </p>
                <p className="text-lg font-semibold text-primary">
                  {cocktail.price}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
