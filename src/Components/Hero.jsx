import { useEffect, useState } from "react";

const Hero = () => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const createSquares = () => {
      const squaresArray = new Array(6).fill("").map((_, index) => ({
        id: index,
        size: Math.random() * 40 + 20,
        left: Math.random() * 90 + "%",
        top: Math.random() * 50 + "%",
        animationDuration: Math.random() * 12 + 8 + "s",
      }));
      setSquares(squaresArray);
    };
    createSquares();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white mt-7 min-h-screen flex items-center justify-center py-12">
      {/* Animated Square Grid */}
      {squares.map((square) => (
        <div
          key={square.id}
          className="absolute border border-blue-500 bg-transparent opacity-30"
          style={{
            width: square.size,
            height: square.size,
            left: square.left,
            top: square.top,
            transform: "rotate(45deg)",
            animation: `moveSquare ${square.animationDuration} linear infinite`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-black leading-tight mb-6">
            Empowering Business with <br />
            <span className="text-blue-600">Innovative Technology</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At ModernStream, we drive success through cutting-edge solutions,
            seamless integration, and unmatched performance. Let's elevate your
            business to new heights!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              href="#Service"
            >
              Explore Our Work
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
          <div className="relative">
            {/* Image */}
            <img
              src="../developer.jpg"
              alt="modernstream Hero"
              className="w-full md:w-[400px] h-auto max-h-[500px] rounded-2xl shadow-xl opacity-90 object-cover"
            />

            {/* Floating Tech Element */}
            <div className="absolute -top-6 left-10">
              <div className="w-12 h-12 bg-blue-500 opacity-40 rotate-12 rounded-lg shadow-md animate-float"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes moveSquare {
            0% { transform: translateY(0) rotate(45deg); opacity: 0.5; }
            50% { transform: translateY(40px) rotate(45deg); opacity: 0.3; }
            100% { transform: translateY(0) rotate(45deg); opacity: 0.5; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
