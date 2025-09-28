import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  TruckIcon,
  CalendarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const contentEN = {
  heroTitle: "Reliable Transport Solutions",
  heroSubtitle: "Professional cargo transport across Michigan and beyond",
  switchLang: "Español",
  servicesTitle: "Our Services",
  services: [
    {
      label: "Local & Regional Delivery",
      icon: <TruckIcon className="h-12 w-12 text-blue-600" />,
      description:
        "We specialize in fast and safe local and regional cargo transport.",
    },
    {
      label: "Scheduled Routes",
      icon: <CalendarIcon className="h-12 w-12 text-blue-600" />,
      description:
        "Reliable scheduled pickups and deliveries tailored to your business.",
    },
    {
      label: "Licensed & Insured",
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-600" />,
      description:
        "Fully compliant and insured for peace of mind in every shipment.",
    },
  ],
};

const contentES = {
  heroTitle: "Soluciones de Transporte Confiables",
  heroSubtitle:
    "Transporte de carga profesional en Michigan y más allá",
  switchLang: "English",
  servicesTitle: "Nuestros Servicios",
  services: [
    {
      label: "Entrega Local y Regional",
      icon: <TruckIcon className="h-12 w-12 text-blue-600" />,
      description:
        "Nos especializamos en transporte de carga rápido y seguro a nivel local y regional.",
    },
    {
      label: "Rutas Programadas",
      icon: <CalendarIcon className="h-12 w-12 text-blue-600" />,
      description:
        "Recogidas y entregas confiables adaptadas a su negocio.",
    },
    {
      label: "Licenciado y Asegurado",
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-600" />,
      description:
        "Totalmente conforme y asegurado para su tranquilidad en cada envío.",
    },
  ],
};

function App() {
  const [lang, setLang] = useState("en");
  const content = lang === "en" ? contentEN : contentES;

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/truck-hero.jpg')" }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md mb-2">
          K and K Transport Express
        </h1>

        <h2 className="text-xl sm:text-3xl font-semibold drop-shadow-md mb-4">
          {content.heroTitle}
        </h2>

        <p className="text-md sm:text-lg max-w-2xl drop-shadow-md">
          {content.heroSubtitle}
        </p>

        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="mt-6 px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          {content.switchLang}
        </button>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          {content.servicesTitle}
        </h2>
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

      {/* About */}
      <section id="about">
        <About lang={lang} />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact lang={lang} />
      </section>

      <Footer />
    </>
  );
}

export default App;
