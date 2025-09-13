import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <section id="attractions" className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format"
          alt="Beautiful Sri Lankan landscape"
          className="w-full h-full object-cover"
        />
        {/* Mask Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Attractions
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.div
              key={filter}
              variants={filterVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Button
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Attractions Grid - Show only first 6 items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredAttractions.slice(0, 6).map((attraction) => (
            <motion.div
              key={attraction.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Link to={`/attraction/${attraction.id}`} className="block">
                <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer">
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight
                          className="text-background bg-foreground/20 rounded-full p-1"
                          size={24}
                        />
                      </motion.div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-foreground text-background px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1"
                      >
                        <Star
                          className="rating-star"
                          size={14}
                          fill="currentColor"
                        />
                        {attraction.rating}
                      </motion.div>
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

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button variant="pill" size="sm" className="w-full">
                        View Details
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/attractions">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="px-8">
                View All Attractions
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AttractionsSection;
