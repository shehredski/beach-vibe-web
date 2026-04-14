import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/gallery_beach_1-85U4MdBKJWSLiy2G3vegH3.webp",
      title: "Golden Beach Sunset",
      alt: "Beautiful golden sandy beach with turquoise water and palm trees at sunset"
    },
    {
      id: 2,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/gallery_bar_seating-iEFfPJyJyeyiuGvwpMroFd.webp",
      title: "Elegant Beach Bar Lounge",
      alt: "Luxurious beach bar seating with wooden furniture and ocean view at sunset"
    },
    {
      id: 3,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_mojito-mjQXjYy9xDUE4KbuUt2FyN.webp",
      title: "Refreshing Mojito",
      alt: "Fresh mojito cocktail with mint and lime"
    },
    {
      id: 4,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_ocean-BXgKCUhDyUf8QJLhRH6Tc9.webp",
      title: "Ocean Blue Tropical Drink",
      alt: "Exotic ocean blue cocktail with tropical flowers"
    },
    {
      id: 5,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_pinacolada-7YddyxZDbwQUN9wBpXRD9W.webp",
      title: "Creamy Piña Colada",
      alt: "Tropical piña colada with pineapple and umbrella"
    },
    {
      id: 6,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/cocktail_sunset-kTFfWix6cLQUATGnyCErH3.webp",
      title: "Sunset Spritz",
      alt: "Golden sunset spritz cocktail"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Галерия
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Откройте красотата на нашия плажен рай
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages.find((img) => img.id === selectedImage)?.url}
              alt="Gallery"
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
