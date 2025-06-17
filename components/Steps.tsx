import data from "@/data/site-content.json";

export default function Steps() {
  const { steps } = data;

  return (
    <section id="etapas" className="py-20 bg-[#F3F3F3]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#333333] mb-12">{steps.h2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.items.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">
                  {s.h3}
                </h3>
                <p className="text-[#333333]">{s.p}</p>
              </div>
            ))}
          </div>

        <div className="text-center mt-12">
          <a
            href={steps.cta_whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-block px-6 py-3 bg-[#FF6600] text-white rounded-xl shadow hover:brightness-110 transition font-semibold"
          >
            {steps.cta_label}
          </a>
        </div>
      </div>
    </section>
  );
}
