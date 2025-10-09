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
      price: "12,000",
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
      price: "10,000",
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
      price: "18,000",
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
      price: "25,000",
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
      price: "22,000",
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
      price: "35,000",
      priceUnit: "day",
      rating: 5.0,
      categoryLabel: "LUXURY SEDANS",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section id="vehicles" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold text-blue-600">
            Drive By Yourself
          </h2>
          <h3 className="text-3xl font-bold text-gray-900">Vehicle Rentals</h3>
        </div>

        {/* MOBILE VIEW - Single Card Scroll */}
        <div
          className="lg:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          ref={scrollContainerRef}
        >
          <div className="flex gap-6">
            {vehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="snap-center flex-shrink-0 w-full"
              >
                <Link to={`/vehicle/${vehicle.id}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={vehicle.image}
                        alt={vehicle.model}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow-md flex items-center gap-1">
                        <Star
                          className="text-yellow-400"
                          size={14}
                          fill="currentColor"
                        />
                        <span className="text-sm font-medium">
                          {vehicle.rating}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {vehicle.model}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
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
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <div>
                          <span className="text-xl font-bold text-gray-900">
                            Rs. {vehicle.price}
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
          </div>
        </div>

        {/* DESKTOP VIEW - 3 Column Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/vehicle/${vehicle.id}`} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={vehicle.image}
                      alt={vehicle.model}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow-md flex items-center gap-1">
                      <Star
                        className="text-yellow-400"
                        size={14}
                        fill="currentColor"
                      />
                      <span className="text-sm font-medium">
                        {vehicle.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {vehicle.model}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
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
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <div>
                        <span className="text-xl font-bold text-gray-900">
                          Rs. {vehicle.price}
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
        </div>

        {/* Desktop See All Vehicles Button */}
        <div className="hidden lg:flex justify-center mt-8">
          <Link to="/vehicles">
            <Button
              variant="outline"
              className="rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 font-medium flex items-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              See All Vehicles
            </Button>
          </Link>
        </div>

        {/* Footer Actions - Mobile */}
        <div className="flex items-center justify-between mt-6 lg:hidden">
          {/* Left Button */}
          <Link to="/vehicles">
            <Button
              variant="outline"
              className="rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 font-medium flex items-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              See All Vehicles
            </Button>
          </Link>
          {/* Right Arrows */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full border-2 border-gray-300 hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full border-2 border-gray-300 hover:bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentVehicleSection;
