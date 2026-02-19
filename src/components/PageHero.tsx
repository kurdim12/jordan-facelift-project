import breadcrumbBg from "@/assets/breadcrumb-bg.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

const PageHero = ({ title, subtitle, tag }: PageHeroProps) => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={breadcrumbBg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-midnight/75" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        {tag && (
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-primary/60" />
            <span className="font-body text-xs tracking-[0.4em] text-primary uppercase">{tag}</span>
            <div className="h-px w-10 bg-primary/60" />
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl font-semibold text-ivory leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-base text-ivory/60 mt-4 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
