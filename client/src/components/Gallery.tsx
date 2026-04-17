import React from 'react';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_3999_b03b7199.JPG',
      alt: 'Beach Vibe Photo 1',
      title: 'Beach Vibe Фото 1'
    },
    {
      id: 2,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4000_da31a850.JPG',
      alt: 'Beach Vibe Photo 2',
      title: 'Beach Vibe Фото 2'
    },
    {
      id: 3,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4001_46b40ba6.JPG',
      alt: 'Beach Vibe Photo 3',
      title: 'Beach Vibe Фото 3'
    },
    {
      id: 4,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4004_21aeb497.JPG',
      alt: 'Beach Vibe Photo 4',
      title: 'Beach Vibe Фото 4'
    },
    {
      id: 5,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4005_5987dff5.JPG',
      alt: 'Beach Vibe Photo 5',
      title: 'Beach Vibe Фото 5'
    },
    {
      id: 6,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4008_59eb0229.JPG',
      alt: 'Beach Vibe Photo 6',
      title: 'Beach Vibe Фото 6'
    },
    {
      id: 7,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4013_b54831e5.JPG',
      alt: 'Beach Vibe Photo 7',
      title: 'Beach Vibe Фото 7'
    },
    {
      id: 8,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4020_51c175f7.JPG',
      alt: 'Beach Vibe Photo 8',
      title: 'Beach Vibe Фото 8'
    },
    {
      id: 9,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4021_34e626f8.JPG',
      alt: 'Beach Vibe Photo 9',
      title: 'Beach Vibe Фото 9'
    },
    {
      id: 10,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4022_9999f580.JPG',
      alt: 'Beach Vibe Photo 10',
      title: 'Beach Vibe Фото 10'
    },
    {
      id: 11,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4025_a5676ccd.JPG',
      alt: 'Beach Vibe Photo 11',
      title: 'Beach Vibe Фото 11'
    },
    {
      id: 12,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4030_7490d923.JPG',
      alt: 'Beach Vibe Photo 12',
      title: 'Beach Vibe Фото 12'
    },
    {
      id: 13,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4031_54e467b4.JPG',
      alt: 'Beach Vibe Photo 13',
      title: 'Beach Vibe Фото 13'
    },
    {
      id: 14,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4042_40476a3d.JPG',
      alt: 'Beach Vibe Photo 14',
      title: 'Beach Vibe Фото 14'
    },
    {
      id: 15,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4065_57599167.JPG',
      alt: 'Beach Vibe Photo 15',
      title: 'Beach Vibe Фото 15'
    },
    {
      id: 16,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4090_a0709f8c.JPG',
      alt: 'Beach Vibe Photo 16',
      title: 'Beach Vibe Фото 16'
    },
    {
      id: 17,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4093_2918ad2e.JPG',
      alt: 'Beach Vibe Photo 17',
      title: 'Beach Vibe Фото 17'
    },
    {
      id: 18,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4094_24394244.JPG',
      alt: 'Beach Vibe Photo 18',
      title: 'Beach Vibe Фото 18'
    },
    {
      id: 19,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4106_6afa3864.JPG',
      alt: 'Beach Vibe Photo 19',
      title: 'Beach Vibe Фото 19'
    },
    {
      id: 20,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4147_8227a105.JPG',
      alt: 'Beach Vibe Photo 20',
      title: 'Beach Vibe Фото 20'
    },
    {
      id: 21,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4187_ebc90ca8.JPG',
      alt: 'Beach Vibe Photo 21',
      title: 'Beach Vibe Фото 21'
    },
    {
      id: 22,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4207_f1e73d32.JPG',
      alt: 'Beach Vibe Photo 22',
      title: 'Beach Vibe Фото 22'
    },
    {
      id: 23,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4210_fba98d8e.JPG',
      alt: 'Beach Vibe Photo 23',
      title: 'Beach Vibe Фото 23'
    },
    {
      id: 24,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4212_1b52826b.JPG',
      alt: 'Beach Vibe Photo 24',
      title: 'Beach Vibe Фото 24'
    },
    {
      id: 25,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4216_373fe867.JPG',
      alt: 'Beach Vibe Photo 25',
      title: 'Beach Vibe Фото 25'
    },
    {
      id: 26,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4222_3840abaa.JPG',
      alt: 'Beach Vibe Photo 26',
      title: 'Beach Vibe Фото 26'
    },
    {
      id: 27,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4230_17b83f83.JPG',
      alt: 'Beach Vibe Photo 27',
      title: 'Beach Vibe Фото 27'
    },
    {
      id: 28,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4234_f13ac43c.JPG',
      alt: 'Beach Vibe Photo 28',
      title: 'Beach Vibe Фото 28'
    },
    {
      id: 29,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4238_fceff931.JPG',
      alt: 'Beach Vibe Photo 29',
      title: 'Beach Vibe Фото 29'
    },
    {
      id: 30,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4277_5730e615.JPG',
      alt: 'Beach Vibe Photo 30',
      title: 'Beach Vibe Фото 30'
    },
    {
      id: 31,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4348_781f658e.JPG',
      alt: 'Beach Vibe Photo 31',
      title: 'Beach Vibe Фото 31'
    },
    {
      id: 32,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4505_3f2386ce.JPG',
      alt: 'Beach Vibe Photo 32',
      title: 'Beach Vibe Фото 32'
    },
    {
      id: 33,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4051_0d3efb2f.jpg',
      alt: 'Beach Vibe Photo 33',
      title: 'Beach Vibe Фото 33'
    },
    {
      id: 34,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4160_0b82f92a.jpg',
      alt: 'Beach Vibe Photo 34',
      title: 'Beach Vibe Фото 34'
    },
    {
      id: 35,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4185_125ec772.jpg',
      alt: 'Beach Vibe Photo 35',
      title: 'Beach Vibe Фото 35'
    },
    {
      id: 36,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4283_4f3552d0.jpg',
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
