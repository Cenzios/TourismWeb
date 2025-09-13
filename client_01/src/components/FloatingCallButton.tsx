import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    // Replace with your actual phone number
    window.open("tel:+1234567890", "_self");
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Expanded Info Card */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-border p-4 min-w-64"
                >
                  <div className="text-center">
                    <h3 className="font-bold text-foreground mb-2">
                      Need Immediate Help?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Talk to our travel experts now
                    </p>
                    <div className="space-y-2">
                      <Button
                        onClick={handleCall}
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        size="sm"
                      >
                        <Phone size={16} className="mr-2" />
                        Call Now: +123-456-7890
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>

                  {/* Arrow pointing to button */}
                  <div className="absolute top-full right-6 -mt-1">
                    <div className="w-3 h-3 bg-white border-r border-b border-border transform rotate-45"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                onClick={toggleExpanded}
                className="w-14 h-14 p-0 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm"
                size="lg"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {isExpanded ? <X size={24} /> : <Phone size={24} />}
                </motion.div>
              </Button>

              {/* Pulsing ring animation */}
              {!isExpanded && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCallButton;
