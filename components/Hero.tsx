export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-[#535DDF] to-[#6a72ff] py-20"
      id="hero"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Medicina Quântica Segura Com Tecnologia de Ponta
          </h1>
          <p className="text-lg mb-8">
            Terapia Quântica não invasiva, reconhecida na Europa e aplicada com
            precisão por profissional experiente.
          </p>
          <a
            href="https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia"
            target="_blank"
            rel="noopener"
            className="inline-block px-8 py-3 rounded-xl bg-[#FF6600] text-white font-semibold shadow-lg hover:brightness-110 transition text-lg"
          >
            Entenda os Benefícios
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
            alt="Profissional aplicando terapia"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
