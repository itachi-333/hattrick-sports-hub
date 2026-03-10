import { useEffect, useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

const STATS = [
  { value: "20+", label: "Years of Trust" },
  { value: "50+", label: "Premium Brands" },
  { value: "5000+", label: "Happy Athletes" },
];

export default function HeroSection() {
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStamped(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Sports equipment flat lay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-32">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold uppercase tracking-tighter text-primary-foreground leading-[0.9]">
            Built For
            <br />
            Champions
          </h1>
          <p className="mt-6 text-primary-foreground/80 font-body text-lg sm:text-xl max-w-lg leading-relaxed">
            Meerut's #1 sports equipment store. Premium gear, trusted brands, 
            and expert advice — all under one roof since 2003.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="bg-primary text-primary-foreground font-body font-semibold text-sm px-8 py-3.5 uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Shop Now
            </a>
            <a
              href="#location"
              className="border border-primary-foreground/40 text-primary-foreground font-body font-semibold text-sm px-8 py-3.5 uppercase tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Find Our Store
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 lg:mt-24 flex flex-wrap gap-12 lg:gap-20">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center lg:text-left">
              <span
                className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground ${
                  stamped ? `stamp-in stamp-in-${i + 1}` : "opacity-0"
                }`}
              >
                {stat.value}
              </span>
              <p className="mt-1 text-primary-foreground/60 font-body text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
