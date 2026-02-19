import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const JordanNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setToursOpen(false);
  }, [location.pathname]);

  const dark = !isHome || scrolled;

  const tourLinks = [
    { label: "7 Days Classic", href: "/tours/7-days-classic-jordan", tag: "Popular" },
    { label: "6 Days Tour", href: "/tours/6-days-5-nights", tag: "" },
    { label: "5 Days Tour", href: "/tours/5-days-4-nights", tag: "" },
    { label: "Solo Women Trip", href: "/tours/solo-women-trip", tag: "Women Only" },
    { label: "Adventure Hike", href: "/tours/adventure-hike", tag: "Active" },
    { label: "Biblical Journey", href: "/tours/biblical-journey", tag: "Spiritual" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        dark ? "bg-midnight/97 backdrop-blur-md py-3 shadow-card" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none flex-shrink-0">
          <span className="font-display text-2xl font-bold tracking-wide text-ivory">JORDAN</span>
          <span className="font-body text-xs tracking-[0.35em] text-primary uppercase">ADDRESS</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {/* Tours with dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setToursOpen(true)}
            onMouseLeave={() => setToursOpen(false)}
          >
            <button className={`flex items-center gap-1 font-body text-xs tracking-wider uppercase transition-colors duration-200 ${location.pathname.startsWith("/tours") ? "text-primary" : "text-ivory/70 hover:text-primary"}`}>
              Tours <ChevronDown size={12} className={`transition-transform duration-200 ${toursOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Mega dropdown */}
            {toursOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-midnight/98 backdrop-blur-md border border-stone/15 shadow-card">
                <div className="p-2">
                  {tourLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="flex items-center justify-between px-4 py-3 hover:bg-stone/10 transition-colors group"
                    >
                      <span className="font-body text-sm text-ivory/70 group-hover:text-primary transition-colors">{link.label}</span>
                      {link.tag && (
                        <span className="font-body text-xs bg-primary/20 text-primary px-2 py-0.5 uppercase tracking-wider">{link.tag}</span>
                      )}
                    </Link>
                  ))}
                  <div className="border-t border-stone/10 mt-1 pt-1">
                    <Link
                      to="/tours"
                      className="flex items-center justify-center px-4 py-3 bg-primary/10 hover:bg-primary/20 font-body text-xs tracking-wider text-primary uppercase transition-colors"
                    >
                      All Tour Packages →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {[
            { label: "Destinations", href: "/destinations" },
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`font-body text-xs tracking-wider uppercase transition-colors duration-200 ${
                  location.pathname === link.href ? "text-primary" : "text-ivory/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/962"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-xs tracking-wider px-5 py-2.5 uppercase transition-all duration-300"
          >
            <Phone size={12} />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-ivory p-1">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-midnight/99 backdrop-blur-md border-t border-stone/10 max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-5 space-y-1">
            <Link to="/tours" className="block font-body text-sm tracking-widest uppercase py-3 border-b border-stone/10 text-ivory/70 hover:text-primary transition-colors">
              All Tours
            </Link>
            {/* Tour sub-links */}
            <div className="pl-4 space-y-1 pb-2">
              {tourLinks.map((link) => (
                <Link key={link.label} to={link.href} className="flex items-center justify-between py-2 border-b border-stone/5">
                  <span className="font-body text-xs text-ivory/40 hover:text-primary transition-colors">{link.label}</span>
                  {link.tag && <span className="font-body text-xs text-primary/60">{link.tag}</span>}
                </Link>
              ))}
            </div>
            {[
              { label: "Destinations", href: "/destinations" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`block font-body text-sm tracking-widest uppercase py-3 border-b border-stone/10 transition-colors ${
                  location.pathname === link.href ? "text-primary" : "text-ivory/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/962"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm tracking-wider px-5 py-3.5 mt-4 uppercase"
            >
              <Phone size={14} />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default JordanNavbar;
