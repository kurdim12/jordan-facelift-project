import JordanNavbar from "@/components/JordanNavbar";
import JordanHero from "@/components/JordanHero";
import JordanTours from "@/components/JordanTours";
import JordanWhyJordan from "@/components/JordanWhyJordan";
import JordanTourTypes from "@/components/JordanTourTypes";
import JordanAbout from "@/components/JordanAbout";
import JordanDestinations from "@/components/JordanDestinations";
import JordanTestimonials from "@/components/JordanTestimonials";
import JordanBlog from "@/components/JordanBlog";
import JordanCTA from "@/components/JordanCTA";
import JordanFooter from "@/components/JordanFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <JordanNavbar />
      <JordanHero />
      <JordanTours />
      <JordanWhyJordan />
      <JordanTourTypes />
      <JordanAbout />
      <JordanDestinations />
      <JordanTestimonials />
      <JordanBlog />
      <JordanCTA />
      <JordanFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
