'use client'
import { useState } from 'react'

const Q = [
  { q: 'Como funciona o onboarding?', a: 'Após o contato, nossa equipe configura tudo em até 24h.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim, sem fidelidade. Basta avisar com 7 dias de antecedência.' },
  { q: 'Vocês oferecem suporte?', a: 'Suporte via WhatsApp e e-mail, 7 dias por semana.' }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
        <div className="max-w-2xl mx-auto">
          {Q.map((item, i) => (
            <div key={i} className="mb-6">
              <button
                className="w-full text-left font-semibold text-lg text-gray-800 bg-indigo-50 rounded-xl px-6 py-4 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
              </button>
              {open === i && (
                <div className="px-6 py-4 text-gray-600 border-l-4 border-indigo-600 bg-indigo-50 rounded-b-xl">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
