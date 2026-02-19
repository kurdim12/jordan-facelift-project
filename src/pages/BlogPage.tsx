import { useState } from "react";
import { Link } from "react-router-dom";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/siteData";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "History", "Adventure", "Culture", "Wellness", "City"];

const BlogPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogPosts : blogPosts.filter(p => p.category === active);
  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Useful Articles"
        title="Stories from the Field"
        subtitle="Insider knowledge, travel tips, and inspiration from Jordan's most extraordinary places."
      />

      {/* Category Filter */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 font-body text-xs tracking-[0.25em] px-5 py-2 uppercase transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/60 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Featured Post */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-warm mb-10">
              <div className="overflow-hidden aspect-[16/9] lg:aspect-auto">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-wider text-primary uppercase bg-primary/10 px-3 py-1">{featured.category}</span>
                  <span className="font-body text-xs text-muted-foreground">{featured.date}</span>
                </div>
                <h2 className="font-display text-4xl font-semibold text-foreground leading-tight mb-4 group-hover:text-terracotta transition-colors">
                  {featured.title}
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-1 font-body text-sm tracking-wider text-primary uppercase group-hover:gap-2 transition-all">
                  Read article <ArrowUpRight size={15} />
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
                className="group bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300"
              >
                <div className="overflow-hidden aspect-[16/10]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-body text-xs tracking-wider text-primary uppercase bg-primary/10 px-2 py-1">{post.category}</span>
                    <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground leading-snug group-hover:text-terracotta transition-colors mb-2">{post.title}</h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-1 mt-4 font-body text-xs tracking-wider text-primary uppercase">
                    Read more <ArrowUpRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
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
