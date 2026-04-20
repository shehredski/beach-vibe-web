import Menu from "@/components/Menu"; 
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20">
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
