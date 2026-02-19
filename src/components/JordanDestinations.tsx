import { MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import deadSea from "@/assets/dead-sea.jpg";
import wadiRum from "@/assets/wadi-rum.jpg";
import jerash from "@/assets/jerash.jpg";
import amman from "@/assets/amman.jpg";
import petraNight from "@/assets/petra-night.jpg";
import karak from "@/assets/karak.jpg";

const destinations = [
  { name: "Petra", slug: "petra", region: "Southern Jordan", image: petraNight, desc: "Rose-red Nabataean wonder", featured: true },
  { name: "Wadi Rum", slug: "wadi-rum", region: "Southern Jordan", image: wadiRum, desc: "Valley of the Moon" },
  { name: "Dead Sea", slug: "dead-sea", region: "Central Jordan", image: deadSea, desc: "Lowest point on Earth" },
  { name: "Jerash", slug: "jerash", region: "Northern Jordan", image: jerash, desc: "Best-preserved Roman city" },
  { name: "Amman", slug: "amman", region: "Capital", image: amman, desc: "City on seven hills" },
  { name: "Madaba", slug: "dead-sea-2", region: "Central Jordan", image: karak, desc: "City of Mosaics" },
];

const JordanDestinations = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Top Destinations</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-2 leading-tight">
              Places That<br />
              <em className="italic font-normal" style={{ color: "hsl(var(--accent))" }}>Take Your Breath Away</em>
            </h2>
          </div>
          <Link
            to="/destinations"
            className="flex items-center gap-1.5 font-body text-xs tracking-wider text-muted-foreground hover:text-primary uppercase transition-colors border-b border-transparent hover:border-primary pb-0.5"
          >
            All destinations <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px] sm:auto-rows-[220px]">
          {/* Featured — large */}
          <Link
            to={`/destinations/${destinations[0].slug}`}
            className="group relative overflow-hidden col-span-1 sm:col-span-2 row-span-1 sm:row-span-2"
          >
            <img
              src={destinations[0].image}
              alt={destinations[0].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="font-body text-xs tracking-wider bg-primary text-primary-foreground px-3 py-1 uppercase">Featured</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-1.5 mb-2">
                <MapPin size={12} className="text-primary" />
                <span className="font-body text-xs text-ivory/60 uppercase tracking-wider">{destinations[0].region}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-semibold text-ivory">{destinations[0].name}</h3>
              <p className="font-body text-sm text-ivory/60 mt-1">{destinations[0].desc}</p>
              <div className="flex items-center gap-1 mt-4 font-body text-xs text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowUpRight size={12} />
              </div>
            </div>
          </Link>

          {/* Rest */}
          {destinations.slice(1).map((d, i) => (
            <Link
              key={i}
              to={`/destinations/${d.slug}`}
              className="group relative overflow-hidden"
            >
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1 mb-1">
                  <MapPin size={10} className="text-primary" />
                  <span className="font-body text-xs text-ivory/50 uppercase tracking-wider">{d.region}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ivory">{d.name}</h3>
                <p className="font-body text-xs text-ivory/50 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">{d.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Countries strip */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {[
            { name: "Jordan", flag: "🇯🇴", count: "15+ destinations" },
            { name: "Egypt", flag: "🇪🇬", count: "Cairo · Pyramids · Luxor" },
            { name: "Palestine", flag: "🇵🇸", count: "Jerusalem · Bethlehem" },
            { name: "Oman", flag: "🇴🇲", count: "Coming soon" },
          ].map((country) => (
            <div key={country.name} className="bg-muted/40 border border-border p-5 flex items-center gap-3 hover:border-primary/30 transition-colors">
              <span className="text-2xl">{country.flag}</span>
              <div>
                <div className="font-body text-sm font-semibold text-foreground">{country.name}</div>
                <div className="font-body text-xs text-muted-foreground mt-0.5">{country.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JordanDestinations;
