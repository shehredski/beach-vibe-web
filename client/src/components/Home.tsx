import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Promotions from "@/components/Promotions";
import Booking from "@/components/Booking"; 
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Начало / Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* За плажа & Цени (Обикновено са в About или отделни части на About) */}
      <section id="about">
        <About />
      </section>

      {/* Барът - Ако описанието на бара е вътре в About, това ще ни отведе там */}
      <section id="bar">
        {/* Тук можеш да добавиш специфичен компонент за бара, ако имаш, 
            но засега го насочваме към секцията About */}
      </section>

      {/* Цени - Тъй като таблицата ти е в CONTENT.md и се рендерира в някой компонент, 
          слагаме ID-то тук. Ако цените са част от About, кликът ще те прати там. */}
      <section id="prices">
        {/* Ако имаш отделен компонент за цени, сложи го тук. 
            Ако са в About, остави го така или го премести под About */}
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="promotions">
        <Promotions />
      </section>

      <section id="reservations">
        <Booking />
      </section>

      <section id="location">
        <Location />
      </section>

      <Footer />
    </div>
  );
}
