import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ArrowLeft, ArrowRight, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AttractionsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        "A stunning railway bridge in Ella, surrounded by lush plantations and forests, and one of Sri Lanka's most photographed landmarks.",
      location: "Ella, Sri Lanka",
      rating: 4.7,
      image: "https://picsum.photos/id/106/1200/700",
      category: "Culture",
      categoryLabel: "CULTURAL SITES",
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
      categoryLabel: "COASTAL DESTINATIONS",
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
      categoryLabel: "CULTURAL SITES",
    },
    {
      id: 4,
      title: "Kandy City",
      description:
        "Cultural capital featuring the sacred Temple of the Tooth and colonial architecture.",
      location: "Kandy, Sri Lanka",
      rating: 4.7,
      image: "https://picsum.photos/id/128/1200/700",
      category: "Cities",
      categoryLabel: "HERITAGE CITIES",
    },
    {
      id: 5,
      title: "Adam's Peak",
      description:
        "Sacred mountain offering spectacular sunrise views and spiritual significance.",
      location: "Central Province, Sri Lanka",
      rating: 4.8,
      image: "https://picsum.photos/id/130/1200/700",
      category: "Mountains",
      categoryLabel: "MOUNTAIN PEAKS",
    },
    {
      id: 6,
      title: "Galle Fort",
      description:
        "Historic Dutch colonial fortress with charming cobblestone streets and ocean views.",
      location: "Galle, Sri Lanka",
      rating: 4.6,
      image: "https://picsum.photos/id/135/1200/700",
      category: "Culture",
      categoryLabel: "CULTURAL SITES",
    },
  ];

  const filteredAttractions =
    activeFilter === "All"
      ? attractions
      : attractions.filter(
          (attraction) => attraction.category === activeFilter
        );

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const filterVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="attractions"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Must-See Attractions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
          >
            Sri Lankan Destinations
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        >
          {attractions.slice(0, 6).map((attraction, index) => (
            <motion.div
              key={attraction.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/attraction/${attraction.id}`} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-56 md:h-64 object-cover"
                    />
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
                      >
                        <Star
                          className="text-yellow-400"
                          size={14}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                        <span className="text-sm font-semibold text-gray-900">
                          {attraction.rating}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200"
                      style={{
                        fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                      }}
                    >
                      {attraction.title}
                    </motion.h3>

                    {/* Category Label */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {attraction.categoryLabel}
                    </motion.p>

                    {/* Description */}
                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-4"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: "1.7",
                      }}
                    >
                      {attraction.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin size={16} className="flex-shrink-0" />
                        <span
                          className="text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {attraction.location}
                        </span>
                      </div>

                      {/* View Button */}
                      <Button className="px-6 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center"
        >
          <Link to="/attractions">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                See All Destination
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AttractionsSection;
