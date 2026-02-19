import { useState } from "react";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Genuine Reviews"
        title="Travellers Speak For Us"
        subtitle="Real stories from people who explored Jordan with our expert team — unfiltered and authentic."
      />

      {/* Aggregate stats */}
      <section className="py-14 bg-secondary border-b border-stone/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "4.9", label: "Average Rating", sub: "Out of 5.0" },
              { num: "500+", label: "Happy Travellers", sub: "Since 2012" },
              { num: "200+", label: "Published Reviews", sub: "Across platforms" },
              { num: "100%", label: "Recommend Us", sub: "Verified guests" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl font-semibold text-primary">{stat.num}</div>
                <div className="font-body text-xs text-secondary-foreground/60 uppercase tracking-wider mt-2">{stat.label}</div>
                <div className="font-body text-xs text-secondary-foreground/30 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Platform breakdown */}
          <div className="mt-10 pt-8 border-t border-stone/10 flex flex-wrap items-center justify-center gap-10">
            {[
              { platform: "Google", rating: "4.9", reviews: "127" },
              { platform: "TripAdvisor", rating: "5.0", reviews: "89" },
              { platform: "Facebook", rating: "4.8", reviews: "56" },
            ].map((p) => (
              <div key={p.platform} className="flex items-center gap-3">
                <div>
                  <div className="font-body text-xs text-secondary-foreground/40 uppercase tracking-wider">{p.platform}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="font-body text-sm font-semibold text-secondary-foreground">{p.rating}</span>
                    <span className="font-body text-xs text-secondary-foreground/30">({p.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`flex flex-col p-8 transition-all duration-300 hover:shadow-warm ${
                  i % 5 === 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/30"
                }`}
              >
                <Quote size={24} className={`mb-5 ${i % 5 === 1 ? "text-primary-foreground/30" : "text-primary/25"}`} />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={13} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className={`font-display text-xl italic font-normal leading-relaxed mb-6 flex-1 ${i % 5 === 1 ? "text-primary-foreground" : "text-foreground"}`}>
                  "{t.review}"
                </blockquote>
                <div className={`flex items-center gap-3 border-t pt-5 ${i % 5 === 1 ? "border-primary-foreground/15" : "border-border"}`}>
                  <div className={`w-10 h-10 flex items-center justify-center font-display text-lg font-semibold ${i % 5 === 1 ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary/15 text-primary"}`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className={`font-body text-sm font-medium ${i % 5 === 1 ? "text-primary-foreground" : "text-foreground"}`}>{t.name}</div>
                    <div className={`font-body text-xs ${i % 5 === 1 ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            <div>
              <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Your Voice</span>
              <h2 className="font-display text-4xl font-semibold text-foreground mt-3 mb-5">Leave a Review</h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                Travelled with us? We'd love to hear about your experience. Your story inspires the next generation of Jordan adventurers.
              </p>
              <div className="bg-card border border-border p-6">
                {[
                  { platform: "Google", url: "#", icon: "🔍" },
                  { platform: "TripAdvisor", url: "#", icon: "🦉" },
                  { platform: "Facebook", url: "#", icon: "📘" },
                ].map((p) => (
                  <a key={p.platform} href={p.url} className="flex items-center gap-3 py-3 border-b border-border last:border-0 hover:text-primary transition-colors group">
                    <span>{p.icon}</span>
                    <span className="font-body text-sm text-foreground group-hover:text-primary">Review us on {p.platform}</span>
                    <span className="ml-auto font-body text-xs text-muted-foreground group-hover:text-primary">→</span>
                  </a>
                ))}
              </div>
            </div>

            <form className="bg-card border border-border p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your Name *</label>
                  <input type="text" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Sarah M." />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Location</label>
                  <input type="text" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="London, UK" />
                </div>
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHoveredStar(n)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star size={26} className={n <= (hoveredStar || rating) ? "fill-gold text-gold" : "text-border"} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your Review *</label>
                <textarea rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Share your Jordan experience with Jordan Address..." />
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] py-4 uppercase transition-all duration-300">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl font-semibold text-secondary-foreground mb-3">Ready to create your own story?</h2>
          <p className="font-body text-sm text-secondary-foreground/50 mb-6">Join 500+ happy travellers who explored Jordan with us.</p>
          <Link to="/tours" className="inline-block bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300">
            Browse Tours
          </Link>
        </div>
      </section>

      <JordanFooter />
      <WhatsAppButton />
    </div>
  );
};

export default TestimonialsPage;
