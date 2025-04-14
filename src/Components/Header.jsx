import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
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

  // Function to open modal with dropdown content
  const openModal = (dropdownItems) => {
    setModalContent(dropdownItems);
    setShowModal(true);
    // Close the mobile menu when opening a modal
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-screen bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-2xl z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-white">
            Modern<span className="text-cyan-400">Stream</span>
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => openModal(item.dropdown)}
                  className="text-gray-300 hover:text-cyan-400 transition duration-300 font-medium flex items-center py-2"
                >
                  {item.name}
                  <svg
                    className="w-4 h-4 ml-1"
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
                </button>
              ) : (
                <a
                  href={item.path}
                  className="text-gray-300 hover:text-cyan-400 transition duration-300 font-medium flex items-center py-2"
                >
                  {item.name}
                </a>
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
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 text-2xl focus:outline-none"
          >
            {isOpen ? "" : "☰"}
          </button>
          {isOpen && (
            <div className=" inset-0 flex items-center justify-center bg-gray-900 bg-opacity-95  animate-fadeIn">
              <div className="container max-w-md mx-auto px-4 py-6 mt-0 rounded-lg">
                <div className="flex justify-end items-end ">
                  {/* <span className="text-2xl font-bold text-white">
                    Modern<span className="text-cyan-400">Stream</span>
                  </span> */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 text-2xl right-0 focus:outline-none"
                  >
                    ✕
                  </button>
                </div>

                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-700">
                    {item.dropdown ? (
                      <div
                        className="flex justify-between items-center py-4"
                        onClick={() => openModal(item.dropdown)}
                      >
                        <span className="text-gray-300 text-lg hover:text-cyan-400 transition duration-300 cursor-pointer">
                          {item.name}
                        </span>
                        <svg
                          className="w-5 h-5 text-gray-300"
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
                      </div>
                    ) : (
                      <a
                        href={item.path}
                        className="block py-4 text-gray-300 text-lg ml-20 mr-20 hover:text-cyan-400 transition duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}

                <div className="">
                  <button
                    onClick={() => {
                      handleGetQuote();
                      setIsOpen(false);
                    }}
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

      {/* Modal/Popup for dropdown content */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-lg shadow-2xl max-w-md  top-0 w-full mx-4 border-t-4 border-cyan-400 animate-dropdownSlideIn">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Our Services</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-3">
                {modalContent.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-cyan-400 transition duration-200 rounded-lg"
                    onClick={() => setShowModal(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .animate-dropdownSlideIn {
          animation: dropdownSlideIn 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
}
