import { useState } from "react";
import { Truck, Phone, Mail } from "lucide-react";

function App() {
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      title: "K and K Transport Express",
      subtitle:
        "Fast, reliable and professional logistics solutions. Local, regional and nationwide cargo transport with personalized service.",
      servicesTitle: "Our Services",
      services: [
        {
          icon: <Truck className="w-8 h-8 text-blue-600" />,
          label: "Cargo Transport",
          description: "Local, regional and long-haul freight solutions tailored to your business."
        },
        {
          icon: <Phone className="w-8 h-8 text-blue-600" />,
          label: "24/7 Support",
          description: "Real human support around the clock for updates and dispatching."
        },
        {
          icon: <Mail className="w-8 h-8 text-blue-600" />,
          label: "Instant Quotes",
          description: "Request quotes and schedule deliveries instantly through our site."
        }
      ],
      switchBtn: "Switch to Spanish"
    },
    es: {
      title: "K y K Transporte Exprés",
      subtitle:
        "Soluciones logísticas rápidas, confiables y profesionales. Transporte de carga local, regional y nacional con atención personalizada.",
      servicesTitle: "Nuestros Servicios",
      services: [
        {
          icon: <Truck className="w-8 h-8 text-blue-600" />,
          label: "Transporte de Carga",
          description: "Fletes locales, regionales y de larga distancia adaptados a tu negocio."
        },
        {
          icon: <Phone className="w-8 h-8 text-blue-600" />,
          label: "Soporte 24/7",
          description: "Atención humana real todo el día para actualizaciones y despachos."
        },
        {
          icon: <Mail className="w-8 h-8 text-blue-600" />,
          label: "Cotizaciones Rápidas",
          description: "Solicita cotizaciones y programa envíos directamente desde el sitio."
        }
      ],
      switchBtn: "Cambiar a Inglés"
    }
  };

  const content = translations[lang];

  return (
    <>
      {/* Sección Héroe con imagen de fondo */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/truck-hero.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4">{content.title}</h1>
        <p className="text-xl max-w-2xl px-4 text-center">{content.subtitle}</p>
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="mt-6 px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          {content.switchBtn}
        </button>
      </section>

      {/* Sección de Servicios */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {content.services.map((service, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.label}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Sección de Formulario para Cotización */}
      <section className="max-w-xl mx-auto mt-16 bg-white p-6 rounded-2xl shadow border">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {lang === "en" ? "Request a Quote" : "Solicita una Cotización"}
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder={lang === "en" ? "Full Name" : "Nombre Completo"}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder={lang === "en" ? "City of Origin and Destination" : "Ciudad de Origen y Destino"}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            rows="4"
            placeholder={lang === "en" ? "Shipping Details" : "Detalles del Envío"}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {lang === "en" ? "Submit Request" : "Enviar Solicitud"}
          </button>
        </form>
      </section>

      {/* Pie de página */}
      <footer className="text-center mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} K and K Transport Express · www.kktransportexpress.com
      </footer>
    </>
  );
}

export default App;
