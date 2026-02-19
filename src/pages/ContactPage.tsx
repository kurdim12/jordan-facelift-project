import { useState } from "react";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import contactBg from "@/assets/contact-bg.jpg";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Get in Touch"
        title="Contact Jordan Address"
        subtitle="Ready to plan your Jordan adventure? Our team responds within 24 hours."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Reach Us</span>
                <h2 className="font-display text-4xl font-semibold text-foreground mt-2 mb-6 leading-tight">
                  We'd Love to<br />Hear from You
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Whether you have a question, want to customise a tour, or are ready to book — our team of local Jordan experts is here for you.
                </p>
              </div>

              {/* Contact Cards */}
              {[
                { icon: Phone, label: "Call / WhatsApp", value: "+962 6 XXX XXXX", sub: "Available 9am – 8pm Amman time" },
                { icon: Mail, label: "Email", value: "info@jordanaddress.com", sub: "We reply within 24 hours" },
                { icon: MapPin, label: "Office", value: "Amman, Jordan", sub: "King Abdullah II St, 3rd Floor" },
                { icon: Clock, label: "Working Hours", value: "Mon–Fri 9am–6pm", sub: "Sat 10am–4pm · Sun Closed" },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-4 p-5 bg-card border border-border">
                  <div className="w-10 h-10 bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="font-body text-sm font-medium text-foreground">{value}</div>
                    <div className="font-body text-xs text-muted-foreground">{sub}</div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/962"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[hsl(142,60%,38%)] hover:bg-[hsl(142,60%,32%)] text-ivory font-body text-sm tracking-wider px-6 py-4 uppercase transition-all duration-300"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              {/* Office Photo */}
              <img src={contactBg} alt="Jordan Address Office" className="w-full aspect-[4/3] object-cover" />
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-card border border-primary/30 p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-primary/15 flex items-center justify-center mb-6">
                    <Mail size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-4xl font-semibold text-foreground mb-3">Message Sent!</h3>
                  <p className="font-body text-base text-muted-foreground max-w-sm leading-relaxed">
                    Thank you for reaching out. Our team will get back to you within 24 hours. Meanwhile, feel free to WhatsApp us for urgent queries.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border p-10 space-y-5">
                  <h3 className="font-display text-3xl font-semibold text-foreground mb-2">Send an Inquiry</h3>
                  <p className="font-body text-sm text-muted-foreground mb-6">Fill in your details and we'll design the perfect Jordan journey for you.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">First Name *</label>
                      <input required type="text" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Sarah" />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Last Name *</label>
                      <input required type="text" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Miller" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email *</label>
                      <input required type="email" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="sarah@email.com" />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Phone / WhatsApp</label>
                      <input type="tel" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="+44 7700..." />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Travel Dates</label>
                      <input type="text" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="e.g. March 2026" />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Number of Travellers</label>
                      <select className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors">
                        <option>1 person (Solo)</option>
                        <option>2 people (Couple)</option>
                        <option>3–5 people (Small Group)</option>
                        <option>6–10 people</option>
                        <option>10+ people</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Tour Interest</label>
                    <select className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors">
                      <option>7 Days Classic Jordan</option>
                      <option>6 Days Tour</option>
                      <option>5 Days Tour</option>
                      <option>Solo Women Trip</option>
                      <option>Adventure Hike</option>
                      <option>Biblical Journey</option>
                      <option>Custom / Tailor-Made</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your Message</label>
                    <textarea rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your dream Jordan trip — any special requests, interests, or requirements..." />
                  </div>

                  <button type="submit" className="w-full bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] py-4 uppercase transition-all duration-300">
                    Send Inquiry
                  </button>
                  <p className="font-body text-xs text-muted-foreground text-center">We respond within 24 hours · No commitment required</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <JordanFooter />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
