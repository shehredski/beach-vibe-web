import React from 'react';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_1_sunset_lounge-gRN4qrJc7zvcFTs4gWKMdt.webp',
      alt: 'Beach Vibe Sunset',
      title: 'Залез на Beach Vibe'
    },
    {
      id: 2,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_2_cocktails-h2G8Vt3vTdCRtTJinro6Zd.webp',
      alt: 'Beach Vibe Cocktails',
      title: 'Тропически Коктейли'
    },
    {
      id: 3,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_3_food_platter-aZheccqkW9ubVu2v9AoUaw.webp',
      alt: 'Beach Vibe Food',
      title: 'Морски Деликатеси'
    },
    {
      id: 4,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_4_bar_setup-BKHoiN8KrQGMnBFqeTjqeC.webp',
      alt: 'Beach Vibe Bar',
      title: 'Барът Beach Vibe'
    },
    {
      id: 5,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_5_group_celebration-ZrDLxNb3Azp9uVHMCsG2Wf.webp',
      alt: 'Beach Vibe Celebration',
      title: 'Празнуване на Плажа'
    },
    {
      id: 6,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_6_water_view-5uevf9CHqp9mTbTahYR9pb.webp',
      alt: 'Beach Vibe Water',
      title: 'Кристално Чисто Море'
    },
    {
      id: 7,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_7_dj_night-GjAM2eXf7BEtAZGDt7MLd3.webp',
      alt: 'Beach Vibe DJ Night',
      title: 'DJ Нощ на Плажа'
    },
    {
      id: 8,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_8_dining_table-fW5XvkteTAQiFSLS8cwhgF.webp',
      alt: 'Beach Vibe Dining',
      title: 'Романтична Вечеря'
    },
    {
      id: 9,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_9_entrance-6e2mRitPA8suK2H49NcreN.webp',
      alt: 'Beach Vibe Entrance',
      title: 'Входът на Beach Vibe'
    },
    {
      id: 10,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/beach_vibe_10_panorama-7euuKZqSu2HasQrH7ehdSd.webp',
      alt: 'Beach Vibe Panorama',
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
