import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-8 px-4 border-t border-pink-500/30">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-pink-400 transition">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-pink-400 transition">About</Link></li>
            <li><Link to="/products" className="hover:text-pink-400 transition">Product</Link></li>
            <li><Link to="/our-outlets" className="hover:text-pink-400 transition">Our Outlets</Link></li>
            <li><Link to="/blogs" className="hover:text-pink-400 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Categories
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-pink-400 transition">Bouquets</Link></li>
            <li><Link to="/products" className="hover:text-pink-400 transition">Birthday</Link></li>
            <li><Link to="/products" className="hover:text-pink-400 transition">Anniversary</Link></li>
            <li><Link to="/products" className="hover:text-pink-400 transition">Roses</Link></li>
            <li><Link to="/products" className="hover:text-pink-400 transition">Floral Jewelry</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Join Our Bloom
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Get updates & special offers 🌸
          </p>

          <div className="flex flex-col gap-3 mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button className="bg-pink-500 hover:bg-pink-600 transition rounded-full py-2 text-sm font-semibold cursor-pointer">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://wa.me/923229234045"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-800 rounded-full hover:bg-green-500 transition hover:scale-110"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="p-2.5 bg-gray-800 rounded-full hover:bg-blue-600 transition hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="p-2.5 bg-gray-800 rounded-full hover:bg-pink-500 transition hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-2.5 bg-gray-800 rounded-full hover:bg-blue-500 transition hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            About Us
          </h3>

          <p className="text-sm text-gray-400 mb-5">
            Premium flower delivery service with love & elegance.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-pink-400 font-semibold">
              Bahawalpur Outlets
            </p>

            <p>📞 +92 322 9234045</p>
            <p>📧 fakharabbasbhatti333@gmail.com</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">

        <p className="text-gray-500">
          © 2026 Flora Haven — All rights reserved
        </p>

        <p>
          Designed by <span className="text-pink-500 font-semibold">Fakhar Abbas</span>
        </p>

        <div className="flex gap-2 flex-wrap">
          {['JAZZCASH','NAYAPAY','SADAPAY','VISA'].map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-800 rounded text-[10px] border border-gray-700"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;