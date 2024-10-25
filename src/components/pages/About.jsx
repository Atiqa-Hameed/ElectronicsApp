import React from 'react';
import Header from "../Header";
import BenefitsSection from '../BenefitsSection';
import Footer from '../Footer';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      <div className="lg:h-10 h-14 w-full flex items-center justify-center bg-gray absolute left-0 right-0">
        <p className="font-sans text-center px-4"> 
          Are you a university or school looking for an online partnership?
        </p>
      </div>
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center lg:mt-20 md:mt-20 sm:mt-32 mt-44 px-4 md:px-14">
        
        {/* Text and Button Section */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center md:items-start p-4 md:ml-8 mt-12"> {/* Center text and button on small/medium screens */}
          <h1 className="text-4xl font-bold mb-4 w-full md:w-3/4 text-center md:text-left"> {/* Center text on small screens */}
            Open a Mobile Accessories Store Online
          </h1>
          <p className="mb-6 text-2xl w-full md:w-3/4 text-center md:text-left"> {/* Center text on small screens */}
            Best Tips to Start an Online Business
          </p>
          <button className="bg-red text-white py-2 px-5 rounded-lg">
            Shop Now
          </button>
        </div>
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-20">
          <img
            src="/elec.png"  // Replace with actual image path
            alt="Electronics with bow"
            className="sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] object-cover"
          />
        </div>
      </div>
      <BenefitsSection />
      <Footer />
    </div>
  );
}

export default About;



