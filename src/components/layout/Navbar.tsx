import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Book, User, Mail } from "lucide-react";

interface NavbarProps {
  logo?: string;
  links?: Array<{ label: string; href: string; icon?: React.ReactNode }>;
}

const Navbar = ({
  logo = "JW",
  links = [
    { label: "Home", href: "/", icon: <Home className="h-4 w-4 mr-1" /> },
    { label: "Books", href: "#books", icon: <Book className="h-4 w-4 mr-1" /> },
    { label: "About", href: "#about", icon: <User className="h-4 w-4 mr-1" /> },
    {
      label: "Contact",
      href: "#contact",
      icon: <Mail className="h-4 w-4 mr-1" />,
    },
  ],
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-20 bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl font-bold">
          {logo}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="font-serif text-gray-700 hover:text-gray-900 flex items-center"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md py-4 px-4">
          <div className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="font-serif text-gray-700 hover:text-gray-900 flex items-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Home icon component for the navbar
const Home = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export default Navbar;
