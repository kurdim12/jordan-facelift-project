import { useState } from "react";
import { Link } from "react-router-dom";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { packages } from "@/data/siteData";
import { Star, Clock, ArrowUpRight, Users, Check, SlidersHorizontal } from "lucide-react";

const categories = ["All", "Classic", "Adventure", "Special"];

const categoryColors: Record<string, string> = {
  Classic: "bg-primary/10 text-primary",
  Adventure: "bg-accent/10 text-accent",
  Special: "bg-gold/10 text-gold",
};

const ToursPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Jordan Address"
        title="Tour Packages"
        subtitle="From 4-day express escapes to 10-day epic adventures — every journey is crafted for you."
      />

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-background/97 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
          <SlidersHorizontal size={14} className="text-muted-foreground flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 font-body text-xs tracking-[0.25em] px-5 py-2 uppercase transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/50 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="font-body text-xs text-muted-foreground ml-auto flex-shrink-0">
            {filtered.length} {filtered.length === 1 ? "package" : "packages"}
          </span>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((pkg, i) => (
              <Link
                key={i}
                to={`/tours/${pkg.slug}`}
                className="group bg-card border border-border hover:border-primary/40 overflow-hidden transition-all duration-300 shadow-card hover:shadow-warm flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    style={{ "--tw-scale-x": "1.08", "--tw-scale-y": "1.08" } as React.CSSProperties}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="font-body text-xs tracking-wider bg-primary text-primary-foreground px-3 py-1 uppercase">{pkg.tag}</span>
                  </div>
                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-midnight/60 backdrop-blur-sm px-2.5 py-1">
                    <Star size={11} className="fill-gold text-gold" />
                    <span className="font-body text-xs text-ivory">{pkg.rating}</span>
                  </div>
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-9 h-9 bg-primary flex items-center justify-center">
                      <ArrowUpRight size={15} className="text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-muted-foreground" />
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{pkg.duration}</span>
                    </div>
                    <span className={`font-body text-xs px-2 py-0.5 uppercase tracking-wider ${categoryColors[pkg.category] || "bg-muted text-muted-foreground"}`}>
                      {pkg.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">{pkg.subtitle}</p>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed line-clamp-2 flex-1">{pkg.description}</p>

                  {/* Highlights preview */}
                  <div className="mt-4 pt-4 border-t border-border space-y-1.5">
                    {pkg.highlights.slice(0, 3).map((h, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Check size={10} className="text-primary flex-shrink-0" />
                        <span className="font-body text-xs text-muted-foreground">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 mt-5 font-body text-xs tracking-wider text-primary uppercase group-hover:gap-2.5 transition-all">
                    View Full Itinerary <ArrowUpRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why book with us */}
      <section className="bg-muted/30 py-14 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { icon: "🏆", title: "DMC Certified", desc: "Licensed & insured in Jordan" },
              { icon: "🎯", title: "100% Customisable", desc: "Tailored to your exact needs" },
              { icon: "🌍", title: "Local Experts", desc: "Born & raised in Jordan" },
              { icon: "💬", title: "24/7 Support", desc: "We're always available on-trip" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-body text-sm font-semibold text-foreground">{item.title}</div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-secondary-foreground mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="font-body text-base text-secondary-foreground/60 mb-8 max-w-lg mx-auto">
            Every itinerary we offer can be fully customised. Contact us and we'll design the perfect Jordan journey for you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300"
          >
            Plan a Custom Trip
          </Link>
        </div>
      </section>

      <JordanFooter />
      <WhatsAppButton />
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </div>
  );
};

export default ToursPage;
