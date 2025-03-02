import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  authorImage?: string;
  authorName?: string;
  tagline?: string;
  latestBookCover?: string;
  latestBookTitle?: string;
  latestBookDescription?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  authorImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  authorName = "Jessie Walker",
  tagline = "Award-winning author of contemporary fiction that explores the depths of human connection",
  latestBookCover = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
  latestBookTitle = "The Silent Echo",
  latestBookDescription = "A gripping tale of mystery and intrigue set in a small coastal town where secrets lurk beneath the surface.",
  ctaText = "Discover the Book",
  ctaLink = "#books",
}: HeroSectionProps) => {
  return (
    <section className="w-full h-[600px] bg-gray-50 flex items-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/90 to-gray-100/60 z-10"></div>

      {/* Background image (subtle texture) */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?q=80&w=1000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Author info section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
              {authorName}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl font-serif italic">
              {tagline}
            </p>
            <Button
              className="font-serif text-base px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white"
              onClick={() => {
                const element = document.querySelector(ctaLink);
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Latest book feature */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Book cover with shadow and hover effect */}
              <div className="relative transform transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
                <img
                  src={latestBookCover}
                  alt={`Cover of ${latestBookTitle}`}
                  className="w-64 h-auto rounded-md shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded shadow-lg max-w-[250px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-serif font-semibold mb-1">
                    {latestBookTitle}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {latestBookDescription}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gray-400 opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gray-400 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
