import data from "@/data/site-content.json";

export default function Services() {
  const { services } = data;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">{services.h2}</h2>
          <ul className="space-y-4 mb-8 text-[#333333]">
            {services.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <a
            href={services.cta_whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-block px-6 py-3 bg-[#FF6600] text-white rounded-xl shadow hover:brightness-110 transition font-semibold"
          >
            {services.cta_label}
          </a>
        </div>

        {/* Imagem */}
        <div className="flex-1">
          <img src={services.img} alt="Terapia Quântica" className="rounded-2xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
