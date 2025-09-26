import { Truck } from "lucide-react";

function Navbar({ lang, setLang }) {
  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Truck className="text-blue-600 w-6 h-6" />
          <span className="font-bold text-xl text-blue-700">
            K&K Transport
          </span>
        </div>
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {lang === "en" ? "Español" : "English"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
