import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Books", href: "#books" },
    { label: "Reading Order", href: "#reading-order" },
    { label: "Newsletter", href: "#newsletter" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full h-20 bg-[#f9f5f0] fixed top-0 left-0 z-50 font-serif">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl text-[#1a1a1a]">
          Your Name
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-[#1a1a1a] hover:text-[#666] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#1a1a1a]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#f9f5f0] border-t border-[#1a1a1a]/10">
          <div className="container mx-auto px-4 py-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="block py-3 text-[#1a1a1a] hover:text-[#666] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
