import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
      name: "Testimonal",
      path: "/testimonal",
    },
    { name: "Contact", path: "/contact" },
  ];

  // Function to handle the quote request
  const handleGetQuote = () => {
    // You can replace this with your desired functionality
    // For example, open a modal, navigate to a contact page, etc.
    // window.location.href = "/contact?requestQuote=true";

    // Alternatively, if you want to use the WhatsApp link like in the mobile version:
    window.open(
      "https://wa.me/7410730220?text=I'm%20interested%20in%20getting%20a%20quote%20for%20your%20services.",
      "_blank"
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-50 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-black">
            Modern<span className="text-blue-600">Stream</span>
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.path}
                className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium flex items-center py-2"
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
              {item.dropdown && (
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top scale-95 group-hover:scale-100">
                  <div className="py-2 rounded-md bg-white">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-2xl"
          >
            ☰
          </button>
          {isOpen && (
            <div className="absolute top-16 right-4 w-64 bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-lg z-50 transition-all duration-300 py-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.path}
                    className="flex justify-between items-center px-5 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition duration-300"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </a>
                  {item.dropdown && (
                    <div className="bg-gray-50 pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className="block px-5 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <button
                  onClick={handleGetQuote}
                  className="block w-full mx-4 my-2 px-4 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
