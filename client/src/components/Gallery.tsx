import React from 'react';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_3999.JPG',
      alt: 'Beach Vibe Sunset',
      title: 'Залез на Beach Vibe'
    },
    {
      id: 2,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_4000.JPG',
      alt: 'Beach Vibe Lounge',
      title: 'Луксозни Шезлонги'
    },
    {
      id: 3,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_4001.JPG',
      alt: 'Beach Vibe Bar',
      title: 'Барът Beach Vibe'
    },
    {
      id: 4,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_4004.JPG',
      alt: 'Beach Vibe Setup',
      title: 'Плажна Инфраструктура'
    },
    {
      id: 5,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_4005.JPG',
      alt: 'Beach Vibe Atmosphere',
      title: 'Атмосфера на Beach Vibe'
    },
    {
      id: 6,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_4008.JPG',
      alt: 'Beach Vibe Drinks',
      title: 'Коктейли и Напитки'
    },
    {
      id: 7,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_4013.JPG',
      alt: 'Beach Vibe Guests',
      title: 'Гостите на Beach Vibe'
    },
    {
      id: 8,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_4020.JPG',
      alt: 'Beach Vibe Sea View',
      title: 'Морски Изглед'
    },
    {
      id: 9,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_4021.JPG',
      alt: 'Beach Vibe Details',
      title: 'Детайли на Beach Vibe'
    },
    {
      id: 10,
      src: 'https://sendgb.com/download/jwYIHx9mXcP/BOB_4022.JPG',
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
