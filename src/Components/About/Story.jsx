import React from 'react';

const Story = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-20 px-6">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT SIDE TEXT */}
        <div className="flex-1 space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
            Our Story
          </h1>

          <div className="w-24 h-1 bg-pink-500 rounded-full"></div>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            For more than 30 years, Flora Bloom has been one of Lahore’s most trusted flower brands,
            delivering elegance, emotion, and creativity through every arrangement. We specialize in
            luxurious flower bouquets, artistic floral designs, premium chocolate baskets, and beautifully
            crafted gift-wrapping services for every occasion.
            <br /><br />
            From weddings to birthdays, anniversaries to corporate celebrations — we bring life to your
            special moments with fresh & artificial floral designs tailored with perfection.
          </p>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">

            <img
              src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="flower story"
              className="w-full h-[420px] object-cover rounded-lg shadow-2xl border border-gray-300"
            />

            {/* floating decoration */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-pink-300/30 rounded-full blur-2xl"></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Story;