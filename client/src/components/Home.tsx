export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Beach Vibe
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Private beach near Golden Sands
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="tel:+359886888101"
            className="bg-white text-black px-6 py-3 font-semibold"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/359886888101"
            className="border border-white px-6 py-3"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-4 text-sm opacity-80">
          Limited cabanas available
        </p>
      </div>
    </div>
  );
}
