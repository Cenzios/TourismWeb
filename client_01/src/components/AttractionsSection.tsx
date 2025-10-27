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
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <section
      id="attractions"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2"
          >
            Must-See Attractions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Sri Lankan Destinations
          </motion.h2>
        </div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8"
        >
          {attractions.slice(0, 6).map((attraction, index) => (
            <motion.div
              key={attraction.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <Link to={`/attraction/${attraction.id}`} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-56 md:h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Star
                        className="text-yellow-400"
                        size={14}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                      <span className="text-sm font-semibold text-gray-900">
                        {attraction.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {attraction.title}
                    </h3>
                    <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-3">
                      {attraction.categoryLabel}
                    </p>
                    <p className="text-gray-600 text-[14px] leading-relaxed mb-4 font-normal">
                      {attraction.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin size={16} />
                        <span className="text-sm">{attraction.location}</span>
                      </div>
                      <Button className="px-6 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-600 hover:text-white">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop See All Destinations Button */}
        <div className="hidden lg:flex justify-center mb-12">
          <Link to="/attractions">
            <Button className="flex items-center gap-2 px-6 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white shadow-md">
              <Navigation className="w-5 h-5" />
              See All Destinations
            </Button>
          </Link>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden mb-8">
          <motion.div
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {attractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                variants={itemVariants}
                className="flex-none w-full max-w-[90vw] snap-center"
              >
                <Link
                  to={`/attraction/${attraction.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                    <div className="relative overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.title}
                        className="w-full h-52 object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Star
                          className="text-yellow-400"
                          size={14}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                        <span className="text-sm font-bold text-gray-900">
                          {attraction.rating}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {attraction.title}
                      </h3>
                      <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
                        {attraction.categoryLabel}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {attraction.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-gray-500">
                          <MapPin size={16} />
                          <span className="text-sm">{attraction.location}</span>
                        </div>
                        <Button className="px-6 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-600 hover:text-white">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Bottom Action */}
        <motion.div className="flex items-center justify-between gap-4 mt-4 md:hidden">
          <Link to="/attractions">
            <Button className="flex items-center gap-2 px-6 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white shadow-md">
              <Navigation className="w-5 h-5" />
              See All Destinations
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <motion.button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:bg-blue-600 hover:text-white group bg-white"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-white" />
            </motion.button>
            <motion.button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:bg-blue-600 hover:text-white group bg-white"
            >
              <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttractionsSection;
