import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import founder from "@/assets/founder.jpg";
import { Check } from "lucide-react";

const values = [
  { title: "Integrity", desc: "Honesty, transparency, and accountability in everything we do." },
  { title: "Excellence", desc: "Experiences that exceed expectations — from the first inquiry to the last farewell." },
  { title: "Authenticity", desc: "Genuine connections with Jordan's people, traditions, and landscapes." },
  { title: "Sustainability", desc: "Travel that gives back more than it takes — protecting Jordan's heritage." },
  { title: "Innovation", desc: "Continuously evolving to create unique travel concepts for modern travellers." },
  { title: "Hospitality", desc: "Every guest treated not as a client, but as a valued partner in discovery." },
  { title: "Collaboration", desc: "Long-term relationships built on trust, respect, and shared vision." },
  { title: "Passion", desc: "A genuine love for Jordan and the art of travel design." },
];

const team = [
  { name: "Rakan Hiassat", role: "Founder & General Manager", bio: "17+ years in tourism & hospitality" },
  { name: "Aya Mehyar", role: "Operations Manager", bio: "Expert in logistics & client care" },
  { name: "Fadl", role: "Italian Market Consultant", bio: "Specialist for Italian-speaking travellers" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Our Story"
        title="About Jordan Address"
        subtitle="Jordan's premier Destination Management Company — dedicated to crafting exceptional journeys since 2012."
      />

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={founder}
                alt="Mr. Rakan Hiassat — Founder"
                className="w-full max-w-md mx-auto aspect-square object-cover object-top shadow-warm"
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
                Jordan Address Travel & Tourism was founded by Mr. Rakan Hiassat, a passionate travel professional with over 17 years of experience in the tourism and hospitality industry. Based in Amman, Jordan, Jordan Address specializes in corporate and leisure travel management services.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                Mr. Hiassat began his journey in 2005 as a local tour guide — a role that shaped his deep understanding of traveller needs, cultural nuances, and exceptional service. His dedication and genuine passion for people have earned him a strong reputation for excellence and empathy.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display text-3xl font-semibold text-primary">500+</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">Happy Travellers</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="font-display text-3xl font-semibold text-primary">30+</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">Tour Packages</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="font-display text-3xl font-semibold text-primary">4</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Who We Are</span>
          <h2 className="font-display text-5xl font-semibold text-foreground mt-3 mb-6 leading-tight">
            Jordan's Premier DMC
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
            Jordan Address Travel & Tourism is proud to be one of Jordan's premier Destination Management Companies (DMC), dedicated to creating exceptional travel experiences for both groups and individual travelers.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
            With extensive expertise across Jordan and neighboring countries — including Egypt and Palestine — we offer a comprehensive range of integrated travel and tourism services. Our portfolio includes cultural, religious, adventure, and eco-tourism programs, ensuring that every journey is thoughtfully tailored to meet the unique preferences of our clients.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Whether you are seeking an enriching pilgrimage, an exhilarating adventure, or a curated cultural exploration, we are your trusted partner in delivering seamless, memorable, and meaningful travel experiences in Jordan and the Middle East.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-10">
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Our Vision</span>
              <h3 className="font-display text-3xl font-semibold text-secondary-foreground mt-3 mb-4">Where We're Headed</h3>
              <p className="font-body text-base text-secondary-foreground/70 leading-relaxed">
                To be recognized as Jordan's most innovative and guest-focused travel company, setting a new standard for creativity, transparency, and service quality.
              </p>
            </div>
            <div className="bg-card border border-border p-10">
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Our Mission</span>
              <h3 className="font-display text-3xl font-semibold text-foreground mt-3 mb-4">Why We Exist</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                To craft seamless, inspiring travel experiences that reflect Jordan's beauty and diversity, while building trusted relationships with our guests and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Our Values</span>
            <h2 className="font-display text-5xl font-semibold text-foreground mt-3 leading-tight">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-8 h-8 bg-primary/15 flex items-center justify-center mb-4">
                  <Check size={14} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-terracotta transition-colors">{val.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Our Team</span>
            <h2 className="font-display text-5xl font-semibold text-foreground mt-3">Meet the People</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center w-52">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                  <img src={founder} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground">{member.name}</h4>
                <p className="font-body text-xs text-primary uppercase tracking-wider mt-1">{member.role}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JordanFooter />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
