import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Phone, Mail, Clock, Send, Headset, MapPin } from 'lucide-react';

const ContactUs = () => {

  const imageUrl = "https://blossomsflorals.com/cdn/shop/files/IMG_3933_copy.heic?v=1768501868&width=1920";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  return (
    <>
      {/* ✅ HERO SECTION (ADDED) */}
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
              Contact Us
            </span>
            <div className="h-px w-10 bg-pink-400"></div>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-serif font-semibold text-white leading-tight mb-4"
          >
            Get In <span className="text-pink-400">Touch</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-pink-100 mb-10 max-w-3xl leading-relaxed"
          >
            Have questions or need a custom floral arrangement? We're here to help you anytime.
          </p>

          <button
            data-aos="zoom-in"
            data-aos-delay="500"
            className="bg-pink-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-900 cursor-pointer"
          >
            Contact Now
          </button>
        </div>
      </section>

      {/* ✅ EXISTING CONTACT SECTION */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-5">

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

              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-md border border-gray-100">
                <div className="bg-white p-3 rounded-md shadow-sm text-pink-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Our Address</p>
                  <p className="text-gray-600">Flora Haven Store</p>
                  <p className="text-gray-600">Bahawalpur, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-md border border-gray-100">
                <div className="bg-white p-3 rounded-md shadow-sm text-pink-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Customer Care</p>
                  <p className="text-gray-600">+92 3229234045</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-md border border-gray-100">
                <div className="bg-white p-3 rounded-md shadow-sm text-pink-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-gray-600">fakharabbasbhatti333@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-md border border-gray-100">
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
          <div className="bg-white border border-gray-200 rounded-md p-8 shadow-xl">
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
                className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none"
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none"
                required
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" required />
                I agree to the Privacy Policy
              </label>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition cursor-pointer"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactUs;