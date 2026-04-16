import React from 'react';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://scontent-iad3-1.cdninstagram.com/v/t51.82787-15/530461637_17859449244466288_5026139876889918154_n.webp',
      alt: 'Beach Vibe Sunset',
      title: 'Морска красота'
    },
    {
      id: 2,
      src: 'https://scontent-iad3-1.cdninstagram.com/v/t51.82787-15/530508253_17859203628466288_3907397288714041931_n.webp',
      alt: 'Beach Setup',
      title: 'Модерна инфраструктура'
    },
    {
      id: 3,
      src: 'https://scontent-iad3-1.cdninstagram.com/v/t51.82787-15/532153644_17859775986466288_2566356350421343574_n.webp',
      alt: 'Beach Relaxation',
      title: 'Релаксирай на плажа'
    },
    {
      id: 4,
      src: 'https://scontent-iad3-1.cdninstagram.com/v/t51.82787-15/534343827_17859775917466288_8060401248947267951_n.webp',
      alt: 'Beach Bar',
      title: 'Барът Beach Vibe'
    },
    {
      id: 5,
      src: 'https://scontent-iad3-1.cdninstagram.com/v/t51.82787-15/534836406_17860168386466288_3704832567059594790_n.jpg?stp=dst-jpg',
      alt: 'Beach Food',
      title: 'Гурме преживяване'
    },
    {
      id: 6,
      src: 'https://scontent-iad3-2.cdninstagram.com/v/t51.82787-15/533133035_17859775869466288_3898397286951599619_n.webp',
      alt: 'Beach Umbrellas',
      title: 'Защита от слънце'
    },
    {
      id: 7,
      src: 'https://scontent-iad3-2.cdninstagram.com/v/t51.82787-15/539920563_17861435874466288_1044480071753392138_n.jpg?stp=dst-jpg',
      alt: 'Summer Vibes',
      title: 'Летни забавления'
    },
    {
      id: 8,
      src: 'https://scontent-iad3-2.cdninstagram.com/v/t51.82787-15/641094751_17881402773466288_1381898906206454341_n.webp',
      alt: 'Beach Cocktails',
      title: 'Свежи коктейли'
    },
    {
      id: 9,
      src: 'https://scontent-iad6-1.cdninstagram.com/v/t51.82787-15/531308113_17859654618466288_4211506792020629837_n.webp',
      alt: 'Beach People',
      title: 'Приятелски моменти'
    },
    {
      id: 10,
      src: 'https://scontent-iad6-1.cdninstagram.com/v/t51.82787-15/529807909_17859165831466288_3358768919333621512_n.jpg?stp=dst-jpg',
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
