import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Desktop background images
  const desktopImages = [
    "https://images.pexels.com/photos/1998436/pexels-photo-1998436.jpeg",
    "https://images.pexels.com/photos/320003/pexels-photo-320003.jpeg",
    "https://images.pexels.com/photos/11981621/pexels-photo-11981621.jpeg",
    "https://wallpapercat.com/w/full/7/8/8/639817-3072x2051-desktop-hd-sri-lanka-background.jpg",
    "https://images.pexels.com/photos/30379319/pexels-photo-30379319.jpeg",
  ];

  // Mobile background images (portrait/vertical)
  const mobileImages = [
    "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg",
    "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg",
    "https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg",
    "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
    "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
  ];

  const travelQuotes = [
    "Travel is the only thing you buy that makes you richer.",
    "Jobs fill your pockets, but adventures fill your soul.",
    "Take only memories, leave only footprints.",
    "To travel is to live.",
    "Adventure awaits — let's explore together.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % desktopImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [desktopImages.length]);

  const features = [
    {
      image: "/checkList.png",
      text: "Tailor Made Custom Tours",
    },
    {
      image: "/vacation.png",
      text: "Stunning Attractions",
    },
    {
      image: "/airplane.png",
      text: "Airport Pickup and Drop off",
    },
    {
      image: "/fleet.png",
      text: "Any Vehicle Type",
    },
  ];

  // Handle scroll for mobile feature boxes
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const boxWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / boxWidth);
      setCurrentFeatureIndex(newIndex);
    }
  };

  return (
    <section className="relative h-[75vh] md:h-[100vh] flex flex-col justify-between overflow-hidden text-white">
      {/* Desktop Background Image Switcher */}
      <div className="absolute inset-0 hidden md:block">
        {desktopImages.map((image, index) => (
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

      {/* Mobile Background Image Switcher */}
      <div className="absolute inset-0 md:hidden">
        {mobileImages.map((image, index) => (
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

      {/* Header and Quote - Mobile Optimized with Reduced Spacing */}
      <div className="relative z-10 flex flex-col justify-center flex-1 w-full px-6 sm:px-8 md:px-12 lg:px-24 pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto w-full text-center md:text-left">
          <h1 className="text-[42px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-tight mb-2 sm:mb-3 md:mb-6 text-white drop-shadow-2xl">
            The Next Is Your
            <br className="md:hidden" /> Best Travel
          </h1>

          <motion.p
            key={`quote-${currentImageIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[14px] sm:text-[16px] md:text-[18px] italic text-gray-100 leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-lg"
          >
            {travelQuotes[currentImageIndex]}
          </motion.p>
        </div>
      </div>

      {/* Desktop Feature Boxes */}
      <div className="relative z-10 hidden md:flex justify-center mb-6 sm:mb-10 px-3 sm:px-6 md:px-8 lg:px-12">
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
                <p className="text-[12px] sm:text-[13px] md:text-[18px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Swipable Feature Boxes - One Box at a Time */}
      <div className="relative z-10 md:hidden mb-6 px-4">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="w-full flex-shrink-0 px-2 snap-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            >
              <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-5 text-center shadow-lg">
                <div className="flex flex-col items-center text-white">
                  <img
                    src={item.image}
                    alt="feature icon"
                    className="w-12 h-12 mb-3 object-contain filter invert brightness-0 contrast-100"
                  />
                  <p className="text-[14px] leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const boxWidth = scrollContainerRef.current.offsetWidth;
                  scrollContainerRef.current.scrollTo({
                    left: boxWidth * index,
                    behavior: "smooth",
                  });
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                currentFeatureIndex === index
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50"
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
