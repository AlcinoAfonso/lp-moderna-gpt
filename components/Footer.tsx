export default function Footer() {
  return (
    <footer className="bg-[#535DDF] text-white py-10" id="contato">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#hero">
            <img
              src="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg"
              alt="Logo Quantec"
              className="h-10 w-auto mb-4"
            />
          </a>
          <p className="text-sm">
            UNICO DIGITAL © Todos os Direitos Reservados – 2025
          </p>
          <a
            href="https://unicodigital.com.br/unico-digital-2-3-2-2/"
            target="_blank"
            rel="noopener"
            className="text-sm underline hover:text-[#FFCC99]"
          >
            Termo de uso – Política de privacidade
          </a>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/unicodigital_?igsh=MXh6ZGhzN2hsaTIwdg%3D%3D"
            target="_blank"
            rel="noopener"
            className="hover:brightness-110"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
