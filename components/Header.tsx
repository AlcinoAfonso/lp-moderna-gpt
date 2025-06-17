export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="font-bold text-xl text-indigo-600">SeuLogo</span>
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">Recursos</a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">Depoimentos</a>
          <a href="#faq" className="hover:text-indigo-600 transition">FAQ</a>
          <a href="#contato" className="hover:text-indigo-600 transition">Contato</a>
        </nav>
        <a href="#cta" className="ml-4 px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition font-semibold text-sm">
          Comece Agora
        </a>
      </div>
    </header>
  )
}
