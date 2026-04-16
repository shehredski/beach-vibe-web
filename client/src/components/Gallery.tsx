import React from 'react';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_food_unique-Vwofvt5BYB4ZAqFaBt38Pv.webp',
      alt: 'Beach Food Platter',
      title: 'Гурме преживяване'
    },
    {
      id: 2,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_cocktail_unique-22kDT78zJYDJ8auCdHVgfo.webp',
      alt: 'Tropical Cocktail',
      title: 'Свежи коктейли'
    },
    {
      id: 3,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_sunset_unique-38fds8WUHLmfUvAzZXBTt5.webp',
      alt: 'Beach Sunset',
      title: 'Морска красота'
    },
    {
      id: 4,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_people_unique-5WTZbore2bMVibx4EYR6kj.webp',
      alt: 'Friends at Beach',
      title: 'Приятелски моменти'
    },
    {
      id: 5,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_bar_setup_unique-PJxYV2Y5vZ6bRwCyJoNWGV.webp',
      alt: 'Beach Bar Setup',
      title: 'Барът Beach Vibe'
    },
    {
      id: 6,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_lounge_unique-9Y3jV4pBQHt9k6SZNDftur.webp',
      alt: 'Beach Loungers',
      title: 'Луксозни шезлонги'
    },
    {
      id: 7,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_water_unique-oKDwzNiAn6uPHUbHHyj8PW.webp',
      alt: 'Crystal Clear Water',
      title: 'Кристално чисто море'
    },
    {
      id: 8,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_group_unique-KLtPBCHP3rSZH7LEEWBqE9.webp',
      alt: 'Group Having Fun',
      title: 'Летни забавления'
    },
    {
      id: 9,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_details_unique-Ae7QU664svZSVYkqw5NyLP.webp',
      alt: 'Bar Details',
      title: 'Детайли на бара'
    },
    {
      id: 10,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/instagram_beach_panorama_unique-cxmKkvYqb9smeM72GdKfrJ.webp',
      alt: 'Beach Panorama',
      title: 'Панорама на Beach Vibe'
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
