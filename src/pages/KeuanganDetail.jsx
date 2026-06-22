import { useParams } from "react-router";
import PageShell from "../components/PageShell";
import BadgeTanggal from "../components/BadgeTanggal";
import { keuanganData } from "../data/keuanganData";

function KeuanganDetail() {
  const { id } = useParams();
  const item = keuanganData.find((k) => k.id === Number(id));

  if (!item) {
    return (
      <PageShell judulBreadcrumb="Tidak Ditemukan">
        <p>Maaf, laporan tidak ditemukan.</p>
      </PageShell>
    );
  }

  return (
    <PageShell
      judulBreadcrumb={item.judul}
      induk={{ label: "Keuangan", to: `/keuangan/${item.kategori.toLowerCase()}` }}
    >
      {/* Gambar + badge */}
      <div className="relative overflow-hidden rounded-lg">
        <img src={item.gambar} alt={item.judul} className="w-full h-80 md:h-96 object-cover" />
        <BadgeTanggal tanggal={item.tanggal} bulan={item.bulan} tahun={item.tahun} />
      </div>

      {/* Judul + isi */}
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-6">{item.judul}</h1>
      {item.isi.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      {/* Dokumen/foto laporan besar — muncul jika ada */}
      {item.dokumen && (
        <div className="mt-6">
          <img
            src={item.dokumen}
            alt={`Dokumen ${item.judul}`}
            className="w-full rounded-lg shadow-md border border-slate-200"
          />
        </div>
      )}
    </PageShell>
  );
}

export default KeuanganDetail;