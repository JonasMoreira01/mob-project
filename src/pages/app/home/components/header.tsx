import { LogoIcon } from "@/components/LogoIcon";
import { User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#", label: "Home", isActive: true },
  { href: "#", label: "Cursos" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-screen top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
      {/* AJUSTE PRINCIPAL: 
        1. Adicionamos a classe "relative" aqui.
        2. Movemos o menu mobile para dentro deste container.
      */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <LogoIcon />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-white hover:text-pink-300 transition-colors relative py-2">
                {link.label}
                {link.isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 rounded-full"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Login */}
          <div className="hidden md:flex">
            <a href="#" className="flex items-center space-x-2 text-white hover:text-pink-300 transition-colors">
              <User className="h-5 w-5" />
              <span>Login</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-pink-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* O menu mobile agora está AQUI DENTRO.
          Seu "left-0" e "right-0" vão respeitar os limites do pai (o container max-w-7xl).
        */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-blue-900 shadow-lg transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={toggleMenu} className="block px-3 py-2 text-white hover:text-pink-300 hover:bg-blue-800 rounded-md transition-colors relative">
                {link.label}
                {link.isActive && (
                  <span className="absolute left-3 bottom-1 w-8 h-0.5 bg-pink-400 rounded-full"></span>
                )}
              </a>
            ))}
            <div className="border-t border-blue-800 my-2"></div>
            <a href="#" onClick={toggleMenu} className="flex items-center px-3 py-2 text-white hover:text-pink-300 hover:bg-blue-800 rounded-md transition-colors">
              <User className="h-5 w-5 mr-2" />
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}