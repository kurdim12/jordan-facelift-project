import { useParams, Link } from "react-router-dom";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/siteData";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary font-body text-sm underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-10 sm:pb-12">
          <Link to="/blog" className="flex items-center gap-2 font-body text-xs text-ivory/60 hover:text-primary uppercase tracking-wider mb-6 transition-colors">
            <ArrowLeft size={14} /> All Articles
          </Link>
          <span className="font-body text-xs tracking-wider bg-primary text-primary-foreground px-3 py-1 uppercase mb-4 inline-block">{post.category}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold text-ivory leading-tight max-w-4xl mt-3">{post.title}</h1>
          <p className="font-body text-sm text-ivory/50 mt-3">Published {post.date}</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="font-body text-xl text-foreground/80 leading-relaxed mb-8 font-medium">{post.excerpt}</p>
          <div className="w-16 h-0.5 bg-primary mb-8" />
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">{post.content}</p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            Jordan remains one of the safest and most welcoming destinations in the Middle East. With its extraordinary blend of ancient history, natural wonders, and warm Bedouin hospitality, it offers an experience unlike any other destination on Earth.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            Whether you're a history lover, adventure seeker, wellness traveller, or cultural explorer — Jordan has something that will move you deeply. Our expert team at Jordan Address is here to design the perfect journey for you.
          </p>

          {/* CTA */}
          <div className="bg-card border border-border p-5 sm:p-8 mt-12">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-2">Ready to Experience Jordan?</h3>
            <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
              Let our local experts craft your perfect itinerary — private, group, or tailor-made.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/tours" className="bg-primary hover:bg-terracotta text-primary-foreground font-body text-xs tracking-wider px-6 py-3 uppercase transition-all duration-300">
                View Tours
              </Link>
              <Link to="/contact" className="border border-border hover:border-primary text-foreground hover:text-primary font-body text-xs tracking-wider px-6 py-3 uppercase transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-semibold text-foreground mb-8">More from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Link key={i} to={`/blog/${p.slug}`} className="group bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300">
                <div className="overflow-hidden aspect-[16/9]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="font-body text-xs text-primary uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-terracotta transition-colors mt-1">{p.title}</h3>
                  <div className="flex items-center gap-1 mt-3 font-body text-xs text-primary uppercase">
                    Read <ArrowUpRight size={12} />
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

export default BlogDetailPage;
