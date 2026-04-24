import React, { useState, useMemo, useEffect } from 'react';
import {
  LayoutGrid, ShoppingBag, ChevronDown,
  Heart, Eye, Grid2X2, Grid3X3, X, Plus
} from 'lucide-react';
import { useCart } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import { products } from '../../data/products';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heroproduct = () => {
  const [cols, setCols] = useState(3);
  const [hoverCategory, setHoverCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const { addToCart: addToCartContext } = useCart();

  const imageUrl = "https://blossomsflorals.com/cdn/shop/files/IMG_3933_copy.heic?v=1768501868&width=1920";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const navigation = {
    "Shop by Categories": ["Bouquets", "Boxes", "Baskets", "Money Bouquets", "Vases", "Crochet Flowers"],
    "Shop by Occasions": ["Birthday", "Anniversary", "Valentines Day", "Mothers Day", "Fathers Day", "Eid & Ramadan"],
    "Shop by Flowers": ["Flowers", "Sun Flowers", "Lilies", "Baby Breath", "Chrysanthemum"]
  };

  const filteredProducts = useMemo(() => {
    return activeFilter === 'all'
      ? products
      : products.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const handleAddToCart = (product) => {
    addToCartContext({
      id: product.id,
      title: product.name,
      price: `Rs. ${product.price}`,
      mainImg: product.image,
    });
    toast.success(`${product.name} added to cart!`);
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find(i => i.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter(i => i.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const getGridClass = () => {
    if (cols === 2) return "grid-cols-1 sm:grid-cols-2";
    if (cols === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          minHeight: '85vh',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-16 md:px-12 lg:px-24 max-w-5xl mx-auto flex flex-col items-center">

          <div data-aos="fade-up" className="flex items-center gap-2 mb-6">
            <div className="h-px w-10 bg-pink-400"></div>
            <span className="text-pink-400 uppercase tracking-[0.3em] text-xs font-bold">
              Our Shop
            </span>
            <div className="h-px w-10 bg-pink-400"></div>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-serif font-semibold text-white leading-tight mb-4"
          >
            Explore <span className="text-pink-400">Products</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-pink-100 mb-10 max-w-3xl leading-relaxed"
          >
            Discover beautifully crafted floral arrangements for every occasion.
            From elegant bouquets to luxury gift boxes — find your perfect bloom.
          </p>

          <button
            data-aos="zoom-in"
            data-aos-delay="500"
            className="bg-pink-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-900 cursor-pointer"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* ✅ MAIN SHOP SECTION */}
      <div className="min-h-screen bg-white mt-5 text-gray-800 p-4 md:p-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <aside className="w-full lg:w-64 space-y-8">
            <div className="border border-gray-300 rounded-md p-4">
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-2">
                Availability
              </h3>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="accent-pink-600" />
                In stock ({products.length})
              </label>
            </div>
          </aside>

          {/* MAIN */}
          <main className="flex-1">

            {/* NAVIGATION */}
            <div className="mb-10 border-b border-gray-300 pb-4">
              <div className="flex flex-wrap gap-10">

                {Object.keys(navigation).map((cat) => (
                  <div
                    key={cat}
                    className="relative"
                    onMouseEnter={() => setHoverCategory(cat)}
                    onMouseLeave={() => setHoverCategory(null)}
                  >
                    <button className="text-sm font-bold uppercase flex items-center gap-1 hover:text-pink-600">
                      {cat}
                      <ChevronDown size={14} />
                    </button>

                    {hoverCategory === cat && (
                      <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md p-3 flex flex-wrap gap-2 z-50">
                        {navigation[cat].map((item) => (
                          <button
                            key={item}
                            onClick={() => setActiveFilter(item)}
                            className={`text-xs px-3 py-1 rounded-md border border-gray-300
                            ${activeFilter === item ? 'bg-pink-600 text-white' : 'hover:bg-gray-100'}`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* GRID CONTROLS */}
            <div className="flex justify-between items-center mb-6 border border-gray-300 p-3 rounded-md">
              <p className="text-sm">Showing {filteredProducts.length} items</p>

              <div className="flex gap-2 border border-gray-300 p-1 rounded">
                <button onClick={() => setCols(2)}><Grid2X2 size={18} /></button>
                <button onClick={() => setCols(3)}><LayoutGrid size={18} /></button>
                <button onClick={() => setCols(4)}><Grid3X3 size={18} /></button>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className={`grid ${getGridClass()} gap-6`}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-300 rounded-md overflow-hidden group"
                >
                  <div className="relative aspect-square flex items-center justify-center bg-white">

                    <img
                      src={product.image}
                      className="p-6 object-contain group-hover:scale-110 transition"
                      alt={product.name}
                    />

                    {/* ACTIONS */}
                    <div className="absolute bottom-3 flex gap-3 opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() => toggleWishlist(product)}
                        className="p-2 border border-gray-300 rounded-full bg-white"
                      >
                        <Heart size={16} />
                      </button>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="p-2 border border-gray-300 rounded-full bg-white"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="p-2 border border-gray-300 rounded-full bg-white"
                      >
                        <ShoppingBag size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 text-center border-t border-gray-300">
                    <h4 className="font-semibold hover:text-pink-600">{product.name}</h4>
                    <p className="text-pink-700 font-bold">Rs.{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* MODAL */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

            <div
              className="absolute inset-0"
              onClick={() => setSelectedProduct(null)}
            />

            <div className="relative bg-white w-full max-w-3xl rounded-md border border-gray-300 shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">

              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 bg-gray-100 hover:bg-pink-600 hover:text-white p-2 rounded-full transition"
              >
                <X size={18} />
              </button>

              <div className="w-full h-64 sm:h-80 bg-gray-50 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  className="w-full h-full object-contain p-4"
                  alt={selectedProduct.name}
                />
              </div>

              <div className="p-5 sm:p-6 text-center space-y-3 overflow-y-auto">

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h2>

                <p className="text-pink-700 font-bold text-lg">
                  Rs. {selectedProduct.price}
                </p>

                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="w-full bg-pink-600 hover:bg-gray-900 text-white py-3 rounded-md font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus size={18} />
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Heroproduct;