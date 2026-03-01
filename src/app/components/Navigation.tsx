import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import logo from "../../assets/logo/zentiqtech-logo.jpg";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-2xl font-semibold tracking-tight hover:text-primary transition-colors"
          >
            <img
              src={logo}
              alt="ZentiqTech logo"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span>ZentiqTech</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
