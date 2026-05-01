import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../../assets/b1.webp';
import img2 from '../../assets/b3.webp';
import img3 from '../../assets/b2.webp';

const Experience = () => {
  const experiences = [
    {
      title: "Floral Arrangements",
      desc: "We specialize in creating elegant floral arrangements using fresh and artificial flowers, designed to suit every occasion. From classic bouquets to luxurious statement pieces.",
      image: img1,
    },
    {
      title: "Premium Chocolates",
      desc: "Our chocolate gift bouquets and boxes are thoughtfully designed using premium chocolates and elegant packaging. Perfect for celebrations.",
      image: img2,
    },
    {
      title: "Event Styling",
      desc: "Our professional gift-wrapping services turn every gift into a stunning presentation using premium materials and creative designs.",
      image: img3,
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4">
            Our Expertise
          </h2>

          {/* 🔥 Added line under heading */}
          <div className="w-24 h-1 bg-pink-500 mt-3 rounded-full"></div>

          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            We craft every bouquet, chocolate gift, and arrangement with utmost care,
            ensuring each creation reflects your love and emotions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}

              className="
                bg-white 
                border border-gray-300 
                rounded-md overflow-hidden 
                shadow-sm hover:shadow-2xl 
                transition-all duration-500 
                flex flex-col h-full
                group
              "
            >

              {/* IMAGE */}
              <div className="h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* TEXT */}
              <div className="p-8 flex flex-col flex-1">

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;