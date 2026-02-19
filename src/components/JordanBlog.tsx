import wadiRum from "@/assets/wadi-rum.jpg";
import deadSea from "@/assets/dead-sea.jpg";
import jerash from "@/assets/jerash.jpg";
import petraNight from "@/assets/petra-night.jpg";
import amman from "@/assets/amman.jpg";
import groupTour from "@/assets/group-tour.jpg";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    image: petraNight,
    category: "History",
    title: "Petra: The Rose-Red Wonder of Jordan",
    date: "Nov 11, 2025",
    featured: true,
  },
  {
    image: wadiRum,
    category: "Adventure",
    title: "Wadi Rum — The Desert of Echoes and Stars",
    date: "Nov 11, 2025",
  },
  {
    image: deadSea,
    category: "Wellness",
    title: "Dead Sea: Jordan's Healing Mirror",
    date: "Nov 11, 2025",
  },
  {
    image: jerash,
    category: "Culture",
    title: "Jerash — The Ancient City of Echoes",
    date: "Nov 11, 2025",
  },
  {
    image: amman,
    category: "City",
    title: "Amman Citadel: Layers of Time",
    date: "Nov 11, 2025",
  },
  {
    image: groupTour,
    category: "Adventure",
    title: "Aqaba Where Desert Meets the Sea",
    date: "Nov 11, 2025",
  },
];

const JordanBlog = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">
              Useful Articles
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-2 leading-tight">
              Stories from<br />
              <em className="italic font-normal text-terracotta">The Field</em>
            </h2>
          </div>
          <a
            href="#"
            className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary uppercase transition-colors flex items-center gap-1"
          >
            Read all posts <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href="#"
              className="group bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-body text-xs tracking-wider text-primary uppercase bg-primary/10 px-2 py-1">
                    {post.category}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground leading-snug group-hover:text-terracotta transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1 mt-4 font-body text-xs tracking-wider text-muted-foreground uppercase group-hover:text-primary transition-colors">
                  Read more <ArrowUpRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JordanBlog;
