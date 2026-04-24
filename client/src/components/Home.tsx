import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Promotions from "@/components/Promotions";
import Booking from "@/components/Booking"; 
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext"; // Импортираме езика

export default function Home() {
  const { t } = useLanguage(); // Вземаме функцията за превод, ако ни трябва тук

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Начало / Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* За плажа & Цени */}
      <section id="about">
        <About />
      </section>

      {/* Барът - Вече имаш ID вътре в About, така че тази празна секция е ок */}
      <section id="bar">
        {/* Ако искаш специфично заглавие тук: <h2 className="hidden">{t('bar.title')}</h2> */}
      </section>

      {/* Цени */}
      <section id="prices">
        {/* Ако цените са в About, този ID ще работи за скрол */}
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
