import { Phone, Mail, MapPin } from "lucide-react";

const JordanFooter = () => {
  const columns = [
    {
      title: "Company",
      links: ["About Us", "Our Team", "Testimonials", "Blog", "Careers"],
    },
    {
      title: "Tours",
      links: ["Private Tours", "Group Tours", "Tailor-Made", "Day Trips", "Adventure Tours"],
    },
    {
      title: "Destinations",
      links: ["Petra", "Wadi Rum", "Dead Sea", "Jerash", "Amman"],
    },
    {
      title: "Support",
      links: ["FAQ", "Terms & Conditions", "Privacy Policy", "Contact Us"],
    },
  ];

  return (
    <footer className="bg-midnight text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-display text-3xl font-bold text-ivory">JORDAN</div>
              <div className="font-body text-xs tracking-[0.35em] text-primary uppercase">ADDRESS</div>
            </div>
            <p className="font-body text-sm text-ivory/50 leading-relaxed mb-6">
              Jordan's premier Destination Management Company, crafting exceptional travel experiences since 2012.
            </p>
            <div className="flex gap-3">
              {["X", "in", "f", "ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-stone/20 flex items-center justify-center font-body text-xs text-ivory/50 hover:border-primary hover:text-primary transition-all duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-ivory/50 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-stone/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Phone, text: "+962 6 XXX XXXX", label: "Call Us" },
            { icon: Mail, text: "info@jordanaddress.com", label: "Email Us" },
            { icon: MapPin, text: "Amman, Jordan", label: "Our Office" },
          ].map(({ icon: Icon, text, label }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-primary" />
              </div>
              <div>
                <div className="font-body text-xs text-ivory/30 uppercase tracking-wider">{label}</div>
                <div className="font-body text-sm text-ivory/70">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ivory/30">
            © 2025 Jordan Address Travel & Tourism. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-ivory/30 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-ivory/30 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default JordanFooter;
