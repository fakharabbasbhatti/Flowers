import React, { useState } from 'react';
import { MapPin, Phone, Clock, Headset, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import shop1 from '../../assets/shop1.png';
import shop2 from '../../assets/shop2.png';
import shop3 from '../../assets/shop1.png';
import shop4 from '../../assets/shop2.png';

const Outlets = () => {
  const [selectedOutlet, setSelectedOutlet] = useState(null);

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
    <section className="py-16 px-6 bg-white max-w-7xl mx-auto">

      {/* HEADER */}
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
            onClick={() => setSelectedOutlet(outlet)}
            className="cursor-pointer bg-gray-50 rounded-lg overflow-hidden border border-gray-300 shadow-sm hover:shadow-xl transition"
          >

            <div className="h-72 overflow-hidden">
              <img
                src={outlet.image}
                className="w-full h-full object-cover group-hover:scale-105 transition"
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

              <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-black transition">
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

          <div className="relative bg-white w-full max-w-5xl rounded-3xl flex overflow-hidden">

            <button
              onClick={() => setSelectedOutlet(null)}
              className="absolute top-3 right-3 bg-white p-2 rounded-full cursor-pointer"
            >
              <X />
            </button>

            <div className="w-1/2">
              <img
                src={selectedOutlet.image}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 p-10 space-y-4">

              <h2 className="text-3xl font-bold">{selectedOutlet.city}</h2>

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

              {/* ✅ UPDATED BUTTON */}
              <Link
                to="/contact"
                className="block text-center bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-black transition"
              >
                Get Directions
              </Link>

            </div>
          </div>

        </div>
      )}

    </section>
  );
};

export default Outlets;