import { Link } from "react-router";
import { prestasiData } from "./data/prestasiData";

function Prestasi() {
  const prestasiTampil = prestasiData.slice(0, 4); // 4 teratas di beranda

  return (
    <section id="prestasi" className="px-8 py-16 bg-slate-100">
      <h2 className="text-3xl font-bold text-blue-950 text-center mb-2">
        Prestasi
      </h2>
      <div className="flex justify-center gap-2 mb-10">
        <span className="w-8 h-1 bg-amber-400"></span>
        <span className="w-4 h-1 bg-amber-400"></span>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {prestasiTampil.map((item) => (
          <Link
            to={`/prestasi/${item.id}`}
            key={item.id}
            className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md overflow-hidden min-h-[16rem] hover:shadow-xl transition-shadow"
          >
            <img
              src={item.gambar}
              alt={item.judul}
              className="w-full md:w-72 h-48 md:h-auto object-cover shrink-0"
            />
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-950 mb-3">{item.judul}</h3>
              <p className="text-gray-600 mb-3 flex items-center gap-2">
                <span>📅</span> {item.tanggal}
              </p>
              <hr className="border-gray-200 mb-3" />
              <p className="text-gray-700 mb-2">{item.skala}</p>
              <p className="text-gray-700 flex items-center gap-2">
                <span>👤</span> {item.siswa}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol Tampilkan Semua */}
      <div className="text-center mt-10">
        <Link
          to="/prestasi"
          className="inline-block border-2 border-amber-400 text-amber-500 font-bold px-8 py-3 rounded hover:bg-amber-400 hover:text-blue-950 transition-colors"
        >
          TAMPILKAN SEMUA PRESTASI
        </Link>
      </div>
    </section>
  );
}

export default Prestasi;