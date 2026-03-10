const SPORTS = [
  "Cricket", "Football", "Badminton", "Athletics", "Fitness",
  "Swimming", "Table Tennis", "Basketball", "Volleyball", "Boxing",
  "Cycling", "Hockey",
];

export default function MarqueeStrip() {
  const items = [...SPORTS, ...SPORTS, ...SPORTS, ...SPORTS];

  return (
    <section className="bg-primary overflow-hidden py-4">
      <div className="marquee-track">
        {items.map((sport, i) => (
          <span
            key={`${sport}-${i}`}
            className="flex-shrink-0 font-display text-sm sm:text-base font-semibold uppercase tracking-wider text-primary-foreground/90 px-6 sm:px-10"
          >
            {sport}
            <span className="ml-6 sm:ml-10 text-primary-foreground/30">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
