import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import poaiLogo from "@/assets/poai-logo-new.png";

interface NavbarProps {
  onRegisterClick: () => void;
}

const Navbar = ({ onRegisterClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img src={poaiLogo} alt="Poai Logo" className="h-12" />
          </div>
          <Button
            onClick={onRegisterClick}
            size="lg"
            className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all h-10"
          >
            Register Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
