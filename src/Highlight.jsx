import { useState, useEffect } from 'react'
import { Link } from "react-router";
import { infoData } from "./data/infoData";
import { sambutanData } from "./data/sambutanData";

function Highlight() {
  const poster = [
    "/poster1.jpg",
    "/poster2.jpg",
    "/poster3.jpg",
    "/poster4.jpg",
  ]

  const pengumuman = infoData.slice(0, 4);

  const [aktif, setAktif] = useState(0)
  const [transisiAktif, setTransisiAktif] = useState(true)

  // Timer geser otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setAktif((prev) => prev + 1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Reset diam-diam saat sampai set kedua
  useEffect(() => {
    if (aktif >= poster.length) {
      const t = setTimeout(() => {
        setTransisiAktif(false)
        setAktif(aktif - poster.length)
      }, 500)
      return () => clearTimeout(t)
    }
  }, [aktif])

  // Nyalakan transisi lagi setelah posisi melompat
  useEffect(() => {
    if (!transisiAktif) {
      const t = setTimeout(() => setTransisiAktif(true), 50)
      return () => clearTimeout(t)
    }
  }, [transisiAktif])

  const posterGanda = [...poster, ...poster]

  return (
    <section className="px-8 py-16 bg-slate-900">
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">

        {/* KOLOM 1 — Poster, infinite loop */}
        <div className="flex-1 relative group rounded-lg overflow-hidden min-h-[400px]">
          <div
            className={`flex h-full ${transisiAktif ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${aktif * 100}%)` }}
          >
            {posterGanda.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Poster ${index + 1}`}
                className="w-full h-full object-cover shrink-0"
              />
            ))}
          </div>

          {/* Panah kiri */}
          <button
            onClick={() => setAktif((prev) => (prev <= 0 ? poster.length - 1 : prev - 1))}
            className="absolute top-1/2 left-2 -translate-y-1/2 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 bg-amber-400 text-slate-900 w-10 h-10 rounded-full text-2xl flex items-center justify-center cursor-pointer z-20"
          >
            ‹
          </button>

          {/* Panah kanan */}
          <button
            onClick={() => setAktif((prev) => prev + 1)}
            className="absolute top-1/2 right-2 -translate-y-1/2 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 bg-amber-400 text-slate-900 w-10 h-10 rounded-full text-2xl flex items-center justify-center cursor-pointer z-20"
          >
            ›
          </button>
        </div>

        {/* KOLOM 2 — Pengumuman */}
        <div className="flex-1 bg-slate-800 rounded-lg overflow-hidden min-h-[400px] flex flex-col">
          <div className="bg-blue-950 px-6 py-4">
            <h3 className="text-white text-xl font-bold">Pengumuman</h3>
          </div>
          <div className="flex-1 p-4">
            {pengumuman.map((item) => (
              <Link
                to={`/info-sekolah/${item.id}`}
                key={item.id}
                className="flex items-center gap-3 py-3 border-b border-slate-700 cursor-pointer hover:bg-slate-700 rounded px-2"
              >
                <img src={item.gambar} alt={item.judul} className="w-16 h-16 object-cover rounded shrink-0" />
                <p className="text-gray-200 text-sm">{item.judul}</p>
              </Link>
            ))}
          </div>
          <div className="px-6 py-4">
            <Link to="/info-sekolah" className="text-amber-400 font-bold hover:text-amber-300 cursor-pointer">
              READ MORE »
            </Link>
          </div>
        </div>

        {/* KOLOM 3 — Sambutan Kepala Sekolah */}
        <div className="flex-1 bg-slate-800 rounded-lg overflow-hidden min-h-[400px] flex flex-col">
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold">Sambutan Kepala Sekolah</h3>
            <video controls className="w-full rounded-lg">
              <source src={sambutanData.video} type="video/mp4" />
              Browser Anda tidak mendukung video.
            </video>
            {sambutanData.isi.slice(0, 3).map((paragraf, index) => (
              <p key={index} className={`text-gray-300 text-sm ${index < 2 ? "italic" : ""}`}>
                {paragraf}
              </p>
            ))}
            <Link to="/profil/sambutan" className="text-amber-400 font-bold hover:text-amber-300 cursor-pointer self-start">
              Read More »
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Highlight