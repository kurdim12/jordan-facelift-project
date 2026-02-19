import privateTour from "@/assets/private-tour.jpg";
import groupTour from "@/assets/group-tour.jpg";
import wadiRum from "@/assets/wadi-rum.jpg";
import { ArrowUpRight } from "lucide-react";

const types = [
  {
    image: privateTour,
    label: "Private Tours",
    title: "Exclusively Yours",
    desc: "Enjoy bespoke experiences with your own guide and vehicle. Perfect for couples, families, or small groups seeking comfort, privacy, and authentic Jordanian adventures.",
    cta: "View Private Tours",
  },
  {
    image: wadiRum,
    label: "Tailor-Made",
    title: "Design Your Dream",
    desc: "Work with our travel experts to build your perfect itinerary. Mix culture, nature, and luxury — crafted exactly around your schedule, interests, and style.",
    cta: "Start Planning",
  },
  {
    image: groupTour,
    label: "Group Tours",
    title: "Share the Wonder",
    desc: "Join a community of like-minded travellers on our curated group departures. Explore Jordan's highlights with expert guides and fellow adventurers.",
    cta: "View Group Tours",
  },
];

const JordanTourTypes = () => {
  return (
    <section id="tailor" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">
            How We Travel
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-2 leading-tight">
            Explore Jordan<br />
            <em className="italic font-normal text-terracotta">Your Way</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {types.map((t, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-card border border-border"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={t.image}
                  alt={t.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-8">
                <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">
                  {t.label}
                </span>
                <h3 className="font-display text-3xl font-semibold text-foreground mt-2 mb-4">
                  {t.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {t.desc}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 font-body text-sm tracking-wider text-foreground hover:text-primary transition-colors uppercase"
                >
                  {t.cta} <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JordanTourTypes;
