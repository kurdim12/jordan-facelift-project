import heroPetra from "@/assets/hero-petra.jpg";
import { ArrowDown, Star } from "lucide-react";

const JordanHero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroPetra}
          alt="Petra Treasury, Jordan"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-midnight/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary/70" />
          <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">
            Premier Travel Agency · Jordan
          </span>
          <div className="h-px w-12 bg-primary/70" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.9] text-ivory mb-6 text-balance">
          Your Gateway<br />
          <em className="font-display italic font-normal text-primary">to Jordan</em>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-base md:text-lg text-ivory/70 max-w-xl mx-auto mb-10 tracking-wide leading-relaxed">
          Carefully curated journeys through Petra, Wadi Rum, and the Dead Sea — crafted for the discerning traveller.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tours"
            className="bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300 shadow-warm"
          >
            Explore Tours
          </a>
          <a
            href="#tailor"
            className="border border-ivory/40 hover:border-primary text-ivory hover:text-primary font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300"
          >
            Tailor My Trip
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-10">
          {[
            { num: "500+", label: "Happy Travellers" },
            { num: "12+", label: "Years Experience" },
            { num: "30+", label: "Tour Packages" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-semibold text-primary">{s.num}</div>
              <div className="font-body text-xs tracking-wider text-ivory/50 uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-body text-xs tracking-[0.3em] text-ivory/40 uppercase">Scroll</span>
        <ArrowDown size={16} className="text-primary" />
      </div>

      {/* Review badge */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 bg-midnight/60 backdrop-blur-md border border-stone/20 px-5 py-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-gold text-gold" />
          ))}
        </div>
        <div>
          <div className="font-body text-xs text-ivory font-medium">4.9 / 5</div>
          <div className="font-body text-xs text-ivory/40">Google Reviews</div>
        </div>
      </div>
    </section>
  );
};

export default JordanHero;
