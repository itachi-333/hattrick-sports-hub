import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Rahul Sharma",
    role: "Cricket Coach, DAV Academy",
    text: "Hattrick Sports has been our go-to store for team equipment for over 8 years. Their bulk pricing and product range is unmatched in Meerut.",
  },
  {
    name: "Priya Singh",
    role: "State-Level Badminton Player",
    text: "I bought my Yonex racket from here on their expert's recommendation. The staff genuinely understands the sport and helps you pick the right gear.",
  },
  {
    name: "Amit Verma",
    role: "Parent & Fitness Enthusiast",
    text: "Bought cricket kits for both my sons and gym equipment for myself. Great prices, authentic products, and the owner personally ensures quality.",
  },
];

export default function CustomerReviews() {
  const ref = useScrollFadeIn();

  return (
    <section className="py-20 lg:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground">
            What Our Athletes Say
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="fade-up bg-background p-6 sm:p-8 border border-border"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-foreground text-foreground"
                  />
                ))}
              </div>
              <p className="mt-4 font-body text-foreground text-sm sm:text-base leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-display font-semibold text-foreground text-sm">
                  {review.name}
                </p>
                <p className="font-body text-muted-foreground text-xs mt-0.5">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
