import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Category = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-red font-bold text-2xl sm:text-3xl lg:text-4xl">Category</h1>
      <p className="font-bold text-lg sm:text-2xl lg:text-3xl mt-4">
        Can we help you pick a headphone
      </p>
      <div className="w-full px-4 sm:px-6 md:px-12 my-12 justify-center items-center">
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 justify-items-center">
        {/* Individual Product Card */}
        {[
          { name: "Iphone", image: "/grayiphone.png",},
          { name: "Speaker", image: "/speaker.png" },
          { name: "Tablet", image: "/tablet.png" },
          { name: "Laptop", image: "/laptop.png" },
          { name: "Headphone", image: "/headphone.png" },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-xl rounded-lg flex flex-col items-center h-64 sm:h-72 lg:h-80 w-40 sm:w-48 lg:w-52 justify-center transition-transform transform hover:scale-105"
            style={{ maxWidth: "100%" }} // Ensures the card doesn't overflow on small screens
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-36 sm:h-44 lg:h-56 w-[150px] sm:w-[200px] object-contain mb-4"
            />
            <p className="text-center text-sm sm:text-base lg:text-lg font-medium">{product.name}</p>
          </div>
        ))}
      </div>
      

        {/* Promotions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* Camera Promotion */}
          <div className="bg-white shadow-xl rounded-lg flex items-center justify-center h-60 sm:h-72 lg:h-96">
            <img
              src="/Realistic-digital-camera-vector-PNG-removebg-preview.png"
              alt="Camera"
              className="h-36 sm:h-36 lg:h-[250px] w-auto -rotate-[60deg]"
            />
            <div className="ml-4 mt-8 sm:mt-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">25% off</h2>
              <p className="text-xl sm:text-2xl lg:text-3xl mb-4">
                Catch hottest <span className="font-bold">Deals</span> in Cameras category
              </p>
              <button className="inline-flex items-center px-3 py-2 bg-red text-white rounded-lg shadow-md font-bold hover:bg-red-600 transition-colors text-sm md:text-base lg:text-lg">
                Shop now
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Tablet/Smartphone Promotion */}
          <div className="bg-white p-2  shadow-lg rounded-lg flex items-center justify-center h-60 sm:h-72 lg:h-96">
            <img
              src="/tablets.png"
              alt="Tablet"
              className="h-36 sm:h-36 lg:h-[350px] w-auto"
            />
            <div className="ml-4 mt-10 sm:mt-16">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">25% off</h2>
              <p className="text-xl sm:text-2xl lg:text-3xl mb-4">
                Tablets, smartphones, <span className="font-bold">and more</span>
              </p>
              <button className="text-red px-6 py-1 sm:px-8 rounded-lg shadow-md font-bold hover:bg-red-600 border text-sm md:text-base lg:text-3xl">
                $799
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

