import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const stats = [
    { number: "130", label: "Happy Travellers" },
    { number: "20+", label: "Travel Locations" },
    { number: "10", label: "Year Experience" },
  ];

  return (
    <section className="relative h-hero flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/intro.video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center text-background px-4 max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">
          Travel memories
          <br />
          you'll never forget
        </h1>

        {/* Primary CTA */}
        <div className="mb-12">
          <Link to="/attractions">
            <Button variant="hero" size="lg" className="text-lg">
              Explore <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>

        {/* Stats Cards - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg p-6 text-center"
            >
              <div className="text-2xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
