import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const JordanNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const dark = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        dark ? "bg-midnight/97 backdrop-blur-md py-3 shadow-card" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold tracking-wide text-ivory">JORDAN</span>
          <span className="font-body text-xs tracking-[0.35em] text-primary uppercase">ADDRESS</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
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
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/962"
            className="flex items-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-xs tracking-wider px-5 py-2.5 uppercase transition-all duration-300"
          >
            <Phone size={13} />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-ivory">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-midnight/98 backdrop-blur-md px-6 py-6 flex flex-col gap-3 border-t border-stone/20">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-body text-sm tracking-widest uppercase py-2 border-b border-stone/10 ${
                location.pathname === link.href ? "text-primary" : "text-ivory/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://wa.me/962" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm tracking-wider px-5 py-3 mt-2 uppercase">
            <Phone size={14} />
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default JordanNavbar;
