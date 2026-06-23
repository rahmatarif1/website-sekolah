// src/pages/Perpustakaan.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Home } from 'lucide-react'
import { buku } from '../data/bukuData'
import { peminjaman } from '../data/peminjamanData'
import { pengajuan } from '../data/pengajuanData'

// Warna badge status (dipakai dua tabel)
function badgeStatus(status) {
  const peta = {
    Dipinjam: "bg-amber-500/20 text-amber-300",
    Kembali: "bg-emerald-500/20 text-emerald-300",
    Disetujui: "bg-emerald-500/20 text-emerald-300",
    Diproses: "bg-sky-500/20 text-sky-300",
    Ditolak: "bg-rose-500/20 text-rose-300",
  }
  return peta[status] || "bg-slate-500/20 text-slate-300"
}

// Kartu buku + penjaga gambar (cover gagal -> placeholder)
function KartuBuku({ data }) {
  const [gagal, setGagal] = useState(false)
  return (
    <div className="px-2">
      <div className="aspect-[5/7] overflow-hidden rounded-md bg-slate-700 shadow-lg group">
        {gagal ? (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">500 x 700</div>
        ) : (
          <img
            src={data.cover}
            alt={data.judul}
            onError={() => setGagal(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <h3 className="text-white text-sm font-semibold mt-2 line-clamp-2">{data.judul}</h3>
      <p className="text-slate-400 text-xs">{data.penulis}</p>
    </div>
  )
}

function Perpustakaan() {
  // 1. Pencarian (carousel atas)
  const [cari, setCari] = useState("")
  const hasil = buku.filter((b) => {
    const kata = cari.toLowerCase()
    return (
      b.judul.toLowerCase().includes(kata) ||
      b.penulis.toLowerCase().includes(kata) ||
      b.kategori.toLowerCase().includes(kata)
    )
  })

  // 2. Carousel (pola sama dengan Alumni)
  const [perView, setPerView] = useState(5)
  const [mulai, setMulai] = useState(0)
  const [transisiAktif, setTransisiAktif] = useState(true)

  useEffect(() => {
    const aturPerView = () => setPerView(window.innerWidth < 768 ? 2 : 5)
    aturPerView()
    window.addEventListener('resize', aturPerView)
    return () => window.removeEventListener('resize', aturPerView)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setMulai((prev) => prev + 1), 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (hasil.length > 0 && mulai >= hasil.length) {
      const t = setTimeout(() => {
        setTransisiAktif(false)
        setMulai(mulai - hasil.length)
      }, 500)
      return () => clearTimeout(t)
    } else {
      setTransisiAktif(true)
    }
  }, [mulai, hasil.length])

  useEffect(() => setMulai(0), [cari])

  const geser = () => setMulai((prev) => prev + 1)
  const mundur = () => setMulai((prev) => (prev <= 0 ? hasil.length - 1 : prev - 1))
  const kartuGanda = [...hasil, ...hasil]

  // 3. Koleksi buku per kategori
  const kategoriUnik = [...new Set(buku.map((b) => b.kategori))]   // daftar kategori unik
  const [kategoriAktif, setKategoriAktif] = useState("Semua")
  const kategoriTampil = kategoriAktif === "Semua" ? kategoriUnik : [kategoriAktif]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 md:pt-24 pb-16 px-4 md:px-8">

      {/* Animasi kartu muncul (keyframes lokal) */}
      <style>{`
        @keyframes naikMuncul {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .kartu-naik { animation: naikMuncul .5s ease-out both; }
      `}</style>

      {/* Pojok kiri atas: Home */}
      <Link
        to="/"
        title="Kembali ke Beranda"
        className="fixed top-5 left-5 z-30 bg-white/10 hover:bg-rose-700 text-white rounded-full p-2.5 backdrop-blur transition"
      >
        <Home className="w-5 h-5 md:w-6 md:h-6" />
      </Link>

      {/* Pojok kanan atas: Peminjaman + Usulan */}
      <div className="fixed top-5 right-5 z-30 flex items-center gap-2">
        <Link to="/peminjaman-buku" className="bg-white/10 hover:bg-rose-700 text-white text-sm font-semibold px-4 py-2.5 rounded-full backdrop-blur transition">
          Peminjaman Buku
        </Link>
        <Link to="/usulan-buku" className="bg-rose-700 hover:bg-rose-800 text-white text-sm font-semibold px-4 py-2.5 rounded-full backdrop-blur transition">
          Usulan Buku
        </Link>
      </div>

      {/* Judul */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center tracking-tight">
        KATALOG BUKU PERPUSTAKAAN
      </h1>

      {/* Search bar */}
      <div className="max-w-3xl mx-auto mt-8 flex items-center bg-white rounded-full shadow-xl pl-6 pr-2 py-2">
        <input
          type="text"
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          placeholder="Buku apa yang ingin anda cari?"
          className="flex-1 outline-none text-slate-700 text-sm md:text-base bg-transparent"
        />
        <button className="bg-rose-700 hover:bg-rose-800 text-white font-semibold px-6 py-2 rounded-full transition">
          Cari
        </button>
      </div>

      {/* Carousel buku */}
      <div className="max-w-6xl mx-auto mt-12">
        {hasil.length === 0 ? (
          <p className="text-slate-400 text-center">Tidak ada buku yang cocok dengan "{cari}".</p>
        ) : (
          <div className="relative group">
            <button onClick={mundur} className="absolute top-1/2 -left-4 md:-left-10 -translate-y-1/2 opacity-100 md:opacity-0 group-hover:opacity-100 transition bg-white text-slate-900 w-10 h-10 rounded-full text-2xl flex items-center justify-center cursor-pointer shadow-lg z-20 hover:bg-rose-700 hover:text-white">‹</button>
            <div className="overflow-hidden">
              <div
                className={`flex ${transisiAktif ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${mulai * (100 / perView)}%)` }}
              >
                {kartuGanda.map((b, index) => (
                  <div key={index} className="shrink-0 w-1/2 md:w-1/5">
                    <KartuBuku data={b} />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={geser} className="absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 opacity-100 md:opacity-0 group-hover:opacity-100 transition bg-white text-slate-900 w-10 h-10 rounded-full text-2xl flex items-center justify-center cursor-pointer shadow-lg z-20 hover:bg-rose-700 hover:text-white">›</button>
          </div>
        )}
      </div>

      {/* ===== KOLEKSI BUKU PER KATEGORI ===== */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-white mb-5">Koleksi Buku</h2>

        {/* Chip filter kategori */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Semua", ...kategoriUnik].map((k) => (
            <button
              key={k}
              onClick={() => setKategoriAktif(k)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                kategoriAktif === k
                  ? "bg-rose-700 text-white"
                  : "bg-white/10 text-slate-300 hover:bg-white/20"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        {/* Grup per kategori — key={kategoriAktif} bikin animasi main ulang tiap ganti filter */}
        <div key={kategoriAktif}>
          {kategoriTampil.map((kat) => {
            const bukuKat = buku.filter((b) => b.kategori === kat)
            return (
              <div key={kat} className="mb-10">
                <h3 className="text-lg font-semibold text-rose-400 mb-4">
                  {kat} <span className="text-slate-500 text-sm">({bukuKat.length})</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                  {bukuKat.map((b, i) => (
                    <div
                      key={b.id}
                      className="kartu-naik"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <KartuBuku data={b} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ===== TABEL PEMINJAMAN BUKU ===== */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-white mb-4">Peminjaman Buku</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full text-sm text-left text-slate-300">
            <thead className="bg-slate-800 text-slate-200 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Judul Buku</th>
                <th className="px-4 py-3">Peminjam</th>
                <th className="px-4 py-3">Kelas</th>
                <th className="px-4 py-3">Tgl Pinjam</th>
                <th className="px-4 py-3">Tgl Kembali</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {peminjaman.map((p, i) => (
                <tr key={p.id} className="border-t border-slate-700 hover:bg-slate-800/50">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 text-white">{p.judul}</td>
                  <td className="px-4 py-3">{p.peminjam}</td>
                  <td className="px-4 py-3">{p.kelas}</td>
                  <td className="px-4 py-3">{p.tglPinjam}</td>
                  <td className="px-4 py-3">{p.tglKembali}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${badgeStatus(p.status)}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== TABEL PENGAJUAN BUKU ===== */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Pengajuan Buku</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full text-sm text-left text-slate-300">
            <thead className="bg-slate-800 text-slate-200 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Judul Buku</th>
                <th className="px-4 py-3">Penulis</th>
                <th className="px-4 py-3">Pengusul</th>
                <th className="px-4 py-3">Tanggal</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {pengajuan.map((p, i) => (
                <tr key={p.id} className="border-t border-slate-700 hover:bg-slate-800/50">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 text-white">{p.judul}</td>
                  <td className="px-4 py-3">{p.penulis}</td>
                  <td className="px-4 py-3">{p.pengusul}</td>
                  <td className="px-4 py-3">{p.tanggal}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${badgeStatus(p.status)}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== REKAP JUMLAH BUKU PER KATEGORI ===== */}
      <div className="max-w-md mx-auto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Rekap Koleksi</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full text-sm text-left text-slate-300">
            <thead className="bg-slate-800 text-slate-200 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Kategori</th>
                <th className="px-4 py-3 text-right">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {kategoriUnik.map((kat, i) => (
                <tr key={kat} className="border-t border-slate-700 hover:bg-slate-800/50">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 text-white">{kat}</td>
                  <td className="px-4 py-3 text-right">
                    {buku.filter((b) => b.kategori === kat).length}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-600 bg-slate-800/60 font-semibold text-white">
                <td className="px-4 py-3" colSpan={2}>Total Buku</td>
                <td className="px-4 py-3 text-right">{buku.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Perpustakaan