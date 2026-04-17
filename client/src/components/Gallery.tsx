import React from 'react';

export default function Gallery() {
  const rotations: { [key: number]: number } = {
    12: 180,
    17: -90,
    18: -90,
    19: -90,
    21: -90,
    30: -90,
    31: -90,
    32: -90,
    33: -90,
    35: -90,
    22: 90,
    23: 90,
  };

  const galleryImages = [
    {
      id: 1,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_3999_9c5474d6.webp',
      alt: 'Beach Vibe Photo 1',
      title: 'Beach Vibe Фото 1'
    },
    {
      id: 2,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4000_68d7d68a.webp',
      alt: 'Beach Vibe Photo 2',
      title: 'Beach Vibe Фото 2'
    },
    {
      id: 3,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4001_85cb0cb3.webp',
      alt: 'Beach Vibe Photo 3',
      title: 'Beach Vibe Фото 3'
    },
    {
      id: 4,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4004_e945973b.webp',
      alt: 'Beach Vibe Photo 4',
      title: 'Beach Vibe Фото 4'
    },
    {
      id: 5,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4005_364969f9.webp',
      alt: 'Beach Vibe Photo 5',
      title: 'Beach Vibe Фото 5'
    },
    {
      id: 6,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4008_fee3344a.webp',
      alt: 'Beach Vibe Photo 6',
      title: 'Beach Vibe Фото 6'
    },
    {
      id: 7,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4013_44099905.webp',
      alt: 'Beach Vibe Photo 7',
      title: 'Beach Vibe Фото 7'
    },
    {
      id: 8,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4020_76aea105.webp',
      alt: 'Beach Vibe Photo 8',
      title: 'Beach Vibe Фото 8'
    },
    {
      id: 9,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4021_0ad5cc90.webp',
      alt: 'Beach Vibe Photo 9',
      title: 'Beach Vibe Фото 9'
    },
    {
      id: 10,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4022_423c0181.webp',
      alt: 'Beach Vibe Photo 10',
      title: 'Beach Vibe Фото 10'
    },
    {
      id: 11,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4025_62a0ae3c.webp',
      alt: 'Beach Vibe Photo 11',
      title: 'Beach Vibe Фото 11'
    },
    {
      id: 12,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4030_b804677d.webp',
      alt: 'Beach Vibe Photo 12',
      title: 'Beach Vibe Фото 12'
    },
    {
      id: 13,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4031_bde0fded.webp',
      alt: 'Beach Vibe Photo 13',
      title: 'Beach Vibe Фото 13'
    },
    {
      id: 14,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4042_ece203f1.webp',
      alt: 'Beach Vibe Photo 14',
      title: 'Beach Vibe Фото 14'
    },
    {
      id: 15,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4051_f3f1bcdc.webp',
      alt: 'Beach Vibe Photo 15',
      title: 'Beach Vibe Фото 15'
    },
    {
      id: 16,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4065_15d233b9.webp',
      alt: 'Beach Vibe Photo 16',
      title: 'Beach Vibe Фото 16'
    },
    {
      id: 17,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4090_c6eedb68.webp',
      alt: 'Beach Vibe Photo 17',
      title: 'Beach Vibe Фото 17'
    },
    {
      id: 18,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4093_8733f9b3.webp',
      alt: 'Beach Vibe Photo 18',
      title: 'Beach Vibe Фото 18'
    },
    {
      id: 19,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4094_9a2a3076.webp',
      alt: 'Beach Vibe Photo 19',
      title: 'Beach Vibe Фото 19'
    },
    {
      id: 20,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4106_63a745e8.webp',
      alt: 'Beach Vibe Photo 20',
      title: 'Beach Vibe Фото 20'
    },
    {
      id: 21,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4147_c84e1bab.webp',
      alt: 'Beach Vibe Photo 21',
      title: 'Beach Vibe Фото 21'
    },
    {
      id: 22,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4160_27ea6cac.webp',
      alt: 'Beach Vibe Photo 22',
      title: 'Beach Vibe Фото 22'
    },
    {
      id: 23,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4185_7e5b6ef4.webp',
      alt: 'Beach Vibe Photo 23',
      title: 'Beach Vibe Фото 23'
    },
    {
      id: 24,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4187_c204dce0.webp',
      alt: 'Beach Vibe Photo 24',
      title: 'Beach Vibe Фото 24'
    },
    {
      id: 25,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4207_ef76c0c6.webp',
      alt: 'Beach Vibe Photo 25',
      title: 'Beach Vibe Фото 25'
    },
    {
      id: 26,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4210_24e6772c.webp',
      alt: 'Beach Vibe Photo 26',
      title: 'Beach Vibe Фото 26'
    },
    {
      id: 27,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4212_9194069d.webp',
      alt: 'Beach Vibe Photo 27',
      title: 'Beach Vibe Фото 27'
    },
    {
      id: 28,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4216_368061cc.webp',
      alt: 'Beach Vibe Photo 28',
      title: 'Beach Vibe Фото 28'
    },
    {
      id: 29,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4222_d3b1a199.webp',
      alt: 'Beach Vibe Photo 29',
      title: 'Beach Vibe Фото 29'
    },
    {
      id: 30,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4230_896054ad.webp',
      alt: 'Beach Vibe Photo 30',
      title: 'Beach Vibe Фото 30'
    },
    {
      id: 31,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4234_c6f4f750.webp',
      alt: 'Beach Vibe Photo 31',
      title: 'Beach Vibe Фото 31'
    },
    {
      id: 32,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4238_443891cc.webp',
      alt: 'Beach Vibe Photo 32',
      title: 'Beach Vibe Фото 32'
    },
    {
      id: 33,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4277_98cfb168.webp',
      alt: 'Beach Vibe Photo 33',
      title: 'Beach Vibe Фото 33'
    },
    {
      id: 34,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4283_ec46c180.webp',
      alt: 'Beach Vibe Photo 34',
      title: 'Beach Vibe Фото 34'
    },
    {
      id: 35,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4348_5e329c25.webp',
      alt: 'Beach Vibe Photo 35',
      title: 'Beach Vibe Фото 35'
    },
    {
      id: 36,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4505_3cf0be9b.webp',
      alt: 'Beach Vibe Photo 36',
      title: 'Beach Vibe Фото 36'
    },
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
                style={rotations[image.id] ? { transform: `rotate(${rotations[image.id]}deg)` } : undefined}
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
