import { Link } from "react-router";
import Breadcrumb from "./Breadcrumb";

function PageShell({ judul, judulBreadcrumb, induk, gambar, children }) {
  // breadcrumb pakai judulBreadcrumb kalau diisi, kalau tidak pakai judul
  const labelBreadcrumb = judulBreadcrumb || judul;

  return (
    <div className="min-h-screen pt-20 md:pt-28 pb-12 md:pb-16">

      {/* Breadcrumb */}
      <Breadcrumb judul={labelBreadcrumb} induk={induk} />

      {/* Gambar hero — dengan efek zoom hover */}
      {gambar && (
        <div className="max-w-5xl mx-auto px-4 md:px-6 mt-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={gambar}
              alt={labelBreadcrumb}
              className="w-full h-48 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      )}

      {/* Konten — garis pemisah tipis + jarak rapat */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 mt-4 pt-6 border-t border-slate-200">
        {judul && (
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 border-b-4 border-emerald-600 pb-2 md:pb-3 inline-block">
            {judul}
          </h1>
        )}
        <div className="mt-6 md:mt-8 text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
          {children}
        </div>
      </div>

    </div>
  );
}

export default PageShell;