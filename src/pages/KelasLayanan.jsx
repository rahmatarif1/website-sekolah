import { useParams } from "react-router"
import { kelasLayanan } from "../data/kelasData"

function KelasLayanan() {
  const { slug } = useParams()
  const kelas = kelasLayanan.find(k => k.slug === slug)

  // Pengaman: slug tidak cocok dengan data mana pun
  if (!kelas) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-12">
        <h1 className="text-2xl font-bold text-slate-800">Kelas tidak ditemukan.</h1>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-4">{kelas.nama}</h1>

      <p className="text-gray-600 mb-6">{kelas.deskripsi}</p>

      <h2 className="text-xl font-semibold text-slate-800 mb-3">Keunggulan</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {kelas.keunggulan.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default KelasLayanan