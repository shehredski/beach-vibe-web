import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
// Премахнато: import Events from "@/components/Events"; (вече е в отделен таб)
import Promotions from "@/components/Promotions";
import Booking from "@/components/Booking"; 
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      
      {/* Секцията за събития е премахната оттук */}
      
      <Promotions />
      
      {/* 2. Заменяме стария компонент с новия */}
      <Booking /> 
      
      <Location />
      <Footer />
    </div>
  );
}
