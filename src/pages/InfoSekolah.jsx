import Breadcrumb from "../components/Breadcrumb";
import KartuBerita from "../components/KartuBerita";
import { infoData } from "../data/infoData";
import { useState } from "react";
import { Link } from "react-router";

function InfoSekolah() {
  const [kataKunci, setKataKunci] = useState("");
  const [tahunAktif, setTahunAktif] = useState("Semua");

  // saring infoData dengan search + tahun
  const infoTersaring = infoData.filter((info) => {
    const cocokKata = info.judul.toLowerCase().includes(kataKunci.toLowerCase());
    const cocokTahun = tahunAktif === "Semua" || info.tahun === Number(tahunAktif);
    return cocokKata && cocokTahun;
  });

  return (
    <div className="min-h-screen pt-20 md:pt-28 pb-12 md:pb-16">
      <Breadcrumb judul="Info Sekolah" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6">
        <div className="grid md:grid-cols-3 gap-8">

          {/* SIDEBAR — kolom kiri */}
          <aside className="md:col-span-1 space-y-8">

            {/* Search */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">SEARCH</h3>
              <div className="w-10 h-1 bg-amber-400 mb-4"></div>
              <div className="flex">
                <input
                  type="text"
                  value={kataKunci}
                  onChange={(e) => setKataKunci(e.target.value)}
                  placeholder="Cari info..."
                  className="flex-1 border border-slate-300 px-3 py-2 outline-none focus:border-emerald-600"
                />
                <button className="bg-slate-900 text-white px-4 font-semibold">
                  Cari
                </button>
              </div>
            </div>

           {/* Category — navigasi antar halaman */}
<div>
  <h3 className="text-lg font-bold text-slate-900 mb-2">CATEGORY</h3>
  <div className="w-10 h-1 bg-amber-400 mb-4"></div>
  <ul className="space-y-2 text-slate-600">
    <li className="border-b border-dashed border-slate-300 pb-2">
      <Link to="/berita" className="block hover:text-emerald-700">Berita Sekolah</Link>
    </li>
    <li className="border-b border-dashed border-slate-300 pb-2">
      <Link to="/info-sekolah" className="block hover:text-emerald-700 text-emerald-700 font-bold">Info Sekolah</Link>
    </li>
    <li>
      <Link to="/agenda" className="block hover:text-emerald-700">Agenda</Link>
    </li>
  </ul>
</div>
            {/* Archives */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ARCHIVES</h3>
              <div className="w-10 h-1 bg-amber-400 mb-4"></div>
              <ul className="space-y-2 text-slate-600">
                <li onClick={() => setTahunAktif("Semua")} className={`border-b border-dashed border-slate-300 pb-2 cursor-pointer hover:text-emerald-700 ${tahunAktif === "Semua" ? "text-emerald-700 font-bold" : ""}`}>Semua Tahun</li>
                <li onClick={() => setTahunAktif("2026")} className={`border-b border-dashed border-slate-300 pb-2 cursor-pointer hover:text-emerald-700 ${tahunAktif === "2026" ? "text-emerald-700 font-bold" : ""}`}>2026</li>
                <li onClick={() => setTahunAktif("2025")} className={`cursor-pointer hover:text-emerald-700 ${tahunAktif === "2025" ? "text-emerald-700 font-bold" : ""}`}>2025</li>
              </ul>
            </div>

          </aside>

          {/* KONTEN — kolom kanan */}
          <div className="md:col-span-2">
            {infoTersaring.length > 0 ? (
              infoTersaring.map((info) => (
                <KartuBerita key={info.id} berita={info} basePath="/info-sekolah" />
              ))
            ) : (
              <p className="text-slate-500">Tidak ada info yang cocok.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default InfoSekolah;