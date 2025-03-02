import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface AboutSectionProps {
  authorName?: string;
  authorImage?: string;
  biography?: string;
  achievements?: string[];
  ctaText?: string;
  ctaLink?: string;
}

const AboutSection = ({
  authorName = "Jessie Walker",
  authorImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  biography = "Jessie Walker is an award-winning author known for crafting immersive literary worlds that blend mystery with profound human emotion. With over a decade of writing experience, her novels have captivated readers across the globe and earned critical acclaim for their rich character development and atmospheric storytelling.",
  achievements = [
    "New York Times Bestselling Author",
    "Winner of the National Book Award for Fiction",
    "Published in over 30 countries and 25 languages",
    "Former Writer-in-Residence at Oxford University",
  ],
  ctaText = "Read Full Biography",
  ctaLink = "#",
}: AboutSectionProps) => {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          About the Author
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif font-semibold mb-6">
              {authorName}
            </h3>

            <p className="text-gray-700 mb-8 leading-relaxed">{biography}</p>

            <Separator className="my-8" />

            <div className="mb-8">
              <h4 className="text-lg font-serif font-medium mb-4">
                Achievements & Recognition
              </h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              className="font-serif border-gray-300 hover:bg-gray-100"
              onClick={() => window.open(ctaLink, "_blank")}
            >
              {ctaText}
            </Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <img
                src={authorImage}
                alt={authorName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
