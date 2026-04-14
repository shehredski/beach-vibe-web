import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import ReservationForm from "@/components/ReservationForm";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <ReservationForm />
      <Location />
      <Footer />
    </div>
  );
}
