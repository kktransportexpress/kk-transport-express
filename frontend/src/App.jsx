import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutCompany from "./components/AboutCompany";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import QuoteForm from "./components/QuoteForm";
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
        "Daily and weekly scheduled routes available for consistent delivery needs.",
    },
    {
      label: "Secure Handling",
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-600" />,
      description:
        "All items handled with utmost care and compliance with safety standards.",
    },
  ],
};

const contentES = {
  ...contentEN,
  heroTitle: "Soluciones de Transporte Confiables",
  heroSubtitle: "Transporte de carga profesional en Michigan y más allá",
  switchLang: "English",
  servicesTitle: "Nuestros Servicios",
  services: contentEN.services.map((service) => ({
    ...service,
    description: service.description, // Puedes traducir cada uno si lo deseas
  })),
};

const App = () => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
  };

  const content = language === "EN" ? contentEN : contentES;

  return (
    <>
      <Navbar toggleLanguage={toggleLanguage} switchLang={content.switchLang} />
      <main className="px-4 sm:px-6 lg:px-8">
        <header className="text-center my-12">
          <h1 className="text-4xl font-bold text-blue-900">{content.heroTitle}</h1>
          <p className="mt-4 text-lg text-gray-700">{content.heroSubtitle}</p>
        </header>

        <AboutCompany />

        <section className="my-12">
          <h2 className="text-2xl font-bold text-center text-blue-900">
            {content.servicesTitle}
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {content.services.map((service, index) => (
              <div key={index} className="text-center p-4 border rounded-lg shadow-md">
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.label}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Gallery />
        <Testimonials />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
