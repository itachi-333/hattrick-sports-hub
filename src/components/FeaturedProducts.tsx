import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";

import productBat from "@/assets/product-cricket-bat.jpg";
import productRacket from "@/assets/product-badminton-racket.jpg";
import productFootball from "@/assets/product-football.jpg";
import productShoes from "@/assets/product-running-shoes.jpg";

const PRODUCTS = [
  {
    name: "SS Ton English Willow Bat",
    category: "Cricket",
    price: "₹12,499",
    oldPrice: "₹14,999",
    tag: "Sale",
    img: productBat,
  },
  {
    name: "Yonex Astrox 88D Pro",
    category: "Badminton",
    price: "₹8,990",
    oldPrice: null,
    tag: "New",
    img: productRacket,
  },
  {
    name: "Adidas UCL Pro Football",
    category: "Football",
    price: "₹3,499",
    oldPrice: "₹4,299",
    tag: "Sale",
    img: productFootball,
  },
  {
    name: "Nike Air Zoom Pegasus",
    category: "Running",
    price: "₹9,995",
    oldPrice: null,
    tag: "New",
    img: productShoes,
  },
];

export default function FeaturedProducts() {
  const ref = useScrollFadeIn();
  const { toast } = useToast();

  const handleAdd = () => {
    toast({
      title: "Coming Soon!",
      description: "Online ordering is coming soon. WhatsApp us to enquire!",
    });
  };

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground">
            Featured Products
          </h2>
          <p className="mt-3 text-muted-foreground font-body text-base max-w-md">
            Handpicked gear from top brands, available in-store.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="fade-up bg-background border border-border group relative"
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`font-body text-xs font-semibold uppercase tracking-wide px-3 py-1 ${
                    product.tag === "Sale"
                      ? "bg-destructive text-destructive-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {product.tag}
                </span>
              </div>

              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-foreground leading-snug">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-body font-bold text-foreground">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="font-body text-sm text-muted-foreground line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleAdd}
                  className="flex-shrink-0 mt-1 w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  aria-label={`Add ${product.name}`}
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
