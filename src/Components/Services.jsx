import { motion } from "framer-motion";
import webdevImg from "../assets/webdev.jpg";
import dmImg from "../assets/GD.jpg";
import AppdevImg from "../assets/AppDev.jpg";

const services = [
  {
    title: "Website Development",
    description:
      "We create responsive, user-friendly, and scalable websites tailored to your business needs.",
    image: webdevImg,
    icon: "🌐",
  },
  {
    title: "Graphic Design",
    description:
      "Our creative team delivers stunning graphics to make your brand stand out.",
    image: dmImg,
    icon: "🎨",
  },
  {
    title: "App Development",
    description:
      "We build cross-platform and native apps with a seamless user experience.",
    image: AppdevImg,
    icon: "📱",
  },
];

const Services = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-[#0b0f19] via-[#151a29] to-[#1a1f2e] text-white py-24"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="inline-block text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3 tracking-wider">
            WHAT WE DO
          </h2>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            We help to build clients their dream projects
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-b from-white to-gray-100 text-black rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <motion.a
                  href="#"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View Details
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
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
