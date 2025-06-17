"use client";
import { useState } from "react";

const Q = [
  {
    q: "Precisa de consulta para tratamento de medicina quântica?",
    a: "Não. O processo é iniciado com um formulário digital e envio de foto. Não há necessidade de consulta presencial.",
  },
  {
    q: "Como o Quantec analisa minha energia?",
    a: "Ele escaneia seu campo vibracional, comparando com um banco de dados de frequências saudáveis para sugerir ajustes necessários.",
  },
  {
    q: "A terapia quântica é segura? Existem efeitos colaterais?",
    a: "Sim, a terapia é completamente segura e não invasiva. Não há efeitos colaterais conhecidos.",
  },
  {
    q: "O Quantec realmente funciona?",
    a: "Muitos clientes relatam melhorias nas primeiras semanas, mas recomendamos pelo menos 3 meses para resultados mais profundos.",
  },
  {
    q: "Posso fazer a terapia junto com outros tratamentos?",
    a: "Sim! A terapia é complementar e pode potencializar outros tratamentos. Avise seu médico sobre todas as terapias em curso.",
  },
  {
    q: "Como é realizado o tratamento à distância?",
    a: "Enviamos frequências vibracionais específicas, independentemente da sua localização. Não é necessário estar presente.",
  },
  {
    q: "Qual a diferença entre Quantum Vita e outras terapias alternativas?",
    a: "Usamos tecnologia Quantec de ponta, tratamentos personalizados e resultados mensuráveis.",
  },
  {
    q: "A terapia quântica pode tratar problemas emocionais?",
    a: "Sim. O equilíbrio energético impacta diretamente nas emoções, trazendo melhora significativa.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F3F3F3]" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#333333] mb-12">
          Perguntas Frequentes
        </h2>

        <div className="max-w-2xl mx-auto">
          {Q.map((item, i) => (
            <div key={i} className="mb-6">
              <button
                className="w-full text-left font-semibold text-lg text-[#333333] bg-white rounded-xl px-6 py-4 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
              </button>
              {open === i && (
                <div className="px-6 py-4 text-[#333333] border-l-4 border-[#FF6600] bg-white rounded-b-xl">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
