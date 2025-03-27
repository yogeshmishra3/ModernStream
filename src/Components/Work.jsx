import { useState } from "react";
import CRMImg from "../assets/CRM.jpg";
import WebImgg from "../assets/Website.jpg";
import AppImg from "../assets/App.jpg";

const categories = ["All", "Web", "App", "Web Design"];
const works = [
  {
    id: 1,
    category: "Web",
    title: "modernstream CRM",
    description:
      "A comprehensive customer relationship management system with advanced analytics and reporting features.",
    image: CRMImg,
  },
  {
    id: 2,
    category: "Web Design",
    title: "Static Transport Website",
    description:
      "Modern, responsive website design for a transportation company featuring animated elements and intuitive navigation.",
    image: WebImgg,
  },
  {
    id: 3,
    category: "App",
    title: "Ascetic App",
    description:
      "Minimalist productivity mobile application with focus tracking and customizable workflow management.",
    image: AppImg,
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            Creative Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Recent Works
          </h2>
          <div className="h-1 w-24 bg-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore some of our latest creative projects that push the
            boundaries of design and functionality.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 group border border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-50 object-cover transition duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              </div>
              <div className="p-6">
                <span className="text-sm text-cyan-400 font-medium bg-gray-900 px-3 py-1 rounded-full">
                  {work.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{work.description}</p>
                <button className="text-cyan-400 font-medium inline-flex items-center group-hover:text-cyan-300 transition-all duration-300 hover:underline">
                  View Details
                  <svg
                    className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
