import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";

const TestimonialCard = ({ quote, author, role, company, delay = 0 }) => {
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
      className="glass-card bg-gray-800 border border-gray-700 p-6 rounded-xl transition-all duration-700 ease-out opacity-0 translate-y-8 hover:shadow-2xl hover:scale-105 transform transition"
    >
      <svg
        className="w-8 h-8 text-cyan-500 mb-4"
        fill="currentColor"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
      </svg>

      <p className="text-gray-300 mb-6 italic">{quote}</p>

      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        <div className="ml-3">
          <h4 className="font-semibold text-white">{author}</h4>
          <p className="text-sm text-gray-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail is remarkable. Every interaction feels carefully crafted, creating a user experience that's both efficient and enjoyable.",
      author: "Amit Tiwari",
      role: "Product Designer",
      company: "Naitik Logistics",
    },
    {
      quote:
        "I've never seen a product that so perfectly balances aesthetic beauty with functional simplicity. It's transformed how our team works.",
      author: "Vedant Ghole",
      role: "CTO",
      company: "Vedant Surface Coating Industries",
    },
    {
      quote:
        "The minimalist approach doesn't just look good—it makes our workflows faster and more intuitive. This is design with purpose.",
      author: "",
      role: "Creative Director",
      company: "Artisan Studios",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-gray-900"
    >
      {/* Background decorations */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-cyan-900 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-medium bg-gray-800 text-cyan-400 rounded-full px-4 py-1.5 mb-4">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What our clients say
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We let our work speak for itself, but here's what others have to say
            about our approach to design and usability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PodcastLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center"
      >
        Welcome to the Podcast
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg mt-4 text-gray-400"
      >
        Listen to the latest episodes and explore insightful conversations.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700"
      >
        Explore Episodes
      </motion.button>

      <Testimonials />
    </div>
  );
}
