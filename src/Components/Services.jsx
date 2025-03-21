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
    <section className="bg-gradient-to-br from-[#0b0f19] via-[#151a29] to-[#1a1f2e] text-white py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="inline-block text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3 tracking-wider">
            WHAT WE DO
          </h2>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            We help to build clients their dream projects
          </h1>
        </div>

        {/* Explore Link */}
        <div className="flex justify-between items-center mb-12">
          <div className="h-px w-1/4 bg-gradient-to-r from-transparent to-blue-500/30"></div>
          <a
            href="/services"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
          >
            EXPLORE SERVICES →
          </a>
          <div className="h-px w-1/4 bg-gradient-to-l from-transparent to-blue-500/30"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-gray-100 text-black rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl">
                  {service.icon}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>View Details</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
