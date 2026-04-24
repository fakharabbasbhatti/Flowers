import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import Bouquets from '../../assets/Bouquets.webp';
import Flowers from '../Home/Flowers';
import ProductCarousel from '../Home/Product';
import Testimonials from '../Home/Reviews';

const heroImage = Bouquets;

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          minHeight: '85vh'
        }}
      >

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 py-16 md:px-12 lg:px-24 max-w-5xl mx-auto flex flex-col items-center">

          <div data-aos="fade-up" className="flex items-center gap-2 mb-6">
            <div className="h-px w-10 bg-pink-400"></div>
            <span className="text-pink-400 uppercase tracking-[0.3em] text-xs font-bold">
              Home
            </span>
            <div className="h-px w-10 bg-pink-400"></div>
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-5xl md:text-7xl font-serif font-semibold text-white leading-tight mb-4"
          >
            Flora<span className="text-pink-400"> Haven</span>
          </h1>

          {/* Updated Premium Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-pink-100 mb-10 max-w-3xl leading-relaxed"
          >
            At Flora Haven, we craft more than just flower arrangements — we deliver heartfelt emotions,
            unforgettable moments, and timeless beauty.
          </p>

          {/* Button */}
          <Link
            to="/products"
            data-aos="zoom-in"
            data-aos-delay="400"
            className="bg-pink-600 text-white px-8 py-3 rounded-md font-semibold shadow-xl 
            hover:bg-gray-900 cursor-pointer"
          >
            Shop Now
          </Link>

        </div>
      </div>

      {/* Sections with AOS */}
      <div data-aos="fade-up">
        <Flowers />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <ProductCarousel />
      </div>
 <div data-aos="fade-up" data-aos-delay="300">
        <Testimonials />
      </div>

      
    </div>
  );
};

export default HomePage;