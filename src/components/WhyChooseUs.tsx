import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const REASONS = [
  { num: "01", title: "20+ Years of Excellence", desc: "Serving Meerut's athletes and sports enthusiasts since 2003 with unwavering dedication to quality." },
  { num: "02", title: "100% Authentic Products", desc: "Every product is sourced directly from authorised distributors. No fakes, no compromises, ever." },
  { num: "03", title: "Expert In-Store Advice", desc: "Our team of sports specialists helps you pick the right gear for your game, skill level, and budget." },
  { num: "04", title: "Bulk & Team Orders", desc: "Special pricing for schools, academies, and clubs. We equip entire teams — from jerseys to equipment." },
];

export default function WhyChooseUs() {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-12 space-y-0">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className="fade-up flex gap-6 sm:gap-10 py-8 border-t border-border"
            >
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground/40 leading-none flex-shrink-0 w-16 sm:w-20">
                {r.num}
              </span>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground uppercase tracking-tighter">
                  {r.title}
                </h3>
                <p className="mt-2 font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
