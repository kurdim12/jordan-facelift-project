import privateTour from "@/assets/private-tour.jpg";
import groupTour from "@/assets/group-tour.jpg";
import soloWomen from "@/assets/solo-women.jpg";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const types = [
  {
    image: privateTour,
    label: "Private Tours",
    title: "Exclusively Yours",
    desc: "Your own guide, your own pace. Crafted for couples, families, and travellers who refuse to compromise on privacy and comfort.",
    perks: ["Dedicated private guide", "Flexible itinerary", "Premium vehicles", "Priority access"],
    href: "/tours",
    cta: "View Private Tours",
    accent: false,
  },
  {
    image: soloWomen,
    label: "Tailor-Made",
    title: "Design Your Dream",
    desc: "Work directly with our local Jordan experts to build your perfect journey from scratch — every detail aligned with your vision.",
    perks: ["Free consultation", "100% custom itinerary", "Any duration or budget", "Live-trip support"],
    href: "/contact",
    cta: "Start Planning",
    accent: true,
  },
  {
    image: groupTour,
    label: "Group Tours",
    title: "Share the Wonder",
    desc: "Join like-minded travellers on curated group departures with expert guides. The adventure is better together.",
    perks: ["Expert group guide", "Small group (max 16)", "All-inclusive pricing", "Social experience"],
    href: "/tours",
    cta: "View Group Tours",
    accent: false,
  },
];

const JordanTourTypes = () => {
  return (
    <section id="tailor" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">How We Travel</span>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-2 leading-tight">
            Explore Jordan<br />
            <em className="italic font-normal" style={{ color: "hsl(var(--accent))" }}>Your Way</em>
          </h2>
          <p className="font-body text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            Whether you want full privacy, a custom-built itinerary, or the energy of a group — we have the perfect format for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {types.map((t, i) => (
            <div
              key={i}
              className={`group relative flex flex-col overflow-hidden transition-all duration-300 ${
                t.accent
                  ? "ring-2 ring-primary shadow-warm"
                  : "border border-border hover:border-primary/30 shadow-card hover:shadow-warm"
              }`}
            >
              {t.accent && (
                <div className="absolute top-0 left-0 right-0 z-10 bg-primary text-center py-1.5">
                  <span className="font-body text-xs tracking-[0.3em] text-primary-foreground uppercase">Most Requested</span>
                </div>
              )}

              {/* Image */}
              <div className={`overflow-hidden aspect-[4/3] ${t.accent ? "mt-8" : ""}`}>
                <img
                  src={t.image}
                  alt={t.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 bg-card">
                <span className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-2">{t.label}</span>
                <h3 className="font-display text-3xl font-semibold text-foreground mb-3 leading-tight">{t.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{t.desc}</p>

                {/* Perks */}
                <ul className="space-y-2 mb-8 flex-1">
                  {t.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-primary" />
                      </div>
                      <span className="font-body text-sm text-foreground">{perk}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={t.href}
                  className={`flex items-center justify-center gap-2 font-body text-sm tracking-[0.2em] py-3.5 uppercase transition-all duration-300 ${
                    t.accent
                      ? "bg-primary hover:bg-terracotta text-primary-foreground"
                      : "border border-border hover:border-primary text-foreground hover:text-primary"
                  }`}
                >
                  {t.cta} <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JordanTourTypes;
