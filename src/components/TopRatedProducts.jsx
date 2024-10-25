import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const TopRatedProducts = () => {
  const products = [
    {
      id: 1,
      name: "LED 4k smart TV expo White/Gray/Black",
      price: "$499",
      image: "/smart-led.png",
      rating: "Top rated",
    },
    {
      id: 2,
      name: "GM-2345 closed back wireless Headphones",
      price: "$99",
      image: "/wireless-headphones.png",
      rating: "Top rated",
    },
    {
      id: 3,
      name: "GM-2345 closed back wireless Headphones",
      price: "$99",
      image: "/headphones.png",
      rating: "Top rated",
    },
    {
      id: 4,
      name: "Laptop 4k smart TV expo White/Gray/Black",
      price: "$599",
      image: "/Laptop.png",
      rating: "Top rated",
    },
    {
      id: 5,
      name: "Mobile phone accessories",
      price: "$199",
      image: "/images-removebg-preview.png",
      rating: "Top rated",
    },
    {
      id: 6,
      name: "Accessories for mobile phone used USB",
      price: "$149",
      image: "/images__1_-removebg-preview.png",
      rating: "Top rated",
    },
    {
      id: 7,
      name: "GM-2345 closed back Camera",
      price: "$299",
      image:
        "/Realistic-digital-camera-vector-PNG-removebg-preview.png",
      rating: "Top rated",
    },
    {
      id: 8,
      name: "Mobile 4k smart TV expo White/Gray/Black",
      price: "$399",
      image: "/tablets.png",
      rating: "Top rated",
    },
  ];
  
  return (
    <div className="p-4 md:p-12 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Top rated product</h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-lg p-3 shadow-xl bg-white flex flex-col items-center justify-center transition-transform transform hover:scale-105"
        >
          {/* Rating text */}
          <div className="w-full flex justify-between items-center">
            <p className="text-sm text-gray-500">{product.rating}</p>
            <button className="text-gray-500 text-xl">
              <CiHeart className="w-6 h-6" />
            </button>
          </div>

          {/* Product Image */}
          <img
            className="w-full h-48 object-contain mt-2"
            src={product.image}
            alt={product.name}
          />

          {/* Product Name and Price Centered */}
          <div className="w-full flex flex-col items-center ">
            {/* Product Name */}
            <h3 className="mt-4 w-11/12 text-center">
              <span className="text-lg font-sans text-gray-800 text-left block">
                {product.name}
              </span>
            </h3>

            {/* Price */}
            <p className="mt-2 w-11/12 text-center">
              <span className="text-red font-bold text-xl block text-left">
                {product.price}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>

      <h2 className="text-3xl font-bold text-start mt-8">Shop product by</h2>
      <div className="w-full md:w-[85%] md:h-[370px] h-auto bg-gray rounded-3xl mt-8 mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <img
            src="/Iphones.png"
            alt="Description"
            className="h-auto md:h-[450px] object-contain md:absolute md:bottom-[-250px]"
          />
        </div>

        {/* Right side: Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-center mt-6 md:mt-0">
          <h3 className="text-3xl font-bold mb-4 w-2/3 text-left">
            Define Yourself, Be Different
          </h3>
          <p className="text-stone-600 text-left w-2/3">
            These have large ear cups that encompass the ears, providing good
            sound isolation and often better sound quality.
          </p>
          <button className="mt-8 inline-flex items-center px-4 py-2 bg-red text-white rounded-lg shadow-md font-bold hover:bg-red-600 transition-colors text-sm md:text-base lg:text-lg">
            Shop now
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedProducts;
