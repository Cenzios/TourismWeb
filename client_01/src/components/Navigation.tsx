import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useLocation();

  const navItems = [
    { label: "ATTRACTIONS", href: "/attractions" },
    { label: "TOUR PLANS", href: "/tours" },
    { label: "RENT VEHICLE", href: "/vehicles" },
  ];

  // get scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollPosition > 100;

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${
        pathname.pathname === "/"
          ? isScrolled
            ? "bg-background sticky"
            : "bg-transparent fixed text-background border-none"
          : "bg-background sticky"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-nav">
          {/* Logo */}
          <Link to="/">
            <div className="text-2xl font-bold tracking-wider">
              <span>TRAVORA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ) : (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </div>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/attractions">
              <Button
                variant="link"
                size="sm"
                className={`${
                  pathname.pathname === "/"
                    ? isScrolled
                      ? "text-primary"
                      : "text-primary-foreground"
                    : "text-primary"
                }`}
              >
                Explore
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border overflow-hidden">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                ) : (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </div>
                )
              )}
              <div>
                <Link to="/attractions">
                  <Button
                    variant="link"
                    size="sm"
                    className={`${
                      pathname.pathname === "/"
                        ? isScrolled
                          ? "text-primary"
                          : "text-primary-foreground"
                        : "text-primary"
                    }`}
                  >
                    Explore
                    <ArrowRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
