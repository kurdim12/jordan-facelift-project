import { useState } from "react";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { Star } from "lucide-react";
import { testimonials } from "@/data/siteData";

const TestimonialsPage = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <PageHero
        tag="Genuine Reviews"
        title="Tourists Talk About Us"
        subtitle="Real stories from travellers who explored Jordan with our expert team."
      />

      {/* Stats */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "4.9", label: "Average Rating" },
              { num: "500+", label: "Happy Travellers" },
              { num: "231", label: "Published Reviews" },
              { num: "100%", label: "Would Recommend" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl font-semibold text-primary">{stat.num}</div>
                <div className="font-body text-xs text-secondary-foreground/50 uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`bg-card border border-border p-8 flex flex-col ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="font-display text-xl italic font-normal text-foreground leading-relaxed mb-6 flex-1">
                  "{t.review}"
                </blockquote>
                {/* Reviewer */}
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="w-10 h-10 bg-primary/20 flex items-center justify-center font-display text-lg font-semibold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-foreground">{t.name}</div>
                    <div className="font-body text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Your Voice Matters</span>
            <h2 className="font-display text-4xl font-semibold text-foreground mt-3">Leave a Review</h2>
            <p className="font-body text-sm text-muted-foreground mt-3">
              We value your feedback! Your insights help us improve and assist other travellers.
            </p>
          </div>

          <form className="bg-card border border-border p-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your Name *</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Sarah M."
                />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Location</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="London, UK"
                />
              </div>
            </div>

            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    className="p-1"
                  >
                    <Star
                      size={24}
                      className={n <= rating ? "fill-gold text-gold" : "text-border"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your Review *</label>
              <textarea
                rows={5}
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Share your experience with Jordan Address..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] py-4 uppercase transition-all duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </section>

      <JordanFooter />
      <WhatsAppButton />
    </div>
  );
};

export default TestimonialsPage;
