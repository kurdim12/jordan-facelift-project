import heroPetra from "@/assets/hero-petra.jpg";
import { Phone } from "lucide-react";

const JordanCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroPetra}
          alt="Jordan landscape"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-midnight/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-primary/50" />
          <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">
            Start Your Journey
          </span>
          <div className="h-px w-12 bg-primary/50" />
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-semibold text-ivory mb-6 leading-tight">
          Ready to Discover<br />
          <em className="italic font-normal text-primary">Jordan?</em>
        </h2>
        <p className="font-body text-base text-ivory/60 max-w-lg mx-auto mb-10 leading-relaxed">
          Let our local experts craft the perfect Jordanian adventure for you. Every journey is unique — just like you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tours"
            className="bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300 shadow-warm"
          >
            Explore Packages
          </a>
          <a
            href="https://wa.me/"
            className="flex items-center gap-2 border border-ivory/30 hover:border-primary text-ivory hover:text-primary font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300"
          >
            <Phone size={14} />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default JordanCTA;
