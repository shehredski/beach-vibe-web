import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Нашият плаж"
  },
  {
    url: "https://images.unsplash.com/photo-1538991383142-26c1d7ee1d71",
    title: "Коктейли под залез"
  },
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    title: "Свежо кафе"
  },
  {
    url: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    title: "Летни емоции"
  },
  {
    url: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85",
    title: "Зона за релакс"
  },
  {
    url: "https://images.unsplash.com/photo-1520931061294-7ca94b5d4471",
    title: "Нощни партита"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Галерия</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Разгледайте моменти от лятото в Beach Vibe. Слънце, пясък и незабравими спомени.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-md h-80"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-medium border-b-2 border-amber-500 pb-1">
                  {image.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
