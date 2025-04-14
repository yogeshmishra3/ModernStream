import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-gray-900 to-black text-gray-100 py-24 px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          className="transform transition duration-500 hover:scale-[1.02]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h3 className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
            About Us
          </h3>
          <h2 className="text-5xl font-extrabold text-white leading-tight mt-4">
            Empowering businesses with{" "}
            <span className="text-cyan-400">innovative solutions</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            At <span className="font-semibold text-cyan-400">ModernStream</span>
            , we provide cutting-edge IT solutions to drive business growth.
          </p>
          <div className="mt-10">
            <motion.a
              href="#"
              className="inline-block bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:bg-cyan-500 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="transform transition duration-500 hover:scale-[1.02]"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Connect With Us
          </h3>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            We're always open to discussing new projects and opportunities.
            Reach out to us directly to start a conversation.
          </p>
          <div className="mt-6 sm:mt-8">
            <motion.a
              href="/contact"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Vision and Mission Section */}
      <div className="max-w-7xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vision */}
          <motion.div
            className="bg-gray-800 p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:bg-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 className="text-cyan-400 text-2xl font-semibold tracking-wider uppercase mb-3">
              Our Vision
            </h1>
            <h4 className="text-2xl font-bold text-white mb-4">
              Creating a digital future for all
            </h4>
            <p className="text-gray-300 leading-relaxed">
              We envision a world where businesses of all sizes have access to
              transformative technology that fosters sustainable growth.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-gray-800 p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:bg-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-cyan-400 text-2xl font-semibold tracking-wider uppercase mb-3">
              Our Mission
            </h3>
            <h4 className="text-2xl font-bold text-white mb-4">
              Delivering excellence through innovation
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower organizations through customized
              technology solutions that unlock new possibilities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
