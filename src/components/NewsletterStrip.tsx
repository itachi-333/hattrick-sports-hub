import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterStrip() {
  const ref = useScrollFadeIn();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive exclusive deals and offers from Hattrick Sports.",
    });
    setEmail("");
  };

  return (
    <section id="contact" className="bg-primary py-16 lg:py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
        <div className="fade-up">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-primary-foreground">
            Get Exclusive Deals & Offers
          </h2>
          <p className="mt-3 text-primary-foreground/60 font-body text-sm">
            Subscribe to hear about new arrivals, seasonal sales, and special team discounts.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="fade-up mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:border-primary-foreground/50"
          />
          <button
            type="submit"
            className="bg-primary-foreground text-primary font-body font-semibold text-sm px-6 py-3 uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
