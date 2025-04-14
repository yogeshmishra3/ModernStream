import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden bg-gradient-to-br  from-gray-900 to-black min-h-screen flex items-center justify-center py-12">
      {/* Animated Square Grid */}
      {squares.map((square) => (
        <motion.div
          key={square.id}
          className="absolute border border-cyan-500 bg-transparent opacity-20"
          style={{
            width: square.size,
            height: square.size,
            left: square.left,
            top: square.top,
            transform: "rotate(45deg)",
          }}
          animate={{
            y: [0, 40, 0],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: parseFloat(square.animationDuration),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Empowering Business with <br />
            <span className="text-cyan-400">Innovative Technology</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            At ModernStream, we drive success through cutting-edge solutions,
            seamless integration, and unmatched performance. Let's elevate your
            business to new heights!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.button
              className="bg-cyan-600 text-white font-bold px-8 py-3 rounded-full shadow-xl hover:bg-cyan-500 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            {/* Image */}
            <motion.img
              src="../developer.jpg"
              alt="modernstream Hero"
              className="w-full md:w-[400px] h-auto max-h-[500px] rounded-2xl shadow-2xl opacity-90 object-cover"
              whileHover={{ scale: 1.05 }}
            />

            {/* Floating Tech Element */}
            <motion.div
              className="absolute -top-6 left-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 bg-cyan-500 opacity-40 rotate-12 rounded-lg shadow-md"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
