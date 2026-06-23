// src/pages/PeminjamanBuku.jsx
import { useState } from 'react'
import { Link } from 'react-router'
import { Send } from 'lucide-react'
import logo from '../assets/logo.png' // GANTI: samakan dengan baris import logo di Navbar.jsx

// GANTI dengan endpoint Formspree milikmu (boleh form yang sama dgn usulan, atau form terpisah)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX"

function PeminjamanBuku() {
  const [nama, setNama] = useState("")
  const [kelas, setKelas] = useState("")
  const [judul, setJudul] = useState("")
  const [status, setStatus] = useState("idle") // idle | mengirim | sukses | gagal

  const kirim = async (e) => {
    e.preventDefault()
    if (!nama.trim() || !kelas.trim() || !judul.trim()) return // semua wajib

    setStatus("mengirim")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ jenis: "Peminjaman", nama, kelas, judul }),
      })
      if (res.ok) {
        setStatus("sukses")
        setNama(""); setKelas(""); setJudul("")
      } else {
        setStatus("gagal")
      }
    } catch {
      setStatus("gagal")
    }
  }

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16 px-4">

      {/* Bar atas: logo + nama sekolah (klik -> beranda) */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Link to="/" className="flex items-center gap-3 w-fit">
            <img src={logo} alt="Logo MTs Darul Muttaqin" className="h-10 w-auto" />
            <span className="font-bold text-slate-900 text-base md:text-lg">
              MTs Darul Muttaqin
            </span>
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Peminjaman Buku</h1>

        {status === "sukses" ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4">
            Terima kasih! Permintaan peminjamanmu sudah terkirim.
            <button
              onClick={() => setStatus("idle")}
              className="block mt-2 text-emerald-700 underline"
            >
              Ajukan peminjaman lain
            </button>
          </div>
        ) : (
          <form onSubmit={kirim} className="space-y-5">
            {/* Nama */}
            <div>
              <label className="block text-slate-700 mb-1">
                Nama <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama lengkap"
                required
                className="w-full border border-slate-300 rounded-md px-4 py-2.5 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Kelas */}
            <div>
              <label className="block text-slate-700 mb-1">
                Kelas <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="Contoh: IX A"
                required
                className="w-full border border-slate-300 rounded-md px-4 py-2.5 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Judul Buku */}
            <div>
              <label className="block text-slate-700 mb-1">
                Judul Buku <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul buku yang ingin dipinjam"
                required
                className="w-full border border-slate-300 rounded-md px-4 py-2.5 outline-none focus:border-emerald-500"
              />
            </div>

            {status === "gagal" && (
              <p className="text-rose-600 text-sm">Gagal mengirim. Coba lagi sebentar.</p>
            )}

            <button
              type="submit"
              disabled={status === "mengirim"}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              {status === "mengirim" ? "Mengirim..." : "KIRIM"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default PeminjamanBuku