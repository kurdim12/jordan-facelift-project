import wadiRum from "@/assets/wadi-rum.jpg";
import { Phone, ArrowUpRight, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const JordanCTA = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={wadiRum} alt="Wadi Rum desert" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-midnight/82" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary/60" />
              <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">Start Your Journey</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-ivory mb-6 leading-tight">
              Ready for<br />
              <em className="italic font-normal text-primary">Jordan?</em>
            </h2>
            <p className="font-body text-base text-ivory/60 max-w-md leading-relaxed mb-8">
              Tell us your dream and our Jordan experts will craft the perfect itinerary — from dates and budget to every hidden gem along the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tours"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] px-9 py-4 uppercase transition-all duration-300 shadow-warm"
              >
                Browse Packages <ArrowUpRight size={14} />
              </Link>
              <a
                href="https://wa.me/962"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ivory/30 hover:border-primary text-ivory hover:text-primary font-body text-sm tracking-[0.2em] px-9 py-4 uppercase transition-all duration-300"
              >
                <Phone size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: quick-start panel */}
          <div className="bg-ivory/8 backdrop-blur-sm border border-ivory/15 p-5 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-ivory mb-6">Plan Your Trip</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-ivory/40 mb-2 block">Your Name</label>
                <input
                  type="text"
                  placeholder="Sarah Miller"
                  className="w-full bg-transparent border border-ivory/20 focus:border-primary px-4 py-3 font-body text-sm text-ivory placeholder-ivory/30 focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-ivory/40 mb-2 block flex items-center gap-1">
                    <Calendar size={10} /> Travel Date
                  </label>
                  <input
                    type="text"
                    placeholder="Mar 2026"
                    className="w-full bg-transparent border border-ivory/20 focus:border-primary px-4 py-3 font-body text-sm text-ivory placeholder-ivory/30 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-ivory/40 mb-2 block flex items-center gap-1">
                    <Users size={10} /> Travellers
                  </label>
                  <select className="w-full bg-midnight/60 border border-ivory/20 focus:border-primary px-4 py-3 font-body text-sm text-ivory focus:outline-none transition-colors">
                    <option value="1">Solo</option>
                    <option value="2">2 people</option>
                    <option value="3">3–5 people</option>
                    <option value="6">6–10 people</option>
                    <option value="10">10+ people</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-ivory/40 mb-2 block">Email Address</label>
                <input
                  type="email"
                  placeholder="sarah@email.com"
                  className="w-full bg-transparent border border-ivory/20 focus:border-primary px-4 py-3 font-body text-sm text-ivory placeholder-ivory/30 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] py-4 uppercase transition-all duration-300"
            >
              Get Free Itinerary <ArrowUpRight size={14} />
            </Link>
            <p className="font-body text-xs text-ivory/30 text-center mt-3">No commitment · Reply within 24h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JordanCTA;
