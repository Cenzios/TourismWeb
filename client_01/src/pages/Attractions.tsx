import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  MapPin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Attractions = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Scroll to top when component mounts or page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const filters = [
    "All",
    "Beaches",
    "Culture",
    "Cities",
    "Mountains",
    "Leisure",
    "Wildlife",
    "Adventure",
  ];

  // Extended attractions data - in a real app, this would come from an API
  const allAttractions = [
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
    {
      id: 4,
      title: "Yala National Park",
      description:
        "Premier wildlife destination famous for leopards, elephants, and diverse bird species.",
      location: "Yala, Sri Lanka",
      rating: 4.7,
      image: "https://picsum.photos/id/121/1200/700",
      category: "Wildlife",
    },
    {
      id: 5,
      title: "Galle Fort",
      description:
        "UNESCO World Heritage site showcasing Dutch colonial architecture and maritime history.",
      location: "Galle, Sri Lanka",
      rating: 4.8,
      image: "https://picsum.photos/id/122/1200/700",
      category: "Culture",
    },
    {
      id: 6,
      title: "Unawatuna Beach",
      description:
        "Crescent-shaped bay with calm waters, perfect for swimming and snorkeling.",
      location: "Unawatuna, Sri Lanka",
      rating: 4.6,
      image: "https://picsum.photos/id/123/1200/700",
      category: "Beaches",
    },
    {
      id: 7,
      title: "Adam's Peak",
      description:
        "Sacred mountain pilgrimage site offering spectacular sunrise views from the summit.",
      location: "Nallathanniya, Sri Lanka",
      rating: 4.9,
      image: "https://picsum.photos/id/124/1200/700",
      category: "Mountains",
    },
    {
      id: 8,
      title: "Colombo City Center",
      description:
        "Vibrant capital city with modern shopping, dining, and cultural attractions.",
      location: "Colombo, Sri Lanka",
      rating: 4.5,
      image: "https://picsum.photos/id/125/1200/700",
      category: "Cities",
    },
    {
      id: 9,
      title: "Kandy Lake",
      description:
        "Serene artificial lake in the heart of the cultural capital, surrounded by hills.",
      location: "Kandy, Sri Lanka",
      rating: 4.6,
      image: "https://picsum.photos/id/126/1200/700",
      category: "Leisure",
    },
    {
      id: 10,
      title: "Hikkaduwa Beach",
      description:
        "Popular surf destination with vibrant coral reefs and lively beach culture.",
      location: "Hikkaduwa, Sri Lanka",
      rating: 4.7,
      image: "https://picsum.photos/id/127/1200/700",
      category: "Beaches",
    },
    {
      id: 11,
      title: "Horton Plains",
      description:
        "Unique ecosystem with cloud forests, waterfalls, and the famous World's End cliff.",
      location: "Nuwara Eliya, Sri Lanka",
      rating: 4.8,
      image: "https://picsum.photos/id/128/1200/700",
      category: "Mountains",
    },
    {
      id: 12,
      title: "Bentota Adventure Sports",
      description:
        "Thrilling water sports including jet skiing, windsurfing, and river safaris.",
      location: "Bentota, Sri Lanka",
      rating: 4.5,
      image: "https://picsum.photos/id/129/1200/700",
      category: "Adventure",
    },
  ];

  // Filter attractions based on active filter
  const filteredAttractions =
    activeFilter === "All"
      ? allAttractions
      : allAttractions.filter(
          (attraction) => attraction.category === activeFilter
        );

  // Calculate pagination
  const totalPages = Math.ceil(filteredAttractions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAttractions = filteredAttractions.slice(startIndex, endIndex);

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
              to="/#attractions"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">All Attractions</h1>
                <p className="text-muted-foreground">
                  Explore the most beautiful and exciting destinations in Sri
                  Lanka
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-sm text-muted-foreground">
                  Showing {startIndex + 1}-
                  {Math.min(endIndex, filteredAttractions.length)} of{" "}
                  {filteredAttractions.length} attractions
                </span>
              </div>
            </div>
          </div>

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

          {/* Attractions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
            {currentAttractions.map((attraction) => (
              <Link
                key={attraction.id}
                to={`/attraction/${attraction.id}`}
                className="block"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer h-full">
                  <div className="relative">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-32 md:h-48 aspect-square md:aspect-auto object-cover"
                    />
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
                    <div className="absolute top-3 right-3">
                      <div className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                        {attraction.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-6 flex flex-col h-[calc(100%-8rem)] md:h-[calc(100%-12rem)]">
                    <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2 line-clamp-2">
                      {attraction.title}
                    </h3>

                    {/* Description - hidden on mobile */}
                    <p className="hidden md:block text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
                      {attraction.description}
                    </p>

                    <div className="flex items-center text-muted-foreground mb-2 md:mb-4">
                      <MapPin
                        size={12}
                        className="mr-1 md:mr-2 md:w-4 md:h-4"
                      />
                      <span className="text-xs md:text-sm line-clamp-1">
                        {attraction.location}
                      </span>
                    </div>

                    {/* Button - hidden on mobile */}
                    <Button
                      variant="pill"
                      size="sm"
                      className="w-full mt-auto hidden md:block"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {currentAttractions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No attractions found for "{activeFilter}" category.
              </p>
              <Button
                variant="outline"
                onClick={() => setActiveFilter("All")}
                className="mt-4"
              >
                View All Attractions
              </Button>
            </div>
          )}

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

export default Attractions;
