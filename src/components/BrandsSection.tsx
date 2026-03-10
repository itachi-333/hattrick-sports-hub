import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const BRANDS = [
  "Adidas", "Nike", "SS", "MRF", "Yonex",
  "Nivia", "Puma", "SG", "Cosco", "Vector X",
];

export default function BrandsSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="brands" className="bg-primary py-16 lg:py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="fade-up text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-primary-foreground">
            Authorised Dealer
          </h2>
          <p className="mt-2 text-primary-foreground/60 font-body text-sm uppercase tracking-wide">
            Trusted brands, genuine products
          </p>
        </div>

        <div className="fade-up mt-12 flex flex-wrap justify-center items-center gap-8 lg:gap-14">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tighter text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
