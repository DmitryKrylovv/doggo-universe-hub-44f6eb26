import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const isBusiness = location.pathname === "/business";
  const isAdoption = location.pathname === "/adoption";
  const isUsers = location.pathname === "/users";
  const isPartners = location.pathname === "/partners";
  const isDarkHero = isBusiness || isAdoption || isUsers || isPartners;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = scrolled 
    ? "bg-background/80 backdrop-blur-xl shadow-sm" 
    : isDarkHero 
      ? "bg-transparent" 
      : "bg-transparent";

  const textColor = scrolled || !isDarkHero ? "text-foreground" : "text-white";
  const mutedColor = scrolled || !isDarkHero ? "text-muted-foreground" : "text-white/70";

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/users", label: "Пользователям" },
    { to: "/business", label: "Для бизнеса" },
    { to: "/adoption", label: "Для приютов" },
    { to: "/partners", label: "Партнёрам" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={`text-xl font-bold tracking-tight ${textColor}`}>
            Dogza
            {isBusiness && <span className="text-primary ml-1">Business</span>}
            {isAdoption && <span className="text-primary ml-1">Adoption</span>}
            {isPartners && <span className="text-primary ml-1">Partners</span>}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-200 ${
                location.pathname === link.to 
                  ? "text-primary bg-primary/10" 
                  : `${mutedColor} hover:text-foreground hover:bg-foreground/5`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className={!scrolled && isDarkHero ? "text-white hover:bg-white/10" : ""}
          >
            Войти
          </Button>
          <Button size="sm">
            Скачать
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors ${textColor} hover:bg-foreground/5`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium py-3 px-4 rounded-xl transition-colors ${
                  location.pathname === link.to 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:bg-foreground/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-border">
              <Button variant="ghost" size="sm">
                Войти
              </Button>
              <Button size="sm">
                Скачать
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
