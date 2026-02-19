import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Star, Users } from "lucide-react";
import { packages } from "@/data/siteData";

const JordanTours = () => {
  const featured = packages.slice(0, 6);

  return (
    <section id="tours" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Our Packages</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-2 leading-tight">
              Curated<br /><em className="italic font-normal" style={{ color: "hsl(var(--accent))" }}>Journeys</em>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-body text-sm text-muted-foreground hidden md:block">From 4-day escapes to 10-day epics</span>
            <Link to="/tours" className="flex items-center gap-2 font-body text-xs tracking-wider text-foreground/60 hover:text-primary uppercase transition-colors border-b border-transparent hover:border-primary pb-0.5">
              All packages <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((pkg, i) => (
            <Link
              key={i}
              to={`/tours/${pkg.slug}`}
              className={`group relative overflow-hidden block shadow-card hover:shadow-warm transition-all duration-500 ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[3/4] md:aspect-[16/9] lg:aspect-[3/4]" : "aspect-[4/5]"}`}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 gradient-card" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-body text-xs tracking-wider bg-primary text-primary-foreground px-3 py-1 uppercase">{pkg.tag}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-midnight/50 backdrop-blur-sm px-2 py-1 border border-ivory/10">
                    <Star size={10} className="fill-gold text-gold" />
                    <span className="font-body text-xs text-ivory">{pkg.rating}</span>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ArrowUpRight size={14} className="text-primary-foreground" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1.5">
                      <Clock size={11} className="text-primary" />
                      <span className="font-body text-xs tracking-wider text-primary uppercase">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={11} className="text-ivory/50" />
                      <span className="font-body text-xs text-ivory/50">{pkg.reviews} reviews</span>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ivory leading-tight">{pkg.title}</h3>
                  <p className="font-body text-sm text-ivory/60 mt-1">{pkg.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 bg-secondary p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-2xl font-semibold text-secondary-foreground">Looking for something unique?</p>
            <p className="font-body text-sm text-secondary-foreground/60 mt-1">Every itinerary can be fully customised around your dates, group, and style.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-8 py-4 uppercase transition-all duration-300"
          >
            Design My Trip
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JordanTours;
