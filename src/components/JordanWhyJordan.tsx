import wadiRum from "@/assets/wadi-rum.jpg";
import deadSea from "@/assets/dead-sea.jpg";
import jerash from "@/assets/jerash.jpg";
import amman from "@/assets/amman.jpg";
import petraNight from "@/assets/petra-night.jpg";
import groupTour from "@/assets/group-tour.jpg";
import { Link } from "react-router-dom";

const reasons = [
  {
    image: petraNight,
    tag: "UNESCO World Heritage",
    title: "Timeless Wonders",
    desc: "Walk through Petra — the rose-red Nabataean city, one of the New Seven Wonders of the World.",
    stat: "2000+", statLabel: "Years of history",
  },
  {
    image: wadiRum,
    tag: "UNESCO Protected",
    title: "Desert Magic",
    desc: "Discover Wadi Rum, a lunar landscape of towering sandstone mountains and ancient petroglyphs.",
    stat: "720km²", statLabel: "Protected desert",
  },
  {
    image: deadSea,
    tag: "Natural Wonder",
    title: "Healing Waters",
    desc: "Float effortlessly in the world's saltiest sea — 430m below sea level, richest in minerals.",
    stat: "−430m", statLabel: "Lowest point on Earth",
  },
  {
    image: jerash,
    tag: "Roman Heritage",
    title: "Ancient Cities",
    desc: "Explore Jerash — the most intact Roman city outside Rome, with colonnaded streets and amphitheaters.",
    stat: "1st C. AD", statLabel: "City founded",
  },
  {
    image: amman,
    tag: "Capital City",
    title: "Warm Hospitality",
    desc: "Experience Amman — a vibrant city where ancient citadels meet modern coffee shops and souks.",
    stat: "4000+", statLabel: "Years of civilization",
  },
  {
    image: groupTour,
    tag: "Adventure",
    title: "Wild Adventures",
    desc: "Hike Wadi Mujib gorges, trek Dana Reserve, or sleep under a sky of a million stars in the desert.",
    stat: "600+", statLabel: "km of hiking trails",
  },
];

const JordanWhyJordan = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Why Jordan?</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground mt-2 leading-tight">
              A Kingdom Like<br />
              <em className="italic font-normal text-primary">No Other</em>
            </h2>
          </div>
          <Link
            to="/destinations"
            className="font-body text-xs tracking-wider text-secondary-foreground/50 hover:text-primary uppercase transition-colors border-b border-transparent hover:border-primary pb-0.5"
          >
            Explore All Destinations →
          </Link>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-56 md:w-auto group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
                {/* Stat overlay */}
                <div className="absolute top-4 left-4">
                  <div className="font-display text-xl font-semibold text-ivory">{r.stat}</div>
                  <div className="font-body text-xs text-ivory/50 uppercase tracking-wider">{r.statLabel}</div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-body text-xs text-primary uppercase tracking-wider mb-1">{r.tag}</div>
                  <h3 className="font-display text-xl font-semibold text-ivory">{r.title}</h3>
                </div>
              </div>
              {/* Hover reveal */}
              <div className="absolute inset-0 bg-secondary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="font-body text-xs text-primary uppercase tracking-wider mb-2">{r.tag}</div>
                <h3 className="font-display text-xl font-semibold text-secondary-foreground mb-3">{r.title}</h3>
                <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default JordanWhyJordan;
