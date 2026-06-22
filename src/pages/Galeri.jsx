import Breadcrumb from "../components/Breadcrumb";
import { galeriData } from "../data/galeriData";
import { useState } from "react";

function Galeri() {
  const [fotoAktif, setFotoAktif] = useState(null);

  return (
    <div className="min-h-screen pt-20 md:pt-28 pb-12 md:pb-16">
      <Breadcrumb judul="Galeri" lebar="max-w-6xl" tengah />

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galeriData.map((foto) => (
            <div
              key={foto.id}
              onClick={() => setFotoAktif(foto)}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={foto.gambar}
                alt={foto.judul}
                className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay judul — muncul saat hover */}
              <div className="absolute inset-0 bg-black/60 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-semibold">{foto.judul}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX — muncul saat ada foto diklik */}
      {fotoAktif && (
        <div
          onClick={() => setFotoAktif(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setFotoAktif(null)}
            className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer"
          >
            ✕
          </button>

          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <img
              src={fotoAktif.gambar}
              alt={fotoAktif.judul}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{fotoAktif.judul}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Galeri;