
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { TruckIcon, CalendarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const App = () => {
  const [lang, setLang] = useState("en");

  const contentEN = {
    heroTitle: "Reliable Transport Solutions",
    heroSubtitle: "Fast, secure, and professional cargo van and trucking services across Michigan and beyond.",
    switchLang: "Español",
    servicesTitle: "Our Services",
    services: [
      {
        icon: <TruckIcon className="h-10 w-10 text-blue-500" />,
        label: "Cargo Van Delivery",
        description: "Efficient last-mile delivery using high-roof cargo vans with GPS tracking.",
      },
      {
        icon: <CalendarIcon className="h-10 w-10 text-blue-500" />,
        label: "Scheduled Freight",
        description: "On-time freight pickup and drop-off with optimized route planning.",
      },
      {
        icon: <ShieldCheckIcon className="h-10 w-10 text-blue-500" />,
        label: "Secure Logistics",
        description: "Insured and reliable transportation managed by trained professionals.",
      },
    ],
  };

  const contentES = {
    heroTitle: "Soluciones de Transporte Confiables",
    heroSubtitle: "Servicios rápidos, seguros y profesionales de carga y transporte en Michigan y alrededores.",
    switchLang: "English",
    servicesTitle: "Nuestros Servicios",
    services: [
      {
        icon: <TruckIcon className="h-10 w-10 text-blue-500" />,
        label: "Entregas en Van",
        description: "Entrega eficiente con vans altas y seguimiento GPS en tiempo real.",
      },
      {
        icon: <CalendarIcon className="h-10 w-10 text-blue-500" />,
        label: "Fletes Programados",
        description: "Recolección y entrega puntual con rutas optimizadas.",
      },
      {
        icon: <ShieldCheckIcon className="h-10 w-10 text-blue-500" />,
        label: "Logística Segura",
        description: "Transporte asegurado y confiable, manejado por profesionales capacitados.",
      },
    ],
  };

  const content = lang === "en" ? contentEN : contentES;

  return (
    <>
      <Navbar />
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/truck-hero.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4">{content.heroTitle}</h1>
        <p className="text-xl max-w-2xl px-4 text-center">
          {content.heroSubtitle}
        </p>
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="mt-6 px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          {content.switchLang}
        </button>
      </section>

      {lang === "en" && (
        <>
          <section className="py-16 bg-gray-100">
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
          <About />
          <Contact />
        </>
      )}

      {lang === "es" && (
        <>
          <section className="py-16 bg-gray-100">
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
          <About />
          <Contact />
        </>
      )}

      <Footer />
    </>
  );
};

export default App;
