import { ArrowDown, Star, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroPetra from "@/assets/hero-petra.jpg";

const JordanHero = () => {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroPetra}
          alt="Petra Treasury, Jordan"
          className="w-full h-full object-cover object-center scale-105"
          style={{ animation: "heroZoom 20s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/85 via-midnight/55 to-midnight/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-midnight/20" />
      </div>

      {/* Left-aligned editorial content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-ivory/10 backdrop-blur-sm border border-ivory/20 px-4 py-2 mb-8">
            <Award size={13} className="text-gold" />
            <span className="font-body text-xs tracking-[0.3em] text-ivory/80 uppercase">Jordan's #1 Rated DMC Since 2012</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.88] text-ivory mb-6">
            Discover<br />
            the Soul of<br />
            <em className="font-display italic font-normal" style={{ color: "hsl(var(--primary))" }}>Jordan</em>
          </h1>

          <p className="font-body text-lg text-ivory/70 max-w-md mb-10 leading-relaxed">
            Expertly crafted journeys through Petra, Wadi Rum, and the Dead Sea — designed for travellers who demand extraordinary.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              to="/tours"
              className="inline-flex items-center justify-center bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300 shadow-warm"
            >
              View All Tours
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-ivory/40 hover:border-primary text-ivory hover:text-primary font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300"
            >
              Plan My Trip
            </Link>
          </div>

          {/* Trust stats */}
          <div className="flex items-center gap-8">
            {[
              { icon: Users, num: "500+", label: "Happy Travellers" },
              { icon: Shield, num: "12+", label: "Years Experience" },
              { icon: Award, num: "4.9★", label: "Google Rating" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon size={18} className="text-primary flex-shrink-0" />
                <div>
                  <div className="font-display text-xl font-semibold text-ivory">{s.num}</div>
                  <div className="font-body text-xs text-ivory/40 uppercase tracking-wider">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right-side floating card */}
      <div className="absolute right-8 bottom-20 hidden xl:block">
        <div className="bg-midnight/60 backdrop-blur-md border border-stone/20 p-5 w-64">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-gold text-gold" />
            ))}
          </div>
          <p className="font-display text-base italic text-ivory leading-snug mb-3">
            "The best travel experience of our lives. Every detail was perfect."
          </p>
          <div className="font-body text-xs text-ivory/40 uppercase tracking-wider">— Sarah M., London</div>
        </div>
      </div>

      {/* Destinations quick nav */}
      <div className="absolute bottom-0 left-0 right-0 hidden lg:flex">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex gap-0 border-t border-ivory/10">
            {["Petra", "Wadi Rum", "Dead Sea", "Jerash", "Amman"].map((dest, i) => (
              <Link
                key={dest}
                to="/destinations"
                className="flex-1 text-center py-4 font-body text-xs tracking-[0.25em] text-ivory/40 hover:text-primary hover:bg-midnight/40 uppercase transition-all duration-200 border-r border-ivory/10 last:border-r-0"
              >
                {dest}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 lg:hidden flex flex-col items-center gap-2 animate-float">
        <ArrowDown size={16} className="text-primary" />
      </div>

      <style>{`@keyframes heroZoom { from { transform: scale(1.05); } to { transform: scale(1.12); } }`}</style>
    </section>
  );
};

export default JordanHero;
