// src/pages/UsulanBuku.jsx
import { useState } from 'react'
import { Link } from 'react-router'
import { Send } from 'lucide-react'
import logo from '../assets/logo.png' // GANTI: samakan dengan baris import logo di Navbar.jsx

// GANTI dengan endpoint Formspree milikmu sendiri.
// Daftar gratis di https://formspree.io -> buat form baru -> salin alamatnya ke sini.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX"

function UsulanBuku() {
  // Controlled inputs — tiap kotak nyimpan isinya ke state
  const [judul, setJudul] = useState("")
  const [keterangan, setKeterangan] = useState("")

  // Status pengiriman: idle | mengirim | sukses | gagal
  const [status, setStatus] = useState("idle")

  const kirim = async (e) => {
    e.preventDefault()          // cegah halaman reload saat submit
    if (!judul.trim()) return   // Judul wajib diisi

    setStatus("mengirim")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ judul, keterangan }),
      })
      if (res.ok) {
        setStatus("sukses")
        setJudul("")
        setKeterangan("")
      } else {
        setStatus("gagal")
      }
    } catch {
      setStatus("gagal")
    }
  }

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16 px-4">

      {/* Bar atas sederhana: logo + nama sekolah (klik -> beranda) */}
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
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Usulan Buku</h1>

        {status === "sukses" ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4">
            Terima kasih! Usulan bukumu sudah terkirim.
            <button
              onClick={() => setStatus("idle")}
              className="block mt-2 text-emerald-700 underline"
            >
              Kirim usulan lain
            </button>
          </div>
        ) : (
          <form onSubmit={kirim} className="space-y-5">
            {/* Judul Buku (wajib) */}
            <div>
              <label className="block text-slate-700 mb-1">
                Judul Buku <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul Buku"
                required
                className="w-full border border-slate-300 rounded-md px-4 py-2.5 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Keterangan */}
            <div>
              <label className="block text-slate-700 mb-1">Keterangan</label>
              <textarea
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                placeholder="Pengarang / penerbit / keterangan lain"
                rows={5}
                className="w-full border border-slate-300 rounded-md px-4 py-2.5 outline-none focus:border-emerald-500 resize-y"
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

export default UsulanBuku