import React, { useRef, useEffect } from "react";

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-8");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="bg-gray-800 border border-gray-700 p-6 rounded-xl transition-all duration-700 ease-out opacity-0 translate-y-8 hover:scale-105 hover:border-cyan-500 group"
    >
      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Custom Software Development",
      description:
        "Tailored solutions designed to fit your unique business needs, built with cutting-edge technologies for scalability and performance.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Cloud Solutions & Migration",
      description:
        "Seamless transition to cloud infrastructure with optimized architecture for security, reliability, and cost-efficiency.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: "AI & Machine Learning Solutions",
      description:
        "Leverage advanced AI technologies to automate processes, gain insights, and create intelligent systems that drive business innovation.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      title: "Cybersecurity Services",
      description:
        "Comprehensive security solutions to protect your digital assets, ensure compliance, and defend against evolving cyber threats.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-gray-900"
    >
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-900 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-900 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-medium bg-gray-800 text-cyan-400 rounded-full px-4 py-1.5 mb-4">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Innovative Technology Solutions for Digital Transformation
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We deliver cutting-edge IT services that drive growth, efficiency,
            and competitive advantage for businesses in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
