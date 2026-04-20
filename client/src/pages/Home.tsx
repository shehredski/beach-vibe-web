import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Promotions from "@/components/Promotions";
import ReservationForm from "@/components/ReservationForm";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Promotions />
      <ReservationForm />
      <Location />
      <Footer />
    </div>
  );
}
