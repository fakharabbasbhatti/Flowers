import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroAbout = () => {
  const imageUrl =
    "https://blossomsflorals.com/cdn/shop/files/IMG_3933_copy.heic?v=1768501868&width=1920";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        minHeight: '85vh',
      }}
    >
      {/* Gradient Overlay (same as first) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center py-16 max-w-7xl mx-auto px-4 sm:px-5 flex flex-col items-center">
        
        {/* Small Badge */}
        <div
          data-aos="fade-up"
          className="flex items-center gap-2 mb-6"
        >
          <div className="h-px w-10 bg-pink-400"></div>
          <span className="text-pink-400 uppercase tracking-[0.3em] text-xs font-bold">
            About Us
          </span>
          <div className="h-px w-10 bg-pink-400"></div>
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-5xl md:text-7xl  font-serif font-semibold text-white leading-tight mb-4"
        >
          Flora<span className="text-pink-400"> Haven</span>
        </h1>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg md:text-xl text-pink-100 mb-10 max-w-3xl leading-relaxed"
        >
          We don’t just sell flowers — we design emotions, craft memories,
          and deliver elegance in every bouquet. From everyday beauty to
          life’s biggest celebrations, Flora Bloom is your story in bloom.
        </p>

        {/* Button (added like first) */}
        <button
          data-aos="zoom-in"
          data-aos-delay="500"
          className="bg-pink-600 text-white px-8 py-3 rounded-md font-semibold
          hover:bg-gray-900 cursor-pointer"
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default HeroAbout;