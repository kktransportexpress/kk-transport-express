import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Truck, Phone, Mail } from "lucide-react";

function App() {
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      heroTitle: "K and K Transport Express",
      heroSubtitle:
        "Fast, reliable and professional logistics solutions. Local, regional and nationwide cargo transport with personalized service.",
      switchLang: "Switch to Spanish",
      requestQuote: "Request a Quote",
      servicesTitle: "Our Services",
      submitBtn: "Submit Request",
      form: {
        name: "Full Name",
        email: "Email",
        city: "City of Origin and Destination",
        details: "Shipping Details",
      },
      services: [
        {
          icon: <Truck className="w-8 h-8 text-blue-600" />,
          label: "Cargo Transport",
          description:
            "Local, regional and long-haul freight solutions tailored to your business.",
        },
        {
          icon: <Phone className="w-8 h-8 text-blue-600" />,
          label: "24/7 Support",
          description:
            "Real human support around the clock for updates and dispatching.",
        },
        {
          icon: <Mail className="w-8 h-8 text-blue-600" />,
          label: "Instant Quotes",
          description:
            "Request quotes and schedule deliveries instantly through our site.",
        },
      ],
    },
    es: {
      heroTitle: "K y K Transporte Exprés",
      heroSubtitle:
        "Soluciones logísticas rápidas, confiables y profesionales. Transporte de carga local, regional y nacional con atención personalizada.",
      switchLang: "Cambiar a Inglés",
      requestQuote: "Solicita una Cotización",
      servicesTitle: "Nuestros Servicios",
      submitBtn: "Enviar Solicitud",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        city: "Ciudad de Origen y Destino",
        details: "Detalles del Envío",
      },
      services: [
        {
          icon: <Truck className="w-8 h-8 text-blue-600" />,
          label: "Transporte de Carga",
          description:
            "Fletes locales, regionales y de larga distancia adaptados a tu negocio.",
        },
        {
          icon: <Phone className="w-8 h-8 text-blue-600" />,
          label: "Soporte 24/7",
          description:
            "Atención humana real todo el día para actualizaciones y despachos.",
        },
        {
          icon: <Mail className="w-8 h-8 text-blue-600" />,
          label: "Cotizaciones Rápidas",
          description:
            "Solicita cotizaciones y programa envíos directamente desde el sitio.",
        },
      ],
    },
  };

  const content = translations[lang];

  return (
    <>
      <Navbar />
      {/* Hero */}
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

      {/* Services */}
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

      {/* About (desde components/About.jsx) */}
      <About />

      {/* Contact form */}
      <section className="max-w-xl mx-auto mt-16 bg-white p-6 rounded-2xl shadow border">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {content.requestQuote}
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder={content.form.name}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder={content.form.email}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder={content.form.city}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            rows="4"
            placeholder={content.form.details}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {content.submitBtn}
          </button>
        </form>
      </section>

      {/* Contact component (opcional) */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
