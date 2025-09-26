function About({ lang }) {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/truck-hero.jpg')" }}
    >
      <h1 className="text-5xl font-bold mb-4">
        {lang === "en"
          ? "K and K Transport Express"
          : "K y K Transporte Exprés"}
      </h1>
      <p className="text-xl max-w-2xl">
        {lang === "en"
          ? "Fast, reliable and professional logistics solutions. Local, regional and nationwide cargo transport with personalized service."
          : "Soluciones logísticas rápidas, confiables y profesionales. Transporte de carga local, regional y nacional con atención personalizada."}
      </p>
    </section>
  );
}

export default About;
