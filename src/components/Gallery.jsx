function Gallery({ lang }) {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        {lang === "en" ? "Visual Gallery" : "Galería Visual"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
