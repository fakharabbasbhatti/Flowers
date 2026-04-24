import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import shop1 from '../../assets/shop1.png';
import shop2 from '../../assets/shop2.png';
import shop3 from '../../assets/shop1.png';
import shop4 from '../../assets/shop2.png';

const Outlets = () => {
  const [selectedOutlet, setSelectedOutlet] = useState(null);

  const imageUrl =
    "https://blossomsflorals.com/cdn/shop/files/IMG_3933_copy.heic?v=1768501868&width=1920";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const outletsData = [
    {
      id: 1,
      image: shop1,
      city: "DHA , Bahawalpur",
      address: "Shop # 1, Ahad Heights, 137/P Mini Market Round About, DHA Phase 1 , Bahawalpur, 54660",
      contact: "03229234045",
      timing: "Monday - Sunday: 8:00 am - 12:00 am"
    },
    {
      id: 2,
      image: shop2,
      city: "DHA Phase 3, Bahawalpur",
      address: "Shop # 45, Sector Z, DHA Phase 3, Near Y Block Market, Bahawalpur, 54000",
      contact: "03229234045",
      timing: "Monday - Sunday: 9:00 am - 11:00 pm"
    },
    {
      id: 3,
      image: shop3,
      city: "Iqbal Town, Bahawalpur",
      address: "G-3 Market, Near Dobai Chowk, Iqbal Town, Bahawalpur, 54782",
      contact: "03229234045",
      timing: "Monday - Sunday: 10:00 am - 11:00 pm"
    },
    {
      id: 4,
      image: shop4,
      city: "Commercial Area, Bahawalpur",
      address: "Shop # 12, Sector C, Commercial Zone, Commercial Area, Bahawalpur, 53720",
      contact: "03229234045",
      timing: "Monday - Sunday: 11:00 am - 10:00 pm"
    }
  ];

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          minHeight: '85vh',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="relative z-10 text-center px-6 py-16 md:px-12 lg:px-24 max-w-5xl mx-auto flex flex-col items-center">

          <div data-aos="fade-up" className="flex items-center gap-2 mb-6">
            <div className="h-px w-10 bg-pink-400"></div>
            <span className="text-pink-400 uppercase tracking-[0.3em] text-xs font-bold">
              Our Outlets
            </span>
            <div className="h-px w-10 bg-pink-400"></div>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-serif font-semibold text-white leading-tight mb-4"
          >
            Visit Our <span className="text-pink-400">Stores</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-pink-100 mb-10 max-w-3xl leading-relaxed"
          >
            Discover our beautifully designed outlets across the city.
            Experience fresh blooms and premium service at every location.
          </p>

          <button
            data-aos="zoom-in"
            data-aos-delay="500"
            className="bg-pink-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-900 cursor-pointer"
          >
            Explore Locations
          </button>
        </div>
      </section>

      {/* OUTLETS SECTION */}
      <section className="py-16 px-6 bg-white max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Outlets
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {outletsData.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-gray-50 rounded-md overflow-hidden border border-gray-300 shadow-sm hover:shadow-xl transition"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={outlet.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="p-8 space-y-4">

                <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-3">
                  {outlet.city}
                </h3>

                <div className="flex items-start gap-3">
                  <MapPin className="text-pink-600 mt-1" />
                  <p>{outlet.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-pink-600" />
                  <p className="font-semibold">{outlet.contact}</p>
                </div>

                {/* BUTTON CLICK FIX */}
                <button
                  onClick={() => setSelectedOutlet(outlet)}
                  className="w-full bg-pink-600 text-white py-3 rounded-md font-bold hover:bg-black transition cursor-pointer"
                >
                  View Details
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedOutlet && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setSelectedOutlet(null)}
            />

            <div className="relative bg-white w-full max-w-5xl rounded-md flex overflow-hidden">

              <button
                onClick={() => setSelectedOutlet(null)}
                className="absolute top-3 right-3 bg-white p-2 rounded-md cursor-pointer shadow"
              >
                <X />
              </button>

              <div className="w-1/2">
                <img
                  src={selectedOutlet.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="w-1/2 p-10 space-y-5">

                <h2 className="text-3xl font-bold">
                  {selectedOutlet.city}
                </h2>

                <div className="flex gap-3">
                  <MapPin className="text-pink-600" />
                  <p>{selectedOutlet.address}</p>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-pink-600" />
                  <p>{selectedOutlet.contact}</p>
                </div>

                <div className="flex gap-3">
                  <Clock className="text-pink-600" />
                  <p>{selectedOutlet.timing}</p>
                </div>

                <Link
                  to="/contact"
                  className="block text-center bg-pink-600 text-white py-3 rounded-md font-bold hover:bg-black transition cursor-pointer"
                >
                  Get Directions
                </Link>

              </div>
            </div>
          </div>
        )}

      </section>
    </>
  );
};

export default Outlets;