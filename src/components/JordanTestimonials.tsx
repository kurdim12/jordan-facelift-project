import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";

const JordanTestimonials = () => {
  const shown = testimonials.slice(0, 3);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Real Stories</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground mt-2 leading-tight">
              Travellers<br /><em className="italic font-normal text-primary">Speak For Us</em>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="font-display text-3xl font-semibold text-secondary-foreground">4.9 / 5</div>
              <div className="font-body text-xs text-secondary-foreground/40 uppercase tracking-wider">Based on 200+ reviews</div>
            </div>
            <div className="flex flex-col gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-0.5 w-6 bg-gold" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {shown.map((t, i) => (
            <div key={i} className={`flex flex-col p-8 ${i === 1 ? "bg-primary" : "bg-secondary-foreground/5 border border-stone/10"}`}>
              {/* Quote mark */}
              <Quote size={28} className={`mb-5 ${i === 1 ? "text-primary-foreground/40" : "text-primary/30"}`} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} size={13} className={`fill-gold text-gold`} />
                ))}
              </div>

              <blockquote className={`font-display text-xl italic font-normal leading-relaxed mb-6 flex-1 ${i === 1 ? "text-primary-foreground" : "text-secondary-foreground"}`}>
                "{t.review}"
              </blockquote>

              <div className={`flex items-center gap-3 border-t pt-5 ${i === 1 ? "border-primary-foreground/20" : "border-stone/10"}`}>
                <div className={`w-10 h-10 flex items-center justify-center font-display text-lg font-semibold ${i === 1 ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/20 text-primary"}`}>
                  {t.name[0]}
                </div>
                <div>
                  <div className={`font-body text-sm font-medium ${i === 1 ? "text-primary-foreground" : "text-secondary-foreground"}`}>{t.name}</div>
                  <div className={`font-body text-xs ${i === 1 ? "text-primary-foreground/50" : "text-secondary-foreground/40"}`}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform logos / aggregate */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-stone/10 pt-8">
          <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start">
            {[
              { platform: "Google", rating: "4.9", reviews: "127 reviews" },
              { platform: "TripAdvisor", rating: "5.0", reviews: "89 reviews" },
              { platform: "Facebook", rating: "4.8", reviews: "56 reviews" },
            ].map((p) => (
              <div key={p.platform} className="text-center">
                <div className="font-body text-xs text-secondary-foreground/40 uppercase tracking-wider mb-1">{p.platform}</div>
                <div className="font-display text-xl font-semibold text-secondary-foreground">{p.rating}★</div>
                <div className="font-body text-xs text-secondary-foreground/30">{p.reviews}</div>
              </div>
            ))}
          </div>
          <Link
            to="/testimonials"
            className="font-body text-sm tracking-wider text-secondary-foreground/50 hover:text-primary uppercase transition-colors"
          >
            Read all reviews →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JordanTestimonials;
