import Breadcrumb from "../components/Breadcrumb";
import { sambutanData } from "../data/sambutanData";

function Sambutan() {
  return (
    <div className="min-h-screen pt-20 md:pt-28 pb-12 md:pb-16">
      <Breadcrumb judul="Sambutan Kepala Sekolah" />

      {/* Judul tengah + aksen */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 mt-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900">
          Sambutan Kepala Sekolah
        </h1>
        <div className="w-20 h-1 bg-emerald-600 mx-auto mt-3 rounded"></div>
      </div>

      {/* 2 kolom */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 mt-10 grid md:grid-cols-2 gap-8 items-start">

        {/* Kiri: foto + video */}
        <div className="space-y-6">
          <img
            src={sambutanData.foto}
            alt="Kepala Sekolah"
            className="w-full h-80 object-cover object-top rounded-lg"
          />
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Video Sambutan</h2>
            <video controls className="w-full rounded-lg">
              <source src={sambutanData.video} type="video/mp4" />
              Browser tidak mendukung video.
            </video>
          </div>
        </div>

        {/* Kanan: teks sambutan */}
        <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
          {sambutanData.isi.map((paragraf, index) => (
            <p key={index} className={index < 2 ? "italic" : ""}>{paragraf}</p>
          ))}
          <p className="font-semibold mt-6">Kepala MTs Darul Muttaqin</p>
          <p>{sambutanData.nama}</p>
          <p>{sambutanData.nip}</p>
        </div>

      </div>
    </div>
  );
}

export default Sambutan;