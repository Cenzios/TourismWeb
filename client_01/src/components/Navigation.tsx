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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isScrolled = scrollPosition > 100;

  return (
    <>
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
      </nav>

      {/* Background overlay when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-black to-gray-900 text-white transform transition-transform duration-500 ease-in-out z-[70] md:hidden shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-gray-700">
          <h2 className="text-xl font-bold tracking-wide">TRAVORA</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col mt-8 space-y-1 px-4">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium hover:bg-white/10 px-4 py-4 rounded-lg transition-all duration-200 transform ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-6">
            <Link to="/book" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full rounded-full bg-white text-black hover:bg-gray-200 font-semibold py-6 text-base transition-all duration-200 shadow-lg">
                Book now
              </Button>
            </Link>
          </div>
        </div>

        {/* Additional info at bottom */}
        <div className="absolute bottom-8 left-0 right-0 px-6 text-center">
          <p className="text-xs text-gray-400">Discover your next adventure</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
