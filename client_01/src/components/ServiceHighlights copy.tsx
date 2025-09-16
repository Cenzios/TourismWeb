import { Card, CardContent } from "./ui/card";
import { MapPin, Calendar, Car, Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const ServiceHighlights = () => {
  const navigate = useNavigate();

  // Animation variants for staggered animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  };

  const services = [
    {
      id: 1,
      title: "Attractions Explore",
      description:
        "Discover amazing destinations and hidden gems across Malaysia",
      icon: MapPin,
      image:
        "https://blog.surabilankatravel.com/wp-content/uploads/2023/04/Untitled-design-4.jpg",
      color: "from-blue-500 to-cyan-500",
      route: "/attractions",
    },
    {
      id: 2,
      title: "Tour Plans",
      description: "Customized tour packages for unforgettable experiences",
      icon: Calendar,
      image:
        "https://nzcareerexplorer.com/wp-content/uploads/2024/02/Health-Safety-for-NZ-Tour-Guides-.jpeg",
      color: "from-green-500 to-emerald-500",
      route: "/tours",
    },
    {
      id: 3,
      title: "Vehicle Rent",
      description: "Comfortable and reliable vehicles for your journey",
      icon: Car,
      image:
        "https://bokeradventure.com/wp-content/uploads/2021/10/Safari-4.webp",
      color: "from-orange-500 to-red-500",
      route: "/vehicles",
    },
    {
      id: 4,
      title: "Airport Transfers",
      description: "Hassle-free airport pickup and drop-off services",
      icon: Plane,
      image:
        "https://res.cloudinary.com/dtljonz0f/image/upload/c_limit,w_1920/f_auto/q_auto/singapore_changi_airport_transfer_zggt3m?_a=BAVARSDW0",
      color: "from-purple-500 to-pink-500",
      route: "/contact",
    },
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={headerVariants}>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={headerVariants}
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={headerVariants}
          >
            Experience Srilanka like never before with our comprehensive travel
            services
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: [0.6, -0.05, 0.01, 0.99] as any,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 relative aspect-square md:h-72 cursor-pointer"
                  onClick={() => handleServiceClick(service.route)}
                >
                  <CardContent className="p-0 h-full relative">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    />

                    {/* Bottom to Top Gradient Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Icon */}
                    <motion.div
                      className="absolute top-4 right-4 z-10"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.5 + service.id * 0.1,
                        duration: 0.4,
                        ease: [0.175, 0.885, 0.32, 1.275] as any,
                      }}
                    >
                      <motion.div
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full shadow-lg"
                        whileHover={{
                          scale: 1.2,
                          rotate: 15,
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Content Overlay */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.7 + service.id * 0.1,
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.99] as any,
                      }}
                    >
                      <motion.h3
                        className="text-lg md:text-xl font-bold text-white mb-2 leading-tight"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        className="text-white/90 text-xs md:text-sm leading-relaxed hidden md:block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.9 + service.id * 0.1,
                          duration: 0.4,
                        }}
                      >
                        {service.description}
                      </motion.p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceHighlights;