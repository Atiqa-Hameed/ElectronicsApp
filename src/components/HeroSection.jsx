import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Left Section (Hero Section with Image) */}
        <div className="relative w-full md:w-[64%] bg-gray h-[620px] rounded-r-[150px] overflow-hidden flex items-center justify-center">
          {/* Picture Overlay */}
          <img
            src="/src/assets/file.png"
            alt="Hero Section Image"
            className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] rotate-[35deg] ml-4 sm:ml-6 md:ml-8 lg:ml-12 object-contain"
          />
        </div>

        {/* Right Section with Text and Button */}
        <div className="lg:w-1/2 w-full mt-12 lg:mt-12 lg:pl-16 text-center lg:text-left flex flex-col items-center lg:items-start px-4">
          <p className="text-red font-sans mb-2 text-base md:text-lg">
            In the spotlight
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:w-72 lg:w-72 w-full">
            Your sound best for your life
          </h1>
          <p className="text-stone-600 mb-6 md:w-72 lg:w-72 w-full">
            These have large ear cups that encompass the ears, providing good
            sound isolation and often better sound quality.
          </p>
          {/* Adjusting the button to show below the text */}
          <button
            className="lg:mt-24 mt-2 inline-flex items-center px-4 py-2 bg-red text-white rounded-lg shadow-md font-bold hover:bg-red-600 transition-colors text-sm md:text-base lg:text-lg"
          >
            Shop now
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="flex items-center">
          {/* Dot */}
          <span className="h-3 w-3 bg-red rounded-full mr-2"></span>
          {/* Line */}
          <div className="h-2 w-6 bg-pink-300 rounded-full"></div>
        </div>
      </div>
      <hr className="h-px mt-12 bg-stone-400 border-0" />
    </>
  );
};

export default HeroSection;

// import { FaArrowRight } from "react-icons/fa";

// const HeroSection = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-0">
//       {/* Left Section (Hero Section with Image) */}
//       <div className="relative w-full md:w-[64%] bg-gray h-[580px] rounded-r-[150px] overflow-hidden flex items-center justify-center md:justify-end">
//         {/* Picture Overlay */}
//         <img
//           src="/src/assets/headphones.png"
//           alt="Hero Section Image"
//           className="max-w-full max-h-full object-cover"
//           style={{ width: 'auto', height: 'auto' }}
//         />
//       </div>

//         {/* Right Section with Text and Button */}
//         <div className="lg:w-1/2 w-full mt-12 lg:mt-0 lg:pl-16 text-center lg:text-left px-4">
//         <p className="text-rose-500 font-sans mb-2">In the spotlight</p>
//         <h1 className="text-2xl md:text-4xl font-bold mb-4 md:w-72 lg:w-72">
//           Your sound best for your life
//         </h1>
//         <p className="text-gray-800 mb-6 md:w-72 lg:w-72 sm:w-full">
//           These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.
//         </p>
//         <a href="#shop" className="inline-flex items-center px-4 py-3 bg-red text-white rounded-lg shadow-md font-bold hover:bg-red-600 transition-colors">
//           Shop now
//           <FaArrowRight className="ml-2" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
