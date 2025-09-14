import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AttractionsSection from "@/components/AttractionsSection";
import TourPlansSection from "@/components/TourPlansSection";
import RentVehicleSection from "@/components/RentVehicleSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ClientServiceHighlights from "@/components/ClientServiceHighlights";
import ServiceHighlights from "@/components/ServiceHighlights";
//import WhatWeOffer from "@/components/WhatWeOffer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServiceHighlights />
      {/* <WhatWeOffer /> */}
      <ClientServiceHighlights />
      <AttractionsSection />
      <TourPlansSection />
      <RentVehicleSection />
      <GallerySection />
      <Footer />

      {/* Floating Call Button */}
      <FloatingCallButton />
    </div>
  );
};

export default Index;
