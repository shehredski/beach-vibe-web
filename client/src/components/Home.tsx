import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Promotions from "@/components/Promotions";
import Booking from "@/components/Booking"; 
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext"; // Единственото ново нещо тук

export default function Home() {
  // Вземаме t, за да можем да го ползваме, ако решим да пишем текст директно тук
  const { t } = useLanguage(); 

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигацията вече има бутоните BG/EN вътре в себе си */}
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      {/* Секциите bar и prices обикновено са част от About.tsx, 
          затова тук ги оставяме само като празни котви (ID-та) за скрол */}
      <div id="bar" />
      <div id="prices" />

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
