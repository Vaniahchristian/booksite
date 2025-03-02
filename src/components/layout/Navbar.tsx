import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "BOOKS", href: "/books", hasSubmenu: true },
    { label: "SHOP", href: "/shop", hasSubmenu: true },
    { label: "EVENTS", href: "/events" },
    { label: "PATREON", href: "/patreon" },
    { label: "EXTRA", href: "/extra", hasSubmenu: true },
    { label: "CONTACT", href: "/contact" },
    { label: "NEWSLETTER", href: "/newsletter" },
  ];

  return (
    <nav className="w-full h-16 bg-black/95 backdrop-blur-sm fixed top-0 left-0 z-50 font-sans border-b border-gray-800">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-white/90 hover:text-white transition-colors text-xs tracking-widest"
            >
              {link.label}
              {link.hasSubmenu && (
                <span className="ml-1 inline-block transform rotate-90">›</span>
              )}
            </Link>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white/90 hover:text-white">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/90 hover:text-white">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/90 hover:text-white">
            <User className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <Button
            variant="ghost"
            size="icon"
            className="text-white/90 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white/90 hover:text-white">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/90 hover:text-white">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/90 hover:text-white">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="block py-3 text-white/90 hover:text-white transition-colors text-xs tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {link.hasSubmenu && (
                  <span className="ml-1 inline-block transform rotate-90">›</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
