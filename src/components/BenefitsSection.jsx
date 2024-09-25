const BenefitsSection = () => {
  return (
    <section className="mt-24 px-4 lg:px-0 bg-zinc-200 ">
      {/* Statistics Section */}
      <div className="flex justify-center bg-gray py-4 gap-44">
        <div className="text-left">
          <h2 className="text-3xl font-bold">870</h2>
          <p className="text-gray-600">Shops</p>
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-bold">20,000+</h2>
          <p className="text-gray-600">Users</p>
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-bold">260</h2>
          <p className="text-gray-600">Subscribers</p>
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-bold">73,990</h2>
          <p className="text-gray-600">Active</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mt-12 ">
        <h4 className="text-red font-sans mb-2">Why choose us</h4>
        <h2 className="text-3xl font-bold mb-8">
          Benefits of online buying service with us
        </h2>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center mb-12 max-w-screen-xl px-16 mt-24">
        <div className="bg-zinc-300 py-10 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h3 className="font-semibold mb-4 text-lg">Choose teaching</h3>
          <p className="text-gray-600 text-sm">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's.
          </p>
        </div>
        <div className="bg-zinc-300 py-10 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h3 className="font-semibold mb-4 text-lg">24/7 available</h3>
          <p className="text-gray-600 text-sm">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's.
          </p>
        </div>
        <div className="bg-zinc-300 py-10 px-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h3 className="font-semibold mb-4 text-lg">Whiteboard</h3>
          <p className="text-gray-600 text-sm">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's.
          </p>
        </div>
        <div className="bg-zinc-300 py-10 px-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h3 className="font-semibold mb-4 text-lg">Affordable price</h3>
          <p className="text-gray-600 text-sm">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-50 p-8 h-auto">
  {/* Left side image */}
  <div className="relative mb-6 lg:mb-0 lg:w-1/4 ml-12">
    <img
      src="/src/assets/girl.png"
      alt="Person using mobile"
      className=" object-cover w-[300px] h-[300px] "
    />
    {/* Overlayed circle with icons */}
    <div className="absolute bottom-0 right-[-4px] transform translate-x-1/2 translate-y-1/2 bg-white rounded-full p-4 shadow-lg">
      <img
        src="/src/assets/icon.png"
        alt="Icons overlay"
        className="w-16 h-16 object-cover"
      />
    </div>
  </div>

  {/* Right side text content */}
  <div className="lg:w-2/4 px-6 text-left mr-32">
    <h4 className="text-red font-semibold mb-2">
      Customer your product us
    </h4>
    <h3 className="text-2xl font-bold mb-4 w-2/3">
      Personalized professional online buying on your schedule
    </h3>
    <p className="text-gray-600 mb-6 text-sm">
      Simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book.
    </p>
    <button className="bg-red text-white px-7 py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300 mt-6">
      Get started
    </button>
  </div>
</div>




    </section>
  );
};

export default BenefitsSection;
