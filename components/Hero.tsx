export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-100 to-indigo-50 py-20" id="hero">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Sua solução digital de alto impacto
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A melhor maneira de apresentar seu serviço/produto e converter visitantes em clientes.
          </p>
          <a href="#cta" className="inline-block px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition text-lg">
            Comece Agora
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="https://placehold.co/400x300" alt="Mockup" className="rounded-2xl shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
