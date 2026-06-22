import { useParams } from "react-router";
import PageShell from "../components/PageShell";
import BadgeTanggal from "../components/BadgeTanggal";
import { agendaData } from "../data/agendaData";

function AgendaDetail() {
  const { id } = useParams();
  const agenda = agendaData.find((item) => item.id === Number(id));

  if (!agenda) {
    return (
      <PageShell judulBreadcrumb="Agenda Tidak Ditemukan">
        <p>Maaf, agenda yang kamu cari tidak ada.</p>
      </PageShell>
    );
  }

  return (
    <PageShell judulBreadcrumb={agenda.judul} induk={{ label: "Agenda", to: "/agenda" }}>
      <div className="relative overflow-hidden rounded-lg">
        <img src={agenda.gambar} alt={agenda.judul} className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-500 hover:scale-105" />
        <BadgeTanggal tanggal={agenda.tanggal} bulan={agenda.bulan} tahun={agenda.tahun} />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-6">{agenda.judul}</h1>

      {agenda.isi.map((paragraf, index) => (
        <p key={index}>{paragraf}</p>
      ))}
    </PageShell>
  );
}

export default AgendaDetail;