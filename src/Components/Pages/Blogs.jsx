import React, { useState, useEffect } from 'react';
import { Calendar, X, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assets
import b1 from '../../assets/b1.webp';
import b2 from '../../assets/b2.webp';
import b3 from '../../assets/b3.webp';
import b4 from '../../assets/b4.webp';
import b5 from '../../assets/b5.webp';
import b6 from '../../assets/b6.webp';
import b7 from '../../assets/b7.webp';
import b8 from '../../assets/b8.webp';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const imageUrl =
    "https://blossomsflorals.com/cdn/shop/files/IMG_3933_copy.heic?v=1768501868&width=1920";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const blogData = [
    {
      id: 1,
      image: b1,
      date: "Mar 03 2026",
      category: "Ramadan Special",
      title: "Ramadan Gift Delivery in Bahawalpur: Thoughtful Floral & Iftar Surprises",
      excerpt: "Ramadan is not just a month — it is a feeling...",
      content: "Sharing blessings in Ramadan is a beautiful tradition in Bahawalpur..."
    },
    {
      id: 2,
      image: b2,
      date: "Feb 14 2026",
      category: "Gifting Guide",
      title: "The Art of Choosing the Perfect Anniversary Bouquet",
      excerpt: "Every year of marriage tells a story...",
      content: "For anniversaries, we recommend deep red roses..."
    },
    {
      id: 3,
      image: b3,
      date: "Jan 20 2026",
      category: "Lifestyle",
      title: "Why Fresh Flowers Are the Best Way to Brighten Your Workspace",
      excerpt: "Adding a touch of nature improves productivity...",
      content: "Studies show office workers feel more relaxed..."
    },
    {
      id: 4,
      image: b4,
      date: "Mar 10 2026",
      category: "Floral Trends",
      title: "Pastel Perfection: Soft Hues Trending in 2026",
      excerpt: "Soft tones are dominating floral design...",
      content: "Pastel arrangements bring elegance and calm..."
    },
    {
      id: 5,
      image: b5,
      date: "Feb 28 2026",
      category: "Chocolate Boxes",
      title: "Luxury Chocolate Pairings with Flowers",
      excerpt: "Bouquets feel more special with chocolates...",
      content: "We combine premium chocolates with roses..."
    },
    {
      id: 6,
      image: b6,
      date: "Jan 10 2026",
      category: "Decor Tips",
      title: "Minimalist Flower Styling for Homes",
      excerpt: "Less is more in modern floral decor...",
      content: "A single stem can transform a space..."
    },
    {
      id: 7,
      image: b7,
      date: "Mar 15 2026",
      category: "Custom Gifts",
      title: "Personalized Flower Boxes for Every Occasion",
      excerpt: "Make your gift more meaningful...",
      content: "We offer custom engraved flower boxes..."
    },
    {
      id: 8,
      image: b8,
      date: "Feb 05 2026",
      category: "Care Guide",
      title: "How to Make Flowers Last Longer",
      excerpt: "Simple tricks to extend flower life...",
      content: "Cut stems, change water regularly..."
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          minHeight: '85vh',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="relative z-10 text-center py-16 max-w-7xl mx-auto px-4 sm:px-5 flex flex-col items-center">
          
          <div data-aos="fade-up" className="flex items-center gap-2 mb-6">
            <div className="h-px w-10 bg-pink-400"></div>
            <span className="text-pink-400 uppercase tracking-[0.3em] text-xs font-bold">
              Our Blogs
            </span>
            <div className="h-px w-10 bg-pink-400"></div>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-serif font-semibold text-white leading-tight mb-4"
          >
            Floral <span className="text-pink-400">Stories</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-pink-100 mb-10 max-w-3xl leading-relaxed"
          >
            Discover gifting ideas, floral trends, and stories that inspire every occasion.
          </p>

          <button
            data-aos="zoom-in"
            data-aos-delay="500"
            className="bg-pink-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-900 cursor-pointer"
          >
            Explore Blogs
          </button>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-10 relative">

        <div
          className={`max-w-7xl mx-auto px-4 sm:px-5 transition-all duration-500 ${
            selectedBlog ? 'blur-md scale-[0.98] pointer-events-none' : ''
          }`}
        >
          {/* HEADER */}
          <div className="mb-6 pb-4">
            <h2 className="text-4xl font-serif font-bold text-gray-900 text-center">
              Our Latest Blogs
            </h2>
<div className="w-24 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* IMAGE */}
                <div
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <span className="absolute top-4 left-4 bg-pink-600 text-white text-[10px] px-3 py-1 rounded-md font-bold uppercase">
                    {blog.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar size={14} className="text-pink-400" />
                    {blog.date}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="mt-6 w-full flex items-center justify-center gap-1 text-sm font-bold cursor-pointer bg-pink-600 hover:bg-gray-900 text-white p-3 rounded-md"
                  >
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {selectedBlog && (
         <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
  <div
    className="absolute inset-0 bg-black/60"
    onClick={() => setSelectedBlog(null)}
  />

  <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-md shadow-2xl flex flex-col md:flex-row">

    {/* Close Button */}
    <button
      onClick={() => setSelectedBlog(null)}
      className="absolute top-3 right-3 md:top-5 md:right-5 bg-white p-2 rounded-md shadow hover:bg-pink-600 hover:text-white z-10 cursor-pointer"
    >
      <X size={20} />
    </button>

    {/* Image */}
    <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-auto">
      <img
        src={selectedBlog.image}
        className="w-full h-full object-cover"
        alt="blog"
      />
    </div>

    {/* Content */}
    <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 space-y-4 md:space-y-5">

      <p className="text-pink-600 text-xs font-bold uppercase">
        {selectedBlog.category} • {selectedBlog.date}
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
        {selectedBlog.title}
      </h2>

      <div className="w-14 sm:w-16 h-1 bg-pink-500 rounded-full"></div>

      <p className="text-gray-600 italic text-sm sm:text-base">
        "{selectedBlog.excerpt}"
      </p>

      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
        {selectedBlog.content}
      </p>

      <button
        onClick={() => setSelectedBlog(null)}
        className="w-full sm:w-auto bg-pink-600 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-gray-900 transition cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
</div>
        )}
      </section>
    </>
  );
};

export default Blogs;