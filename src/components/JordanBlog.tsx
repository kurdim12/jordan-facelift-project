import { ArrowUpRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import wadiRum from "@/assets/wadi-rum.jpg";
import deadSea from "@/assets/dead-sea.jpg";
import jerash from "@/assets/jerash.jpg";
import petraNight from "@/assets/petra-night.jpg";
import amman from "@/assets/amman.jpg";
import groupTour from "@/assets/group-tour.jpg";
import { blogPosts } from "@/data/siteData";

const JordanBlog = () => {
  const images: Record<string, string> = {
    "petra-rose-red-wonder": petraNight,
    "wadi-rum-desert-echoes": wadiRum,
    "dead-sea-healing-mirror": deadSea,
    "jerash-ancient-city": jerash,
    "amman-hidden-gems": amman,
    "aqaba-desert-meets-sea": groupTour,
  };

  const posts = blogPosts.slice(0, 4);

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Travel Journal</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-2 leading-tight">
              Stories from<br />
              <em className="italic font-normal" style={{ color: "hsl(var(--accent))" }}>The Field</em>
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center gap-1.5 font-body text-xs tracking-wider text-muted-foreground hover:text-primary uppercase transition-colors border-b border-transparent hover:border-primary pb-0.5"
          >
            All articles <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Magazine grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured post — large */}
          <Link
            to={`/blog/${posts[0].slug}`}
            className="group md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            <div className="overflow-hidden aspect-[16/10] lg:aspect-auto lg:flex-1">
              <img
                src={images[posts[0].slug] || posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-body text-xs tracking-wider text-primary uppercase bg-primary/10 px-2 py-1">{posts[0].category}</span>
                <div className="flex items-center gap-1.5">
                  <Calendar size={11} className="text-muted-foreground" />
                  <span className="font-body text-xs text-muted-foreground">{posts[0].date}</span>
                </div>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground leading-snug group-hover:text-terracotta transition-colors mb-3">
                {posts[0].title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{posts[0].excerpt}</p>
              <div className="flex items-center gap-1 font-body text-xs tracking-wider text-primary uppercase group-hover:gap-2 transition-all">
                Read Article <ArrowUpRight size={12} />
              </div>
            </div>
          </Link>

          {/* Smaller posts */}
          {posts.slice(1).map((post, i) => (
            <Link
              key={i}
              to={`/blog/${post.slug}`}
              className="group flex flex-col bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="overflow-hidden aspect-[16/9]">
                <img
                  src={images[post.slug] || post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-body text-xs tracking-wider text-primary uppercase bg-primary/10 px-2 py-1">{post.category}</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={10} className="text-muted-foreground" />
                    <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground leading-snug group-hover:text-terracotta transition-colors flex-1">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1 mt-4 font-body text-xs tracking-wider text-muted-foreground uppercase group-hover:text-primary transition-colors">
                  Read <ArrowUpRight size={11} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JordanBlog;
