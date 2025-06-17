import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg"
            alt="Logo Quantec"
            className="h-10 w-auto"
          />
        </a>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-[#333333] font-medium">
          <a href="#etapas" className="hover:text-[#FF6600] transition">
            etapas
          </a>
          <a href="#quem_somos" className="hover:text-[#FF6600] transition">
            quem somos
          </a>
        </nav>

        {/* Telefone + CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:21979658483"
            className="hidden md:block font-semibold text-[#333333]"
          >
            (21) 97965-8483
          </a>
          <a
            href="https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia"
            target="_blank"
            rel="noopener"
            className="px-5 py-2 bg-[#FF6600] text-white rounded-xl shadow hover:brightness-110 transition font-semibold text-sm"
          >
            Entenda os Benefícios
          </a>
        </div>
      </div>
    </header>
  );
}
