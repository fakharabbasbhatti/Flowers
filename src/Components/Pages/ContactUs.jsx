import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, Headset, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  return (
    <section className="py-16 px-6 bg-white max-w-7xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Headset className="text-pink-600" size={28} />
              Customer Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are available 24/7 to help you with orders, delivery, and custom floral arrangements.
            </p>
          </div>

          <div className="space-y-6">

            {/* ADDRESS (UPDATED) */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-100">
              <div className="bg-white p-3 rounded-md shadow-sm text-pink-600">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Our Address</p>
                <p className="text-gray-600">Flora Haven Store</p>
                <p className="text-gray-600">Bahawalpur, Punjab, Pakistan</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="bg-white p-3 rounded-md shadow-sm text-pink-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Customer Care</p>
                <p className="text-gray-600">+92 3229234045</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="bg-white p-3 rounded-md shadow-sm text-pink-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Email</p>
                <p className="text-gray-600">fakharabbasbhatti333@gmail.com</p>
              </div>
            </div>

            {/* TIMING */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="bg-white p-3 rounded-md shadow-sm text-pink-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Opening Hours</p>
                <p className="text-gray-600">Mon - Sun: 08:00 AM - 10:00 PM</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-xl">

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Send Message
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Fill the form and we will respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" required />
              I agree to the Privacy Policy
            </label>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition cursor-pointer"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;