const BenefitsSection = () => {
  const stats = [
    { number: "870", label: "Shops" },
    { number: "20,000+", label: "Users" },
    { number: "260", label: "Subscribers" },
    { number: "73,990", label: "Active" },
  ];

  const features = [
    {
      title: "Choose teaching",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      title: "24/7 available",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      title: "Whiteboard",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      title: "Affordable price",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
  ];

  return (
    <section className="mt-24 px-4 lg:px-0 bg-zinc-200 ">
      {/* Statistics Section */}
      <div className="flex flex-col sm:flex-row justify-center bg-gray py-4 gap-10 sm:gap-20 lg:gap-44">
        {stats.map(({ number, label }, index) => (
          <div key={index} className="text-center sm:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold">{number}</h2>
            <p className="text-gray-600">{label}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mt-8 lg:mt-12">
        <h4 className="text-red font-sans mb-2 text-sm lg:text-base">
          Why choose us
        </h4>
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          Benefits of online buying <br /> service with us
        </h2>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center items-center mb-12 max-w-screen-xl px-4 lg:px-16 mt-12 lg:mt-24">
        {features.map(({ title, description }, index) => (
          <div
            key={index}
            className="bg-zinc-300 py-6 px-4 md:py-10 md:px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <h3 className="font-semibold mb-2 md:mb-4 text-base md:text-lg">
              {title}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">{description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto mt-12 lg:mt-24">
        {/* Top Section: Image on Left, Text on Right */}
        <div className="flex flex-col lg:flex-row items-center mb-12 px-4 lg:px-0">
          {/* Left side image */}
          <div className="relative mb-6 lg:mb-0 lg:w-1/3 lg:ml-20">
            <img
              src="/girlwithphone.png"
              alt="Person using mobile"
              className="object-cover w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]"
            />
            {/* Overlayed circle with icons */}
            <div className="absolute bottom-0 right-[80px] lg:right-[120px] transform translate-x-1/2 translate-y-1/2 bg-white rounded-full p-3 lg:p-4 shadow-lg">
              <img
                src="/icon.png"
                alt="Icons overlay"
                className="w-12 h-12 lg:w-16 lg:h-16 object-cover"
              />
            </div>
          </div>

          {/* Right side text content */}
          <div className="lg:w-2/4 px-4 lg:px-6 text-center lg:text-left lg:mr-32 mt-12">
            <h4 className="text-red font-sans mb-2 text-sm lg:text-base">
              Customer your product us
            </h4>
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:w-3/5">
              Personalized professional online buying on your schedule
            </h3>
            <p className="text-gray-600 mb-6 text-xs lg:text-sm lg:w-3/4">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <button className="bg-red text-white px-4 lg:px-7 py-2 lg:py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300 mt-6">
              Get started
            </button>
          </div>
        </div>

        {/* Bottom Section: Text on Left, Images on Right */}
        <div className="flex flex-col lg:flex-row items-center mt-16 lg:mt-32 px-4 lg:px-0">
          {/* Left side text content */}
          <div className="lg:w-2/4 px-4 lg:px-6 text-center lg:text-left lg:ml-16">
            <h4 className="text-red font-sans mb-2 text-sm lg:text-base">
              Customer your product us
            </h4>
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:w-3/5">
              Personalized professional online buying on your schedule
            </h3>
            <p className="text-gray-600 mb-6 text-xs lg:text-sm lg:w-3/4">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <button className="bg-red text-white px-4 lg:px-7 py-2 lg:py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300 mt-6">
              Get started
            </button>
          </div>

          {/* Right side double image */}
          <div className="relative lg:w-1/4 lg:mr-52 lg:min-h-[310px] mt-8 lg:mt-0">
            <img
              src="/img.png"
              alt="Product Image 1"
              className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] object-cover absolute top-0 left-10 lg:left-20 z-10"
            />
            <img
              src="/airpods.png"
              alt="Product Image 2"
              className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] object-cover absolute top-16 lg:top-20 left-36 lg:left-56 z-20"
            />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-12 mt-16 relative">
        <h4 className="text-center text-red font-bold mb-2 text-sm lg:text-base">
          Our testimonial
        </h4>
        <h2 className="text-center text-2xl lg:text-3xl font-bold mb-8">
          What our users say about us
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 relative">
          {/* Left Image */}
          <img
            src="/boy.png" // Replace with the actual path of the left side image
            alt="Left Testimonial"
            className="w-14 h-14 rounded-full mb-4 object-cover absolute top-0 left-1/2 transform -translate-x-[100px] sm:-translate-x-[100px] md:-translate-x-[100px] lg:-translate-x-[100px]"
          />

          {/* Main Testimonial */}
          <div className="text-center flex flex-col items-center max-w-xs mx-auto">
            <img
              src="/man.png" // Replace with the actual path of the main user's image
              alt="Monica Smith"
              className="w-16 h-16 rounded-full mb-4 object-cover border-4 border-blue-600" // Added border classes
            />
            <h5 className="font-bold text-lg">About Monica</h5>
            <p className="text-sm text-gray-500">Student at Finance</p>
            <p className="text-gray-600 text-sm mt-2">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </p>
          </div>

          {/* Right Image */}
          <img
            src="/girl.png" // Replace with the actual path of the right side image
            alt="Right Testimonial"
            className="w-14 h-14 rounded-full mb-4 object-cover absolute top-0 right-1/2 transform translate-x-[100px] sm:translate-x-[100px] md:translate-x-[100px] lg:translate-x-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
