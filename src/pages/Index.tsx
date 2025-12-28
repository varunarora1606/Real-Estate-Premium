import Header from "@/components/Header";
import CinematicHero from "@/components/CinematicHero";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutLegacy from "@/components/AboutLegacy";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CinematicHero />
        <FeaturedProperties />
        <WhyChooseUs />
        <AboutLegacy />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;