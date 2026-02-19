import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import wadiRum from "@/assets/wadi-rum.jpg";
import deadSea from "@/assets/dead-sea.jpg";
import jerash from "@/assets/jerash.jpg";
import petraNight from "@/assets/petra-night.jpg";
import amman from "@/assets/amman.jpg";
import groupTour from "@/assets/group-tour.jpg";
import { packages } from "@/data/siteData";

const tourImages: Record<string, string> = {
  "7-days-classic-jordan": petraNight,
  "6-days-5-nights": jerash,
  "5-days-4-nights": deadSea,
  "4-days-3-nights": wadiRum,
  "solo-women-trip": amman,
  "classic-tours-in-jordan": amman,
  "adventure-hike": groupTour,
};

const JordanTours = () => {
  const featured = packages.slice(0, 6);

  return (
    <section id="tours" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Top Packages</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-2 leading-tight">
              Curated<br /><em className="italic font-normal text-terracotta">Journeys</em>
            </h2>
          </div>
          <Link to="/tours" className="flex items-center gap-2 font-body text-sm tracking-wider text-foreground/60 hover:text-primary uppercase transition-colors self-start md:self-auto">
            View all tours <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((pkg, i) => (
            <Link
              key={i}
              to={`/tours/${pkg.slug}`}
              className="group relative overflow-hidden aspect-[4/5] block shadow-card hover:shadow-warm transition-all duration-500"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 gradient-card" />
              <div className="absolute top-4 left-4">
                <span className="font-body text-xs tracking-wider bg-primary text-primary-foreground px-3 py-1 uppercase">{pkg.tag}</span>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 bg-ivory/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-ivory/20">
                <ArrowUpRight size={16} className="text-ivory" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={12} className="text-primary" />
                  <span className="font-body text-xs tracking-wider text-primary uppercase">{pkg.duration}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-ivory leading-tight">{pkg.title}</h3>
                <p className="font-body text-sm text-ivory/60 mt-1">{pkg.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JordanTours;
