export default function Testimonials() {
  const videos = [
    "https://www.youtube.com/embed/8AIcDOsxS7Q",
    "https://www.youtube.com/embed/Mwr6JtFcwtY",
    "https://www.youtube.com/embed/yZqOZxGUwO4",
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#333333] mb-12">
          Alguns de nossos depoimentos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((src, idx) => (
            <div
              key={idx}
              className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg"
            >
              <iframe
                src={src}
                title={`Depoimento ${idx + 1}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia"
            target="_blank"
            rel="noopener"
            className="inline-block px-6 py-3 bg-[#FF6600] text-white rounded-xl shadow hover:brightness-110 transition font-semibold"
          >
            Entenda os Benefícios
          </a>
        </div>
      </div>
    </section>
  );
}
