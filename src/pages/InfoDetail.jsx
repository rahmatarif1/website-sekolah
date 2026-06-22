import { useParams } from "react-router";
import PageShell from "../components/PageShell";
import BadgeTanggal from "../components/BadgeTanggal";
import { infoData } from "../data/infoData";

function InfoDetail() {
  const { id } = useParams();
  const info = infoData.find((item) => item.id === Number(id));

  if (!info) {
    return (
      <PageShell judulBreadcrumb="Info Tidak Ditemukan">
        <p>Maaf, info yang kamu cari tidak ada.</p>
      </PageShell>
    );
  }

  return (
    <PageShell judulBreadcrumb={info.judul} induk={{ label: "Info Sekolah", to: "/info-sekolah" }}>
      <div className="relative overflow-hidden rounded-lg">
        <img src={info.gambar} alt={info.judul} className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-500 hover:scale-105" />
        <BadgeTanggal tanggal={info.tanggal} bulan={info.bulan} tahun={info.tahun} />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-6">{info.judul}</h1>

      {info.isi.map((paragraf, index) => (
        <p key={index}>{paragraf}</p>
      ))}
    </PageShell>
  );
}

export default InfoDetail;