import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-gray-100 py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="transform transition duration-500 hover:scale-[1.02]">
          <h3 className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
            About Us
          </h3>
          <h2 className="text-5xl font-extrabold text-white leading-tight mt-4">
            Empowering businesses with{" "}
            <span className="text-cyan-400">innovative solutions</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            At <span className="font-semibold text-cyan-400">ModernStream</span>
            , we provide cutting-edge IT solutions to drive business growth. Our
            expert team leverages modern technology to deliver scalable,
            reliable, and secure systems.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:bg-cyan-500 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="transform transition duration-500 hover:scale-[1.02]">
          <h3 className="text-3xl font-bold text-white">Connect With Us</h3>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Follow us on social media to stay updated with our latest projects
            and insights. Join our community and be part of the future.
          </p>
          <div className="flex space-x-6 mt-8">
            {/* Facebook */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-900 transition duration-300 shadow-md hover:shadow-2xl"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-cyan-400 text-xl"
              />
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-900 transition duration-300 shadow-md hover:shadow-2xl"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-cyan-400 text-xl"
              />
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-900 transition duration-300 shadow-md hover:shadow-2xl"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-red-400 text-xl"
              />
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-900 transition duration-300 shadow-md hover:shadow-2xl"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-cyan-400 text-xl"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="max-w-7xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:bg-gray-700">
            <h1 className="text-cyan-400 text-2xl font-semibold tracking-wider uppercase mb-3">
              Our Vision
            </h1>
            <h4 className="text-2xl font-bold text-white mb-4">
              Creating a digital future for all
            </h4>
            <p className="text-gray-300 leading-relaxed">
              We envision a world where businesses of all sizes have access to
              transformative technology that creates opportunities, drives
              innovation, and fosters sustainable growth. Our aim is to be at
              the forefront of digital transformation, setting new standards for
              excellence in the IT industry.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:bg-gray-700">
            <h3 className="text-cyan-400 text-2xl font-semibold tracking-wider uppercase mb-3">
              Our Mission
            </h3>
            <h4 className="text-2xl font-bold text-white mb-4">
              Delivering excellence through innovation
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower organizations through customized
              technology solutions that address specific challenges and unlock
              new possibilities. We are committed to delivering exceptional
              value through collaborative partnerships, technical expertise, and
              unwavering dedication to client success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
