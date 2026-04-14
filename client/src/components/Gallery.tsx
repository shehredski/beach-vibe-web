import { useLanguage } from "@/contexts/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();
  
  const images = [
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_real_1_62623b0c.webp",
      alt: "Beach",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/bar_real_1_45981359.webp",
      alt: "Bar",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_real_1_1f3bf9e2.webp",
      alt: "Cocktail",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
          {t("gallery.title")}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
