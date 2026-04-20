import Navigation from "@/components/Navigation"; // 1. Поправено име
import Menu from "@/components/Menu"; 
import Footer from "@/components/Footer";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation /> {/* 2. Поправено име */}
      <main className="pt-10">
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
