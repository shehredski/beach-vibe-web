import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapView } from "@/components/Map";

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
          Намери ни
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          Посетете Beach Vibe в Кемпинг Лагуна, Варна
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-xl h-96">
            <MapView
              initialCenter={{ lat: 43.2557, lng: 27.9689 }}
              initialZoom={16}
              onMapReady={(map: any) => {
                new window.google.maps.marker.AdvancedMarkerElement({
                  position: { lat: 43.2557, lng: 27.9689 },
                  map: map,
                  title: "Beach Vibe - Кемпинг Лагуна, Варна",
                });
              }}
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Адрес</h3>
                  <p className="text-foreground/70">
                    Кемпинг Лагуна<br />
                    Варна, България<br />
                    Лагуна Бийч (Златни пясъци)
                  </p>
                </div>
              </div>
            </Card>

            {/* Phone */}
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Телефон</h3>
                  <a href="tel:+359888995528" className="text-primary hover:underline">
                    +359 88 899 5528
                  </a>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Email</h3>
                  <a href="mailto:office@beachvibe.eu" className="text-primary hover:underline">
                    office@beachvibe.eu
                  </a>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Работно време</h3>
                  <p className="text-foreground/70">
                    Пн-Нд: 10:00 - 23:00<br />
                    Лятен сезон: 10:00 - 00:00
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576723747325"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full gap-2">
                  <Facebook size={20} />
                  Facebook
                </Button>
              </a>
              <a
                href="https://beachvibe.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full">
                  Уебсайт
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
