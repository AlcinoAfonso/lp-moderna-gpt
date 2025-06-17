import data from "@/data/site-content.json";

export default function FinalCTA() {
  const { final_cta } = data;

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-[#535DDF] to-[#6a72ff] text-white text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">{final_cta.h2}</h2>
        <p className="mb-8">{final_cta.h3}</p>
        <a
          href={final_cta.cta_whatsapp}
          target="_blank"
          rel="noopener"
          className="inline-block px-8 py-3 bg-[#FF6600] rounded-xl shadow-lg hover:brightness-110 transition font-semibold"
        >
          {final_cta.cta_label}
        </a>
      </div>
    </section>
  );
}
