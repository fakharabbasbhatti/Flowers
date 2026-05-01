import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Trash2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import FLORA from '../../assets/lo.png';
import { useCart } from '../../Context/CartContext';
import { products } from '../../data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Product', path: '/products' },
    { name: 'Our Outlets', path: '/our-outlets' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  // 🔥 Disable scroll when drawer/search/cart open
  useEffect(() => {
    document.body.style.overflow =
      showCart || showSearch || isOpen ? 'hidden' : 'auto';
  }, [showCart, showSearch, isOpen]);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <div className="flex justify-between h-16 items-center">

            {/* LOGO */}
            <div className="flex items-center">
              <img
                src={FLORA}
                alt="Logo"
                className="h-10 sm:h-12 w-auto object-contain rounded-xl"
              />
            </div>

            {/* NAV LINKS (DESKTOP) */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium transition duration-300 ${
                      isActive
                        ? 'text-pink-600'
                        : 'text-gray-600 hover:text-pink-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* ICONS */}
            <div className="flex items-center gap-3 md:gap-5">

              {/* SEARCH */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowSearch(!showSearch);
                    setShowCart(false);
                  }}
                  className="hover:text-pink-500"
                >
                  <Search size={22} />
                </button>

                {showSearch && (
                  <div className="fixed md:absolute left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 right-auto md:right-0 top-16 md:top-12 w-[95vw] sm:w-96 bg-white shadow-xl rounded-md z-50 p-4 border border-gray-300">

                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md mb-3 outline-none"
                    />

                    {searchQuery && (
                      <div className="max-h-72 md:max-h-64 overflow-y-auto space-y-2">
                        {filteredProducts.length > 0 ? (
                          filteredProducts.map((product) => (
                            <Link
                              key={product.id}
                              to="/products"
                              onClick={() => {
                                setShowSearch(false);
                                setSearchQuery('');
                              }}
                              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-10 h-10 object-cover rounded"
                              />
                              <div>
                                <p className="font-medium text-sm">{product.name}</p>
                                <p className="text-pink-600 text-xs">
                                  Rs. {product.price}
                                </p>
                              </div>
                            </Link>
                          ))
                        ) : (
                          <p className="text-gray-500 text-sm">No products found</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* CART */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowCart(!showCart);
                    setShowSearch(false);
                  }}
                  className="relative hover:text-pink-500"
                >
                  <ShoppingCart size={22} />

                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-md">
                    {getTotalItems()}
                  </span>
                </button>

                {showCart && (
                  <div className="fixed md:absolute left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 right-auto md:right-0 top-16 md:top-12 w-[95vw] sm:w-96 bg-white shadow-xl rounded-md z-50 border border-gray-300">

                    {cartItems.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">
                        Your cart is empty
                      </div>
                    ) : (
                      <>
                        <div className="max-h-72 md:max-h-64 overflow-y-auto divide-y">
                          {cartItems.map((item) => (
                            <div key={item.id} className="p-3 flex gap-3">

                              <img
                                src={item.mainImg}
                                alt={item.title}
                                className="w-14 h-14 object-cover rounded-md"
                              />

                              <div className="flex-1">
                                <p className="text-sm font-medium">{item.title}</p>

                                <p className="text-pink-600 font-bold text-sm">
                                  Rs. {item.price.toLocaleString()}
                                </p>

                                <div className="flex items-center gap-2 mt-1">
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                    className="px-2 bg-gray-200 rounded-md"
                                  >−</button>

                                  <span>{item.quantity}</span>

                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                    className="px-2 bg-gray-200 rounded-md"
                                  >+</button>
                                </div>
                              </div>

                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500"
                              >
                                <Trash2 size={16} />
                              </button>

                            </div>
                          ))}
                        </div>

                        <div className="p-4 border-t">
                          <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span className="text-pink-600">
                              Rs. {getTotalPrice().toLocaleString()}
                            </span>
                          </div>

                          <Link
                            to="/Addtocart"
                            onClick={() => setShowCart(false)}
                            className="block mt-3 bg-pink-500 hover:bg-gray-900 text-white text-center py-2 rounded-md"
                          >
                            View Cart
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-1"
              >
                {isOpen ? <X /> : <Menu />}
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* DRAWER MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        <div className="p-4 space-y-4 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-lg text-gray-600 font-semibold p-3 bg-gray-300 hover:text-white hover:bg-pink-600 text-center rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;