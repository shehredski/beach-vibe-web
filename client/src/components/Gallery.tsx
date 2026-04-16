import React from 'react';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_sunset_lounge-RHCqb7uj9J5YzrqwrfiT7Y.webp',
      alt: 'Beach Vibe Sunset Lounge',
      title: 'Луксозни Шезлонги'
    },
    {
      id: 2,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_cocktails-HFccBx4aDGaSAQmowFSx2x.webp',
      alt: 'Colorful Cocktails',
      title: 'Тропически Коктейли'
    },
    {
      id: 3,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_food_platter-UgmuA7LijpcZCxdmn63ae6.webp',
      alt: 'Seafood Platter',
      title: 'Морски Деликатеси'
    },
    {
      id: 4,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_bar_setup-9EWWiFsnD4Spk39rMDdhDB.webp',
      alt: 'Professional Bar Setup',
      title: 'Барът Beach Vibe'
    },
    {
      id: 5,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_group_celebration-cQCmnrCXbqG4hE8PPvwP7z.webp',
      alt: 'Friends Celebrating',
      title: 'Приятелски Моменти'
    },
    {
      id: 6,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_water_view-khYfBQhiBQQKvQRetpYXxr.webp',
      alt: 'Crystal Clear Water',
      title: 'Кристално Чисто Море'
    },
    {
      id: 7,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_dj_night-GBJkkbsZoHaipaZN2YdYaR.webp',
      alt: 'DJ Night Party',
      title: 'DJ Нощ'
    },
    {
      id: 8,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_dining_table-MhPspc3rraPn9CQZvfcv78.webp',
      alt: 'Romantic Dinner',
      title: 'Романтична Вечеря'
    },
    {
      id: 9,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_entrance-BJd6hVPiWgaCfKSzW8T722.webp',
      alt: 'Beach Vibe Entrance',
      title: 'Входът на Beach Vibe'
    },
    {
      id: 10,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_panorama-4t3Wu7UZ33nG3chuXjpRCv.webp',
      alt: 'Beach Bar Panorama',
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
