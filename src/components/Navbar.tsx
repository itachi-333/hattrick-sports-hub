import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Shop", href: "#shop" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Find Us", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-xl font-bold uppercase tracking-tighter text-foreground">
            Hattrick Sports
          </span>
          <span className="text-[11px] font-body text-muted-foreground tracking-wide uppercase">
            Meerut's Premier Sports Store
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-body font-medium uppercase tracking-wide transition-colors ${
                active === link.href.slice(1)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-whatsapp-foreground font-body font-semibold text-sm px-5 py-2.5 uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-body font-medium uppercase tracking-wide text-foreground hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-whatsapp-foreground font-body font-semibold text-sm px-5 py-2.5 uppercase tracking-wide text-center hover:opacity-90"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
