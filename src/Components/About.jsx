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
          <h3 className="text-3xl font-bold text-white">Connect With Us</h3>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Follow us on social media to stay updated with our latest projects.
          </p>
          <div className="flex space-x-6 mt-8">
            {[
              {
                icon: faFacebookF,
                color: "text-cyan-400",
                hover: "hover:bg-cyan-900",
              },
              {
                icon: faTwitter,
                color: "text-cyan-400",
                hover: "hover:bg-cyan-900",
              },
              {
                icon: faYoutube,
                color: "text-red-400",
                hover: "hover:bg-red-900",
              },
              {
                icon: faLinkedinIn,
                color: "text-cyan-400",
                hover: "hover:bg-cyan-900",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center ${social.hover} transition duration-300 shadow-md hover:shadow-2xl`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className={`${social.color} text-xl`}
                />
              </motion.a>
            ))}
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
