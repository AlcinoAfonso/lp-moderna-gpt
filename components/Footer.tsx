export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-8" id="contato">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold text-xl">SeuLogo</span>
          <p className="text-indigo-200 mt-2">
            © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" className="hover:text-indigo-300">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
            </svg>
          </a>
          <a href="mailto:contato@seuemail.com" className="hover:text-indigo-300">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="10" stroke="white" strokeWidth="2" />
              <polyline points="4,7 12,13 20,7" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
