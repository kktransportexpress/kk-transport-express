import React from "react";

function Navbar({ lang, setLang }) {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="K and K Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-blue-800">
            K and K Transport
          </span>
        </div>

        {/* MENU */}
        <div className="flex items-center space-x-6">
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-700 font-medium transition"
          >
            {lang === "en" ? "About Us" : "Sobre Nosotros"}
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-700 font-medium transition"
          >
            {lang === "en" ? "Services" : "Servicios"}
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-700 font-medium transition"
          >
            {lang === "en" ? "Contact" : "Contacto"}
          </a>

          {/* IDIOMA */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="px-4 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 text-sm font-semibold transition"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
