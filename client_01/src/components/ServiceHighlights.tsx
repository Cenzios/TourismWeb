import { useState, useEffect } from "react";
import { Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ServiceHighlights = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image array for auto-switching gallery
  const galleryImages = [
    {
      src: "https://happygringo.com/wp-content/uploads/2020/02/bn-happy-clients-slider.jpg",
      alt: "Parasailing over tropical waters with city skyline",
      location: "Tropical Adventure",
    },
    {
      src: "https://travelprofessionalnews.com/wp-content/uploads/2019/09/Oasis-Travel-Network-Feature-for-Travel-Agents.jpg",
      alt: "Beautiful beach with crystal clear water",
      location: "Beach Paradise",
    },
    {
      src: "https://heymondo.com/blog/wp-content/uploads/2021/03/shutterstock_757552030_compressed.jpg",
      alt: "Traditional boat on serene river",
      location: "Cultural Journey",
    },
    {
      src: "https://blog.vincentvacations.com/wp-content/uploads/2023/11/get-more-clients-768x576.jpg",
      alt: "Ancient temple architecture",
      location: "Heritage Sites",
    },
  ];

  // Auto-cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % galleryImages.length
      );
    }, 4000); // Switch image every 4 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content - Award/Achievement Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Award Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Trophy size={16} className="text-slate-900" />
              </div>
              <span className="text-white font-semibold text-sm">2025</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Travellers'
              <br />
              <span className="text-yellow-400">Choice</span>
              <br />
              Best Client Support
              <br />
              in Sri Lanka
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are proud to have a strong relationship with our clients and we
              are committed to providing the best service to our clients.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90 font-semibold px-8 py-3 text-lg rounded-full"
              >
                See Our Clients
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Services Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Hero Image - Auto-Switching Gallery */}
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              {/* Auto-switching Images - No Animation */}
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />

              {/* Image Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold drop-shadow-lg">
                  {galleryImages[currentImageIndex].location}
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md">
                  {galleryImages[currentImageIndex].alt}
                </p>
              </div>

              {/* Gallery Indicators */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white scale-125 shadow-lg"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-white/80 w-full"></div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-slate-900">4.9</div>
                  <div className="text-xs text-slate-600">50k+ reviews</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
