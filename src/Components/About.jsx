import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h3 className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
            About Us
          </h3>
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mt-4">
            Empowering businesses with{" "}
            <span className="text-blue-600">innovative solutions</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-600">TechOrbit</span>,
            we provide cutting-edge IT solutions to drive business growth. Our
            expert team leverages modern technology to deliver scalable,
            reliable, and secure systems.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900">Connect With Us</h3>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Follow us on social media to stay updated with our latest projects
            and insights. Join our community and be part of the future.
          </p>
          <div className="flex space-x-6 mt-8">
            {/* Facebook */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition duration-300 shadow-md hover:shadow-lg"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-blue-600 text-xl"
              />
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition duration-300 shadow-md hover:shadow-lg"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-blue-600 text-xl"
              />
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-100 transition duration-300 shadow-md hover:shadow-lg"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-red-600 text-xl"
              />
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition duration-300 shadow-md hover:shadow-lg"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-blue-600 text-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
