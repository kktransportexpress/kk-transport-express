import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = ({ lang }) => {
  const sectionTitle = lang === "en" ? "What Our Clients Say" : "Lo Que Dicen Nuestros Clientes";

  // Lista vacía para ahora, puedes llenarla luego
  const testimonials = [
    // Ejemplo para después:
    // { name: "Ana R.", role: "Logistics Manager", text: "Excellent service..." },
  ];

  return (
    <section className="py-16 bg-gray-100" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-700">{sectionTitle}</h2>

        {testimonials.length === 0 ? (
          <p className="text-gray-500">
            {lang === "en"
              ? "We're proud of our service. Soon you'll read real client stories here."
              : "Estamos orgullosos de nuestro servicio. Pronto verás testimonios reales de nuestros clientes aquí."}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
