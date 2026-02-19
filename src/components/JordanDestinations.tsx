import { MapPin } from "lucide-react";
import deadSea from "@/assets/dead-sea.jpg";
import wadiRum from "@/assets/wadi-rum.jpg";
import jerash from "@/assets/jerash.jpg";
import amman from "@/assets/amman.jpg";
import petraNight from "@/assets/petra-night.jpg";
import groupTour from "@/assets/group-tour.jpg";

const destinations = [
  { name: "Petra", country: "Jordan", image: petraNight, size: "large" },
  { name: "Wadi Rum", country: "Jordan", image: wadiRum, size: "medium" },
  { name: "Dead Sea", country: "Jordan", image: deadSea, size: "medium" },
  { name: "Jerash", country: "Jordan", image: jerash, size: "small" },
  { name: "Amman", country: "Jordan", image: amman, size: "small" },
  { name: "Wadi Mujib", country: "Jordan", image: groupTour, size: "small" },
];

const JordanDestinations = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">
              Top Destinations
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-2 leading-tight">
              Places That<br />
              <em className="italic font-normal text-terracotta">Take Your Breath Away</em>
            </h2>
          </div>
          <a
            href="#"
            className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary uppercase transition-colors"
          >
            View All →
          </a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Large featured */}
          <a href="#" className="group relative overflow-hidden md:row-span-2 col-span-2 md:col-span-1">
            <div className="h-64 md:h-full min-h-[400px] overflow-hidden">
              <img
                src={destinations[0].image}
                alt={destinations[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 gradient-card" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              <span className="font-display text-2xl font-semibold text-ivory">{destinations[0].name}</span>
            </div>
          </a>

          {/* Medium cards */}
          {destinations.slice(1, 3).map((d, i) => (
            <a key={i} href="#" className="group relative overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 gradient-card" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <MapPin size={12} className="text-primary" />
                <span className="font-display text-xl font-semibold text-ivory">{d.name}</span>
              </div>
            </a>
          ))}

          {/* Small cards */}
          {destinations.slice(3).map((d, i) => (
            <a key={i} href="#" className="group relative overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 gradient-card" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <MapPin size={12} className="text-primary" />
                <span className="font-display text-xl font-semibold text-ivory">{d.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JordanDestinations;
