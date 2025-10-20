import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.pexels.com/photos/1998436/pexels-photo-1998436.jpeg",
    "https://images.pexels.com/photos/320003/pexels-photo-320003.jpeg",
    "https://images.pexels.com/photos/11981621/pexels-photo-11981621.jpeg",
    "https://wallpapercat.com/w/full/7/8/8/639817-3072x2051-desktop-hd-sri-lanka-background.jpg",
    "https://images.pexels.com/photos/30379319/pexels-photo-30379319.jpeg",
  ];

  const travelQuotes = [
    "“Travel is the only thing you buy that makes you richer.”",
    "“Jobs fill your pockets, but adventures fill your soul.”",
    "“Take only memories, leave only footprints.”",
    "“To travel is to live.”",
    "“Adventure awaits — let’s explore together.”",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const features = [
    {
      image: "/checkList.png",
      text: "Discover expertly crafted tour packages for every traveller, from cultural and wildlife adventures to romantic getaways, offering personalized itineraries and unforgettable Sri Lankan experiences.",
    },
    {
      image: "/vacation.png",
      text: "Discover Sri Lanka’s stunning temples, beaches, tea plantations, and UNESCO sites with expert guides who reveal the island’s hidden gems and rich heritage.",
    },
    {
      image: "/airplane.png",
      text: "Enjoy seamless airport transfers in Sri Lanka with meet-and-greet service, comfortable vehicles, and professional drivers for a stress-free journey.",
    },
    {
      image: "/fleet.png",
      text: "Choose from our modern fleet of luxury sedans, SUVs, vans, and 4WDs. All with professional drivers, full insurance, and 24/7 support for safe, comfortable travel across Sri Lanka.",
    },
  ];

  return (
    <section className="relative h-[100vh] flex flex-col justify-between overflow-hidden text-white">
      {/* Background Image Switcher */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Header Section (responsive alignment) */}
      <div className="relative z-10 flex flex-col justify-center h-full w-full px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full text-center md:text-left">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight mb-4 md:mb-6 text-white drop-shadow-lg">
            The Next Is Your Best Travel
          </h1>

          <motion.p
            key={`quote-${currentImageIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[14px] sm:text-[16px] md:text-[18px] italic text-gray-200"
          >
            {travelQuotes[currentImageIndex]}
          </motion.p>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="relative z-10 w-full flex justify-center mb-6 sm:mb-10 px-3 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl w-full">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 sm:p-5 text-center shadow-xl hover:bg-white/25 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-white">
                <img
                  src={item.image}
                  alt="feature icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 mb-3 object-contain filter invert brightness-0 contrast-100"
                />
                <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
