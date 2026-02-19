import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const JordanFooter = () => {
  const tourLinks = [
    { label: "7 Days Classic Jordan", href: "/tours/7-days-classic-jordan" },
    { label: "6 Days Tour", href: "/tours/6-days-5-nights" },
    { label: "Solo Women Trip", href: "/tours/solo-women-trip" },
    { label: "Adventure Hike", href: "/tours/adventure-hike" },
    { label: "Biblical Journey", href: "/tours/biblical-journey" },
    { label: "All Packages", href: "/tours" },
  ];
  const destLinks = [
    { label: "Petra", href: "/destinations/petra" },
    { label: "Wadi Rum", href: "/destinations/wadi-rum" },
    { label: "Dead Sea", href: "/destinations/dead-sea" },
    { label: "Jerash", href: "/destinations/jerash" },
    { label: "Amman", href: "/destinations/amman" },
  ];
  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-midnight text-secondary-foreground">
      {/* Trust bar */}
      <div className="border-b border-stone/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🏆", label: "DMC Certified", sub: "Licensed in Jordan" },
              { icon: "⭐", label: "4.9 Rating", sub: "200+ verified reviews" },
              { icon: "🛡️", label: "Fully Insured", sub: "Bonded & protected" },
              { icon: "🗺️", label: "Local Experts", sub: "Born & raised in Jordan" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-body text-xs font-semibold text-ivory/80 uppercase tracking-wider">{item.label}</div>
                  <div className="font-body text-xs text-ivory/30">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="block mb-5">
              <div className="font-display text-3xl font-bold text-ivory">JORDAN</div>
              <div className="font-body text-xs tracking-[0.35em] text-primary uppercase">ADDRESS</div>
            </Link>
            <p className="font-body text-sm text-ivory/50 leading-relaxed mb-6 max-w-xs">
              Jordan's premier Destination Management Company — crafting extraordinary travel experiences since 2012.
            </p>
            {/* Social */}
            <div className="flex gap-2 mb-8">
              {[
                { icon: Instagram, href: "https://www.instagram.com/jordan_address_international" },
                { icon: Facebook, href: "https://www.facebook.com/jordanaddressintl" },
                { icon: Twitter, href: "https://x.com/AddressJordan" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-stone/20 flex items-center justify-center text-ivory/40 hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
            {/* Contact quick */}
            <div className="space-y-3">
              <a href="mailto:info@jordanaddress.com" className="flex items-center gap-3 group">
                <Mail size={13} className="text-primary flex-shrink-0" />
                <span className="font-body text-sm text-ivory/50 group-hover:text-primary transition-colors">info@jordanaddress.com</span>
              </a>
              <a href="https://wa.me/962" className="flex items-center gap-3 group">
                <Phone size={13} className="text-primary flex-shrink-0" />
                <span className="font-body text-sm text-ivory/50 group-hover:text-primary transition-colors">+962 6 XXX XXXX</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={13} className="text-primary flex-shrink-0" />
                <span className="font-body text-sm text-ivory/50">Amman, Jordan</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-5">Tours</h4>
            <ul className="space-y-2.5">
              {tourLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body text-sm text-ivory/40 hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-5">Destinations</h4>
            <ul className="space-y-2.5">
              {destLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body text-sm text-ivory/40 hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-5">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body text-sm text-ivory/40 hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/962"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-xs tracking-wider px-5 py-3 uppercase transition-all duration-300 justify-center"
            >
              <Phone size={12} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone/10">
        <div className="container mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ivory/25">© 2025 Jordan Address Travel & Tourism. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="font-body text-xs text-ivory/25 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="font-body text-xs text-ivory/25 hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/contact" className="font-body text-xs text-ivory/25 hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default JordanFooter;
