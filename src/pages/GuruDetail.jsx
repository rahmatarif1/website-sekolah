// src/pages/GuruDetail.jsx
import { useParams } from 'react-router'
import { guru } from '../data/guruData'
import PageShell from '../components/PageShell' // sesuaikan kalau path-mu beda

function GuruDetail() {
  // 1. Ambil id dari URL (selalu string)
  const { id } = useParams()

  // 2. Cari guru yang id-nya cocok. WAJIB Number(id)
  const data = guru.find((item) => item.id === Number(id))

  // 3. Penjaga: kalau id ngawur, jangan crash
  if (!data) {
    return (
      <PageShell judul="Guru Tidak Ditemukan" induk={{ to: "/#guru", label: "Guru" }}>
        <p>Maaf, data guru yang kamu cari tidak ditemukan.</p>
      </PageShell>
    )
  }

  // 4. Tampilkan — foto kiri (sedang + zoom), nama/jabatan/bio di kanan
  return (
    <PageShell judulBreadcrumb={data.nama} induk={{ to: "/#guru", label: "Guru" }}>
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Foto kiri — pembungkus overflow-hidden = kunci zoom */}
        <div className="overflow-hidden rounded-lg shadow-md shrink-0 mx-auto md:mx-0">
          <img
            src={data.foto}
            alt={data.nama}
            className="w-48 h-60 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Kanan */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
            {data.nama}
          </h1>
          <p className="text-amber-600 font-semibold mb-4">{data.jabatan}</p>
          <p className="whitespace-pre-line leading-relaxed">{data.bio}</p>
        </div>

      </div>
    </PageShell>
  )
}

export default GuruDetail