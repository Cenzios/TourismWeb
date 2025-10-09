import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Star, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TourPlansSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      rating: 4.8,
      categoryLabel: "ADVENTURE TOURS",
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
      rating: 4.9,
      categoryLabel: "CULTURAL TOURS",
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
      rating: 4.7,
      categoryLabel: "NATURE TOURS",
    },
    {
      id: 4,
      title: "Colombo City Tour",
      duration: "1 day",
      price: "Rs 15,000",
      priceUnit: "Person",
      location: "Colombo, Sri Lanka",
      image: "https://picsum.photos/id/115/1200/700",
      highlights: ["City Landmarks", "Shopping", "Local Cuisine"],
      rating: 4.5,
      categoryLabel: "CITY TOURS",
    },
    {
      id: 5,
      title: "Wildlife Safari",
      duration: "2 days",
      price: "Rs 28,000",
      priceUnit: "Person",
      location: "Yala National Park, Sri Lanka",
      image: "https://picsum.photos/id/125/1200/700",
      highlights: ["Leopards", "Elephants", "Bird Watching"],
      rating: 4.9,
      categoryLabel: "WILDLIFE TOURS",
    },
    {
      id: 6,
      title: "Coastal Paradise",
      duration: "4 days",
      price: "Rs 42,000",
      priceUnit: "Person",
      location: "South Coast, Sri Lanka",
      image: "https://picsum.photos/id/140/1200/700",
      highlights: ["Beach Resorts", "Water Sports", "Sunset Views"],
      rating: 4.6,
      categoryLabel: "COASTAL TOURS",
    },
  ];
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

  return (
    <section
      id="tours"
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
            Tailor-Made Tours
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
          >
            Tour Packages
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
          {tourPlans.slice(0, 6).map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/tour/${plan.id}`} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-56 md:h-64 object-cover"
                    />
                    {/* Duration Badge - Top Right */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg"
                      >
                        <Clock size={14} className="text-gray-700" />
                        <span className="text-sm font-semibold text-gray-900">
                          {plan.duration}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title + Rating in one row */}
                    <div className="flex items-center justify-between mb-2">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200"
                        style={{
                          fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                        }}
                      >
                        {plan.title}
                      </motion.h3>

                      {/* Rating - moved here */}
                      <div className="flex items-center gap-1.5">
                        <Star
                          className="text-yellow-400"
                          size={16}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                        <span
                          className="text-sm font-semibold text-gray-900"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {plan.rating}
                        </span>
                      </div>
                    </div>

                    {/* Category Label */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {plan.categoryLabel}
                    </motion.p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {/* Price */}
                      <div className="flex flex-col">
                        <span
                          className="text-xl font-bold text-gray-900"
                          style={{
                            fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                          }}
                        >
                          {plan.price}
                        </span>
                        <span
                          className="text-sm text-gray-500"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          per person
                        </span>
                      </div>

                      {/* Book Now Button */}
                      <Button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        Book Now
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
          <Link to="/tours">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                See All Tours
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TourPlansSection;
