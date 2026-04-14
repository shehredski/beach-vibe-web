export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_atmosphere-Sq7yP5N96CEXtcNe6pJJj9.webp"
              alt="Beach Vibe Atmosphere"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              Добре дошли в Beach Vibe
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Откройте идеалното място за лятото. Beach Vibe е повече от просто бар – това е преживяване. Разположен в сърцето на Кемпинг Лагуна, нашият бар предлага перфектната комбинация от освежаващи коктейли, приятна компания и незабравими моменти под звездите.
            </p>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              От първия залез до последния коктейл, всеки момент е специален. Нежните вълни, морския бриз, золотистия пясък и палмовите листа създават атмосфера на рай на земята.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="font-semibold text-primary mb-2">🌅 Залез</p>
                <p className="text-sm text-foreground/70">Спектакуларни гледки над морето</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="font-semibold text-primary mb-2">🍹 Коктейли</p>
                <p className="text-sm text-foreground/70">Изискани напитки, приготвени с любов</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="font-semibold text-primary mb-2">🏖️ Плаж</p>
                <p className="text-sm text-foreground/70">Золотист пясък и релакс</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="font-semibold text-primary mb-2">✨ Магия</p>
                <p className="text-sm text-foreground/70">Незабравими моменти</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
