function Contact({ lang }) {
  return (
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
          placeholder={
            lang === "en"
              ? "City of Origin and Destination"
              : "Ciudad de Origen y Destino"
          }
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          rows="4"
          placeholder={
            lang === "en" ? "Shipping Details" : "Detalles del Envío"
          }
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
  );
}

export default Contact;
