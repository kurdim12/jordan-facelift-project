import { useParams, Link } from "react-router-dom";
import JordanNavbar from "@/components/JordanNavbar";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { packages } from "@/data/siteData";
import { Star, Clock, Check, X, ArrowLeft, Phone, MapPin, Users, Calendar, ArrowUpRight } from "lucide-react";

const TourDetailPage = () => {
  const { slug } = useParams();
  const pkg = packages.find((p) => p.slug === slug);
  const related = packages.filter((p) => p.slug !== slug).slice(0, 3);

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

      {/* Cinematic Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/40 to-midnight/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pb-14">
          <Link to="/tours" className="inline-flex items-center gap-2 font-body text-xs text-ivory/50 hover:text-primary uppercase tracking-wider mb-8 transition-colors">
            <ArrowLeft size={13} /> All Tours
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-xs tracking-wider bg-primary text-primary-foreground px-3 py-1 uppercase">{pkg.tag}</span>
            <div className="flex items-center gap-1.5 bg-midnight/40 backdrop-blur-sm px-3 py-1">
              <Star size={12} className="fill-gold text-gold" />
              <span className="font-body text-xs text-ivory">{pkg.rating} · {pkg.reviews} reviews</span>
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-ivory leading-tight mb-3">{pkg.title}</h1>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-primary" />
              <span className="font-body text-sm text-ivory/60">{pkg.subtitle}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-primary" />
              <span className="font-body text-sm text-ivory/60">{pkg.duration} · {pkg.nights} nights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-3 flex items-center gap-2 text-xs font-body text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/tours" className="hover:text-primary transition-colors">Tours</Link>
          <span>/</span>
          <span className="text-foreground">{pkg.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-14">

            {/* Overview */}
            <div>
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Overview</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-5">About This Tour</h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed">{pkg.description}</p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Clock, label: "Duration", value: pkg.duration },
                  { icon: Calendar, label: "Nights", value: `${pkg.nights} nights` },
                  { icon: Users, label: "Type", value: "Private / Group" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-muted/40 border border-border p-4 flex items-center gap-3">
                    <Icon size={16} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                      <div className="font-body text-sm font-medium text-foreground">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Highlights</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">What You'll Experience</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 border border-border">
                    <div className="w-5 h-5 bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-primary" />
                    </div>
                    <span className="font-body text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Day by Day</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-8">Your Itinerary</h2>
              <div className="space-y-0">
                {pkg.itinerary.map((day, i) => (
                  <div key={i} className="flex gap-6 group">
                    {/* Timeline */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-11 h-11 bg-primary text-primary-foreground flex items-center justify-center font-display text-lg font-semibold">
                        {day.day}
                      </div>
                      {i < pkg.itinerary.length - 1 && (
                        <div className="w-px flex-1 bg-primary/20 my-1 min-h-[2rem]" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-8 flex-1">
                      <div className="bg-card border border-border p-5 group-hover:border-primary/30 transition-colors">
                        <div className="font-body text-xs text-primary uppercase tracking-wider mb-1">Day {day.day}</div>
                        <h3 className="font-display text-xl font-semibold text-foreground leading-tight mb-2">{day.title}</h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{day.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included / Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card border border-border p-7">
                <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">What's Included</span>
                <ul className="mt-5 space-y-3">
                  {pkg.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={10} className="text-primary" />
                      </div>
                      <span className="font-body text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/30 border border-border p-7">
                <span className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">Not Included</span>
                <ul className="mt-5 space-y-3">
                  {pkg.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X size={10} className="text-destructive" />
                      </div>
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Sticky booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Booking card */}
              <div className="bg-card border border-border shadow-warm overflow-hidden">
                {/* Card header */}
                <div className="bg-secondary p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Star size={14} className="fill-gold text-gold" />
                    <span className="font-body text-sm text-secondary-foreground">{pkg.rating} · {pkg.reviews} reviews</span>
                  </div>
                  <div className="font-display text-2xl font-semibold text-secondary-foreground mt-3">{pkg.duration}</div>
                  <div className="font-body text-xs text-secondary-foreground/50 uppercase tracking-wider">Private tour · Price on request</div>
                </div>

                <div className="p-6">
                  <div className="space-y-2.5 mb-6">
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-3">Includes</div>
                    {pkg.included.slice(0, 5).map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check size={12} className="text-primary flex-shrink-0" />
                        <span className="font-body text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-terracotta text-primary-foreground font-body text-sm tracking-[0.2em] py-4 uppercase transition-all duration-300 mb-3"
                  >
                    <Phone size={14} />
                    Book via WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 border border-border hover:border-primary text-foreground hover:text-primary font-body text-sm tracking-[0.2em] py-4 uppercase transition-all duration-300"
                  >
                    Send Inquiry
                  </Link>

                  <p className="font-body text-xs text-muted-foreground text-center mt-4 leading-relaxed">
                    No payment required · Free personalised quote · Reply within 24h
                  </p>
                </div>
              </div>

              {/* Trust block */}
              <div className="bg-muted/30 border border-border p-5">
                {[
                  { icon: "🏆", text: "DMC Certified — Licensed in Jordan" },
                  { icon: "🔒", text: "100% secure booking process" },
                  { icon: "🌟", text: "4.9/5 from 200+ verified reviews" },
                  { icon: "📞", text: "24/7 support during your trip" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 py-2.5 border-b border-border last:border-0">
                    <span>{item.icon}</span>
                    <span className="font-body text-xs text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tours */}
      <section className="bg-muted/20 border-t border-border py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase">Continue Exploring</span>
              <h2 className="font-display text-4xl font-semibold text-foreground mt-2">You May Also Like</h2>
            </div>
            <Link to="/tours" className="flex items-center gap-1 font-body text-xs tracking-wider text-muted-foreground hover:text-primary uppercase transition-colors">
              All tours <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Link key={i} to={`/tours/${p.slug}`} className="group bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 shadow-card hover:shadow-warm">
                <div className="overflow-hidden aspect-[16/9] relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="font-body text-xs bg-primary text-primary-foreground px-2.5 py-0.5 uppercase tracking-wider">{p.tag}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Clock size={11} className="text-muted-foreground" />
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{p.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={11} className="fill-gold text-gold" />
                      <span className="font-body text-xs text-muted-foreground">{p.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">{p.subtitle}</p>
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
