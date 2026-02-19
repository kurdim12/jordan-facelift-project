import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { testimonials } from "@/data/siteData";

const JordanTestimonials = () => {
  const shown = testimonials.slice(0, 3);

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Genuine Reviews</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-2 leading-tight">
              Tourists Talk<br /><em className="italic font-normal text-terracotta">About Us</em>
            </h2>
          </div>
          <Link to="/testimonials" className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary uppercase transition-colors">
            View all reviews →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shown.map((t, i) => (
            <div key={i} className="bg-card border border-border p-8 flex flex-col">
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-display text-xl italic font-normal text-foreground leading-relaxed mb-6 flex-1">
                "{t.review}"
              </blockquote>
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
  );
};

export default JordanTestimonials;
