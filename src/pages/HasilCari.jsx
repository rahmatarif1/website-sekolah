import { useSearchParams, Link } from "react-router"
import { beritaData } from "../data/beritaData"
import { guru } from "../data/guruData"
import { alumni } from "../data/alumniData"
import { ekskul } from "../data/ekstrakurikulerData"
import { prestasiData } from "../data/prestasiData"
import { buku } from "../data/bukuData"
import { galeriData } from "../data/galeriData"
import { Newspaper, User, GraduationCap, Sparkles, Trophy, BookOpen, Image } from "lucide-react"


const tampilanTipe = {
  Berita:          { Icon: Newspaper,     warna: "bg-blue-100 text-blue-700" },
  Guru:            { Icon: User,          warna: "bg-green-100 text-green-700" },
  Alumni:          { Icon: GraduationCap, warna: "bg-purple-100 text-purple-700" },
  Ekstrakurikuler: { Icon: Sparkles,      warna: "bg-orange-100 text-orange-700" },
  Prestasi:        { Icon: Trophy,        warna: "bg-amber-100 text-amber-700" },
  Buku:            { Icon: BookOpen,      warna: "bg-cyan-100 text-cyan-700" },
  Galeri:          { Icon: Image,         warna: "bg-pink-100 text-pink-700" },
}

function highlight(teks, kunci) {
  if (!kunci) return teks
  const bagian = teks.split(new RegExp(`(${kunci})`, "gi"))
  return bagian.map((b, i) =>
    b.toLowerCase() === kunci.toLowerCase()
      ? <mark key={i} className="bg-amber-200 rounded px-0.5">{b}</mark>
      : b
  )
}





function HasilCari() {
  const [searchParams] = useSearchParams()
  const kataKunci = searchParams.get("q") || ""

  const semuaData = [
  ...beritaData.map(b => ({ tipe: "Berita", judul: b.judul, deskripsi: b.ringkasan, link: `/berita/${b.id}` })),
  ...guru.map(g => ({ tipe: "Guru", judul: g.nama, deskripsi: g.jabatan, link: `/guru/${g.id}` })),
  ...alumni.map(a => ({ tipe: "Alumni", judul: a.nama, deskripsi: a.kisah, link: `/alumni/${a.id}` })),
  ...ekskul.map(e => ({ tipe: "Ekstrakurikuler", judul: e.nama, deskripsi: e.deskripsiLengkap, link: `/ekstrakurikuler/${e.id}` })),
  ...prestasiData.map(p => ({ tipe: "Prestasi", judul: p.judul, deskripsi: p.siswa, link: `/#prestasi` })),
  ...buku.map(bk => ({ tipe: "Buku", judul: bk.judul, deskripsi: bk.penulis, link: `/perpustakaan` })),
  ...galeriData.map(gl => ({ tipe: "Galeri", judul: gl.judul, deskripsi: "", link: `/galeri` })),
]

  const hasil = semuaData.filter(item =>
  item.judul.toLowerCase().includes(kataKunci.toLowerCase()) ||
  item.deskripsi.toLowerCase().includes(kataKunci.toLowerCase()) ||
  item.tipe.toLowerCase().includes(kataKunci.toLowerCase())   // ← tambah ini
)


  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-12">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Hasil pencarian untuk: "{kataKunci}" ({hasil.length})
      </h1>

      {hasil.length === 0 ? (
        <p className="text-gray-500">Tidak ada hasil yang cocok.</p>
      ) : (
        <div className="space-y-4">
          {hasil.map((item, i) => {
            const { Icon, warna } = tampilanTipe[item.tipe]
            return (
              <Link
                key={i}
                to={item.link}
                className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 animate-fadeIn"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${warna}`}>
                  <Icon size={14} />
                  {item.tipe}
                </span>
                <h2 className="text-lg font-bold text-slate-800 mt-1">
                  {highlight(item.judul, kataKunci)}
                </h2>
                <p className="text-gray-600">
                  {highlight(item.deskripsi, kataKunci)}
                </p>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HasilCari