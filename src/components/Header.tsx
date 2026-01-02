import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isBusiness = location.pathname === "/business";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">
            Dogza
            {isBusiness && <span className="text-primary ml-1">Business</span>}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Главная
          </Link>
          <Link 
            to="/business" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/business" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Для бизнеса
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Войти
          </Button>
          <Button size="sm">
            Скачать
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-sm font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/business" 
              className="text-sm font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Для бизнеса
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" size="sm">
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
