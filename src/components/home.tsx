import Navbar from "./layout/Navbar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

function Home() {
  return (
    <div className="min-h-screen bg-[#f9f5f0] text-[#1a1a1a] font-serif">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 mt-20 text-center">
        <h1 className="text-6xl font-bold mb-6">Tendo Vanessa</h1>
        <p className="text-2xl italic mb-8">
          UG Today Bestselling Author of Fantasy Romance
        </p>
        <div className="flex justify-center space-x-6">
          <Button className="bg-[#1a1a1a] text-white hover:bg-[#333] text-lg px-8 py-6 rounded-none">
            Latest Release
          </Button>
          <Button variant="outline" className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-lg px-8 py-6 rounded-none">
            Reading Order
          </Button>
        </div>
      </section>

      {/* Store Notice */}
      <div className="bg-[#1a1a1a] text-white py-4 text-center text-lg">
        STORE CLOSED UNTIL MARCH 2025
      </div>

      {/* Featured Book Section */}
      <section id="books" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[2/3] bg-[#e5e5e5] rounded shadow-lg">
              {/* Book cover image placeholder */}
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl">Midnight's Embrace</h2>
              <p className="text-xl italic">The Moonlight Saga - Book One</p>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  In a world where magic and destiny intertwine, one woman's choice could change everything.
                  When twenty-three-year-old Emma discovers she's the last heir to an ancient magical bloodline,
                  she must choose between the life she's built and the destiny that awaits her.
                </p>
                <p>
                  But the mysterious and dangerous Adrian Cross has other plans, and time is running out.
                  As darkness gathers and ancient powers awaken, Emma must decide where her heart truly lies.
                </p>
              </div>
              <div className="space-y-4">
                <Button className="w-full bg-[#1a1a1a] text-white hover:bg-[#333] text-lg py-6 rounded-none">
                  Read Now
                </Button>
                <Button variant="outline" className="w-full border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-lg py-6 rounded-none">
                  Read Chapter One
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Series Section */}
      <section id="reading-order" className="bg-white py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-16">The Moonlight Saga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Midnight's Embrace",
                subtitle: "Book One",
                status: "Available Now"
              },
              {
                title: "Twilight's Promise",
                subtitle: "Book Two",
                status: "Coming Soon"
              },
              {
                title: "Dawn's Redemption",
                subtitle: "Book Three",
                status: "Coming 2025"
              }
            ].map((book, index) => (
              <Card key={index} className="border-none shadow-none bg-transparent text-center">
                <div className="aspect-[2/3] bg-[#e5e5e5] rounded shadow-lg mb-6">
                  {/* Book cover image placeholder */}
                </div>
                <h3 className="text-2xl mb-2">{book.title}</h3>
                <p className="text-lg italic mb-4">{book.subtitle}</p>
                <p className="text-sm text-[#666] mb-6">{book.status}</p>
                <Button variant="outline" className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white rounded-none">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-[#1a1a1a] text-white py-24 scroll-mt-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl mb-6">Join the Newsletter</h2>
          <p className="text-lg mb-8">
            Subscribe for exclusive content, early access to new releases, and special offers.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white text-black rounded-none"
            />
            <Button className="bg-white text-[#1a1a1a] hover:bg-gray-200 rounded-none px-8 whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl mb-8">About the Author</h2>
          <p className="text-lg leading-relaxed mb-6">
            Your Name is a USA Today Bestselling Author of fantasy romance novels that blend magic,
            passion, and adventure. With a love for crafting immersive worlds and unforgettable characters,
            she brings stories to life that capture readers' hearts and imaginations.
          </p>
          <p className="text-lg leading-relaxed">
            When not writing, she can be found reading, exploring nature, or dreaming up new magical realms.
            She lives in [Location] with her [family/pets] and an ever-growing collection of books.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24 scroll-mt-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl mb-8">Get in Touch</h2>
          <p className="text-lg mb-12">
            For business inquiries, please contact: <br />
            <a href="mailto:contact@yourname.com" className="text-[#1a1a1a] hover:text-[#666] underline">
              contact@yourname.com
            </a>
          </p>
          <div className="flex justify-center space-x-8">
            {["Facebook", "Instagram", "TikTok", "Amazon"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-[#1a1a1a] hover:text-[#666] transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm">
        <div className="container mx-auto px-4">
          <p> 2025 Your Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
