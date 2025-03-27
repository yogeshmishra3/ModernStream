import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Navigation items with routes for IT company
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "Mobile Apps", path: "/services/mobile-apps" },
        { name: "Cloud Solutions", path: "/services/cloud-solutions" },
        { name: "IT Consulting", path: "/services/it-consulting" },
      ],
    },
    {
      name: "Testimonial",
      path: "/testimonal",
    },
    { name: "Contact", path: "/contact" },
  ];

  // Function to handle the quote request
  const handleGetQuote = () => {
    window.open(
      "https://wa.me/7410730220?text=I'm%20interested%20in%20getting%20a%20quote%20for%20your%20services.",
      "_blank"
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-2xl z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-white">
            Modern<span className="text-cyan-400">Stream</span>
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.path}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 font-medium flex items-center py-2"
              >
                {item.name}
                {item.dropdown && (
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>

              {/* Dropdown menu */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-2xl z-50 animate-dropdownSlideIn">
                  <div className="py-2 rounded-lg border-t-4 border-cyan-400">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.path}
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-cyan-400 transition duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleGetQuote}
            className="bg-cyan-600 text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition duration-300 shadow-xl transform hover:scale-105"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-50 overflow-y-auto animate-slideIn">
              <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold text-white">
                    Modern<span className="text-cyan-400">Stream</span>
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 text-2xl focus:outline-none"
                  >
                    ✕
                  </button>
                </div>

                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-700">
                    <div
                      className="flex justify-between items-center py-4"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      <a
                        href={item.path}
                        className="text-gray-300 text-lg hover:text-cyan-400 transition duration-300"
                      >
                        {item.name}
                      </a>
                      {item.dropdown && (
                        <svg
                          className={`w-5 h-5 text-gray-300 transform transition duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </div>
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="pl-4 pb-4">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="block py-2 text-gray-400 hover:text-cyan-400 transition duration-300"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-8">
                  <button
                    onClick={handleGetQuote}
                    className="w-full bg-cyan-600 text-white py-3 rounded-full hover:bg-cyan-500 transition duration-300 shadow-xl"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .animate-dropdownSlideIn {
          animation: dropdownSlideIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
