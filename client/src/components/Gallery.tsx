const galleryImages = [
  {
    id: 1,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_atmosphere-Sq7yP5N96CEXtcNe6pJJj9.webp",
    alt: "Beach Sunset",
  },
  {
    id: 2,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_1_mojito-PhhGMzDaKy4m3upe2SzbTg.webp",
    alt: "Mojito Drink",
  },
  {
    id: 3,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_2_sunset-LgHUQKndrgXfowYSt6BszQ.webp",
    alt: "Sunset Cocktail",
  },
  {
    id: 4,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_3_ocean-UfHvM9ujmyBAwhwwzcAJip.webp",
    alt: "Ocean Breeze",
  },
  {
    id: 5,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_atmosphere-Sq7yP5N96CEXtcNe6pJJj9.webp",
    alt: "Beach Bar",
  },
  {
    id: 6,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_1_mojito-PhhGMzDaKy4m3upe2SzbTg.webp",
    alt: "Tropical Drinks",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
          Галерия
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          Откройте красотата на Beach Vibe през нашите снимки
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-serif font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
