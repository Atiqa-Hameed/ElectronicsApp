const Features = () => {
    return (
      <div className="text-center overflow-hidden">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold my-12">
          Feature's
        </h1>
  
        {/* Feature Section */}
        <div className="relative w-full bg-[#BCCDE0] h-[400px] sm:h-[450px] md:h-[450px] lg:h-[500px] flex justify-center items-center mb-16">
          {/* Stacked "HEADPHONES" Text */}
          <div className="absolute left-0 top-0 h-full w-full flex items-center z-0">
            {/* Adjusted font size and position for responsiveness */}
            <span className="absolute text-[30px] sm:text-[50px] md:text-[60px] font-bold text-gray-200 opacity-60 rotate-90 left-[-70px] sm:left-[-85px]">
              HEADPHONES
            </span>
            <span className="absolute text-[30px] sm:text-[50px] md:text-[60px] font-bold text-gray-200 opacity-40 rotate-90 left-[-10px] sm:left-[0]">
              HEADPHONES
            </span>
            <span className="absolute text-[30px] sm:text-[50px] md:text-[60px] font-bold text-gray-200 opacity-35 rotate-90 left-[60px] sm:left-[85px]">
              HEADPHONES
            </span>
            <span className="absolute text-[30px] sm:text-[50px] md:text-[60px] font-bold text-gray-200 opacity-20 rotate-90 left-[130px] sm:left-[170px]">
              HEADPHONES
            </span>
            <span className="absolute text-[30px] sm:text-[50px] md:text-[60px] font-bold text-gray-200 opacity-15 rotate-90 left-[200px] sm:left-[255px]">
              HEADPHONES
            </span>
  
            {/* Image Overlay */}
            <img
            src="/Blue.png" // Ensure image path is correct
            alt="Headphones"
            className="absolute left-28 top-0 h-full object-cover rotate-[32deg] w-1/2 sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] object-center"

          />
          
          </div>
  
          {/* Text Content */}
          <div className="absolute ml-4 sm:ml-8 md:ml-28 h-full flex flex-col justify-center p-4 sm:p-6 text-left text-black z-20">
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold">Amazing feature</h2>
            <div className="mt-4 sm:mt-6">
              <p className="text-base sm:text-lg font-bold">Touch Controls</p>
              <p className="text-sm sm:text-base text-stone-600 w-40 sm:w-48 md:w-52">
                Some headphones have touch-sensitive surfaces for controlling playback.
              </p>
            </div>
            <div className="mt-6 sm:mt-8">
              <p className="text-base sm:text-lg font-bold">Sound Quality</p>
              <p className="text-sm sm:text-base text-stone-600 w-40 sm:w-48 md:w-52">
                This includes considerations like bass response, clarity, and overall audio fidelity.
              </p>
            </div>
            <div className="mt-6 sm:mt-8">
              <p className="text-base sm:text-lg font-bold">Microphone</p>
              <p className="text-sm sm:text-base text-stone-600 w-40 sm:w-48 md:w-52">
                Built-in microphones enable hands-free calling and voice commands.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  
  
  
  
  
  
  
  
