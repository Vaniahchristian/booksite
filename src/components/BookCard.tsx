import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface BookCardProps {
  coverImage?: string;
  title?: string;
  description?: string;
  purchaseLink?: string;
}

const BookCard = ({
  coverImage = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
  title = "The Silent Echo",
  description = "A gripping tale of mystery and intrigue set in a small coastal town where secrets lurk beneath the surface.",
  purchaseLink = "#",
}: BookCardProps) => {
  return (
    <Card className="w-full max-w-[320px] h-[500px] overflow-hidden flex flex-col bg-white">
      <CardHeader className="p-0 h-[250px] overflow-hidden">
        <img
          src={coverImage}
          alt={`Cover of ${title}`}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="outline"
          className="w-full border-gray-300 hover:bg-gray-100 hover:text-gray-900 font-serif"
          onClick={() => window.open(purchaseLink, "_blank")}
        >
          Purchase <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
