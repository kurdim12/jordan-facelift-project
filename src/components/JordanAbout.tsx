import petraNight from "@/assets/petra-night.jpg";
import wadiRum from "@/assets/wadi-rum.jpg";
import jerash from "@/assets/jerash.jpg";
import amman from "@/assets/amman.jpg";
import { Check, Award, Shield, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  { icon: Award, title: "DMC Certified", desc: "Licensed Destination Management Company with 12+ years in Jordan." },
  { icon: Shield, title: "100% Secure", desc: "Fully vetted partners, bonded transport, and comprehensive support." },
  { icon: Globe, title: "4 Countries", desc: "Jordan, Egypt, Palestine & Oman — one trusted partner for the region." },
  { icon: Heart, title: "Personally Guided", desc: "Every trip led by a passionate local guide who loves Jordan deeply." },
];

const JordanAbout = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo Mosaic — editorial collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src={petraNight} alt="Petra at night" className="aspect-[3/4] object-cover w-full" />
              <div className="flex flex-col gap-3 mt-10">
                <img src={wadiRum} alt="Wadi Rum" className="aspect-square object-cover w-full" />
                <img src={jerash} alt="Jerash ruins" className="aspect-square object-cover w-full" />
              </div>
              <img src={amman} alt="Amman" className="aspect-[3/2] object-cover w-full col-span-2" />
            </div>
            {/* Floating badge */}
            <div className="absolute top-4 right-0 translate-x-0 md:translate-x-4 bg-primary text-primary-foreground px-6 py-4 shadow-warm">
              <div className="font-display text-3xl font-semibold leading-none">500+</div>
              <div className="font-body text-xs tracking-wider uppercase mt-1">Happy Guests</div>
            </div>
            <div className="absolute bottom-16 left-0 -translate-x-0 md:-translate-x-4 bg-secondary text-secondary-foreground px-6 py-4 shadow-card">
              <div className="font-display text-3xl font-semibold leading-none">4.9★</div>
              <div className="font-body text-xs tracking-wider uppercase mt-1">Google Rating</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Who We Are</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-3 mb-6 leading-tight">
              Jordan's Most<br />
              <em className="italic font-normal" style={{ color: "hsl(var(--accent))" }}>Trusted Guides</em>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
              Jordan Address Travel & Tourism is a certified Destination Management Company dedicated to creating exceptional travel experiences for both individuals and groups. Founded in 2012 by Rakan Hiassat — a former local guide with 17+ years of experience — we bring deep regional knowledge to every journey.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
              From cultural pilgrimages and desert adventures to luxury escapes and solo women's trips — we design every detail around you. Our coverage spans Jordan, Egypt, Palestine, and Oman.
            </p>

            {/* 4 pillars */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-3 p-4 bg-background border border-border">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <p.icon size={14} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-body text-xs font-semibold text-foreground uppercase tracking-wider">{p.title}</div>
                    <div className="font-body text-xs text-muted-foreground mt-0.5">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-terracotta font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300"
            >
              Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JordanAbout;
