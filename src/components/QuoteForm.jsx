import AutocompleteAddress from "./AutocompleteAddress";


import React, { useState, useEffect, useRef } from "react";

const QuoteForm = ({ lang }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickupAddress: "",
    deliveryAddress: "",
    pickupDate: "",
    pickupTime: "",
    deliveryDate: "",
    deliveryTime: "",
    cargoType: "",
  });

  const pickupRef = useRef(null);
  const deliveryRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const pickupAutocomplete = new window.google.maps.places.Autocomplete(
        pickupRef.current,
        { types: ["geocode"] }
      );
      pickupAutocomplete.addListener("place_changed", () => {
        const place = pickupAutocomplete.getPlace();
        setForm((prev) => ({
          ...prev,
          pickupAddress: place.formatted_address || "",
        }));
      });

      const deliveryAutocomplete = new window.google.maps.places.Autocomplete(
        deliveryRef.current,
        { types: ["geocode"] }
      );
      deliveryAutocomplete.addListener("place_changed", () => {
        const place = deliveryAutocomplete.getPlace();
        setForm((prev) => ({
          ...prev,
          deliveryAddress: place.formatted_address || "",
        }));
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de todos los campos
    for (const [key, value] of Object.entries(form)) {
      if (!value.trim()) {
        alert("Por favor complete todos los campos antes de enviar.");
        return;
      }
    }

    console.log("Formulario enviado:", form);
    alert("Solicitud enviada correctamente. Nos pondremos en contacto pronto.");
    setForm({
      name: "",
      email: "",
      phone: "",
      pickupAddress: "",
      deliveryAddress: "",
      pickupDate: "",
      pickupTime: "",
      deliveryDate: "",
      deliveryTime: "",
      cargoType: "",
    });
  };

  return (
    <section className="py-16 bg-gray-100" id="quote">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {lang === "en" ? "Request a Quote" : "Solicita una Cotización"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={lang === "en" ? "Full Name" : "Nombre completo"}
            className="border p-3 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-3 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={lang === "en" ? "Phone Number" : "Teléfono"}
            className="border p-3 rounded"
            required
          />
          <input
            type="text"
            name="pickupAddress"
            ref={pickupRef}
            value={form.pickupAddress}
            onChange={handleChange}
            placeholder={lang === "en" ? "Pickup Address" : "Dirección de recogida"}
            className="border p-3 rounded"
            required
          />
          <input
            type="text"
            name="deliveryAddress"
            ref={deliveryRef}
            value={form.deliveryAddress}
            onChange={handleChange}
            placeholder={lang === "en" ? "Delivery Address" : "Dirección de entrega"}
            className="border p-3 rounded"
            required
          />
          <input
            type="date"
            name="pickupDate"
            value={form.pickupDate}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />
          <input
            type="time"
            name="pickupTime"
            value={form.pickupTime}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />
          <input
            type="date"
            name="deliveryDate"
            value={form.deliveryDate}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />
          <input
            type="time"
            name="deliveryTime"
            value={form.deliveryTime}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />
          <input
            type="text"
            name="cargoType"
            value={form.cargoType}
            onChange={handleChange}
            placeholder={lang === "en" ? "Cargo Type" : "Tipo de carga"}
            className="border p-3 rounded md:col-span-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white py-3 px-6 rounded hover:bg-blue-800 transition md:col-span-2"
          >
            {lang === "en" ? "Submit Request" : "Enviar Solicitud"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
