export default function Features() {
  const items = [
    {
      title: "🧘‍♀️ Alívio Progressivo do Estresse",
      desc: "Favorece equilíbrio e tranquilidade ao longo do tempo.",
    },
    {
      title: "⚡ Energia Renovada",
      desc: "Melhora gradual na disposição para o dia a dia.",
    },
    {
      title: "🛡️ Fortalecimento Imunológico",
      desc: "Equilíbrio energético que apoia o organismo.",
    },
    {
      title: "🌙 Melhora na Qualidade do Sono",
      desc: "Sensação de descanso mais profundo e regular.",
    },
    {
      title: "🧠 Aumento da Clareza Mental",
      desc: "Favorece concentração e decisões conscientes.",
    },
    {
      title: "💖 Harmonia Emocional Duradoura",
      desc: "Promove estabilidade interna a longo prazo.",
    },
  ];

  return (
    <section className="py-20 bg-[#F3F3F3]" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#333333] mb-12">
          Os Benefícios da Energia Quântica no seu dia a dia.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#333333]">
                {item.title}
              </h3>
              <p className="text-[#333333]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
