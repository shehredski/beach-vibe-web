import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Трябва да имаш инсталиран lucide-react

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | number>(null);

  const rotations: { [key: number]: number } = {
    12: 180, 17: -90, 18: -90, 19: -90, 21: -90, 
    30: -90, 31: -90, 32: -90, 33: -90, 35: -90, 
    22: 90, 23: 90,
  };

  const galleryImages = [
    { id: 1, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_3999_9c5474d6.webp', title: 'Beach Vibe 1' },
    { id: 2, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4000_68d7d68a.webp', title: 'Beach Vibe 2' },
    { id: 3, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4001_85cb0cb3.webp', title: 'Beach Vibe 3' },
    { id: 4, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4004_e945973b.webp', title: 'Beach Vibe 4' },
    { id: 5, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4005_364969f9.webp', title: 'Beach Vibe 5' },
    { id: 6, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4008_fee3344a.webp', title: 'Beach Vibe 6' },
    { id: 7, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4013_44099905.webp', title: 'Beach Vibe 7' },
    { id: 8, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4020_76aea105.webp', title: 'Beach Vibe 8' },
    { id: 9, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4021_0ad5cc90.webp', title: 'Beach Vibe 9' },
    { id: 10, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4022_423c0181.webp', title: 'Beach Vibe 10' },
    { id: 11, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4025_62a0ae3c.webp', title: 'Beach Vibe 11' },
    { id: 12, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4030_b804677d.webp', title: 'Beach Vibe 12' },
    { id: 13, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4031_bde0fded.webp', title: 'Beach Vibe 13' },
    { id: 14, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4042_ece203f1.webp', title: 'Beach Vibe 14' },
    { id: 15, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4051_f3f1bcdc.webp', title: 'Beach Vibe 15' },
    { id: 16, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4065_15d233b9.webp', title: 'Beach Vibe 16' },
    { id: 17, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4090_c6eedb68.webp', title: 'Beach Vibe 17' },
    { id: 18, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4093_8733f9b3.webp', title: 'Beach Vibe 18' },
    { id: 19, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4094_9a2a3076.webp', title: 'Beach Vibe 19' },
    { id: 20, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4106_63a745e8.webp', title: 'Beach Vibe 20' },
    { id: 21, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4147_c84e1bab.webp', title: 'Beach Vibe 21' },
    { id: 22, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4160_27ea6cac.webp', title: 'Beach Vibe 22' },
    { id: 23, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4185_7e5b6ef4.webp', title: 'Beach Vibe 23' },
    { id: 24, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4187_c204dce0.webp', title: 'Beach Vibe 24' },
    { id: 25, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4207_ef76c0c6.webp', title: 'Beach Vibe 25' },
    { id: 26, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4210_24e6772c.webp', title: 'Beach Vibe 26' },
    { id: 27, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4212_9194069d.webp', title: 'Beach Vibe 27' },
    { id: 28, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4216_368061cc.webp', title: 'Beach Vibe 28' },
    { id: 29, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4222_d3b1a199.webp', title: 'Beach Vibe 29' },
    { id: 30, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4230_896054ad.webp', title: 'Beach Vibe 30' },
    { id: 31, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4234_c6f4f750.webp', title: 'Beach Vibe 31' },
    { id: 32, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4238_443891cc.webp', title: 'Beach Vibe 32' },
    { id: 33, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4277_98cfb168.webp', title: 'Beach Vibe 33' },
    { id: 34, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4283_ec46c180.webp', title: 'Beach Vibe 34' },
    { id: 35, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4348_5e329c25.webp', title: 'Beach Vibe 35' },
    { id: 36, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4505_3cf0be9b.webp', title: 'Beach Vibe 36' },
  ];

  const currentImage = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4 uppercase tracking-wider">Галерия</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-stone-500 max-w-2xl mx-auto italic italic">
            "Животът е по-добър на плажа"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              layoutId={`img-${image.id}`}
              onClick={() => setSelectedImage(image.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-xl aspect-[4/3] bg-stone-100 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={rotations[image.id] ? { transform: `rotate(${rotations[image.id]}deg) scale(1.5)` } : undefined}
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-light tracking-widest uppercase border-white border px-4 py-2">
                   Увеличи
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
          >
            <button 
              className="absolute top-5 right-5 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <motion.img
              layoutId={`img-${selectedImage}`}
              src={currentImage.src}
              alt={currentImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              style={rotations[currentImage.id] ? { transform: `rotate(${rotations[currentImage.id]}deg)` } : undefined}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            
            <div className="absolute bottom-10 left-0 right-0 text-center">
               <p className="text-white/80 text-lg font-light tracking-widest uppercase">
                 {currentImage.title}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
