import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AttractionsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Beaches",
    "Culture",
    "Cities",
    "Mountains",
    "Leisure",
  ];

  const attractions = [
    {
      id: 1,
      title: "Nine Arch Bridge",
      description:
        "A stunning architectural marvel surrounded by lush tea plantations and tropical forests.",
      location: "Ella, Sri Lanka",
      rating: 4.9,
      image: "https://picsum.photos/id/106/1200/700",
      category: "Culture",
    },
    {
      id: 2,
      title: "Mirissa Beach",
      description:
        "Golden sandy beaches perfect for whale watching and pristine sunset views.",
      location: "Mirissa, Sri Lanka",
      rating: 4.8,
      image: "https://picsum.photos/id/111/1200/700",
      category: "Beaches",
    },
    {
      id: 3,
      title: "Sigiriya Rock",
      description:
        "Ancient rock fortress offering breathtaking panoramic views and historical significance.",
      location: "Sigiriya, Sri Lanka",
      rating: 4.9,
      image: "https://picsum.photos/id/120/1200/700",
      category: "Culture",
    },
  ];

  const filteredAttractions =
    activeFilter === "All"
      ? attractions
      : attractions.filter(
          (attraction) => attraction.category === activeFilter
        );

  return (
    <section id="attractions" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Attractions</h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Attractions Grid - Show only first 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.slice(0, 6).map((attraction) => (
            <Link
              key={attraction.id}
              to={`/attraction/${attraction.id}`}
              className="block"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer">
                <div className="relative">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <ArrowUpRight
                      className="text-background bg-foreground/20 rounded-full p-1"
                      size={24}
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <div className="bg-foreground text-background px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1">
                      <Star
                        className="rating-star"
                        size={14}
                        fill="currentColor"
                      />
                      {attraction.rating}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {attraction.description}
                  </p>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{attraction.location}</span>
                  </div>

                  <Button variant="pill" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/attractions">
            <Button variant="outline" size="lg" className="px-8">
              View All Attractions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
