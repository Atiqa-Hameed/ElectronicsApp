import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoTag } from "react-icons/go";

// Sample product data for the "New Arrival" section
const products = [
  {
    id: 1,
    name: "James smith",
    description: "Headphones come with a variety of features.",
    price: "$49",
    rating: 5.0,
    image: "/blueiphone.png",
  },
  {
    id: 2,
    name: "John lara",
    description: "Headphones come with a variety of features.",
    price: "$55",
    rating: 4.8,
    image: "/grayiphone.png",
  },
  {
    id: 3,
    name: "Miss zara",
    description: "Headphones come with a variety of features.",
    price: "$39",
    rating: 4.3,
    image: "/display.png",
  },
  {
    id: 4,
    name: "Lauren",
    description: "Headphones come with a variety of features.",
    price: "$69",
    rating: 4.9,
    image: "/skyiphone.png",
  },
];

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="rounded-lg shadow-lg p-4 bg-white relative text-left flex flex-col justify-between transition-transform transform hover:scale-105">
    {/* Product Image */}
    <div className="h-48 flex items-center justify-center">
      <img
        className="max-h-full object-contain"
        src={product.image}
        alt={product.name}
      />
    </div>

    {/* Product Name and Rating */}
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold">{product.name}</h3>
      {/* Product Rating */}
      <span className="text-lg ml-2">⭐ {product.rating}</span>
    </div>

    {/* Product Description */}
    <p className="text-sm text-gray-500">{product.description}</p>

    {/* Product Price and Add to Cart Button */}
    <div className="flex items-center justify-between">
      <p className="text-red font-bold text-xl">{product.price}</p>
      <button className="bg-white border border-red rounded-lg py-1 px-3 hover:bg-red-500 hover:text-red transition duration-300">
        Add to cart
      </button>
    </div>
  </div>
);

// New Arrival Component
const NewArrival = () => {
  return (
    <div className="p-8 px-14 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8">New arrival</h2>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Promotion Section */}
      <div className="px-4 md:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-6 mt-12">
          {/* Left Div: Image aligned to the left */}
          <div className="bg-gray rounded-3xl p-6 flex flex-col justify-center items-center md:items-start h-auto md:h-96 lg:h-[20rem] relative overflow-hidden">
            <img
              src="/left.png"
              alt="Awesome Airpods"
              className="w-40 h-40 md:w-64 md:h-64 lg:w-64 lg:h-64 object-contain md:absolute lg:right-56 md:right-32"
            />
            <h3 className="text-xl md:text-3xl font-bold mt-4 text-center md:mt-2 md:text-left md:ml-40 max-w-full">
              Awesome Airpods
            </h3>
            <p className="text-gray-600 mt-2 mb-4 text-center md:text-left md:ml-40  max-w-full md:max-w-sm ">
              These have large ear cups that encompass the ears, providing good
              sound.
            </p>
            <button className="inline-flex items-center px-3 py-2 bg-red text-white rounded-lg shadow-md font-bold hover:bg-red-600 transition-colors text-sm md:text-base lg:text-lg mt-4 md:mt-2 md:ml-40">
              Shop now
              <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Right Div: Image aligned to the right */}
          <div className="bg-gray rounded-3xl p-6 flex flex-col justify-center items-center md:items-start h-auto md:h-96 lg:h-[20rem] relative overflow-hidden">
            <img
              src="/watch.png"
              alt="Smart Watches"
              className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain md:absolute md:right-2"
            />
            <h3 className="text-xl md:text-3xl font-bold mt-4 text-center md:mt-2 md:text-left md:ml-6 lg:w-2 md:w-2 w-full">
              Smart Watches
            </h3>
            <button className="inline-flex items-center px-3 py-2 bg-red text-white rounded-lg shadow-md font-bold hover:bg-red-600 transition-colors text-sm md:text-base lg:text-lg mt-4 md:mt-8 md:ml-6">
              Shop now
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Promo banner */}
      <div className="h-28 w-full absolute left-0 right-0 flex items-center justify-center bg-gray mt-16">
        <p className="text-xl sm:text-2xl font-semibold">
          10% off when paying with a debit card
        </p>
        <GoTag className="absolute right-4 sm:right-12 h-6 sm:h-8 w-6 sm:w-8" />
        {/* The icon is adjusted for smaller screens */}
      </div>

      {/* Main content section */}
      <div className="mt-64 sm:mt-64 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left section: Text and stats */}
        <div>
          <h4 className="text-red font-bold text-lg sm:text-xl">
            Comment level
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
            A new style in your <br /> Ear
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-full sm:max-w-sm ml-2 sm:ml-4">
            <div className="bg-gray p-4 sm:p-6 rounded-xl text-center h-35 w-full flex flex-col items-center justify-center">
              <p className="text-red text-3xl sm:text-4xl font-bold">4M+</p>
              <p className="text-lg sm:text-2xl text-gray-600 font-medium">
                User's
              </p>
            </div>
            <div className="bg-gray p-4 sm:p-6 rounded-xl text-center h-35 w-full flex flex-col items-center justify-center">
              <p className="text-red text-3xl sm:text-4xl font-bold">153k</p>
              <p className="text-lg sm:text-2xl text-gray-600 font-medium">
                Purchaser
              </p>
            </div>
            <div className="bg-gray p-4 sm:p-6 rounded-xl text-center h-35 w-full flex flex-col items-center justify-center">
              <p className="text-red text-3xl sm:text-4xl font-bold">53k</p>
              <p className="text-lg sm:text-2xl text-gray-600 font-medium">
                Gallery
              </p>
            </div>
            <div className="bg-gray p-4 sm:p-6 rounded-xl text-center h-35 w-full flex flex-col items-center justify-center">
              <p className="text-red text-3xl sm:text-4xl font-bold">2M+</p>
              <p className="text-lg sm:text-2xl text-gray-600 font-medium">
                Feedback
              </p>
            </div>
          </div>
        </div>

        {/* Right section: Image */}
        <div className="relative">
          <div className="absolute  -top-12 -right-20 sm:-right-36 h-48 sm:h-64 w-[90%] sm:w-[78%] bg-red rounded-l-full rotate-[-18deg]">
            <img
              src="/manwithheadphones.png"
              alt="Man with headphones"
              className="relative w-full h-[340px] sm:h-[440px] -top-24 sm:-top-36 object-top object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { GoTag } from "react-icons/go";

// // Sample product data for the "New Arrival" section
// const products = [
//   {
//     id: 1,
//     name: "James smith",
//     description: "Headphones come with a variety of features.",
//     price: "$49",
//     rating: 5.0,
//     image: "/src/assets/blueiphone.png",
//   },
//   {
//     id: 2,
//     name: "John lara",
//     description: "Headphones come with a variety of features.",
//     price: "$55",
//     rating: 4.8,
//     image: "/src/assets/grayiphone.png",
//   },
//   {
//     id: 3,
//     name: "Miss zara",
//     description: "Headphones come with a variety of features.",
//     price: "$39",
//     rating: 4.3,
//     image: "/src/assets/display.png",
//   },
//   {
//     id: 4,
//     name: "Lauren",
//     description: "Headphones come with a variety of features.",
//     price: "$69",
//     rating: 4.9,
//     image: "/src/assets/skyiphone.png",
//   },
// ];

// // Product Card Component
// const ProductCard = ({ product }) => (
//   <div className="rounded-lg shadow-lg p-4 bg-white relative text-left flex flex-col justify-between transition-transform transform hover:scale-105">
//     {/* Product Image */}
//     <div className="h-48 flex items-center justify-center">
//       <img
//         className="max-h-full object-contain"
//         src={product.image}
//         alt={product.name}
//       />
//     </div>

//     {/* Product Name and Rating */}
//     <div className="flex items-center justify-between">
//       <h3 className="text-lg font-bold">{product.name}</h3>
//       {/* Product Rating */}
//       <span className="text-lg ml-2">⭐ {product.rating}</span>
//     </div>

//     {/* Product Description */}
//     <p className="text-sm text-gray-500">{product.description}</p>

//     {/* Product Price and Add to Cart Button */}
//     <div className="flex items-center justify-between">
//       <p className="text-red font-bold text-xl">{product.price}</p>
//       <button className="bg-white border border-red rounded-lg py-1 px-3 hover:bg-red-500 hover:text-red transition duration-300">
//         Add to cart
//       </button>
//     </div>
//   </div>
// );

// // New Arrival Component
// const NewArrival = () => {
//   return (
//     <div className="p-8 px-14 overflow-hidden">
//       <h2 className="text-3xl font-bold mb-8">New arrival</h2>

//       {/* Product Grid */}
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* Promotion Section */}
//       <div className="px-4 md:px-8 mt-20">
//         <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-6 mt-12">
//           {/* Left Div: Image aligned to the left */}
//           <div className="bg-gray rounded-3xl p-6 flex flex-col justify-center items-center md:items-start h-auto md:h-96 lg:h-[20rem] relative overflow-hidden">
//             <img
//               src="/src/assets/left.png"
//               alt="Awesome Airpods"
//               className="w-40 h-40 md:w-64 md:h-64 lg:w-64 lg:h-64 object-contain md:absolute lg:right-56 md:right-32"
//             />
//             <h3 className="text-xl md:text-3xl font-bold mt-4 text-center md:mt-2 md:text-left md:ml-40 max-w-full">
//               Awesome Airpods
//             </h3>
//             <p className="text-gray-600 mt-2 mb-4 text-center md:text-left md:ml-40  max-w-full md:max-w-sm ">
//               These have large ear cups that encompass the ears, providing good
//               sound.
//             </p>
//             <button className="inline-flex items-center px-3 py-2 bg-red text-white rounded-lg shadow-md font-bold hover:bg-red-600 transition-colors text-sm md:text-base lg:text-lg mt-4 md:mt-2 md:ml-40">
//               Shop now
//               <FaArrowRight className="ml-2" />
//             </button>
//           </div>

//           {/* Right Div: Image aligned to the right */}
//           <div className="bg-gray rounded-3xl p-6 flex flex-col justify-center items-center md:items-start h-auto md:h-96 lg:h-[20rem] relative overflow-hidden">
//             <img
//               src="/src/assets/watch.png"
//               alt="Smart Watches"
//               className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain md:absolute md:right-2"
//             />
//             <h3 className="text-xl md:text-3xl font-bold mt-4 text-center md:mt-2 md:text-left md:ml-6 lg:w-2 md:w-2 w-full">
//               Smart Watches
//             </h3>
//             <button className="inline-flex items-center px-3 py-2 bg-red text-white rounded-lg shadow-md font-bold hover:bg-red-600 transition-colors text-sm md:text-base lg:text-lg mt-4 md:mt-8 md:ml-6">
//               Shop now
//               <FaArrowRight className="ml-2" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Promo banner */}
//       <div className="h-28 w-full absolute left-0 right-0 flex items-center justify-center bg-gray mt-16">
//         <p className="text-xl sm:text-2xl font-semibold">
//           10% off when paying with a debit card
//         </p>
//         <GoTag className="absolute right-4 sm:right-12 h-6 sm:h-8 w-6 sm:w-8" />
//         {/* The icon is adjusted for smaller screens */}
//       </div>

//       {/* Main content section */}
//       <div className="mt-64 sm:mt-64 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
//         {/* Left section: Text and stats */}
//         <div>
//           <h4 className="text-red font-bold text-lg sm:text-xl">
//             Comment level
//           </h4>
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
//             A new style in your <br /> Ear
//           </h2>

//           <div className="mt-8 grid grid-cols-2 gap-4 max-w-full sm:max-w-sm ml-2 sm:ml-4">
//           <div className="bg-gray p-4 sm:p-6 rounded-xl text-center h-35 w-full flex flex-col items-center justify-center">
//             <p className="text-red text-3xl sm:text-4xl font-bold">4M+</p>
//             <p className="text-lg sm:text-2xl text-gray-600 font-medium">User's</p>
//           </div>
//           <div className="bg-gray p-4 sm:p-6 rounded-xl text-center h-35 w-full flex flex-col items-center justify-center">
//             <p className="text-red text-3xl sm:text-4xl font-bold">153k</p>
//             <p className="text-lg sm:text-2xl text-gray-600 font-medium">Purchaser</p>
//           </div>
//           <div className="bg-gray p-4 sm:p-6 rounded-xl text-center h-35 w-full flex flex-col items-center justify-center">
//             <p className="text-red text-3xl sm:text-4xl font-bold">53k</p>
//             <p className="text-lg sm:text-2xl text-gray-600 font-medium">Gallery</p>
//           </div>
//           <div className="bg-gray p-4 sm:p-6 rounded-xl text-center h-35 w-full flex flex-col items-center justify-center">
//             <p className="text-red text-3xl sm:text-4xl font-bold">2M+</p>
//             <p className="text-lg sm:text-2xl text-gray-600 font-medium">Feedback</p>
//           </div>
//         </div>

//         </div>

//         {/* Right section: Image */}
//       <div className="relative">
//           <div className="absolute  -top-12 -right-20 sm:-right-36 h-48 sm:h-64 w-[90%] sm:w-[78%] bg-red rounded-l-full rotate-[-18deg]">

//           <img
//             src="/src/assets/manwithheadphones.png"
//             alt="Man with headphones"
//             className="relative w-full h-[340px] sm:h-[440px] -top-24 sm:-top-36 object-top object-cover"

//           />
//         </div>
//       </div>

//       </div>
//     </div>
//   );
// };

// export default NewArrival;
