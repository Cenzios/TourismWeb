import { Button } from "@/components/ui/button";
import { Fuel, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RentVehicleSection = () => {
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
    },
  ];

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
    <section id="vehicles" className="py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          Rent Vehicle
        </motion.h2>

        {/* Vehicles Grid - Show only first 3 items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {vehicles.slice(0, 3).map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Link to={`/vehicle/${vehicle.id}`} className="block">
                <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer">
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={vehicle.image}
                      alt={vehicle.model}
                      className="w-full h-48 object-cover"
                    />
                    <motion.div
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-3 left-3"
                    >
                      <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-medium">
                        {vehicle.type}
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      {vehicle.model}
                    </h3>

                    {/* Specs */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="grid grid-cols-3 gap-4 mb-6"
                    >
                      <div className="text-center">
                        <Fuel
                          className="mx-auto mb-2 text-muted-foreground"
                          size={20}
                        />
                        <div className="text-sm font-medium">
                          {vehicle.specs.fuel}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Fuel
                        </div>
                      </div>
                      <div className="text-center">
                        <Settings
                          className="mx-auto mb-2 text-muted-foreground"
                          size={20}
                        />
                        <div className="text-sm font-medium">
                          {vehicle.specs.transmission}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Transmission
                        </div>
                      </div>
                      <div className="text-center">
                        <Users
                          className="mx-auto mb-2 text-muted-foreground"
                          size={20}
                        />
                        <div className="text-sm font-medium">
                          {vehicle.specs.capacity}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Capacity
                        </div>
                      </div>
                    </motion.div>

                    {/* Price */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-center mb-6"
                    >
                      <span className="text-2xl font-bold text-primary">
                        {vehicle.price}
                      </span>
                      <span className="text-muted-foreground">
                        /{vehicle.priceUnit}
                      </span>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button variant="pill" className="w-full">
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
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/vehicles">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="px-8">
                View All Vehicles
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RentVehicleSection;
