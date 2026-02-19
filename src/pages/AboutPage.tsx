import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import founder from "@/assets/founder.jpg";
import petraNight from "@/assets/petra-night.jpg";
import wadiRum from "@/assets/wadi-rum.jpg";
import { Check, Award, Globe, Heart, Shield, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Award, title: "Integrity", desc: "Honesty, transparency, and accountability in everything we do." },
  { icon: Shield, title: "Excellence", desc: "Experiences that exceed expectations — from first inquiry to last farewell." },
  { icon: Heart, title: "Authenticity", desc: "Genuine connections with Jordan's people, traditions, and landscapes." },
  { icon: Globe, title: "Sustainability", desc: "Travel that gives back — protecting Jordan's heritage for future generations." },
  { icon: Users, title: "Hospitality", desc: "Every guest treated not as a client, but as a valued partner in discovery." },
  { icon: Check, title: "Passion", desc: "A genuine love for Jordan and the art of crafting meaningful journeys." },
];

const team = [
  { name: "Rakan Hiassat", role: "Founder & General Manager", bio: "17+ years in tourism & hospitality. Former local guide with an unmatched passion for Jordan." },
  { name: "Aya Mehyar", role: "Operations Manager", bio: "Expert in logistics, client care, and ensuring every trip runs seamlessly." },
  { name: "Fadl", role: "Italian Market Consultant", bio: "Specialist for Italian-speaking travellers — bridging cultures beautifully." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Our Story"
        title="About Jordan Address"
        subtitle="Jordan's premier Destination Management Company — dedicated to crafting extraordinary journeys since 2012."
      />

      {/* Founder */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={founder}
                alt="Mr. Rakan Hiassat — Founder"
                className="w-full max-w-md mx-auto aspect-[3/4] object-cover object-top shadow-warm"
              />
              <div className="absolute -bottom-6 -right-0 md:-right-8 bg-primary text-primary-foreground px-8 py-5 shadow-card">
                <div className="font-display text-4xl font-semibold">17+</div>
                <div className="font-body text-xs tracking-wider uppercase">Years Experience</div>
              </div>
            </div>
            <div>
              <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Founder & General Manager</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-5 leading-tight">
                Mr. Rakan Hiassat
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                Jordan Address Travel & Tourism was founded by Mr. Rakan Hiassat, a passionate travel professional with over 17 years of experience in the tourism and hospitality industry. Based in Amman, Jordan, Jordan Address specialises in corporate and leisure travel management services.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                Mr. Hiassat began his journey in 2005 as a local tour guide — a role that shaped his deep understanding of traveller needs, cultural nuances, and exceptional service. His dedication and genuine passion for people have earned him a strong reputation for excellence and empathy.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { num: "500+", label: "Happy Travellers" },
                  { num: "30+", label: "Tour Packages" },
                  { num: "4", label: "Countries" },
                ].map((s) => (
                  <div key={s.label} className="text-center border border-border p-4">
                    <div className="font-display text-3xl font-semibold text-primary">{s.num}</div>
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300"
              >
                Get in Touch <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Who We Are</span>
              <h2 className="font-display text-5xl font-semibold text-secondary-foreground mt-3 mb-6 leading-tight">
                Jordan's Premier<br /><em className="italic font-normal text-primary">DMC</em>
              </h2>
              <p className="font-body text-base text-secondary-foreground/70 leading-relaxed mb-4">
                Jordan Address Travel & Tourism is a certified Destination Management Company dedicated to creating exceptional travel experiences for both individuals and groups.
              </p>
              <p className="font-body text-base text-secondary-foreground/70 leading-relaxed mb-4">
                With extensive expertise across Jordan, Egypt, Palestine, and Oman — we offer cultural, religious, adventure, and eco-tourism programs thoughtfully tailored to every client.
              </p>
              <p className="font-body text-base text-secondary-foreground/70 leading-relaxed">
                Whether you are seeking an enriching pilgrimage, an exhilarating adventure, or a curated cultural exploration — we are your trusted partner in delivering seamless, memorable travel experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={petraNight} alt="Petra" className="aspect-[3/4] object-cover w-full" />
              <img src={wadiRum} alt="Wadi Rum" className="aspect-[3/4] object-cover w-full mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-10 border-l-4 border-primary">
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Our Vision</span>
              <h3 className="font-display text-3xl font-semibold text-secondary-foreground mt-3 mb-4">Where We're Headed</h3>
              <p className="font-body text-base text-secondary-foreground/70 leading-relaxed">
                To be recognized as Jordan's most innovative and guest-focused travel company, setting a new standard for creativity, transparency, and service quality across the Middle East.
              </p>
            </div>
            <div className="bg-card border border-border p-10 border-l-4 border-terracotta">
              <span className="font-body text-xs tracking-[0.3em] text-accent uppercase">Our Mission</span>
              <h3 className="font-display text-3xl font-semibold text-foreground mt-3 mb-4">Why We Exist</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                To craft seamless, inspiring travel experiences that reflect Jordan's beauty and diversity, while building trusted relationships with our guests and partners across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Our Values</span>
            <h2 className="font-display text-5xl font-semibold text-foreground mt-3 leading-tight">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => (
              <div key={i} className="bg-card border border-border p-7 hover:border-primary/40 hover:shadow-warm transition-all duration-300 group flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <val.icon size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{val.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Our Team</span>
            <h2 className="font-display text-5xl font-semibold text-foreground mt-3">
              The People Behind Your Journey
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 bg-muted border-2 border-border group-hover:border-primary transition-colors mx-auto mb-5 overflow-hidden">
                  <img src={founder} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-display text-2xl font-semibold text-foreground">{member.name}</h4>
                <p className="font-body text-xs text-primary uppercase tracking-wider mt-1.5 mb-3">{member.role}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-secondary-foreground mb-4">
            Ready to explore Jordan with us?
          </h2>
          <p className="font-body text-base text-secondary-foreground/60 mb-8 max-w-lg mx-auto">
            Browse our packages or get in touch — we'll design the perfect journey around your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours" className="bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300">
              Browse Tours
            </Link>
            <Link to="/contact" className="border border-stone/20 hover:border-primary text-secondary-foreground hover:text-primary font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <JordanFooter />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
