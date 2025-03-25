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
      className="glass-card p-6 rounded-xl transition-all duration-700 ease-out opacity-0 translate-y-8"
    >
      <svg
        className="w-8 h-8 text-blue-500 mb-4"
        fill="currentColor"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
      </svg>

      <p className="text-slate-700 mb-6">{quote}</p>

      <div className="flex items-center">
        <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
        <div className="ml-3">
          <h4 className="font-semibold text-slate-800">{author}</h4>
          <p className="text-sm text-slate-500">
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
      author: "Alex Morgan",
      role: "Product Designer",
      company: "Designflow",
    },
    {
      quote:
        "I've never seen a product that so perfectly balances aesthetic beauty with functional simplicity. It's transformed how our team works.",
      author: "Jamie Chen",
      role: "CTO",
      company: "TechVision",
    },
    {
      quote:
        "The minimalist approach doesn't just look good—it makes our workflows faster and more intuitive. This is design with purpose.",
      author: "Sam Taylor",
      role: "Creative Director",
      company: "Artisan Studios",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-indigo-50 rounded-full opacity-70 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-medium bg-blue-50 text-blue-600 rounded-full px-4 py-1.5 mb-4">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            What our clients say
          </h3>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
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
