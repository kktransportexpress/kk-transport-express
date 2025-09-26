import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { TruckIcon, CalendarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const contentEN = {
  heroTitle: "Reliable Transport Solutions",
  heroSubtitle: "Efficient, safe, and timely cargo transportation across Michigan and beyond.",
  switchLang: "Español",
  servicesTitle: "Our Services",
  services: [
    {
      icon: <TruckIcon className="h-12 w-12 text-blue-700" />,
      label: "Local & Regional Delivery",
      description: "Same-day and next-day cargo transportation services across Michigan.",
    },
    {
      icon: <CalendarIcon className="h-12 w-12 text-blue-700" />,
      label: "Scheduled Routes",
      description: "Reliable delivery with pre-scheduled routes to fit your business needs.",
    },
    {
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-700" />,
      label: "Licensed & Insured",
      description: "Your cargo is safe with us—fully licensed, insured, and professional.",
    },
  ],
};

const contentES = {
  heroTitle: "Soluciones de Transporte Confiables",
  heroSubtitle: "Transporte de carga eficiente, seguro y puntual en Michigan y más allá.",
  switchLang: "English",
  servicesTitle: "Nuestros Servicios",
  services: [
    {
      icon: <TruckIcon className="h-12 w-12 text-blue-700" />,
      label: "Entrega Local y Regional",
      description: "Transporte de carga en el mismo día o al día siguiente dentro de Michigan.",
    },
    {
      icon: <CalendarIcon className="h-12 w-12 text-blue-700" />,
      label: "Rutas Programadas",
      description: "Entrega confiable con rutas preestablecidas para su negocio.",
    },
    {
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-700" />,
      label: "Licenciados y Asegurados",
      description: "Su carga está segura con nosotros: empresa profesional con licencia y seguro.",
    },
  ],
};

function App() {
  const [lang, setLang] = useState("en");
  const content = lang === "en" ? contentEN : contentES;

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <About lang={lang} />

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/truck-hero.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4">{content.heroTitle}</h1>
        <p className="text-xl max-w-2xl px-4 text-center">{content.heroSubtitle}</p>
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="mt-6 px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          {content.switchLang}
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">{content.servicesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {content.services.map((service, index) => (
            <div
              key={index}
              className="border rounded-2xl shadow-md p-6 text-center bg-white hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.label}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact lang={lang} />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
