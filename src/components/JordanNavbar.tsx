import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const JordanNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Tours", "Destinations", "About", "Blog", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/95 backdrop-blur-md py-3 shadow-card"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold tracking-wide text-ivory">
            JORDAN
          </span>
          <span className="font-body text-xs tracking-[0.35em] text-primary uppercase">
            ADDRESS
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-body text-sm tracking-wider text-ivory/80 hover:text-primary transition-colors duration-200 uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/"
            className="flex items-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-wider px-5 py-2.5 transition-all duration-300 uppercase"
          >
            <Phone size={14} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ivory"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-midnight/98 backdrop-blur-md px-6 py-6 flex flex-col gap-4 border-t border-stone/20">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMobileOpen(false)}
              className="font-body text-sm tracking-widest text-ivory/80 hover:text-primary uppercase py-2 border-b border-stone/10"
            >
              {link}
            </a>
          ))}
          <a
            href="https://wa.me/"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm tracking-wider px-5 py-3 mt-2 uppercase"
          >
            <Phone size={14} />
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default JordanNavbar;
