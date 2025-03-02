import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Facebook, Twitter, Instagram, Mail, Heart } from "lucide-react";

interface FooterProps {
  copyrightText?: string;
  socialLinks?: {
    platform: "facebook" | "twitter" | "instagram" | "email";
    url: string;
  }[];
  navigationLinks?: {
    label: string;
    url: string;
  }[];
}

const Footer = ({
  copyrightText = "© 2023 Jessie Walker. All rights reserved.",
  socialLinks = [
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "email", url: "mailto:contact@jessiewalker.com" },
  ],
  navigationLinks = [
    { label: "Home", url: "/" },
    { label: "Books", url: "/#books" },
    { label: "About", url: "/#about" },
    { label: "Contact", url: "/#contact" },
    { label: "Privacy Policy", url: "/privacy" },
  ],
}: FooterProps) => {
  // Map social media platforms to their respective icons
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "instagram":
        return <Instagram size={18} />;
      case "email":
        return <Mail size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo or brand name */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-serif font-semibold">Jessie Walker</h3>
          </div>

          {/* Social media links */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={`Follow on ${link.platform}`}
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Secondary navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-serif"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright and attribution */}
        <div className="text-center text-sm text-gray-500">
          <p>{copyrightText}</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for
            readers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
