export default function Menu() {
  const cocktails = [
    {
      id: 1,
      name: "Мохито",
      description: "Свежо с мента, лайм и ром",
      //price: "12 евро",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_mojito-mjQXjYy9xDUE4KbuUt2FyN.webp"
    },
    {
      id: 2,
      name: "Sunset Spritz",
      description: "Портокал, просеко и ликьор",
      //price: "14 евро",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_sunset-kTFfWix6cLQUATGnyCErH3.webp"
    },
    {
      id: 3,
      name: "Ocean Blue",
      description: "Синьо кюрасао, ром и ананас",
      //price: "13 евро",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_ocean-BXgKCUhDyUf8QJLhRH6Tc9.webp"
    },
    {
      id: 4,
      name: "Маргарита",
      description: "Текила, лайм и сол",
      //price: "12 евро",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_margarita-ce6nk5iPaQBZ44Ms7EYHbv.webp"
    },
    {
      id: 5,
      name: "Пина Колада",
      description: "Кокосово мляко, ром и ананас",
      //price: "13 евро",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_pinacolada-7YddyxZDbwQUN9wBpXRD9W.webp"
    },
    {
      id: 6,
      name: "Дайкири",
      description: "Ром, лайм и сироп",
      //price: "11 евро",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_daiquiri-KVssDPnoYsfusr9qBqskvk.webp"
    },
    {
      id: 7,
      name: "Сангрия",
      description: "Червено вино, плодове и ягоди",
      //price: "10 евро",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_sangria-8Dfm6yzcrbA5nz4AEsmyo7.webp"
    },
    {
      id: 8,
      name: "Белини",
      description: "Просеко, праскова и елегантност",
      //price: "12 евро",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_bellini-fwuAJSg878WUKABaTAGP2v.webp"
    }
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Меню на Коктейли
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Откройте нашите сигнатурни напитки
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cocktails.map((cocktail) => (
            <div
              key={cocktail.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cocktail.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {cocktail.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    {cocktail.price}
                  </span>
                  <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm font-semibold transition-colors">
                    Поръчай
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
