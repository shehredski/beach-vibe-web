import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu"; 
import Footer from "@/components/Footer";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-10">
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
