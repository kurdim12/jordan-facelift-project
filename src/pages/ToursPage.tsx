import { useState } from "react";
import { Link } from "react-router-dom";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { packages } from "@/data/siteData";
import { Star, Clock, ArrowUpRight } from "lucide-react";

const categories = ["All", "Classic", "Adventure", "Special"];

const ToursPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? packages : packages.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Jordan Address"
        title="Our Tour Packages"
        subtitle="From 4-day express escapes to 10-day epic adventures — every journey is crafted for you."
      />

      {/* Filter */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 font-body text-xs tracking-[0.25em] px-5 py-2 uppercase transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/60 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="font-body text-xs text-muted-foreground ml-auto flex-shrink-0">
            {filtered.length} packages
          </span>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((pkg, i) => (
              <Link
                key={i}
                to={`/tours/${pkg.slug}`}
                className="group bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 shadow-card hover:shadow-warm"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-body text-xs tracking-wider bg-primary text-primary-foreground px-3 py-1 uppercase">
                      {pkg.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-muted-foreground" />
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={13} className="fill-gold text-gold" />
                      <span className="font-body text-xs text-muted-foreground">{pkg.rating} ({pkg.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground leading-tight mb-2 group-hover:text-terracotta transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{pkg.subtitle}</p>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed line-clamp-2">{pkg.description}</p>
                  <div className="flex items-center gap-1 mt-5 font-body text-xs tracking-wider text-primary uppercase group-hover:gap-2 transition-all">
                    View Itinerary <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-semibold text-secondary-foreground mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="font-body text-base text-secondary-foreground/60 mb-8 max-w-lg mx-auto">
            Every itinerary we offer can be customised. Contact us and we'll design the perfect Jordan journey for you.
          </p>
          <a
            href="https://wa.me/962"
            className="inline-block bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300"
          >
            Plan a Custom Trip
          </a>
        </div>
      </section>

      <JordanFooter />
      <WhatsAppButton />
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </div>
  );
};

export default ToursPage;
