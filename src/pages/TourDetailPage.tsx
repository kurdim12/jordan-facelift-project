import { useParams, Link } from "react-router-dom";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { packages } from "@/data/siteData";
import { Star, Clock, Check, X, ArrowLeft, Phone } from "lucide-react";

const TourDetailPage = () => {
  const { slug } = useParams();
  const pkg = packages.find(p => p.slug === slug);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Tour not found</h1>
          <Link to="/tours" className="font-body text-sm text-primary underline">Back to Tours</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pb-12">
          <Link
            to="/tours"
            className="flex items-center gap-2 font-body text-xs text-ivory/60 hover:text-primary uppercase tracking-wider mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> All Tours
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-xs tracking-wider bg-primary text-primary-foreground px-3 py-1 uppercase">{pkg.tag}</span>
            <div className="flex items-center gap-1">
              <Star size={13} className="fill-gold text-gold" />
              <span className="font-body text-xs text-ivory/70">{pkg.rating} · {pkg.reviews} reviews</span>
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-ivory leading-tight mb-2">{pkg.title}</h1>
          <p className="font-body text-base text-ivory/60">{pkg.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <div>
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Overview</span>
              <h2 className="font-display text-3xl font-semibold text-foreground mt-2 mb-4">About This Tour</h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed">{pkg.description}</p>
              <div className="flex items-center gap-2 mt-4">
                <Clock size={16} className="text-primary" />
                <span className="font-body text-sm text-foreground">{pkg.duration} · {pkg.nights} nights</span>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Highlights</span>
              <h2 className="font-display text-3xl font-semibold text-foreground mt-2 mb-5">What You'll Experience</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-primary" />
                    </div>
                    <span className="font-body text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Day by Day</span>
              <h2 className="font-display text-3xl font-semibold text-foreground mt-2 mb-6">Itinerary</h2>
              <div className="space-y-0">
                {pkg.itinerary.map((day, i) => (
                  <div key={i} className="flex gap-6 group">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-display text-lg font-semibold flex-shrink-0">
                        {day.day}
                      </div>
                      {i < pkg.itinerary.length - 1 && (
                        <div className="w-px flex-1 bg-border my-1 min-h-[2rem]" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-8">
                      <h3 className="font-display text-xl font-semibold text-foreground leading-tight">{day.title}</h3>
                      <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included / Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Included</span>
                <ul className="mt-4 space-y-2">
                  {pkg.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[hsl(142,50%,45%,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-[hsl(142,50%,40%)]" />
                      </div>
                      <span className="font-body text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">Not Included</span>
                <ul className="mt-4 space-y-2">
                  {pkg.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X size={11} className="text-destructive" />
                      </div>
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border p-8 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <Star size={16} className="fill-gold text-gold" />
                <span className="font-body text-sm font-medium text-foreground">{pkg.rating} · {pkg.reviews} reviews</span>
              </div>

              <div className="border-b border-border pb-6 mb-6">
                <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</div>
                <div className="font-display text-2xl font-semibold text-foreground">{pkg.duration}</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-3">This tour includes</div>
                {pkg.included.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={13} className="text-primary" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/962"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] py-4 uppercase transition-all duration-300 mb-3"
              >
                <Phone size={15} />
                Book via WhatsApp
              </a>
              <a
                href="/contact"
                className="w-full flex items-center justify-center gap-2 border border-border hover:border-primary text-foreground hover:text-primary font-body text-sm tracking-[0.2em] py-4 uppercase transition-all duration-300"
              >
                Send Inquiry
              </a>

              <p className="font-body text-xs text-muted-foreground text-center mt-4">
                Price quoted on request · Tailored to your group
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tours */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-semibold text-foreground mb-8">Other Tours You May Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.filter(p => p.slug !== slug).slice(0, 3).map((p, i) => (
              <Link key={i} to={`/tours/${p.slug}`} className="group bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300">
                <div className="overflow-hidden aspect-[16/9]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={12} className="text-muted-foreground" />
                    <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{p.duration}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-terracotta transition-colors">{p.title}</h3>
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

export default TourDetailPage;
