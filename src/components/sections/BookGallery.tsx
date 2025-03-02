import React from "react";
import BookCard from "../BookCard";
import { Button } from "../ui/button";

interface Book {
  id: string;
  coverImage: string;
  title: string;
  description: string;
  purchaseLink: string;
}

interface BookGalleryProps {
  title?: string;
  description?: string;
  books?: Book[];
  viewAllLink?: string;
}

const BookGallery = ({
  title = "Books by Jessie Walker",
  description = "Explore the captivating worlds created by award-winning author Jessie Walker. From thrilling mysteries to heartwarming romances, there's something for every reader.",
  books = [
    {
      id: "1",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
      title: "The Silent Echo",
      description:
        "A gripping tale of mystery and intrigue set in a small coastal town where secrets lurk beneath the surface.",
      purchaseLink: "#",
    },
    {
      id: "2",
      coverImage:
        "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1000&auto=format&fit=crop",
      title: "Midnight Whispers",
      description:
        "When darkness falls, the whispers begin. A haunting story of supernatural encounters and ancient family curses.",
      purchaseLink: "#",
    },
    {
      id: "3",
      coverImage:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop",
      title: "The Last Letter",
      description:
        "A poignant romance spanning decades, told through letters that were never meant to be found.",
      purchaseLink: "#",
    },
    {
      id: "4",
      coverImage:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000&auto=format&fit=crop",
      title: "Beyond the Horizon",
      description:
        "An epic adventure across uncharted territories, following a young explorer's quest for a legendary artifact.",
      purchaseLink: "#",
    },
  ],
  viewAllLink = "#",
}: BookGalleryProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {books.map((book) => (
            <BookCard
              key={book.id}
              coverImage={book.coverImage}
              title={book.title}
              description={book.description}
              purchaseLink={book.purchaseLink}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="font-serif border-gray-300 hover:bg-gray-100"
            onClick={() => (window.location.href = viewAllLink)}
          >
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookGallery;
