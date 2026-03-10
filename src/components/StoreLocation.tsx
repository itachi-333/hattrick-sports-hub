import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { WHATSAPP_URL, PHONE, EMAIL, ADDRESS, STORE_HOURS } from "@/lib/constants";

export default function StoreLocation() {
  const ref = useScrollFadeIn();
  const mapsUrl = "https://www.google.com/maps/search/Hattrick+Sports+Cantt+Lalkurti+Meerut";

  return (
    <section id="location" className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground">
            Find Our Store
          </h2>
        </div>

        <div className="fade-up mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Details */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-foreground uppercase tracking-tighter">
                  Address
                </h3>
                <p className="mt-1 font-body text-muted-foreground text-sm leading-relaxed">
                  {ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-foreground uppercase tracking-tighter">
                  Store Hours
                </h3>
                <p className="mt-1 font-body text-muted-foreground text-sm">
                  {STORE_HOURS.weekday}
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  {STORE_HOURS.weekend}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-foreground uppercase tracking-tighter">
                  Phone / WhatsApp
                </h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 font-body text-primary text-sm font-medium hover:underline block"
                >
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-foreground uppercase tracking-tighter">
                  Email
                </h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 font-body text-primary text-sm font-medium hover:underline block"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="fade-up">
            <div className="aspect-video bg-muted border border-border flex flex-col items-center justify-center gap-4">
              <MapPin size={40} className="text-muted-foreground" />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground font-body font-semibold text-sm px-6 py-3 uppercase tracking-wide hover:opacity-90 transition-opacity"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
