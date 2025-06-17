export default function Testimonials() {
  const data = [
    { name: 'João Silva', text: 'Resultados excelentes desde o primeiro mês!', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Maria Souza', text: 'Equipe super atenciosa, recomendo demais.', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Carlos Lima', text: 'Minha taxa de conversão triplicou!', img: 'https://randomuser.me/api/portraits/men/65.jpg' }
  ]
  return (
    <section className="py-20 bg-indigo-50" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((d, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center">
              <img src={d.img} alt={d.name} className="w-16 h-16 rounded-full mb-4" />
              <p className="text-gray-700 mb-4 text-center">"{d.text}"</p>
              <span className="font-semibold text-indigo-600">{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
