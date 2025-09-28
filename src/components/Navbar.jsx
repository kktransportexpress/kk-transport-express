import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ lang, setLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Name */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={scrollToTop}
          >
            <img src={logo} alt="K and K Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-blue-700">
              K and K Transport Express
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              {lang === "en" ? "About Us" : "Nosotros"}
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
              {lang === "en" ? "Services" : "Servicios"}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              {lang === "en" ? "Contact" : "Contacto"}
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              {lang === "en" ? "Español" : "English"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
