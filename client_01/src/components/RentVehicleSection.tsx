import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Fuel,
  Users,
  Settings,
  Star,
  ArrowLeft,
  ArrowRight,
  Navigation,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RentVehicleSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const vehicles = [
    {
      id: 1,
      model: "Toyota Prius",
      type: "Sedan",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      specs: {
        fuel: "80L",
        transmission: "Manual",
        capacity: "5 People",
      },
      price: "Rs 12,000",
      priceUnit: "day",
      rating: 4.7,
      categoryLabel: "COMPACT CARS",
    },
    {
      id: 2,
      model: "Honda Civic",
      type: "Hatchback",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
      specs: {
        fuel: "60L",
        transmission: "Manual",
        capacity: "5 People",
      },
      price: "Rs 10,000",
      priceUnit: "day",
      rating: 4.5,
      categoryLabel: "ECONOMY CARS",
    },
    {
      id: 3,
      model: "Toyota Hiace",
      type: "Van",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      specs: {
        fuel: "100L",
        transmission: "Manual",
        capacity: "9 People",
      },
      price: "Rs 18,000",
      priceUnit: "day",
      rating: 4.8,
      categoryLabel: "FAMILY VANS",
    },
    {
      id: 4,
      model: "BMW X5",
      type: "SUV",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      specs: {
        fuel: "90L",
        transmission: "Automatic",
        capacity: "7 People",
      },
      price: "Rs 25,000",
      priceUnit: "day",
      rating: 4.9,
      categoryLabel: "LUXURY SUVS",
    },
    {
      id: 5,
      model: "Mitsubishi Pajero",
      type: "4WD",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      specs: {
        fuel: "95L",
        transmission: "Manual",
        capacity: "8 People",
      },
      price: "Rs 22,000",
      priceUnit: "day",
      rating: 4.6,
      categoryLabel: "OFF-ROAD VEHICLES",
    },
    {
      id: 6,
      model: "Mercedes-Benz S-Class",
      type: "Luxury",
      image:
        "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&h=300&fit=crop",
      specs: {
        fuel: "85L",
        transmission: "Automatic",
        capacity: "5 People",
      },
      price: "Rs 35,000",
      priceUnit: "day",
      rating: 5.0,
      categoryLabel: "LUXURY SEDANS",
    },
  ];

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="vehicles" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-medium mb-2"
          >
            Drive By Yourself
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Vehicle Rentals
          </motion.h2>
        </div>

        {/* Grid Layout for Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/vehicle/${vehicle.id}`} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={vehicle.image}
                      alt={vehicle.model}
                      className="w-full h-56 object-cover"
                    />
                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 shadow-md"
                      >
                        <Star
                          className="text-yellow-400"
                          size={14}
                          fill="currentColor"
                        />
                        <span className="text-gray-900">{vehicle.rating}</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="text-lg font-bold text-gray-900 mb-3"
                    >
                      {vehicle.model}
                    </motion.h3>

                    {/* Specs */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-center gap-4 text-sm text-gray-600 mb-4"
                    >
                      <div className="flex items-center gap-1.5">
                        <Fuel size={16} className="text-gray-400" />
                        <span>{vehicle.specs.fuel}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users size={16} className="text-gray-400" />
                        <span>{vehicle.specs.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Settings size={16} className="text-gray-400" />
                        <span>{vehicle.specs.transmission}</span>
                      </div>
                    </motion.div>

                    {/* Price + Button */}
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <div>
                        <span className="text-xl font-bold text-gray-900">
                          RS. {vehicle.price}
                        </span>
                        <span className="text-sm text-gray-500">
                          / {vehicle.priceUnit}
                        </span>
                      </div>
                      <Button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-medium">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Button - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center"
        >
          <Link to="/vehicles">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 px-8 py-3 font-medium text-base flex items-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                See All Vehicles
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RentVehicleSection;
