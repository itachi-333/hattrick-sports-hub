import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useToast } from "@/hooks/use-toast";

import sportCricket from "@/assets/sport-cricket.jpg";
import sportFootball from "@/assets/sport-football.jpg";
import sportBadminton from "@/assets/sport-badminton.jpg";
import sportVolleyball from "@/assets/sport-volleyball.jpg";
import sportSwimming from "@/assets/sport-swimming.jpg";
import sportBoxing from "@/assets/sport-boxing.jpg";
import sportAthletics from "@/assets/sport-athletics.jpg";

const CATEGORIES = [
  { name: "Cricket", desc: "Bats, Balls, Pads, Helmets, Gloves", img: sportCricket },
  { name: "Football", desc: "Balls, Boots, Shin Guards, Jerseys", img: sportFootball },
  { name: "Badminton", desc: "Rackets, Shuttles, Shoes, Nets", img: sportBadminton },
  { name: "Volleyball", desc: "Balls, Nets, Knee Pads, Shoes", img: sportVolleyball },
  { name: "Swimming", desc: "Goggles, Caps, Swimwear, Gear", img: sportSwimming },
  { name: "Boxing", desc: "Gloves, Wraps, Bags, Guards", img: sportBoxing },
  { name: "Athletics", desc: "Spikes, Apparel, Equipment", img: sportAthletics },
];

export default function ShopBySport() {
  const ref = useScrollFadeIn();
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Coming Soon!",
      description: "Online shopping is coming soon. Visit our store or WhatsApp us to order!",
    });
  };

  return (
    <section id="shop" className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground">
            Shop by Sport
          </h2>
          <p className="mt-3 text-muted-foreground font-body text-base max-w-md">
            Everything you need, for every sport you play.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={handleClick}
              className="fade-up group relative bg-background overflow-hidden aspect-square flex flex-col justify-end p-4 sm:p-6 text-left cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/55 transition-colors" />
              <div className="relative">
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tighter text-primary-foreground">
                  {cat.name}
                </h3>
                <p className="mt-1 text-primary-foreground/70 font-body text-xs sm:text-sm">
                  {cat.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
