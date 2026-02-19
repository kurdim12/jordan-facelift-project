import wadiRum from "@/assets/wadi-rum.jpg";
import deadSea from "@/assets/dead-sea.jpg";
import jerash from "@/assets/jerash.jpg";
import amman from "@/assets/amman.jpg";
import petraNight from "@/assets/petra-night.jpg";
import groupTour from "@/assets/group-tour.jpg";

const reasons = [
  {
    image: petraNight,
    title: "Timeless Wonders",
    desc: "Walk through Petra — the rose-red city and one of the New Seven Wonders of the World.",
  },
  {
    image: wadiRum,
    title: "Desert Magic",
    desc: "Discover Wadi Rum, a UNESCO-protected desert valley of towering sandstone mountains.",
  },
  {
    image: deadSea,
    title: "Healing Waters",
    desc: "Float in the Dead Sea, the lowest point on Earth, and experience its natural spa benefits.",
  },
  {
    image: jerash,
    title: "Rich Heritage",
    desc: "Explore ancient Roman cities, biblical landmarks, and medieval castles.",
  },
  {
    image: amman,
    title: "Warm Hospitality",
    desc: "Meet the famously welcoming Jordanian people and share authentic local traditions.",
  },
  {
    image: groupTour,
    title: "Adventure Awaits",
    desc: "Hike dramatic canyons, wade through slot gorges, and sleep under a desert sky.",
  },
];

const JordanWhyJordan = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 mb-14">
        <div className="max-w-2xl">
          <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">
            Why Jordan?
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-secondary-foreground mt-2 leading-tight">
            More than a destination —<br />
            <em className="italic font-normal text-primary">a journey through history</em>
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Strip */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-4">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 group relative overflow-hidden"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={r.image}
                alt={r.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="pt-5">
              <h3 className="font-display text-2xl font-semibold text-secondary-foreground">
                {r.title}
              </h3>
              <p className="font-body text-sm text-secondary-foreground/60 mt-2 leading-relaxed">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default JordanWhyJordan;
