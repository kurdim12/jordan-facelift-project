import { useState } from "react";
import { Link } from "react-router-dom";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/siteData";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const categories = ["All", "History", "Adventure", "Culture", "Wellness", "City"];

const readTime: Record<string, string> = {
  History: "8 min read",
  Adventure: "6 min read",
  Culture: "7 min read",
  Wellness: "5 min read",
  City: "6 min read",
};

const BlogPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);
  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Travel Journal"
        title="Stories from the Field"
        subtitle="Insider knowledge, travel guides, and inspiration from Jordan's most extraordinary places."
      />

      {/* Filter */}
      <div className="sticky top-16 z-30 bg-background/97 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 font-body text-xs tracking-[0.25em] px-5 py-2 uppercase transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/50 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="font-body text-xs text-muted-foreground ml-auto flex-shrink-0">{filtered.length} articles</span>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Featured */}
          {featured && (
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-warm mb-8 sm:mb-10"
            >
              <div className="overflow-hidden aspect-[4/3] lg:aspect-auto">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-body text-xs tracking-wider text-primary uppercase bg-primary/10 px-3 py-1">{featured.category}</span>
                  <span className="font-body text-xs text-muted-foreground">Featured</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-5 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-muted-foreground" />
                    <span className="font-body text-xs text-muted-foreground">{featured.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-muted-foreground" />
                    <span className="font-body text-xs text-muted-foreground">{readTime[featured.category] || "7 min read"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-body text-sm tracking-wider text-primary uppercase group-hover:gap-2.5 transition-all">
                  Read Article <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Link
                key={i}
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 shadow-card hover:shadow-warm flex flex-col"
              >
                <div className="overflow-hidden aspect-[16/10]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-body text-xs tracking-wider text-primary uppercase bg-primary/10 px-2.5 py-1">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={10} className="text-muted-foreground" />
                      <span className="font-body text-xs text-muted-foreground">{readTime[post.category] || "6 min"}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors mb-2 flex-1">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                    <div className="flex items-center gap-1 font-body text-xs tracking-wider text-primary uppercase group-hover:gap-1.5 transition-all">
                      Read <ArrowUpRight size={11} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="py-14 bg-secondary border-t border-stone/10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Stay Inspired</span>
          <h2 className="font-display text-3xl font-semibold text-secondary-foreground mt-2 mb-2">
            Jordan Travel Tips in Your Inbox
          </h2>
          <p className="font-body text-sm text-secondary-foreground/50 mb-6">No spam. Just expert advice, hidden gems, and seasonal offers.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-stone/20 focus:border-primary px-4 py-3 font-body text-sm text-secondary-foreground placeholder-secondary-foreground/30 focus:outline-none transition-colors"
            />
            <button className="bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-6 py-3 uppercase transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <JordanFooter />
      <WhatsAppButton />
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </div>
  );
};

export default BlogPage;
