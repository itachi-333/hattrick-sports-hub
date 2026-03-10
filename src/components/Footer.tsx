import { WHATSAPP_URL, PHONE, EMAIL, ADDRESS } from "@/lib/constants";

const SPORTS_LINKS = ["Cricket", "Football", "Badminton", "Volleyball", "Swimming", "Boxing"];
const GEAR_LINKS = ["Bats & Rackets", "Balls", "Shoes & Spikes", "Protective Gear", "Clothing", "Accessories"];
const INFO_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Find Our Store", href: "#location" },
  { label: "Contact", href: "#contact" },
  { label: "Brands", href: "#brands" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold uppercase tracking-tighter text-foreground">
                Hattrick Sports
              </span>
              <span className="text-[11px] font-body text-muted-foreground tracking-wide uppercase mt-1">
                Meerut's Premier Sports Store
              </span>
            </div>
            <p className="mt-4 font-body text-muted-foreground text-sm leading-relaxed">
              Your trusted destination for authentic sports equipment since 2003. 
              Visit us at {ADDRESS}.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="font-body text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                Email
              </a>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-display font-semibold text-foreground uppercase tracking-tighter text-sm">
              Sports
            </h4>
            <ul className="mt-4 space-y-2">
              {SPORTS_LINKS.map((s) => (
                <li key={s}>
                  <a href="#shop" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gear */}
          <div>
            <h4 className="font-display font-semibold text-foreground uppercase tracking-tighter text-sm">
              Gear
            </h4>
            <ul className="mt-4 space-y-2">
              {GEAR_LINKS.map((g) => (
                <li key={g}>
                  <a href="#shop" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {g}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground uppercase tracking-tighter text-sm">
              Info
            </h4>
            <ul className="mt-4 space-y-2">
              {INFO_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="font-body text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Hattrick Sports, Meerut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
