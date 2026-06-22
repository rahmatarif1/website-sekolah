import Breadcrumb from "../components/Breadcrumb";
import KartuBerita from "../components/KartuBerita";
import { keuanganData } from "../data/keuanganData";
import { useState } from "react";
import { Link } from "react-router";

function KeuanganKomite() {                                    // ← ganti nama
  const [kataKunci, setKataKunci] = useState("");

  const dataKomite = keuanganData.filter((k) => k.kategori === "Komite");  // ← "Komite"
  const tersaring = dataKomite.filter((item) =>
    item.judul.toLowerCase().includes(kataKunci.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 md:pt-28 pb-12 md:pb-16">
      <Breadcrumb judul="Komite" induk={{ label: "Keuangan", to: "/keuangan/komite" }} />  {/* ← "Komite" */}

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6">
        <div className="grid md:grid-cols-3 gap-8">

          {/* SIDEBAR */}
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
                  placeholder="Cari laporan..."
                  className="flex-1 border border-slate-300 px-3 py-2 outline-none focus:border-emerald-600"
                />
                <button className="bg-slate-900 text-white px-4 font-semibold">Cari</button>
              </div>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">CATEGORY</h3>
              <div className="w-10 h-1 bg-amber-400 mb-4"></div>
              <ul className="space-y-2 text-slate-600">
                <li className="border-b border-dashed border-slate-300 pb-2">
                  <Link to="/keuangan/bos" className="block hover:text-emerald-700">BOS</Link>
                </li>
                <li>
                  <Link to="/keuangan/komite" className="block hover:text-emerald-700 text-emerald-700 font-bold">Komite</Link>  {/* ← aktif di Komite */}
                </li>
              </ul>
            </div>

          </aside>

          {/* KONTEN */}
          <div className="md:col-span-2">
            {tersaring.length > 0 ? (
              tersaring.map((item) => (
                <KartuBerita key={item.id} berita={item} basePath="/keuangan/detail" />
              ))
            ) : (
              <p className="text-slate-500">Tidak ada laporan yang cocok.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default KeuanganKomite;                                 // ← ganti nama