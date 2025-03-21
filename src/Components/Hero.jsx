const Hero = () => {
  return (
    <section className="bg-gradient-to-r min-h-screen flex items-center mt-4 justify-center py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-black leading-tight mb-6">
            Empowering Business with <br />
            <span className="text-blue-600">Innovative Technology</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At TechOrbit, we drive success through cutting-edge solutions,
            seamless integration, and unmatched performance. Let's elevate your
            business to new heights!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              href="#Service"
            >
              Explore Our Work
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            {/* Gradient Circle Behind Image */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            {/* Image */}
            <img
              src="../developer.jpg"
              alt="TechOrbit Hero"
              className="w-full md:w-[400px] h-auto max-h-[500px] rounded-2xl shadow-xl opacity-90 object-cover"
            />

            {/* Animated Dots */}
            <div className="absolute -bottom-6 -right-6">
              <div className="w-16 h-16 bg-blue-300 rounded-full animate-bounce shadow-lg"></div>
            </div>

            {/* Rotating Circle */}
            <div className="absolute top-0 right-0">
              <div className="w-20 h-20 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
            </div>

            {/* Floating Square for Depth */}
            <div className="absolute -top-6 left-10">
              <div className="w-12 h-12 bg-blue-500 opacity-40 rotate-12 rounded-lg shadow-md animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
