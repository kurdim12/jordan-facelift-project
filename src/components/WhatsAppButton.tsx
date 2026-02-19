import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip popup */}
      {expanded && (
        <div className="bg-midnight/95 backdrop-blur-md border border-stone/20 p-4 w-56 sm:w-64 shadow-warm mb-1">
          <div className="flex items-start justify-between mb-2">
            <div className="font-body text-xs text-ivory font-semibold">Jordan Address</div>
            <button onClick={() => setExpanded(false)} className="text-ivory/40 hover:text-ivory">
              <X size={12} />
            </button>
          </div>
          <p className="font-body text-xs text-ivory/60 leading-relaxed mb-3">
            Hi! 👋 Ready to explore Jordan? Chat with our local experts now.
          </p>
          <a
            href="https://wa.me/962"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[hsl(142,60%,38%)] hover:bg-[hsl(142,60%,32%)] text-ivory font-body text-xs tracking-wider px-4 py-2.5 uppercase transition-all duration-300"
          >
            <MessageCircle size={13} />
            Start Chat
          </a>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 bg-[hsl(142,60%,38%)] hover:bg-[hsl(142,60%,32%)] text-ivory px-4 py-3.5 shadow-warm transition-all duration-300"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="font-body text-sm tracking-wider uppercase">WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
