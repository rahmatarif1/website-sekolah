// src/pages/EkstrakurikulerDetail.jsx
import { useParams } from 'react-router'
import { ekskul } from '../data/ekstrakurikulerData'
import PageShell from '../components/PageShell' // sesuaikan kalau path-mu beda

function EkstrakurikulerDetail() {
  const { id } = useParams()
  const data = ekskul.find((item) => item.id === Number(id))

  if (!data) {
    return (
      <PageShell judul="Ekstrakurikuler Tidak Ditemukan" induk={{ to: "/#ekstrakurikuler", label: "Ekstrakurikuler" }}>
        <p>Maaf, data ekstrakurikuler yang kamu cari tidak ditemukan.</p>
      </PageShell>
    )
  }

  const Icon = data.Icon // ambil komponen ikon dari data

  return (
    <PageShell judulBreadcrumb={data.nama} induk={{ to: "/#ekstrakurikuler", label: "Ekstrakurikuler" }}>

      {/* Header: ikon + nama */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-slate-100 rounded-xl p-4 shrink-0">
          <Icon className={`w-12 h-12 ${data.warna}`} strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{data.nama}</h1>
      </div>

      {/* Deskripsi */}
      <p className="whitespace-pre-line leading-relaxed mb-6">{data.deskripsiLengkap}</p>

      {/* Info tambahan */}
      <div className="border-t border-slate-200 pt-4 space-y-1 text-sm">
        <p><span className="font-semibold text-slate-900">Pembina:</span> {data.pembina}</p>
        <p><span className="font-semibold text-slate-900">Jadwal:</span> {data.jadwal}</p>
      </div>

    </PageShell>
  )
}

export default EkstrakurikulerDetail