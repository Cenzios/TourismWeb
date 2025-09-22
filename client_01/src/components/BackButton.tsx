import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BackButtonProps {
  to: string;
  text: string;
}

const BackButton = ({ to, text }: BackButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Handle scroll visibility
    const handleScroll = () => {
      if (isMobile) {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        // Show button after scrolling down 200px
        setIsVisible(scrollTop > 200);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Don't render on desktop
  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link
              to={to}
              className="inline-flex items-center bg-background/90 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xs"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              {text}
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BackButton;
