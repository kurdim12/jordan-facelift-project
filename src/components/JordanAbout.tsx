import petraNight from "@/assets/petra-night.jpg";
import wadiRum from "@/assets/wadi-rum.jpg";
import jerash from "@/assets/jerash.jpg";
import amman from "@/assets/amman.jpg";
import { Check } from "lucide-react";

const features = [
  "Certified Destination Management Company (DMC)",
  "Local expert guides with deep regional knowledge",
  "Custom itineraries for individuals, couples & groups",
  "Coverage across Jordan, Egypt & Palestine",
  "24/7 on-trip support for all travellers",
];

const JordanAbout = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo Mosaic */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={petraNight}
              alt="Petra at night"
              className="aspect-[3/4] object-cover w-full"
            />
            <div className="flex flex-col gap-4 mt-8">
              <img
                src={wadiRum}
                alt="Wadi Rum"
                className="aspect-square object-cover w-full"
              />
              <img
                src={jerash}
                alt="Jerash ruins"
                className="aspect-square object-cover w-full"
              />
            </div>
            <img
              src={amman}
              alt="Amman cityscape"
              className="aspect-[3/2] object-cover w-full col-span-2"
            />
          </div>

          {/* Text Content */}
          <div>
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">
              Who We Are
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-3 mb-6 leading-tight">
              Jordan's Premier<br />
              <em className="italic font-normal text-terracotta">Travel Experts</em>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Jordan Address Travel & Tourism is proud to be one of Jordan's premier Destination Management Companies, dedicated to creating exceptional travel experiences for both groups and individual travellers.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
              With extensive expertise across Jordan and neighboring countries — including Egypt and Palestine — we offer cultural, religious, adventure, and eco-tourism programs thoughtfully tailored to every client.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="font-body text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-block bg-secondary text-secondary-foreground hover:bg-terracotta font-body text-sm tracking-[0.2em] px-10 py-4 uppercase transition-all duration-300"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JordanAbout;
