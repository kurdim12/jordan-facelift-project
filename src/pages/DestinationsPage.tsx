import { Link } from "react-router-dom";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { destinations } from "@/data/siteData";
import { MapPin, ArrowUpRight } from "lucide-react";

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Explore Jordan"
        title="Top Destinations"
        subtitle="From rose-red Petra to the infinite desert of Wadi Rum — discover Jordan's most extraordinary places."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {destinations.map((dest, i) => (
              <Link
                key={i}
                to={`/destinations/${dest.slug}`}
                className="group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-warm"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 gradient-card" />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5">
                    <MapPin size={13} className="text-primary" />
                    <span className="font-body text-xs text-ivory/80 uppercase tracking-wider">{dest.region}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-3xl font-semibold text-ivory">{dest.name}</h3>
                    <span className="font-body text-xs text-ivory/60">{dest.country}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">{dest.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.highlights.slice(0, 3).map((h, j) => (
                      <span key={j} className="font-body text-xs bg-muted text-muted-foreground px-2 py-1">{h}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 font-body text-xs tracking-wider text-primary uppercase group-hover:gap-2 transition-all">
                    Explore <ArrowUpRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <JordanFooter />
      <WhatsAppButton />
    </div>
  );
};

export default DestinationsPage;
