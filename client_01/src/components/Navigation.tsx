import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useLocation();

  const navItems = [
    { label: "ATTRACTIONS", href: "/attractions" },
    { label: "TOUR PLANS", href: "/tours" },
    { label: "GALLERY", href: "/gallery" },
    { label: "CONTACT US", href: "/contact" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollPosition > 100;

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        pathname.pathname === "/" && !isScrolled
          ? "bg-black/30 backdrop-blur-md"
          : "bg-black/70 backdrop-blur-lg shadow-lg"
      } rounded-full px-10 py-3 w-[95%] md:w-[85%] max-w-7xl`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-extrabold text-lg tracking-wide"
        >
          TRAVORA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-semibold text-white hover:text-gray-200 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <Link to="/book">
            <Button className="rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black px-6 py-2 text-sm font-medium transition-colors">
              Book now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black/90 rounded-2xl backdrop-blur-md py-4">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setIsMenuOpen(false)}>
              <Button className="rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black px-6 py-2 text-sm font-medium transition-colors">
                Book now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
