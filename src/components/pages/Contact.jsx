import React from "react";
import Header from "../Header";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      {/* Background Image */}
      <img
        src="/cir.jpg" // Replace with your actual image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl" // Ensures the image covers the whole div
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="absolute top-8 lg:top-0 w-full flex justify-center lg:justify-start lg:left-12">
          <Header />
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:justify-between justify-center items-center max-w-5xl w-full h-auto lg:h-[565px] md:h-[600px] mt-10 lg:mt-0">
          {/* Left Side: Contact Info */}
          <div className="w-full md:w-96 mt-36 lg:mt-0 md:mt-0 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Contact us</h2>
            <p className="text-gray-600 mb-4 text-sm">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="text-gray-600">
              <p>Email: atiqa@gmail.com</p>
              <p>Phone: +92 302 5058 413</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white shadow-lg rounded-2xl p-6 lg:p-8 flex flex-col justify-center items-center max-w-5xl h-auto lg:h-[470px] md:h-[500px] mt-10 lg:mt-12 w-full sm:w-[560px]">
            {/* Contact Us Text */}
            <div className="w-full text-left">
              <h2 className="text-xl font-bold mb-2 w-full sm:w-2/3">
                We'd love to hear from you! Let's get in touch
              </h2>
            </div>

            {/* Form */}
            <form className="w-full">
              {/* Name and User Inputs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full px-3 py-1 border border-red rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 mb-2"
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="user"
                    className="block text-sm font-medium"
                  >
                    User
                  </label>
                  <input
                    type="text"
                    id="user"
                    placeholder="User"
                    className="w-full px-3 py-1 border border-red rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 mb-2"
                  />
                </div>
              </div>

              {/* Email and Phone Number Inputs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-3 py-1 border border-red rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 mb-2"
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone number"
                    className="w-full px-3 py-1 border border-red rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 mb-2"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-3 py-1 border border-red rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 mb-2"
                  />
              </div>

              {/* Textarea Input */}
              <div className="mb-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium"
                >
                  Type text
                </label>
                <textarea
                  id="message"
                  placeholder="Type here"
                  className="w-full px-3 py-1 border border-red rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  rows="5"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-left">
                <button
                  type="submit"
                  className="bg-red text-white py-2 px-4 rounded-lg font-sans hover:bg-red-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
