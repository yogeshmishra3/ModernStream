import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/1920x1080?nature')",
        }}
      ></div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center h-full px-6 bg-black bg-opacity-60">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-lg mt-4 text-gray-300 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          We create amazing web experiences with stunning animations and smooth
          effects. Join us in bringing designs to life!
        </motion.p>

        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default AboutSection;
