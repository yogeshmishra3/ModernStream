import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-cyan-500">
            ModernStream
          </h2>
          <p className="text-gray-400">
            Innovating the future with cutting-edge technology solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-cyan-700 hover:text-white transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-cyan-700 hover:text-white transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-cyan-700 hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-cyan-700 hover:text-white transition"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-800 pt-6">
        <p>© {new Date().getFullYear()} ModernStream. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
