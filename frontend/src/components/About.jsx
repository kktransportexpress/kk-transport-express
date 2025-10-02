function About({ lang }) {
  return (
    <section className="py-20 bg-white text-center px-6" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-blue-800">
          {lang === "en" ? "About Us" : "Sobre Nosotros"}
        </h2>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          {lang === "en"
            ? "K and K Transport Express is a family-led logistics company based in Michigan, driven by integrity, punctuality, and a passion for excellence. We specialize in reliable cargo transportation across local, regional, and national routes — always tailored to our clients' needs."
            : "K y K Transporte Exprés es una empresa de logística dirigida por una familia en Michigan, impulsada por la integridad, la puntualidad y la excelencia. Nos especializamos en transporte de carga confiable a nivel local, regional y nacional, siempre adaptándonos a las necesidades de nuestros clientes."}
        </p>

        <p className="text-base text-gray-600 mb-4 leading-relaxed">
          {lang === "en"
            ? "Founded by CEO Luis Puga, a dedicated entrepreneur with years of experience in transportation and distribution, our company is built on the values of transparency, commitment, and hard work. At K and K, every delivery matters — because behind every shipment, there’s a promise we intend to keep."
            : "Fundada por el CEO Luis Puga, un emprendedor con años de experiencia en transporte y distribución, nuestra compañía se basa en valores como la transparencia, el compromiso y el trabajo duro. En K y K, cada entrega importa, porque detrás de cada envío hay una promesa que pensamos cumplir."}
        </p>

        <p className="text-base text-gray-600 leading-relaxed">
          {lang === "en"
            ? "We’re more than just a trucking company — we are a partner in motion for businesses and families that depend on safe, efficient, and professional transportation services."
            : "Somos más que una empresa de transporte — somos un aliado en movimiento para negocios y familias que dependen de un servicio seguro, eficiente y profesional."}
        </p>
      </div>
    </section>
  );
}

export default About;
