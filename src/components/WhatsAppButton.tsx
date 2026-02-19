import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/962"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,34%)] text-ivory px-4 py-3 shadow-warm transition-all duration-300 group"
    aria-label="Contact via WhatsApp"
  >
    <MessageCircle size={20} className="fill-ivory" />
    <span className="font-body text-sm tracking-wider uppercase hidden group-hover:block transition-all">
      WhatsApp
    </span>
  </a>
);

export default WhatsAppButton;
