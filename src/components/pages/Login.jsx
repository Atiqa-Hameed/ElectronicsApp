import React from 'react';
import Header from "../Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      {/* Background Image */}
      <img
        src="/cir.jpg"  // Replace with your actual image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"  // Ensures the image covers the whole div
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-4 sm:px-6 lg:px-8"> 
      {/* Header Section */}
      <div className="absolute top-8 lg:top-0 w-full flex justify-center lg:justify-start lg:left-12">
        <Header />
      </div>
    

        {/* Login Form Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:justify-between justify-center items-center max-w-5xl w-full h-auto lg:h-[540px] md:h-[600px] mt-10 lg:mt-0">
          {/* Left Side: Login Form */}
          <div className="w-full md:w-96 mt-36 lg:mt-0 md:mt-0 px-4 sm:px-6 lg:px-8"> {/* Adjusted margin for smaller screens */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-red">Sign in</h1>
              <a href="#" className="text-xl md:text-3xl font-bold text-black">Sign up</a>
            </div>

            {/* Form */}
            <form>
            <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border border-red rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-red rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          

              {/* Forgot Password and Login Button */}
              <div className="flex justify-between items-center mb-4">
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  Forgot password?
                </a>
                <button
                  type="submit"
                  className="bg-red text-white py-2 px-10 lg:px-12 rounded-lg font-sans hover:bg-red-600 transition duration-300"
                >
                  login
                </button>
              </div>
            </form>

            {/* Or Separator */}
            <div className="flex items-center justify-between mt-6">
              <hr className="w-full border-gray" />
              <span className="text-gray-400 mx-2">OR</span>
              <hr className="w-full border-gray" />
            </div>

            {/* Social Login Icons */}
            <div className="flex justify-center mt-6 space-x-4">
              <a href="#" className="text-3xl">
                <FcGoogle />
              </a>
              <a href="#" className="text-3xl text-blue-500">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <img
              src="/elec.png"  // Replace with actual image path
              alt="Electronics with bow"
              className="h-[200px] w-[200px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;











// import React from 'react';
// import Header from "../Header";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";

// const Login = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
//       <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row md:justify-between justify-center items-center max-w-5xl w-full h-auto lg:h-[540px] md:h-[600px] mt-10 lg:mt-0">
        
//         {/* Header Section */}
//         <div className="absolute top-8 left-20 w-full justify-center flex flex-col">
//           <Header />
//         </div>

//         {/* Left Side: Login Form */}
//         <div className="w-full md:w-96 mt-20 md:mt-0 px-4"> {/* Adjusted margin for small screens */}
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl md:text-3xl font-bold text-red-500">Sign in</h1>
//             <a href="#" className="text-xl md:text-3xl font-bold text-black">Sign up</a>
//           </div>

//           {/* Form */}
//           <form>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full md:w-96 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full md:w-96 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//               />
//             </div>

//             {/* Forgot Password and Login Button */}
//             <div className="flex justify-between items-center mb-4">
//               <a href="#" className="text-sm text-gray-500 hover:underline">
//                 Forgot password?
//               </a>
//               <button
//                 type="submit"
//                 className="bg-red-500 text-white py-2 px-6 md:px-10 rounded-lg font-sans hover:bg-red-600 transition duration-300"
//               >
//                 login
//               </button>
//             </div>
//           </form>

//           {/* Or Separator */}
//           <div className="flex items-center justify-between mt-6">
//             <hr className="w-full border-gray-300" />
//             <span className="text-gray-400 mx-2">OR</span>
//             <hr className="w-full border-gray-300" />
//           </div>

//           {/* Social Login Icons */}
//           <div className="flex justify-center mt-6 space-x-4">
//             <a href="#" className="text-3xl">
//               <FcGoogle />
//             </a>
//             <a href="#" className="text-3xl text-blue-500">
//               <FaFacebook />
//             </a>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
//           <img
//             src="/src/assets/elec.png"  // Replace with actual image path
//             alt="Electronics with bow"
//             className="h-[250px] w-[250px] md:h-[450px] md:w-[450px] object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





//    <a href="#" className="text-xl md:text-3xl font-bold text-black">Sign up</a>
//   </div>

//   {/* Form */}
//   <form>
//     <div className="mb-4">
//       <input
//         type="text"
//         placeholder="Username"
//         className="w-full md:w-96 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//       />
//     </div>
//     <div className="mb-4">
//       <input
//         type="password"
//    / <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row md:justify-between justify-center items-center max-w-5xl w-full h-auto lg:h-[540px] md:h-[600px] mt-10 lg:mt-0">
        
// {/* Header Section */}
// <div className="absolute top-8 left-20 w-full justify-center flex flex-col">
//   <Header />
// </div>

// {/* Left Side: Login Form */}
// <div className="w-full md:w-96 mt-20 md:mt-0 px-4"> {/* Adjusted margin for small screens */}
//   <div className="flex justify-between items-center mb-6">
//     <h1 className="text-2xl md:text-3xl font-bold text-red-500">Sign in</h1>
//      placeholder="Password"
//         className="w-full md:w-96 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//       />
//     </div>

//     {/* Forgot Password and Login Button */}
//     <div className="flex justify-between items-center mb-4">
//       <a href="#" className="text-sm text-gray-500 hover:underline">
//         Forgot password?
//       </a>
//       <button
//         type="submit"
//         className="bg-red-500 text-white py-2 px-6 md:px-10 rounded-lg font-sans hover:bg-red-600 transition duration-300"
//       >
//         login
//       </button>
//     </div>
//   </form>

//   {/* Or Separator */}
//   <div className="flex items-center justify-between mt-6">
//     <hr className="w-full border-gray-300" />
//     <span className="text-gray-400 mx-2">OR</span>
//     <hr className="w-full border-gray-300" />
//   </div>

//   {/* Social Login Icons */}
//   <div className="flex justify-center mt-6 space-x-4">
//     <a href="#" className="text-3xl">
//       <FcGoogle />
//     </a>
//     <a href="#" className="text-3xl text-blue-500">
//       <FaFacebook />
//     </a>
//   </div>
// </div>

// {/* Right Side: Image */}
// <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
//   <img
//     src="/src/assets/elec.png"  // Replace with actual image path
//     alt="Electronics with bow"
//     className="h-[250px] w-[250px] md:h-[450px] md:w-[450px] object-cover"
//   />
// </div>
// </div>