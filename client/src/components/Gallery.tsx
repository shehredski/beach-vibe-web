import React from 'react';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_hammock_61c63385.webp',
      alt: 'Beach Relaxation',
      title: 'Релаксирай на плажа'
    },
    {
      id: 2,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_food_c3c6b90e.webp',
      alt: 'Beach Food',
      title: 'Гурме преживяване'
    },
    {
      id: 3,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_setup_73f4ca96.webp',
      alt: 'Beach Setup',
      title: 'Модерна инфраструктура'
    },
    {
      id: 4,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_umbrella_45363ff3.webp',
      alt: 'Beach Umbrella',
      title: 'Защита от слънце'
    },
    {
      id: 5,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_relaxation_6e203dce.webp',
      alt: 'Beach Relaxation 2',
      title: 'Спокойствие и комфорт'
    },
    {
      id: 6,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_sunset_3c805110.webp',
      alt: 'Beach Sunset',
      title: 'Морска красота'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">Галерия</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Открийте красотата на Beach Vibe през нашата галерия. Всяка снимка разказва история за незабравимо лятно преживяване.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:brightness-75 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
