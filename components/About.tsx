import data from "@/data/site-content.json";

export default function About() {
  const { about } = data;

  return (
    <section id="quem_somos" className="py-20 bg-[#F3F3F3]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <img src={about.img} alt={about.h2} className="rounded-2xl shadow-2xl" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">{about.h2}</h2>
          <p className="text-[#333333] whitespace-pre-line">{about.text}</p>
        </div>
      </div>
    </section>
  );
}
