import React from 'react';
import { Link } from 'react-router-dom';

import Bouquets from '../../assets/Bouquets.webp';
import Boxes from '../../assets/Boxes.webp';
import FloralJewelry from '../../assets/FloralJewelry.webp';

const Flowers = () => {

  const flowers = [
    { id: 1, img: Bouquets, title: "Charm and Sweetness" },
    { id: 2, img: Boxes, title: "In Every Bloom" },
    { id: 3, img: FloralJewelry, title: "From Heart to Soul" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
            Our Flora Collection
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {flowers.map((flower, index) => (
            <div
              key={flower.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}
              <div className="h-72 overflow-hidden relative">
                <img
                  src={flower.img}
                  alt={flower.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                  {/* ✅ LINK ADDED HERE */}
                  <Link
                    to="/products"
                    className="text-white text-sm bg-pink-500 px-4 py-2 rounded-full shadow-lg hover:bg-pink-600 transition"
                  >
                    View Collection
                  </Link>

                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center border-t">
                <h3 className="text-xl font-serif font-semibold text-gray-800 group-hover:text-pink-600 transition">
                  {flower.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Premium floral arrangement crafted with care
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Flowers;