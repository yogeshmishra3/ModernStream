import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const services = [
  {
    title: "Static Websites",
    description:
      "We create responsive, user-friendly, and scalable static websites tailored to your business needs.",
    icon: "🌐",
    color: "from-blue-500 to-blue-700",
    shadowColor: "shadow-blue-500/30",
  },
  {
    title: "Next.js Websites",
    description:
      "We build high-performance, SEO-friendly websites using Next.js for optimal user experience.",
    icon: "⚡",
    color: "from-purple-500 to-purple-700",
    shadowColor: "shadow-purple-500/30",
  },
  {
    title: "Portfolio Websites",
    description:
      "Showcase your work with beautiful, custom-designed portfolio websites that highlight your achievements.",
    icon: "🎨",
    color: "from-pink-500 to-pink-700",
    shadowColor: "shadow-pink-500/30",
  },
  {
    title: "Company Websites and CMS",
    description:
      "Enterprise-grade websites with content management systems that give you full control over your digital presence.",
    icon: "🏢",
    color: "from-green-500 to-green-600",
    shadowColor: "shadow-green-500/30",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions designed to streamline your business processes and enhance productivity.",
    icon: "💻",
    color: "from-orange-500 to-orange-600",
    shadowColor: "shadow-orange-500/30",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={ref}
      id="services"
      className="bg-gradient-to-br from-[#0b0f19] via-[#151a29] to-[#1a1f2e] text-white py-16 sm:py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Section Heading */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mx-auto">
            <h2 className="inline-block text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3 tracking-wider px-4 py-1 rounded-full border border-cyan-500/20">
              WHAT WE DO
            </h2>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-6 mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            We help to build clients their{" "}
            <span className="text-cyan-400">dream projects</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Our team of experts delivers cutting-edge digital solutions for
            businesses of all sizes, with a focus on performance and user
            experience.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 ${service.shadowColor}`}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 15px 5px rgba(var(--${
                  service.color.split("-")[1]
                }-500-rgb), 0.15)`,
              }}
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} blur-md opacity-20`}
                ></div>
              </div>

              {/* Avatar Section */}
              <div className="relative p-6 flex flex-col items-center">
                {/* Avatar Circle */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl text-white shadow-lg mb-5 transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300 ${service.shadowColor}`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-center text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-r ${service.color} opacity-50 blur-lg`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
