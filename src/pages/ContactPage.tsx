import { useState } from "react";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import contactBg from "@/assets/contact-bg.jpg";
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowUpRight, Check } from "lucide-react";

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", dates: "", travellers: "2 people (Couple)", tour: "7 Days Classic Jordan", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Get in Touch"
        title="Contact Us"
        subtitle="Ready to plan your Jordan adventure? Our local experts respond within 24 hours."
      />

      {/* Contact info strip */}
      <div className="bg-secondary border-b border-stone/10">
        <div className="container mx-auto px-6 lg:px-12 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Phone, label: "WhatsApp", value: "+962 6 XXX XXXX", href: "https://wa.me/962" },
            { icon: Mail, label: "Email", value: "info@jordanaddress.com", href: "mailto:info@jordanaddress.com" },
            { icon: MapPin, label: "Office", value: "Amman, Jordan", href: "#" },
            { icon: Clock, label: "Hours", value: "Mon–Fri 9am–6pm", href: "#" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Icon size={14} className="text-primary" />
              </div>
              <div>
                <div className="font-body text-xs text-secondary-foreground/40 uppercase tracking-wider">{label}</div>
                <div className="font-body text-sm text-secondary-foreground/80 group-hover:text-primary transition-colors">{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left side */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Reach Us</span>
                <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-5 leading-tight">
                  We'd Love to<br />Hear from You
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Whether you have a question, want to customise a tour, or are ready to book — our local Jordan experts are here for you.
                </p>
              </div>

              {/* Why contact us */}
              <div className="bg-muted/30 border border-border p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Why Contact Us?</h3>
                {[
                  "Free personalised itinerary within 24h",
                  "No payment required to enquire",
                  "Expert local knowledge & insider tips",
                  "Flexible group sizes — 1 to 100+ pax",
                  "Fully customisable dates & budget",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 py-2 border-b border-border last:border-0">
                    <Check size={12} className="text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/962"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[hsl(142,60%,38%)] hover:bg-[hsl(142,60%,32%)] text-ivory font-body text-sm tracking-wider px-6 py-4 uppercase transition-all duration-300"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp — Fastest Response
                <ArrowUpRight size={14} className="ml-auto" />
              </a>

              {/* Photo */}
              <div className="relative">
                <img src={contactBg} alt="Jordan Address Team" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute bottom-4 left-4 bg-midnight/70 backdrop-blur-sm px-4 py-2">
                  <div className="font-body text-xs text-ivory/40 uppercase tracking-wider">Our Base</div>
                  <div className="font-body text-sm text-ivory">Amman, Jordan</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-card border border-primary/30 p-14 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
                  <div className="w-16 h-16 bg-primary/15 flex items-center justify-center mb-6">
                    <Check size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-4xl font-semibold text-foreground mb-3">Message Sent!</h3>
                  <p className="font-body text-base text-muted-foreground max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours. For urgent queries, WhatsApp us directly.
                  </p>
                  <a
                    href="https://wa.me/962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-8 py-3 uppercase transition-all duration-300"
                  >
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-10 space-y-5">
                  <div>
                    <h3 className="font-display text-3xl font-semibold text-foreground mb-1">Send an Inquiry</h3>
                    <p className="font-body text-sm text-muted-foreground">Fill in your details and we'll design the perfect Jordan journey for you.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">First Name *</label>
                      <input required type="text" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Sarah" />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Last Name *</label>
                      <input required type="text" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Miller" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="sarah@email.com" />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Phone / WhatsApp</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="+44 7700..." />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Travel Dates</label>
                      <input type="text" value={form.dates} onChange={e => setForm({ ...form, dates: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="e.g. April 2026" />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Number of Travellers</label>
                      <select value={form.travellers} onChange={e => setForm({ ...form, travellers: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors">
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
                    <select value={form.tour} onChange={e => setForm({ ...form, tour: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors">
                      <option>7 Days Classic Jordan</option>
                      <option>6 Days Tour</option>
                      <option>5 Days Tour</option>
                      <option>4 Days Express</option>
                      <option>Solo Women Trip</option>
                      <option>Adventure Hike</option>
                      <option>Biblical Journey</option>
                      <option>Custom / Tailor-Made</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your Message</label>
                    <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your dream Jordan trip — special interests, requests, or questions..." />
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] py-4 uppercase transition-all duration-300">
                    Send Inquiry <ArrowUpRight size={14} />
                  </button>
                  <p className="font-body text-xs text-muted-foreground text-center">We respond within 24 hours · No commitment required · 100% confidential</p>
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
