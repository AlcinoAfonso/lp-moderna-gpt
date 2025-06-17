export default function Features() {
  const items = [
    {
      title: 'Agilidade total',
      desc: 'Publicação e ajustes em minutos, não dias.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h18" stroke="#7A8AD6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 6l6 6-6 6" stroke="#7A8AD6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Design responsivo',
      desc: 'Experiência perfeita em qualquer dispositivo.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="#7A8AD6" strokeWidth="2"/>
          <path d="M7 20h10" stroke="#7A8AD6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Conversão máxima',
      desc: 'Elementos otimizados para capturar leads.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <polygon points="12 2 22 22 2 22" stroke="#7A8AD6" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recursos Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-indigo-50 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
