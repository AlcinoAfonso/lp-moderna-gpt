"use client";
import { useState } from "react";
import data from "@/data/site-content.json";

export default function Testimonials() {
  const { depoimentos } = data;
  const pageSize = 3;
  const totalPages = Math.ceil(depoimentos.videos.length / pageSize);
  const [page, setPage] = useState(0);

  const sliceStart = page * pageSize;
  const current = depoimentos.videos.slice(sliceStart, sliceStart + pageSize);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#333333] mb-12">
          {depoimentos.h2}
        </h2>

        {/* vídeos visíveis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {current.map((src, idx) => (
            <div
              key={idx}
              className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg"
            >
              <iframe
                src={src.replace("watch?v=", "embed/")}
                title={`Depoimento ${sliceStart + idx + 1}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        {/* navegação */}
        <div className="flex justify-center items-center gap-4 mt-8 select-none">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-4 py-2 rounded bg-[#535DDF] text-white disabled:opacity-40"
          >
            ⟵
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full ${
                i === page ? "bg-[#FF6600]" : "bg-[#d1d5db]"
              }`}
            ></button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-2 rounded bg-[#535DDF] text-white disabled:opacity-40"
          >
            ⟶
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={depoimentos.cta_whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-block px-6 py-3 bg-[#FF6600] text-white rounded-xl shadow hover:brightness-110 transition font-semibold"
          >
            {depoimentos.cta_label}
          </a>
        </div>
      </div>
    </section>
  );
}
