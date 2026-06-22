import { useParams } from "react-router";
import PageShell from "../components/PageShell";
import BadgeTanggal from "../components/BadgeTanggal";
import { beritaData } from "../data/beritaData";

function BeritaDetail() {
  const { id } = useParams();

  // cari berita yang id-nya cocok dengan URL
  // id dari URL berupa string, jadi diubah ke angka dulu dengan Number()
  const berita = beritaData.find((item) => item.id === Number(id));

  // kalau berita tidak ditemukan (id ngawur)
  if (!berita) {
    return (
      <PageShell judul="Berita Tidak Ditemukan">
        <p>Maaf, berita yang kamu cari tidak ada.</p>
      </PageShell>
    );
  }

  return (
    <PageShell judulBreadcrumb={berita.judul} induk={{ label: "Berita", to: "/berita" }}>
      {/* Gambar + badge melayang */}
      <div className="relative overflow-hidden rounded-lg">
        <img src={berita.gambar} alt={berita.judul} className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-500 hover:scale-105" />
        <BadgeTanggal tanggal={berita.tanggal} bulan={berita.bulan} tahun={berita.tahun} />
      </div>

      {/* Judul + kategori */}
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-6">{berita.judul}</h1>
      

      {/* Isi */}
      {berita.isi.map((paragraf, index) => (
        <p key={index}>{paragraf}</p>
      ))}
    </PageShell>
  );
}

export default BeritaDetail;