import { useParams } from "react-router";
import PageShell from "../components/PageShell";
import { prestasiData } from "../data/prestasiData";

function PrestasiDetail() {
  const { id } = useParams();
  const prestasi = prestasiData.find((item) => item.id === Number(id));

  if (!prestasi) {
    return (
      <PageShell judulBreadcrumb="Prestasi Tidak Ditemukan">
        <p>Maaf, prestasi yang kamu cari tidak ada.</p>
      </PageShell>
    );
  }

  return (
    <PageShell
      judulBreadcrumb={prestasi.judul}
      induk={{ label: "Prestasi", to: "/prestasi" }}
    >
      {/* Gambar */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={prestasi.gambar}
          alt={prestasi.judul}
          className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Judul */}
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-6">{prestasi.judul}</h1>

      {/* Info ringkas: tanggal, skala, siswa */}
      <div className="mt-3 space-y-1 text-slate-600">
        <p className="flex items-center gap-2"><span>📅</span> {prestasi.tanggal}</p>
        <p>{prestasi.skala}</p>
        <p className="flex items-center gap-2"><span>👤</span> {prestasi.siswa}</p>
      </div>

      {/* Isi */}
      {prestasi.isi.map((paragraf, index) => (
        <p key={index}>{paragraf}</p>
      ))}
    </PageShell>
  );
}

export default PrestasiDetail;