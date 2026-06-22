import { Link } from "react-router";
import BadgeTanggal from "./BadgeTanggal";

function KartuBerita({ berita, basePath = "/berita" }) {
  return (
    <article className="border-b border-slate-200 pb-8 mb-8">
      {/* Gambar + badge */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="w-full h-56 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
        />
        <BadgeTanggal tanggal={berita.tanggal} bulan={berita.bulan} tahun={berita.tahun} />
      </div>

      {/* Judul */}
<h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-5">
  <Link to={`${basePath}/${berita.id}`} className="hover:text-emerald-700 transition-colors">
    {berita.judul}
  </Link>
</h2>

      {/* Ringkasan */}
      <p className="text-slate-600 mt-3">{berita.ringkasan}</p>

      {/* Read More */}
      <Link
        to={`${basePath}/${berita.id}`}
        className="inline-block mt-4 text-emerald-700 font-bold hover:underline"
      >
        READ MORE »
      </Link>
    </article>
  );
}

export default KartuBerita;