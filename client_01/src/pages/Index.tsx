import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServiceHighlights from "@/components/ServiceHighlights";
import AttractionsSection from "@/components/AttractionsSection";
import TourPlansSection from "@/components/TourPlansSection";
import RentVehicleSection from "@/components/RentVehicleSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServiceHighlights />
      <AttractionsSection />
      <TourPlansSection />
      <RentVehicleSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
