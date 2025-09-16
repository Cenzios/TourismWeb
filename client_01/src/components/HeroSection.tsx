import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    "https://cdn.shopify.com/s/files/1/0026/2894/3925/t/20/assets/pf-96a910ba--surfingsrilanka1.jpg?v=1622922626", 
    "https://www.shenaliwaduge.com/wp-content/uploads/2021/11/tiger-srilanka-holidays-tours-2.jpg",
    "https://live.staticflickr.com/2185/32749733106_b1d9c24d3f_b.jpg",
    "https://wallpaperaccess.com/full/3558943.jpg",
    "https://www.lovidhu.com/uploads/posts-seo/2021/02/ambuluwawa-tower-gampola-kandy-sri-lanka.jpg"
  ];

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-[60vh] md:h-hero flex items-center justify-center overflow-hidden">
      {/* Background Image Switcher */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 hero-overlay"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-background px-4 max-w-4xl mx-auto">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 50,
          }}
          className="text-5xl md:text-7xl font-bold max-md:mt-16 mb-8 drop-shadow-lg"
        >
          Travel memories
          <br />
          you'll never forget
        </motion.h1>

        {/* Primary CTA */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            type: "spring",
          }}
          className="mb-12"
        >
          <Link to="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="hero" size="lg" className="text-lg">
                <Phone size={20} /> Call Us Now
              </Button>
            </motion.div>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
