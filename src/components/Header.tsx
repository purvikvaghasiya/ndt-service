import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/#courses" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.includes("#")) {
      const [basePath, hash] = path.split("#");
      if (location.pathname === basePath || basePath === "/") {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="NDT Training Institute"
              className="h-10 lg:h-12 w-auto"
            />
            <div className="">
              <span className="font-display font-bold text-primary text-sm md:text-lg">
                Api cswip bgas ndt service
              </span>
              <span className="block text-xs text-muted-foreground -mt-1">
                Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`font-medium text-sm transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90 hover:shadow-md"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-accent/10 text-accent"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 mx-4 bg-gradient-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold text-center transition-all hover:opacity-90"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
