import React, { useState, useEffect } from "react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupAddress: "",
    deliveryAddress: "",
    pickupDate: "",
    deliveryDate: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones simples
    if (
      !formData.name ||
      !formData.email ||
      !formData.pickupAddress ||
      !formData.deliveryAddress ||
      !formData.pickupDate ||
      !formData.deliveryDate
    ) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Solicitud enviada correctamente.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          pickupAddress: "",
          deliveryAddress: "",
          pickupDate: "",
          deliveryDate: "",
          message: "",
        });
      } else {
        setStatus("Error al enviar la solicitud. Intente nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("Ocurrió un error al conectar con el servidor.");
    }
  };

  return (
    <section id="quote" className="py-16 bg-gray-100 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Request a Quote
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="text"
            name="pickupAddress"
            placeholder="Pickup Address *"
            value={formData.pickupAddress}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="text"
            name="deliveryAddress"
            placeholder="Delivery Address *"
            value={formData.deliveryAddress}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="datetime-local"
            name="pickupDate"
            placeholder="Pickup Date *"
            value={formData.pickupDate}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="datetime-local"
            name="deliveryDate"
            placeholder="Delivery Date *"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Message or Cargo Details"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="md:col-span-2 border rounded px-4 py-2"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition"
          >
            Submit Quote
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-green-600 font-medium">{status}</p>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
