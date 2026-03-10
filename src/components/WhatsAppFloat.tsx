import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {hovered && (
        <span className="bg-foreground text-primary-foreground font-body text-xs font-medium px-3 py-2 whitespace-nowrap animate-fade-in">
          Chat with us on WhatsApp
        </span>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 bg-whatsapp text-whatsapp-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
