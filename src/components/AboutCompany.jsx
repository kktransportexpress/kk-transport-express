import React from "react";

const AboutCompany = ({ lang }) => {
  return (
    <section id="aboutcompany" className="py-16 bg-white text-center px-6">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">
        {lang === "en" ? "Our Story" : "Nuestra Historia"}
      </h2>
      <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-6">
        {lang === "en"
          ? "Founded by Luis Puga, K and K Transport Express is a proud, family-oriented company built on trust, professionalism, and commitment. With years of experience and a strong mission to serve our community, we offer reliable, fast, and personalized cargo transportation services across Michigan and beyond."
          : "Fundada por Luis Puga, K y K Transport Express es una empresa familiar orgullosa, construida sobre la confianza, la profesionalidad y el compromiso. Con años de experiencia y una fuerte misión de servir a nuestra comunidad, ofrecemos servicios de transporte de carga confiables, rápidos y personalizados en todo Michigan y más allá."}
      </p>
      <div className="text-blue-700 font-semibold">
        {lang === "en"
          ? "CEO: Luis Puga – Visionary in Logistics and Family-Driven Leadership."
          : "CEO: Luis Puga – Visionario en Logística y Liderazgo Familiar."}
      </div>
    </section>
  );
};

export default AboutCompany;
