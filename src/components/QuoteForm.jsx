import React, { useEffect } from "react";
import AutocompleteAddress from "./AutocompleteAddress";


const QuoteForm = ({ lang }) => {
  useEffect(() => {
    if (window.google) {
      const pickupInput = document.getElementById("pickupAddress");
      const deliveryInput = document.getElementById("deliveryAddress");
      new window.google.maps.places.Autocomplete(pickupInput);
      new window.google.maps.places.Autocomplete(deliveryInput);
    }
  }, []);

  return (
    <section id="quote" className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
        {lang === "en" ? "Request a Quote" : "Solicita una Cotización"}
      </h2>
      <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          id="pickupAddress"
          type="text"
          placeholder={lang === "en" ? "Pickup Address" : "Dirección de Recogida"}
          className="border p-3 rounded"
          required
        />

        <input
          id="deliveryAddress"
          type="text"
          placeholder={lang === "en" ? "Delivery Address" : "Dirección de Entrega"}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder={lang === "en" ? "Cargo Type" : "Tipo de Carga"}
          className="border p-3 rounded col-span-1 md:col-span-2"
          required
        />

        <input
          type="tel"
          placeholder={lang === "en" ? "Phone Number" : "Número de Teléfono"}
          className="border p-3 rounded"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded"
          required
        />

        <div className="flex flex-col">
          <label className="mb-1 font-medium">
            {lang === "en" ? "Pickup Date & Time" : "Fecha y Hora de Recogida"}
          </label>
          <input type="datetime-local" className="border p-3 rounded" required />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">
            {lang === "en" ? "Delivery Date & Time" : "Fecha y Hora de Entrega"}
          </label>
          <input type="datetime-local" className="border p-3 rounded" required />
        </div>

        <textarea
          placeholder={lang === "en" ? "Additional Notes" : "Notas Adicionales"}
          className="border p-3 rounded col-span-1 md:col-span-2 h-32"
        ></textarea>

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded font-semibold"
        >
          {lang === "en" ? "Submit Request" : "Enviar Solicitud"}
        </button>
      </form>
    </section>
  );
};

export default QuoteForm;
