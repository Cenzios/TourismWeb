import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TourPlansSection = () => {
  const tourPlans = [
    {
      id: 1,
      title: "Down-South Tour",
      duration: "3 days",
      price: "Rs 35,000",
      priceUnit: "Person",
      location: "Southern Province, Sri Lanka",
      image: "https://picsum.photos/id/99/1200/700",
      highlights: ["Beaches", "Wildlife", "Cultural Sites"],
    },
    {
      id: 2,
      title: "Cultural Triangle",
      duration: "4 days",
      price: "Rs 45,000",
      priceUnit: "Person",
      location: "Central Province, Sri Lanka",
      image: "https://picsum.photos/id/101/1200/700",
      highlights: ["Ancient Cities", "Temples", "Heritage Sites"],
    },
    {
      id: 3,
      title: "Hill Country Explorer",
      duration: "5 days",
      price: "Rs 55,000",
      priceUnit: "Person",
      location: "Central Highlands, Sri Lanka",
      image: "https://picsum.photos/id/110/1200/700",
      highlights: ["Tea Plantations", "Mountains", "Scenic Railways"],
    },
  ];

  return (
    <section id="tours" className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&auto=format"
          alt="Mountain landscape with tea plantations"
          className="w-full h-full object-cover"
        />
        {/* Mask Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/98 via-muted/95 to-muted/90"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-background">Tour Plans</h2>

        {/* Tours Grid - Show only first 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPlans.slice(0, 3).map((plan) => (
            <Link key={plan.id} to={`/tour/${plan.id}`} className="block">
              <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer">
                <div className="relative">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Clock size={14} />
                      {plan.duration}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{plan.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {plan.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full border px-3 py-1 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-secondary-foreground hover:bg-secondary/80"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">
                        /{plan.priceUnit}
                      </span>
                    </div>
                  </div>

                  <Button variant="pill" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/tours">
            <Button variant="outline" size="lg" className="px-8">
              View All Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourPlansSection;
