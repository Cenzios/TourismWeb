import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Clock,
  MapPin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Tours = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Scroll to top when component mounts or page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Extended tour data - in a real app, this would come from an API with pagination
  const allTours = [
    {
      id: 1,
      title: "Down-South Tour",
      duration: "3 days",
      price: "Rs 35,000",
      priceUnit: "Person",
      location: "Southern Province, Sri Lanka",
      image: "https://picsum.photos/id/99/1200/700",
      highlights: ["Beaches", "Wildlife", "Cultural Sites"],
      description:
        "Experience the best of Sri Lanka's southern coast with pristine beaches, wildlife encounters, and rich cultural heritage.",
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
      description:
        "Explore ancient kingdoms, magnificent temples, and UNESCO World Heritage sites in Sri Lanka's cultural heartland.",
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
      description:
        "Journey through misty mountains, emerald tea estates, and scenic railway routes in Sri Lanka's hill country.",
    },
    {
      id: 4,
      title: "Western Coast Adventure",
      duration: "2 days",
      price: "Rs 25,000",
      priceUnit: "Person",
      location: "Western Province, Sri Lanka",
      image: "https://picsum.photos/id/111/1200/700",
      highlights: ["Beaches", "Water Sports", "Nightlife"],
      description:
        "Discover vibrant beach culture, exciting water sports, and bustling nightlife along the western coast.",
    },
    {
      id: 5,
      title: "Northern Heritage Trail",
      duration: "6 days",
      price: "Rs 65,000",
      priceUnit: "Person",
      location: "Northern Province, Sri Lanka",
      image: "https://picsum.photos/id/120/1200/700",
      highlights: ["Ancient Ruins", "Tamil Culture", "Island Life"],
      description:
        "Explore the rich Tamil heritage, ancient ruins, and unique island culture of Sri Lanka's northern region.",
    },
    {
      id: 6,
      title: "Eastern Coastal Journey",
      duration: "4 days",
      price: "Rs 40,000",
      priceUnit: "Person",
      location: "Eastern Province, Sri Lanka",
      image: "https://picsum.photos/id/121/1200/700",
      highlights: ["Pristine Beaches", "Surfing", "Local Culture"],
      description:
        "Experience unspoiled beaches, world-class surfing spots, and authentic local culture on the eastern coast.",
    },
    {
      id: 7,
      title: "Wildlife Safari Special",
      duration: "3 days",
      price: "Rs 50,000",
      priceUnit: "Person",
      location: "Multiple National Parks",
      image: "https://picsum.photos/id/122/1200/700",
      highlights: ["Leopards", "Elephants", "Bird Watching"],
      description:
        "Embark on thrilling safari adventures to spot leopards, elephants, and diverse bird species in their natural habitat.",
    },
    {
      id: 8,
      title: "Adventure Seeker's Paradise",
      duration: "7 days",
      price: "Rs 75,000",
      priceUnit: "Person",
      location: "Multiple Provinces",
      image: "https://picsum.photos/id/123/1200/700",
      highlights: ["Hiking", "White Water Rafting", "Rock Climbing"],
      description:
        "Challenge yourself with hiking, white water rafting, rock climbing, and other adrenaline-pumping activities.",
    },
    {
      id: 9,
      title: "Spiritual Journey",
      duration: "5 days",
      price: "Rs 42,000",
      priceUnit: "Person",
      location: "Sacred Sites across Sri Lanka",
      image: "https://picsum.photos/id/124/1200/700",
      highlights: ["Buddhist Temples", "Meditation", "Pilgrimage Sites"],
      description:
        "Find inner peace through visits to sacred Buddhist temples, meditation retreats, and important pilgrimage sites.",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(allTours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTours = allTours.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-nav">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/#tours"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">All Tours</h1>
                <p className="text-muted-foreground">
                  Discover amazing destinations and experiences across Sri Lanka
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-sm text-muted-foreground">
                  Showing {startIndex + 1}-{Math.min(endIndex, allTours.length)}{" "}
                  of {allTours.length} tours
                </span>
              </div>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
            {currentTours.map((tour) => (
              <Link key={tour.id} to={`/tour/${tour.id}`} className="block">
                <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer h-full">
                  <div className="relative">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-32 md:h-48 aspect-square md:aspect-auto object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Clock size={14} />
                        {tour.duration}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-6 flex flex-col h-[calc(100%-8rem)] md:h-[calc(100%-12rem)]">
                    <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2 line-clamp-2">
                      {tour.title}
                    </h3>

                    {/* Description - hidden on mobile */}
                    <p className="hidden md:block text-muted-foreground text-sm mb-4 flex-grow">
                      {tour.description}
                    </p>

                    <div className="flex items-center text-muted-foreground mb-2 md:mb-4">
                      <MapPin
                        size={12}
                        className="mr-1 md:mr-2 md:w-4 md:h-4"
                      />
                      <span className="text-xs md:text-sm line-clamp-1">
                        {tour.location}
                      </span>
                    </div>

                    {/* Highlights - hidden on mobile */}
                    <div className="hidden md:flex flex-wrap gap-2 mb-4">
                      {tour.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-secondary/20 text-secondary px-2 py-1 rounded-md text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-2 md:mb-4">
                      <div>
                        <span className="text-lg md:text-2xl font-bold text-primary">
                          {tour.price}
                        </span>
                        <span className="text-xs md:text-base text-muted-foreground">
                          /{tour.priceUnit}
                        </span>
                      </div>
                    </div>

                    {/* Button - hidden on mobile */}
                    <Button
                      variant="pill"
                      className="w-full mt-auto hidden md:block"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => goToPage(page)}
                      className="w-10 h-10"
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tours;
