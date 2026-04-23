import React, { useEffect, useRef, useState } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import {
  Heart,
  Eye,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { useCart } from '../../Context/CartContext';
import { toast } from 'react-toastify';

// Images
import flowers1 from '../../assets/flowers1.webp';
import flowers2 from '../../assets/flowers2.webp';
import flowers3 from '../../assets/flowers3.webp';
import flowers4 from '../../assets/flowers4.webp';
import flowers5 from '../../assets/flowers5.webp';
import flowers6 from '../../assets/flowers6.webp';
import flowers7 from '../../assets/flowers7.webp';
import flowers8 from '../../assets/flowers8.webp';
import flowers9 from '../../assets/flowers9.webp';
import flowers10 from '../../assets/flowers10.webp';
import flowers11 from '../../assets/flowers11.webp';
import flowers12 from '../../assets/flowers12.webp';

const ProductCarousel = () => {
  const flickityRef = useRef(null);
  const flktyInstance = useRef(null);

  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const images = [
    { main: flowers1, hover: flowers12 },
    { main: flowers2, hover: flowers11 },
    { main: flowers3, hover: flowers10 },
    { main: flowers4, hover: flowers9 },
    { main: flowers5, hover: flowers8 },
    { main: flowers6, hover: flowers7 },
    { main: flowers7, hover: flowers6 },
    { main: flowers8, hover: flowers5 },
    { main: flowers9, hover: flowers4 },
    { main: flowers10, hover: flowers3 },
    { main: flowers11, hover: flowers2 },
    { main: flowers12, hover: flowers1 },
  ];

  const prices = [
    "Rs. 1,999", "Rs. 2,499", "Rs. 2,200", "Rs. 3,000",
    "Rs. 1,750", "Rs. 2,850", "Rs. 2,100", "Rs. 3,200",
    "Rs. 1,650", "Rs. 2,950", "Rs. 2,300", "Rs. 3,100"
  ];

  const products = images.map((img, i) => ({
    id: i + 1,
    mainImg: img.main,
    hoverImg: img.hover,
    title: `Flora Product ${i + 1}`,
    price: prices[i]
  }));

  useEffect(() => {
    if (flickityRef.current) {
      flktyInstance.current = new Flickity(flickityRef.current, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 2000,
        pauseAutoPlayOnHover: true,
      });
    }
  }, []);

  const handlePrev = () => flktyInstance.current?.previous();
  const handleNext = () => flktyInstance.current?.next();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-16 bg-gray-50 relative">

      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
            New Arrivals
          </h2>

          {/* ✅ YOUR REQUESTED LINE */}
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-pink-500 hover:text-white transition z-10"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-pink-500 hover:text-white transition z-10"
        >
          <ChevronRight />
        </button>

        {/* Carousel */}
        <div ref={flickityRef} className="carousel">

          {products.map((product) => (
            <div key={product.id} className="carousel-cell w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3">

              <div className="group relative bg-white overflow-hidden shadow-sm border border-gray-100 rounded-xl">

                {/* Badge */}
                <div className="absolute top-3 left-3 z-20 bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  New
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gray-100">

                  <img
                    src={product.mainImg}
                    className="w-full h-full object-cover group-hover:opacity-0 transition"
                  />

                  <img
                    src={product.hoverImg}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                  />

                  {/* Icons */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition">

                    <button className="p-2 bg-white rounded-full hover:bg-pink-500 hover:text-white">
                      <Heart size={18} />
                    </button>

                    <button
                      onClick={() => handleViewProduct(product)}
                      className="p-2 bg-white rounded-full hover:bg-pink-500 hover:text-white"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="p-2 bg-white rounded-full hover:bg-pink-500 hover:text-white"
                    >
                      <ShoppingCart size={18} />
                    </button>

                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-medium text-gray-800 hover:text-pink-500">
                    {product.title}
                  </h3>
                  <p className="text-pink-600 font-bold mt-1">
                    {product.price}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-xl">

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-1 right-2 text-gray-600 hover:text-red-500"
            >
              <X />
            </button>

            <img
              src={selectedProduct.mainImg}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />

            <h2 className="text-xl font-bold text-gray-800">
              {selectedProduct.title}
            </h2>

            <p className="text-pink-600 font-bold mt-2">
              {selectedProduct.price}
            </p>

            <p className="text-gray-500 text-sm mt-3">
              Premium floral arrangement crafted with love and elegance 🌸
            </p>

          </div>
        </div>
      )}

    </section>
  );
};

export default ProductCarousel;