// src/pages/AlumniDetail.jsx
import { useParams } from 'react-router'
import { alumni } from '../data/alumniData'
import PageShell from '../components/PageShell' // sesuaikan kalau path-mu beda

function AlumniDetail() {
  // 1. Ambil id dari URL (selalu string, mis. "16")
  const { id } = useParams()

  // 2. Cari alumni yang id-nya cocok. WAJIB Number(id)
  const data = alumni.find((item) => item.id === Number(id))

  // 3. Penjaga: kalau id ngawur, jangan crash
  if (!data) {
    return (
      <PageShell judul="Alumni Tidak Ditemukan" induk={{ to: "/#alumni", label: "Alumni" }}>
        <p>Maaf, data alumni yang kamu cari tidak ditemukan.</p>
      </PageShell>
    )
  }

  // 4. Tampilkan — foto kiri (sedang + zoom), nama & biografi di kanan
  return (
    <PageShell judulBreadcrumb={data.nama} induk={{ to: "/#alumni", label: "Alumni" }}>
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Foto kiri — ukuran sedang, pembungkus overflow-hidden = kunci zoom */}
        <div className="overflow-hidden rounded-lg shadow-md shrink-0 mx-auto md:mx-0">
          <img
            src={data.foto}
            alt={data.nama}
            className="w-48 h-60 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Kanan — nama (tanpa garis hijau) + biografi */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
            {data.nama}
          </h1>

          {data.tahunLulus && (
            <p className="text-amber-600 font-semibold mb-4">
              Lulusan Tahun {data.tahunLulus}
            </p>
          )}

          <p className="whitespace-pre-line leading-relaxed">
            {data.kisahLengkap}
          </p>
        </div>

      </div>
    </PageShell>
  )
}

export default AlumniDetail